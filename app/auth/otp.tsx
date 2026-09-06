import { PrimaryButton } from "@/components/buttons";
import { Typography } from "@/design-system/typography";
import { useLocalSearchParams } from "expo-router";
import { useRef, useState } from "react";
import { Text, TextInput, TextInputKeyPressEvent, View } from "react-native";

import ArrowLeft from "../../assets/images/Rectangle 2.svg";
function OTP() {
  const [loading, setLoading] = useState(false);

  // I need to retrieve the data that i passed from phone entry screen
  const { phoneNumber } = useLocalSearchParams<{ phoneNumber: string }>();

  // I need to create a state that will take an array of 6 strings as initial value
  const [otp, setOtp] = useState<string[]>(["", "", "", "", "", ""]);

  // I need to a special container that holds the value, without losin it even after rerender
  const inputRef = useRef<Array<TextInput | null>>([]);

  // I need a function that will get me the selected digits i need from the phone numbers
  const formatMaskedPhone = (num?: string) => {
    if (!num) return "Your phone numer";
    if (num.length <= 4) return num;
    const firstVisibleDigits = num.slice(0, 2);
    const secondVisibleDigits = num.slice(-2);

    const maskedDigits = "*".repeat(Math.max(0, num.length - 4));
    return `${firstVisibleDigits}${maskedDigits}${secondVisibleDigits}`;
  };

  const handleChangeText = (text: string, index: number) => {
    // If user pasted the 6 digits code
    if (text.length > 1) {
      const pastedContent = text.slice(0, 6).split("");
      const newOtp = [...otp];
      pastedContent.forEach((digit, i) => {
        newOtp[i] = digit;
      });
      setOtp(newOtp);

      const lastOccupiedIndex = Math.min(pastedContent.length - 1, 5);
      inputRef.current[lastOccupiedIndex]?.focus();
      return;
    }

    // If user type the digits
    const newOtp = [...otp];
    newOtp[index] = text;
    setOtp(newOtp);

    // I need to make sure that if a user type in a LogBox, the focus should be on the next box
    if (text && index < 5) {
      inputRef.current[index + 1]?.focus();
    }
  };

  // I need to handle waht happens when user press backspace to delete a digit
  const handleKeyPress = (e: TextInputKeyPressEvent, index: number) => {
    if (otp[index]) {
      const newOtp = [...otp];
      newOtp[index] = "";
      setOtp(newOtp);
      return;
    }

    if (e.nativeEvent.key === "Backspace") {
      if (!otp[index] && index > 0) {
        inputRef.current[index - 1]?.focus();
        const newOtp = [...otp];
        newOtp[index - 1] = "";
        setOtp(newOtp);
      }
    }
  };

  const handleOtp = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      console.log("Full OTP Entered:", fullOtpString);
    }, 1000);
  };

  const fullOtpString = otp.join("");
  return (
    <View className="p-[16px] flex flex-col flex-1 justify-between bg-surface-background">
      <View className="">
        <View className="flex flex-row justify-between">
          <ArrowLeft />
          <Text style={Typography.captionBadge}>Sign Up</Text>
        </View>

        <View className="flex flex-col gap-10 mt-10">
          <View className="flex flex-col gap-4">
            <Text style={Typography.heading3}>Verify your number</Text>
            <Text style={Typography.bodyPlaceholder}>
              Enter the 6 digit verification code sent to{" "}
              {formatMaskedPhone(phoneNumber)} .
            </Text>
          </View>

          <View className="flex flex-row items-center w-full gap-5">
            {otp.map((digit, index) => (
              <TextInput
                key={index}
                ref={(ref) => {
                  inputRef.current[index] = ref;
                }}
                value={digit}
                onChangeText={(text) => handleChangeText(text, index)}
                onKeyPress={(e) => handleKeyPress(e, index)}
                keyboardType="number-pad"
                maxLength={index === 0 ? 6 : 1}
                style={Typography.bodyNumber}
                className="w-[48px] h-[49px] border border-2 border-surface-border rounded-[60px] text-center text-surface-textPrimary"
              ></TextInput>
            ))}
          </View>

          <View className="flex flex-row">
            <Text style={Typography.bodyLinks}>Didn't receive any code? </Text>
            <Text style={Typography.bodyLinks2}>Resend Code</Text>
          </View>
        </View>
      </View>

      <View className="flex justify-center items-center mt-[-250px]">
        <PrimaryButton
          title="Verify"
          onPress={() => {
            handleOtp();
          }}
          loading={loading}
        />
      </View>

      <View className="flex flex-row justify-center mb-[23px]">
        <Text style={Typography.bodyLinks}>Have an account already? </Text>
        <Text style={Typography.bodyLinks2}>Log In</Text>
      </View>
    </View>
  );
}

export default OTP;
