import { TextStyle } from "react-native";

export const Typography: Record<string, TextStyle> = {
  // Display 1. Onboarding hero titles, splash screens, high-impact marketing headers.

  display1: {
    fontFamily: "ZalandoSans-Bold",
    fontWeight: "700",
    fontSize: 24,
    lineHeight: 32,
  },

  //Heading 1. Screen headers, top app bar titles, primary modal titles.
  heading1: {
    fontFamily: "ZalandoSans-Bold",
    fontWeight: "700",
    fontSize: 20,
    lineHeight: 28,
  },

  //Heading 2. Section headers, artisan names on profile views, key block titles.
  heading2: {
    fontFamily: "ZalandoSans-SemiBold",
    fontWeight: "600",
    fontSize: 18,
    lineHeight: 24,
  },

  //Heading 3. Card titles, sub-section headers, list item titles.
  heading3: {
    fontFamily: "ZalandoSans-Medium",
    fontWeight: "500",
    fontSize: 24,
    lineHeight: 24,
  },

  //Body Regular. Default text for input fields, job descriptions, chat messages.
  bodyRegular: {
    fontFamily: "ZalandoSans-Regular",
    fontWeight: "400",
    fontSize: 16,
    lineHeight: 24,
  },

  //Body Small. Category tag text, input field labels,
  bodySmall: {
    fontFamily: "ZalandoSans-Medium",
    fontWeight: "500",
    fontSize: 12,
    lineHeight: 16,
  },

  bodyPlaceholder: {
    fontFamily: "ZalandoSans-Regular",
    fontWeight: "300",
    fontSize: 12,
    lineHeight: 16,
  },

  bodyNumber: {
    fontFamily: "ZalandoSans-Medium",
    fontSize: 16,
    fontWeight: "900",
    lineHeight: 24,
  },

  //Caption / Badge. Micro-copy, "NIN Verified" badge text, status tag labels.
  captionBadge: {
    fontFamily: "ZalandoSans-SemiBold",
    fontWeight: "600",
    fontSize: 12,
    lineHeight: 16,
  },

  bodyLinks: {
    fontFamily: "ZalandoSans-Regular",
    fontSize: 10.689,
    fontWeight: "300",
    lineHeight: 11,
  },

  bodyLinks2: {
    fontFamily: "ZalandoSans-Regular",
    fontSize: 10.689,
    fontWeight: "700",
    lineHeight: 11,
  },
};
