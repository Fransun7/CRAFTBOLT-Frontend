import { Colors } from "@/design-system/colors";
import { ActivityIndicator, Pressable, Text, View } from "react-native";
interface PrimaryButtonProps {
  title: string;
  onPress?: () => void;
  disabled?: boolean;
  loading?: boolean;
  className?: string;
}

function PrimaryButton({
  title,
  onPress,
  disabled,
  loading = false,
  className,
}: PrimaryButtonProps) {
  return (
    <View>
      <Pressable
        style={({ pressed }) => ({
          backgroundColor: pressed
            ? Colors.brand.buttonPrimaryDark
            : Colors.brand.buttonPrimary,
        })}
        disabled={disabled || loading}
        onPress={onPress}
        className={`w-[328px] h-[56px] flex items-center justify-center rounded-full bg-brand-primary ${
          disabled || loading ? "opacity-60" : "opacity-100"
        } ${className ?? ""}`}
      >
        {loading ? (
          <ActivityIndicator color="#FFFFFF" size="small" />
        ) : (
          <Text className="text-white">{title}</Text>
        )}
      </Pressable>
    </View>
  );
}

export default PrimaryButton;
