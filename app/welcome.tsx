import { PrimaryButton } from "@/components/buttons";
import { Typography } from "@/design-system/typography";
import { useRouter } from "expo-router";
import React from "react";
import { Image, Text, View } from "react-native";

export default function WelcomeScreen() {
  const router = useRouter();

  return (
    <View className="flex-1 bg-[#F0F4F8] justify-between">
      {/* Top Graphic Container: Full Width, No Padding */}
      <View className="flex-1 justify-center items-center relative w-full overflow-visible">
        {/* Layer 1: Radial Glow Background (Full Width) */}
        <Image
          source={require("../assets/splash-assets/welcome-ellipse.png")}
          className="absolute w-full h-[120%] -top-10"
          resizeMode="contain"
        />

        {/* Layer 2: Transparent Orbit Graphic */}
        <Image
          source={require("../assets/images/welcome-graphic.png")}
          className="w-[90%] h-[380px] z-10"
          resizeMode="contain"
        />
      </View>

      {/* Bottom Action Section: Kept inside Padding */}
      <View className="w-full flex-col gap-6 p-6 mb-2">
        {/* Title & Subtitle */}
        <View className="items-center gap-2">
          <Text
            style={Typography.heading3}
            className="text-center text-[#171717]"
          >
            Welcome to CraftBolt
          </Text>
          <Text
            style={Typography.bodyPlaceholder}
            className="text-[#171717] text-center text-base"
          >
            Get hired, find artisans seamlessly!
          </Text>
        </View>

        {/* Buttons */}
        <View className="flex items-center w-full gap-3">
          <PrimaryButton
            title="Sign Up for free"
            onPress={() => router.push("/auth/phone")}
          />

          <PrimaryButton
            title="Log In"
            onPress={() => router.push("/auth/phone")}
            className="bg-[#38BDF8]"
          />
        </View>

        {/* Terms & Privacy Footer */}
        <Text className="text-center text-[10.69px] font-normal text-[#171717] mt-1">
          By continuing, you agree to our{" "}
          <Text className="font-semibold text-[#08192C]">Terms of Use</Text> &{" "}
          <Text className="font-semibold text-[#08192C]">Privacy Policy</Text>
        </Text>
      </View>
    </View>
  );
}
