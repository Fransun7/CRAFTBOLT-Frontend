import LoadingSpinner from "@/components/LoadingSpinner/LoadingSpinner";
import { useState } from "react";
import { View } from "react-native";

export default function Index() {
  const [phone, setPhone] = useState("");

  return (
    <View className="flex-1 justify-center">
      <LoadingSpinner />
    </View>
  );
}
