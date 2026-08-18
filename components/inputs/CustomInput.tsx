import { Colors } from "@/design-system/colors";
import { Typography } from "@/design-system/typography";
import { useState } from "react";
import { Text, TextInput, View } from "react-native";

// I NEED AN INTERFACE FOR CUSTOMINPUT COMPONENT
interface CustomInputProps {
  label?: string;
  placeholder: string;
  value: string;
  error?: boolean;
  errorMessage?: string;
  disabled?: boolean;
  className?: string;
  containerClassName?: string;
  onChangeText: (text: string) => void;
}

function CustomInput({
  label,
  placeholder,
  value,
  error,
  errorMessage,
  disabled,
  className,
  containerClassName,
  onChangeText,
}: CustomInputProps) {
  // I NEED A STATE FOR THE FOCUS OF THE INPUT FIELD
  const [isFocused, setIsFocused] = useState(false);

  return (
    // I NEED THE COMPONENT TO DISPLAYS LABEL IF ONLY IT EXIST
    <View className={containerClassName}>
      {label && (
        <Text
          style={[
            Typography.bodySmall,
            {
              color: Colors.surface.textPrimary,
              // backgroundColor: Colors.surface.surface,
            },
          ]}
          className="mb-2"
        >
          {label}
        </Text>
      )}
      <TextInput
        placeholder={placeholder}
        value={value}
        onChangeText={onChangeText}
        placeholderTextColor={Colors.surface.textMuted}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        editable={!disabled}
        className={`h-[42px] rounded-input border px-4 ${className ?? ""} `}
        style={{
          borderColor: disabled
            ? Colors.surface.border
            : error
              ? Colors.status.error
              : isFocused
                ? Colors.brand.primary
                : Colors.surface.border,
          ...Typography.bodyRegular,
          color: disabled
            ? Colors.surface.textMuted
            : Colors.surface.textPrimary,
          // backgroundColor: disabled
          //   ? Colors.surface.background
          //   : Colors.surface.surface,
        }}
      />
      {error && errorMessage && (
        <Text
          style={{
            ...Typography.bodySmall,
            color: Colors.status.error,
          }}
          className="mt-1"
        >
          {errorMessage}
        </Text>
      )}
    </View>
  );
}

export default CustomInput;
