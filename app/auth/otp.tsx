import { PrimaryButton } from "@/components/buttons";
import { Typography } from "@/design-system/typography";
import { useLocalSearchParams } from "expo-router";
import { Text, TextInput, View } from "react-native";
import ArrowLeft from "../../assets/images/Rectangle 2.svg";
function OTP() {
  // I need to retrieve the data that i passed from phone entry screen
  const { phoneNumber } = useLocalSearchParams<{ phoneNumber: string }>();

  // I need a function that will get me the selected digits i need from the phone numbers
  const formatMaskedPhone = (num?: string) => {
    if (!num) return "Your phone numer";
    if (num.length <= 4) return num;
    const firstVisibleDigits = num.slice(0, 2);
    const secondVisibleDigits = num.slice(-2);

    const maskedDigits = "*".repeat(Math.max(0, num.length - 4));
    return `${firstVisibleDigits}${maskedDigits}${secondVisibleDigits}`;
  };
  return (
    <View className="p-[16px] flex flex-col flex-1 justify-between bg-surface-background">
      <View className="">
        <View className="flex flex-row justify-between">
          <ArrowLeft />
          <Text style={Typography.captionBadge}>Sign Up</Text>
        </View>
        70******1234
        <View className="flex flex-col gap-10 mt-10">
          <View className="flex flex-col gap-4">
            <Text style={Typography.heading3}>Verify your number</Text>
            <Text style={Typography.bodyPlaceholder}>
              Enter the 6 digit verification code sent to{" "}
              {formatMaskedPhone(phoneNumber)} .
            </Text>
          </View>

          <View className="flex flex-row items-center w-full gap-5">
            <TextInput
              style={Typography.bodyNumber}
              className="w-[48px] h-[49px] border border-2 border-surface-border rounded-[60px] text-center text-surface-textPrimary"
            ></TextInput>

            <TextInput
              style={Typography.bodyNumber}
              className="w-[48px] h-[49px] border border-2 border-surface-border rounded-[60px] text-center text-surface-textPrimary"
            ></TextInput>

            <TextInput
              style={Typography.bodyNumber}
              className="w-[48px] h-[49px] border border-2 border-surface-border rounded-[60px] text-center text-surface-textPrimary"
            ></TextInput>

            <TextInput
              style={Typography.bodyNumber}
              className="w-[48px] h-[49px] border border-2 border-surface-border rounded-[60px] text-center text-surface-textPrimary"
            ></TextInput>

            <TextInput
              style={Typography.bodyNumber}
              className="w-[48px] h-[49px] border border-2 border-surface-border rounded-[60px] text-center text-surface-textPrimary"
            ></TextInput>

            <TextInput
              style={Typography.bodyNumber}
              className="w-[48px] h-[49px] border border-2 border-surface-border rounded-[60px] text-center text-surface-textPrimary"
            ></TextInput>
          </View>

          <View className="flex flex-row">
            <Text style={Typography.bodyLinks}>Didn’t receive any code? </Text>
            <Text style={Typography.bodyLinks2}>Resend Code</Text>
          </View>
        </View>
      </View>

      <View className="flex justify-center items-center mt-[-250px]">
        <PrimaryButton title="Verify" />
      </View>

      <View className="flex flex-row justify-center mb-[23px]">
        <Text style={Typography.bodyLinks}>Have an account already? </Text>
        <Text style={Typography.bodyLinks2}>Log In</Text>
      </View>
    </View>
  );
}

export default OTP;
