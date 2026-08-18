import { PrimaryButton } from "@/components/buttons";
import CustomInput from "@/components/inputs/CustomInput";
import { Typography } from "@/design-system/typography";
import { useRouter } from "expo-router";
import { useState } from "react";
import { Text, TextInput, View } from "react-native";
import ArrowLeft from "../../assets/images/Rectangle 2.svg";
function Phone() {
  const [phone, setPhone] = useState("");
  const router = useRouter();
  return (
    <View className="p-[16px] flex flex-col flex-1 justify-between bg-surface-background">
      <View className="">
        <View className="flex flex-row justify-between">
          <ArrowLeft />
          <Text style={Typography.captionBadge}>Sign Up</Text>
        </View>

        <View className="flex flex-col gap-10 mt-10">
          <View className="flex flex-col gap-4">
            <Text style={Typography.heading3}>Enter your phone number</Text>
            <Text style={Typography.bodyPlaceholder}>
              Enter your phone number to get a verification code.
            </Text>
          </View>

          <View className="flex flex-row items-center w-full gap-5">
            <TextInput
              style={Typography.bodyNumber}
              className="w-[90.341px] h-[50px] border border-2 border-surface-border rounded-[60px] text-center text-surface-textPrimary"
              placeholder="+234"
            ></TextInput>
            <CustomInput
              placeholder="Phone Number"
              value={phone}
              onChangeText={setPhone}
              className="h-[50px] border border-2 border-surface-border"
              containerClassName="flex-1"
            />
          </View>
        </View>
      </View>

      <View className="flex justify-center items-center mt-[-250px]">
        <PrimaryButton
          title="Send Code"
          // I want to send data from the phone screen to the otp screen
          onPress={() => {
            if (!phone) return;
            router.push({
              pathname: "/auth/otp",
              params: { phoneNumber: phone },
            });
          }}
        />
      </View>

      <View className="flex flex-row justify-center mb-[23px]">
        <Text style={Typography.bodyLinks}>Have an account already? </Text>
        <Text style={Typography.bodyLinks2}>Log In</Text>
      </View>
    </View>
  );
}

export default Phone;
