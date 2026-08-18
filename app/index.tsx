import { useRouter } from "expo-router";
import { useState } from "react";
import { View } from "react-native";
import PrimaryButton from "../components/buttons/PrimaryButton";
import CustomInput from "../components/inputs/CustomInput";

export default function Index() {
  const router = useRouter();
  const [phone, setPhone] = useState("");
  const handleSend = () => {
    console.log("processing phone number");
  };

  return (
    <View className="flex-1 justify-center gap-10  border border-2 p-10 bg-surface-background">
      <CustomInput
        label="Phone Number"
        placeholder="Enter Your phone number"
        value={phone}
        onChangeText={setPhone}
      />

      <CustomInput
        label="Full Name"
        placeholder="Enter Your Full Name"
        value={phone}
        onChangeText={setPhone}
        disabled={true}
      />

      <CustomInput
        label="Email"
        placeholder="Enter Your Email"
        value={phone}
        onChangeText={setPhone}
        error={true}
        errorMessage="Please enter your email"
      />

      <PrimaryButton title="Send Code" disabled={false} onPress={handleSend} />
      <PrimaryButton
        title="Phone screen ->"
        onPress={() => router.push("/auth/phone")}
      />
    </View>
  );
}
