import { Colors } from "@/design-system/colors";
import { Typography } from "@/design-system/typography";
import { Text, TextInput, View } from "react-native";

// I NEED AN INTERFACE FOR CUSTOMINPUT COMPONENT
interface CustomInputProps {
  label?: string;
  placeholder: string;
  value: string;
  error?: string;
  disable?: boolean;
  onChangeText: (text: string) => void;
}

function CustomInput({
  label,
  placeholder,
  value,
  error,
  disable,
  onChangeText,
}: CustomInputProps) {
  return (
    // I NEED THE COMPONENT TO DISPLAYS LABEL IF ONLY IT EXIST
    <View>
      {label && (
        <Text
          style={[
            Typography.bodySmall,
            {
              color: Colors.surface.textPrimary,
              backgroundColor: Colors.surface.surface,
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
        className="h-12 rounded-lg border px-4 text-base"
        style={{
          borderColor: Colors.surface.border,
          fontWeight: Typography.bodyRegular.fontWeight,
          color: Colors.status.error,
        }}
      />
    </View>
  );
}

export default CustomInput;
