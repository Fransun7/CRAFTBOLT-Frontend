// import { Text, View } from "react-native";

// export default function Index() {
//   return (
//     <View className="flex-1 items-center justify-center bg-white">
//       <Text className="text-red-500 text-2xl font-bold">
//         Edit app/index.tsx to edit this screen.
//       </Text>
//     </View>
//   );
// }


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
        {/* Full Name */}
        <CustomInput
          label="Full Name"
          placeholder="John Doe"
          value={fullName}
          onChangeText={setFullName}
          autoCapitalize="words"
        />

        {/* Email */}
        <CustomInput
          label="Email"
          placeholder="you@example.com"
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
          autoCapitalize="none"
          autoCorrect={false}
        />

        {/* Phone Number */}
        <CustomInput
          label="Phone Number"
          placeholder="080 1234 5678"
          value={phone}
          onChangeText={setPhone}
          keyboardType="phone-pad"
        />

        {/* Password */}
        <CustomInput
          label="Password"
          placeholder="Enter your password"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
          autoCapitalize="none"
        />

        {/* OTP (single digit box — commonly used in a row of these) */}
        <CustomInput
          label="Code"
          placeholder="0"
          value={otpDigit}
          onChangeText={setOtpDigit}
          keyboardType="number-pad"
          maxLength={1}
        />

        {/* Search */}
        <CustomInput
          label="Search"
          placeholder="Search products..."
          value={searchQuery}
          onChangeText={setSearchQuery}
          autoCorrect={false}
        />

        {/* Numeric values (e.g. price, quantity) */}
        <CustomInput
          label="Price"
          placeholder="0.00"
          value={price}
          onChangeText={setPrice}
          keyboardType="decimal-pad"
        />

        {/* Multiline (e.g. product description) */}
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