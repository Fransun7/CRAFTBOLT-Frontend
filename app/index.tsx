import { useState } from "react";
import { View } from "react-native";
import CustomInput from "../components/inputs/CustomInput";

export default function Index() {
  const [phone, setPhone] = useState("");

  return (
    <View className="flex-1 justify-center">
      <CustomInput
        label="Phone Number"
        placeholder="Enter Your phone number"
        value={phone}
        onChangeText={setPhone}
      />
    </View>
  );
}
