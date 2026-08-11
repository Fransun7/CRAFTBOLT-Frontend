import { useState } from "react";
import { View } from "react-native";
import CustomInput from "../components/inputs/CustomInput";

export default function Index() {
  const [phone, setPhone] = useState("");

  return (
    <View className="flex-1 justify-center gap-10  border border-2 p-10 bg-slate-400">
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
    </View>
  );
}
