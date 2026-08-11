import { Colors } from "@/design-system/colors";
import { Typography } from "@/design-system/typography";
import React from "react";
import { ActivityIndicator, Text, View } from "react-native";

interface LoadingSpinnerProps {
    size?: "small" | "large";
    color?: string;
    message?: string;
    fullScreen?: boolean;
}

const LoadingSpinner: React.FC<LoadingSpinnerProps> = ({
    size = "large",
    color,
    message,
    fullScreen = false,
}) => {
    const spinnerColor = color || Colors.brand.buttonPrimary;

    return (
        <View
        className={`items-center justify-center ${fullScreen ? "flex-1 absolute inset-0 bg-white" : "py-4"}`}
        style={fullScreen ? { backgroundColor: Colors.surface.background } : undefined}
        >
         <ActivityIndicator size={size} color={spinnerColor} />
         {message ? (
            <Text style={[Typography.bodySmall, {  color: Colors.surface.textMuted, marginTop: 8 }]}>
                {message}
            </Text>
         )  : null}
        </View>
    );
};

export default LoadingSpinner;