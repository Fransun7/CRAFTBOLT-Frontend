import CustomInput from "@/components/CustomInput/CustomInput";
import { useState } from "react";
import { ScrollView, View } from "react-native";

export default function HomeScreen() {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [otpDigit, setOtpDigit] = useState("");
  const [searchQuery, setSearchQuery] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");

  return (
    <ScrollView className="flex-1 bg-white">
      <View className="px-5 pt-16">
        <CustomInput
          label="Full Name"
          placeholder="John Doe"
          value={fullName}
          onChangeText={setFullName}
          autoCapitalize="words"
        />

        <CustomInput
          label="Email"
          placeholder="you@example.com"
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
          autoCapitalize="none"
          autoCorrect={false}
        />

        <CustomInput
          label="Phone Number"
          placeholder="080 1234 5678"
          value={phone}
          onChangeText={setPhone}
          keyboardType="phone-pad"
        />

        <CustomInput
          label="Password"
          placeholder="Enter your password"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
          autoCapitalize="none"
        />

        <CustomInput
          label="Code"
          placeholder="0"
          value={otpDigit}
          onChangeText={setOtpDigit}
          keyboardType="number-pad"
          maxLength={1}
        />

        <CustomInput
          label="Search"
          placeholder="Search products..."
          value={searchQuery}
          onChangeText={setSearchQuery}
          autoCorrect={false}
        />

        <CustomInput
          label="Price"
          placeholder="0.00"
          value={price}
          onChangeText={setPrice}
          keyboardType="decimal-pad"
        />

        <CustomInput
          label="Description"
          placeholder="Describe your item..."
          value={description}
          onChangeText={setDescription}
          multiline
          numberOfLines={4}
        />
      </View>
    </ScrollView>
  );
}