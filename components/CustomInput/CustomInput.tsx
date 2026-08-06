import { ThemedText } from "@/components/themed-text";
import { Colors } from "@/constants/theme";
import React, { useState } from "react";
import { TextInput, TextInputProps, TouchableOpacity, View } from "react-native";

interface CustomInputProps extends TextInputProps {
  label: string;
  error?: string;
  disabled?: boolean;
}

const CustomInput: React.FC<CustomInputProps> = ({
  label,
  error,
  disabled,
  editable = true,
  secureTextEntry = false,
  multiline = false,
  numberOfLines = 1,
  value,
  onChangeText,
  placeholder,
  keyboardType = "default",
  maxLength,
  autoCapitalize = "sentences",
  autoCorrect = true,
  ...rest
}) => {
  const [isFocused, setIsFocused] = useState(false);
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const isEditable = disabled ? false : editable;
  const hideText = secureTextEntry && !isPasswordVisible;

  const borderColor = error
    ? "#DC2626"
    : isFocused
    ? Colors.light.tint
    : "#D1D5DB";

  return (
    <View className="w-full mb-4">
      <ThemedText className="text-sm font-semibold mb-1.5">
        {label}
      </ThemedText>

      <View
        className={`flex-row items-center rounded-lg border-[1.5px] px-3 ${
          !isEditable ? "bg-gray-100 opacity-60" : "bg-white"
        } ${multiline ? "items-start py-2" : ""}`}
        style={{ borderColor }}
      >
        <TextInput
          className="flex-1 py-3 text-base text-[#11181C]"
          value={value}
          onChangeText={onChangeText}
          placeholder={placeholder}
          placeholderTextColor="#9CA3AF"
          editable={isEditable}
          secureTextEntry={hideText}
          keyboardType={keyboardType}
          maxLength={maxLength}
          autoCapitalize={autoCapitalize}
          autoCorrect={autoCorrect}
          multiline={multiline}
          numberOfLines={multiline ? numberOfLines : 1}
          textAlignVertical={multiline ? "top" : "center"}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          {...rest}
        />

        {secureTextEntry && (
          <TouchableOpacity
            onPress={() => setIsPasswordVisible((prev) => !prev)}
            className="pl-2"
          >
            <ThemedText
              className="text-sm font-semibold"
              style={{ color: Colors.light.tint }}
            >
              {isPasswordVisible ? "Hide" : "Show"}
            </ThemedText>
          </TouchableOpacity>
        )}
      </View>

      {error ? (
        <ThemedText className="mt-1 text-sm" style={{ color: "#DC2626" }}>
          {error}
        </ThemedText>
      ) : null}
    </View>
  );
};

export default CustomInput;