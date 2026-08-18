import { Colors } from "@/design-system/colors";
import { Pressable, Text, View } from "react-native";
interface PrimaryButtonProps {
  title: string;
  onPress?: () => void;
  disabled?: boolean;
}

function PrimaryButton({ title, onPress, disabled }: PrimaryButtonProps) {
  return (
    <View>
      <Pressable
        style={({ pressed }) => ({
          backgroundColor: pressed
            ? Colors.brand.buttonPrimaryDark
            : Colors.brand.buttonPrimary,
        })}
        disabled={disabled}
        onPress={onPress}
        className="w-[328px] h-[56px] flex items-center justify-center rounded-full bg-brand-primary "
      >
        <Text className="text-white">{title}</Text>
      </Pressable>
    </View>
  );
}

export default PrimaryButton;
