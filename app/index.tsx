// import { useRouter } from "expo-router";
// import * as SplashScreen from "expo-splash-screen";
// import React, { useEffect } from "react";
// import { Image, View } from "react-native";
// import Animated, {
//   Easing,
//   useAnimatedStyle,
//   useSharedValue,
//   withTiming,
// } from "react-native-reanimated";
// SplashScreen.preventAutoHideAsync();

// const boltIcon = require("../assets/splash-assets/bolt.png");
// const AnimatedImage = Animated.createAnimatedComponent(Image);

// // const travelConfig: WithSpringConfig = {
// //   damping: 14,
// //   stiffness: 110,
// //   mass: 0.7,
// // };

// // const zoomInConfig: WithSpringConfig = {
// //   damping: 4,
// //   stiffness: 100,
// //   mass: 0.4,
// // };

// // const zoomOutConfig: WithSpringConfig = {
// //   damping: 12,
// //   stiffness: 90,
// //   mass: 1,
// // };
// export default function Index() {
//   const router = useRouter();
//   const scale = useSharedValue<number>(1.0);
//   const rotate = useSharedValue<number>(0);
//   const translateY = useSharedValue<number>(500);

//   const textOpacity = useSharedValue<number>(0);
//   const textTranslateX = useSharedValue<number>(20);

//   const soloBoltOpacity = useSharedValue<number>(1);
//   const offWhiteLogoOpacity = useSharedValue<number>(0);
//   const blueBrandOpacity = useSharedValue<number>(0);

//   useEffect(() => {
//     // I NEED TO HIDE THE NATIVE SPLASH SCREEN AS THIS SCREEN MOUNTS
//     SplashScreen.hideAsync();
//     translateY.value = withTiming(
//       0,
//       { duration: 800, easing: Easing.out(Easing.cubic) },
//       (isTravelFinished) => {
//         if (isTravelFinished) {
//           scale.value = withTiming(
//             4.0,
//             { duration: 1000, easing: Easing.out(Easing.back(1.5)) },
//             (isPopFinished) => {
//               if (isPopFinished) {
//                 scale.value = withTiming(0.6, {
//                   duration: 1200,
//                   easing: Easing.inOut(Easing.quad),
//                 });
//                 rotate.value = withTiming(0, {
//                   duration: 1200,
//                   easing: Easing.inOut(Easing.quad),
//                 });

//                 textOpacity.value = withTiming(1, { duration: 800 });
//                 textTranslateX.value = withTiming(
//                   0,
//                   { duration: 800, easing: Easing.out(Easing.quad) },
//                   // (isTextFinished) => {
//                   //   if (isTextFinished) {
//                   //     setTimeout(() => {
//                   //       router.replace("/auth/phone");
//                   //     }, 500);
//                   //   }
//                   // },
//                 );
//               }
//             },
//           );

//           rotate.value = withTiming(-15, {
//             duration: 1000,
//             easing: Easing.out(Easing.back(1.5)),
//           });
//         }
//       },
//     );
//   }, []);

//   const animatedBoltStyle = useAnimatedStyle(() => ({
//     transform: [
//       { translateY: translateY.value },
//       { scale: scale.value },
//       { rotate: `${rotate.value}deg` },
//     ],
//   }));

//   const animatedTextStyle = useAnimatedStyle(() => ({
//     opacity: textOpacity.value,
//     transform: [{ translateX: textTranslateX.value }],
//   }));

//   return (
//     <View className="flex-1 flex-row justify-center items-center bg-[#F0F4F8]">
//       <AnimatedImage
//         source={boltIcon}
//         resizeMode="contain"
//         className="w-20 h-20"
//         style={animatedBoltStyle}
//       />

//       <Animated.Text
//         style={[animatedTextStyle]}
//         className="text-3xl font-bold text-[#08192C] ml-1"
//       >
//         CraftBolt
//       </Animated.Text>
//     </View>
//   );
// }

// import { useRouter } from "expo-router";
// import * as SplashScreen from "expo-splash-screen";
// import React, { useEffect } from "react";
// import { Image, View } from "react-native";
// import Animated, {
//   Easing,
//   useAnimatedStyle,
//   useSharedValue,
//   withTiming,
// } from "react-native-reanimated";

// SplashScreen.preventAutoHideAsync();

// const boltIcon = require("../assets/splash-assets/bolt.png");
// const AnimatedImage = Animated.createAnimatedComponent(Image);

// export default function Index() {
//   const router = useRouter();

//   // Phase 1: Solo Bolt Shared Values
//   const scale = useSharedValue<number>(1.0);
//   const rotate = useSharedValue<number>(0);
//   const translateY = useSharedValue<number>(500);

//   // Phase Opacity Shared Values
//   const soloBoltOpacity = useSharedValue<number>(1);
//   const offWhiteLogoOpacity = useSharedValue<number>(0);
//   const blueBrandOpacity = useSharedValue<number>(0);

//   useEffect(() => {
//     SplashScreen.hideAsync();

//     // STEP 1: Travel from bottom to center (800ms)
//     translateY.value = withTiming(
//       0,
//       { duration: 800, easing: Easing.out(Easing.cubic) },
//       (isTravelFinished) => {
//         if (isTravelFinished) {
//           // STEP 2: Pop to 4.0x + Slant -15deg (1000ms)
//           scale.value = withTiming(
//             4.0,
//             { duration: 1000, easing: Easing.out(Easing.back(1.5)) },
//             (isPopFinished) => {
//               if (isPopFinished) {
//                 // STEP 3: Shrink small (1200ms)
//                 scale.value = withTiming(0.6, {
//                   duration: 1200,
//                   easing: Easing.inOut(Easing.quad),
//                 });
//                 rotate.value = withTiming(
//                   0,
//                   { duration: 1200, easing: Easing.inOut(Easing.quad) },
//                   (isShrinkFinished) => {
//                     if (isShrinkFinished) {
//                       // Pause for 500ms, then cross-fade to Off-White Icon + Text Logo
//                       setTimeout(() => {
//                         soloBoltOpacity.value = withTiming(0, {
//                           duration: 400,
//                         });
//                         offWhiteLogoOpacity.value = withTiming(
//                           1,
//                           { duration: 400 },
//                           (isLogoFinished) => {
//                             if (isLogoFinished) {
//                               // Hold for 1 second (1000ms), then cross-fade to Blue Screen
//                               setTimeout(() => {
//                                 offWhiteLogoOpacity.value = withTiming(0, {
//                                   duration: 500,
//                                 });
//                                 blueBrandOpacity.value = withTiming(
//                                   1,
//                                   { duration: 500 },
//                                   (isBlueFinished) => {
//                                     if (isBlueFinished) {
//                                       // Route to Phone Auth Screen
//                                       // setTimeout(() => {
//                                       //   router.replace("/auth/phone");
//                                       // }, 800);
//                                     }
//                                   },
//                                 );
//                               }, 1000);
//                             }
//                           },
//                         );
//                       }, 500);
//                     }
//                   },
//                 );
//               }
//             },
//           );

//           rotate.value = withTiming(-15, {
//             duration: 1000,
//             easing: Easing.out(Easing.back(1.5)),
//           });
//         }
//       },
//     );
//   }, []);

//   // Animated Styles
//   const animatedSoloBoltStyle = useAnimatedStyle(() => ({
//     opacity: soloBoltOpacity.value,
//     transform: [
//       { translateY: translateY.value },
//       { scale: scale.value },
//       { rotate: `${rotate.value}deg` },
//     ],
//   }));

//   const animatedOffWhiteLogoStyle = useAnimatedStyle(() => ({
//     opacity: offWhiteLogoOpacity.value,
//   }));

//   const animatedBlueBrandStyle = useAnimatedStyle(() => ({
//     opacity: blueBrandOpacity.value,
//   }));

//   return (
//     <View className="flex-1 bg-[#F0F4F8]">
//       {/* PHASE 1: Solo Animated Bolt */}
//       <Animated.View
//         className="absolute inset-0 justify-center items-center"
//         style={animatedSoloBoltStyle}
//       >
//         <Image source={boltIcon} resizeMode="contain" className="w-20 h-20" />
//       </Animated.View>

//       {/* PHASE 2: Off-White Icon + Text Logo */}
//       <Animated.View
//         style={[animatedOffWhiteLogoStyle]}
//         className="absolute inset-0 flex-row justify-center items-center bg-[#F0F4F8]"
//       >
//         <Image source={boltIcon} resizeMode="contain" className="w-12 h-12" />
//         <Animated.Text className="text-4xl font-bold text-[#08192C] ml-3">
//           CraftBolt
//         </Animated.Text>
//       </Animated.View>

//       {/* PHASE 3: Full Blue Screen + White Text */}
//       <Animated.View
//         style={[animatedBlueBrandStyle]}
//         className="absolute inset-0 flex-row justify-center items-center bg-[#045389]"
//       >
//         <Image
//           source={boltIcon}
//           resizeMode="contain"
//           className="w-12 h-12"
//           style={{ tintColor: "#FFFFFF" }}
//         />
//         <Animated.Text className="text-4xl font-bold text-white ml-3">
//           CraftBolt
//         </Animated.Text>
//       </Animated.View>
//     </View>
//   );
// }

// import { useRouter } from "expo-router";
// import * as SplashScreen from "expo-splash-screen";
// import React, { useEffect } from "react";
// import { Image, View } from "react-native";
// import Animated, {
//   Easing,
//   runOnJS,
//   useAnimatedStyle,
//   useSharedValue,
//   withTiming,
// } from "react-native-reanimated";

// SplashScreen.preventAutoHideAsync();

// const boltIcon = require("../assets/splash-assets/bolt.png");
// const brandWordmark = require("../assets/splash-assets/craftbolt-wordmark.png");
// const brandWordmarkBlack = require("../assets/splash-assets/craftbolt-wordmark-black.png");

// // UNCOMMENT & UPDATE PATH WHEN YOUR DESIGNER PROVIDES THE LOGO IMAGE:
// // const brandWordmark = require("../assets/splash-assets/craftbolt-wordmark.png");

// const AnimatedImage = Animated.createAnimatedComponent(Image);

// export default function Index() {
//   const router = useRouter();

//   // Phase 1: Solo Bolt Shared Values
//   const scale = useSharedValue<number>(1.0);
//   const rotate = useSharedValue<number>(0);
//   const translateY = useSharedValue<number>(500);

//   // Phase Opacity Shared Values
//   const soloBoltOpacity = useSharedValue<number>(1);
//   const offWhiteLogoOpacity = useSharedValue<number>(0);
//   const blueBrandOpacity = useSharedValue<number>(0);

//   // Helper function to safely trigger navigation on JS Thread
//   const handleNavigation = () => {
//     setTimeout(() => {
//       router.replace("/auth/phone");
//     }, 800);
//   };

//   // Helper function for middle delay before blue screen transition
//   const triggerBlueScreenTransition = () => {
//     setTimeout(() => {
//       offWhiteLogoOpacity.value = withTiming(0, { duration: 500 });
//       blueBrandOpacity.value = withTiming(
//         1,
//         { duration: 500 },
//         (isBlueFinished) => {
//           if (isBlueFinished) {
//             runOnJS(handleNavigation)();
//           }
//         },
//       );
//     }, 1000);
//   };

//   // Helper function for initial 500ms delay after shrink
//   const triggerOffWhiteLogoTransition = () => {
//     setTimeout(() => {
//       soloBoltOpacity.value = withTiming(0, { duration: 400 });
//       offWhiteLogoOpacity.value = withTiming(
//         1,
//         { duration: 400 },
//         (isLogoFinished) => {
//           if (isLogoFinished) {
//             runOnJS(triggerBlueScreenTransition)();
//           }
//         },
//       );
//     }, 500);
//   };

//   useEffect(() => {
//     SplashScreen.hideAsync();

//     // STEP 1: Travel from bottom to center (800ms)
//     translateY.value = withTiming(
//       0,
//       { duration: 800, easing: Easing.out(Easing.cubic) },
//       (isTravelFinished) => {
//         if (isTravelFinished) {
//           // STEP 2: Pop to 4.0x + Slant -15deg (1000ms)
//           scale.value = withTiming(
//             4.0,
//             { duration: 1000, easing: Easing.out(Easing.back(1.5)) },
//             (isPopFinished) => {
//               if (isPopFinished) {
//                 // STEP 3: Shrink small (1200ms)
//                 scale.value = withTiming(0.6, {
//                   duration: 1200,
//                   easing: Easing.inOut(Easing.quad),
//                 });
//                 rotate.value = withTiming(
//                   0,
//                   { duration: 1200, easing: Easing.inOut(Easing.quad) },
//                   (isShrinkFinished) => {
//                     if (isShrinkFinished) {
//                       // Call JS setTimeout safely via runOnJS
//                       runOnJS(triggerOffWhiteLogoTransition)();
//                     }
//                   },
//                 );
//               }
//             },
//           );

//           rotate.value = withTiming(-15, {
//             duration: 1000,
//             easing: Easing.out(Easing.back(1.5)),
//           });
//         }
//       },
//     );
//   }, []);

//   const animatedSoloBoltStyle = useAnimatedStyle(() => ({
//     opacity: soloBoltOpacity.value,
//     transform: [
//       { translateY: translateY.value },
//       { scale: scale.value },
//       { rotate: `${rotate.value}deg` },
//     ],
//   }));

//   const animatedOffWhiteLogoStyle = useAnimatedStyle(() => ({
//     opacity: offWhiteLogoOpacity.value,
//   }));

//   const animatedBlueBrandStyle = useAnimatedStyle(() => ({
//     opacity: blueBrandOpacity.value,
//   }));

//   return (
//     <View className="flex-1 bg-[#F0F4F8]">
//       {/* PHASE 1: Solo Animated Bolt */}
//       <Animated.View
//         className="absolute inset-0 justify-center items-center"
//         style={animatedSoloBoltStyle}
//       >
//         <Image source={boltIcon} resizeMode="contain" className="w-20 h-20" />
//       </Animated.View>

//       {/* PHASE 2: Off-White Icon + Text Logo */}
//       <Animated.View
//         style={[animatedOffWhiteLogoStyle]}
//         className="absolute inset-0 flex-row justify-center items-center bg-[#F0F4F8]"
//       >
//         <Image source={boltIcon} resizeMode="contain" className="w-12 h-12" />
//         {/* <Animated.Text className="text-4xl font-bold text-[#08192C] ml-3">
//           CraftBolt
//         </Animated.Text> */}
//         <Image
//           source={brandWordmarkBlack}
//           resizeMode="contain"
//           className="w-56 h-16"
//         />
//       </Animated.View>

//       {/* PHASE 3: Full Blue Screen */}
//       <Animated.View
//         style={[animatedBlueBrandStyle]}
//         className="absolute inset-0 flex-row justify-center items-center bg-[#045389]"
//       >
//         {/* CURRENT: Temp Icon + Text */}
//         {/* <Image
//           source={boltIcon}
//           resizeMode="contain"
//           className="w-12 h-12"
//           style={{ tintColor: "#FFFFFF" }}
//         />
//         <Animated.Text className="text-4xl font-bold text-white ml-3">
//           CraftBolt
//         </Animated.Text> */}

//         {/* FUTURE (When designer provides the full image logo):
//             Replace the two elements above with your single Image tag:
//              */}
//         <Image
//           source={brandWordmark}
//           resizeMode="contain"
//           className="w-56 h-16"
//         />
//       </Animated.View>
//     </View>
//   );
// }

// import { useRouter } from "expo-router";
// import * as SplashScreen from "expo-splash-screen";
// import React, { useEffect } from "react";
// import { Image, View } from "react-native";
// import Animated, {
//   Easing,
//   runOnJS,
//   useAnimatedStyle,
//   useSharedValue,
//   withTiming,
// } from "react-native-reanimated";

// SplashScreen.preventAutoHideAsync();

// const boltIcon = require("../assets/splash-assets/bolt.png");
// const brandWordmark = require("../assets/splash-assets/craftbolt-wordmark.png");
// const brandWordmarkBlack = require("../assets/splash-assets/craftbolt-wordmark-black.png");

// const ellipseGlow = require("../assets/splash-assets/ellipse.png");

// const AnimatedImage = Animated.createAnimatedComponent(Image);

// export default function Index() {
//   const router = useRouter();

//   // Solo Bolt Shared Values
//   const scale = useSharedValue<number>(1.0);
//   const rotate = useSharedValue<number>(0);
//   const translateY = useSharedValue<number>(500);

//   // Background Ellipse Glow Opacity
//   const ellipseOpacity = useSharedValue<number>(0);

//   // Phase Opacity Shared Values
//   const soloBoltOpacity = useSharedValue<number>(1);
//   const offWhiteLogoOpacity = useSharedValue<number>(0);
//   const blueBrandOpacity = useSharedValue<number>(0);

//   const handleNavigation = () => {
//     setTimeout(() => {
//       router.replace("/auth/phone");
//     }, 800);
//   };

//   const triggerBlueScreenTransition = () => {
//     setTimeout(() => {
//       // Fade out both the logo and the glowing ellipse as the blue screen covers everything
//       offWhiteLogoOpacity.value = withTiming(0, { duration: 500 });
//       ellipseOpacity.value = withTiming(0, { duration: 500 });

//       blueBrandOpacity.value = withTiming(
//         1,
//         { duration: 500 },
//         (isBlueFinished) => {
//           if (isBlueFinished) {
//             runOnJS(handleNavigation)();
//           }
//         },
//       );
//     }, 1000);
//   };

//   const triggerOffWhiteLogoTransition = () => {
//     setTimeout(() => {
//       soloBoltOpacity.value = withTiming(0, { duration: 400 });
//       offWhiteLogoOpacity.value = withTiming(
//         1,
//         { duration: 400 },
//         (isLogoFinished) => {
//           if (isLogoFinished) {
//             runOnJS(triggerBlueScreenTransition)();
//           }
//         },
//       );
//     }, 500);
//   };

//   useEffect(() => {
//     SplashScreen.hideAsync();

//     // STEP 1: Travel from bottom to center (800ms)
//     translateY.value = withTiming(
//       0,
//       { duration: 800, easing: Easing.out(Easing.cubic) },
//       (isTravelFinished) => {
//         if (isTravelFinished) {
//           // Fade in the blue ellipse glow right as the icon reaches center
//           ellipseOpacity.value = withTiming(1, { duration: 400 });

//           // STEP 2: Pop to 4.0x + Slant -15deg (1000ms)
//           scale.value = withTiming(
//             4.0,
//             { duration: 1000, easing: Easing.out(Easing.back(1.5)) },
//             (isPopFinished) => {
//               if (isPopFinished) {
//                 // STEP 3: Shrink small (1200ms)
//                 scale.value = withTiming(0.6, {
//                   duration: 1200,
//                   easing: Easing.inOut(Easing.quad),
//                 });
//                 rotate.value = withTiming(
//                   0,
//                   { duration: 1200, easing: Easing.inOut(Easing.quad) },
//                   (isShrinkFinished) => {
//                     if (isShrinkFinished) {
//                       runOnJS(triggerOffWhiteLogoTransition)();
//                     }
//                   },
//                 );
//               }
//             },
//           );

//           rotate.value = withTiming(-15, {
//             duration: 1000,
//             easing: Easing.out(Easing.back(1.5)),
//           });
//         }
//       },
//     );
//   }, []);

//   const animatedSoloBoltStyle = useAnimatedStyle(() => ({
//     opacity: soloBoltOpacity.value,
//     transform: [
//       { translateY: translateY.value },
//       { scale: scale.value },
//       { rotate: `${rotate.value}deg` },
//     ],
//   }));

//   const animatedEllipseStyle = useAnimatedStyle(() => ({
//     opacity: ellipseOpacity.value,
//   }));

//   const animatedOffWhiteLogoStyle = useAnimatedStyle(() => ({
//     opacity: offWhiteLogoOpacity.value,
//   }));

//   const animatedBlueBrandStyle = useAnimatedStyle(() => ({
//     opacity: blueBrandOpacity.value,
//   }));

//   return (
//     <View className="flex-1 bg-[#F0F4F8]">
//       {/* PERSISTENT BACKGROUND GLOW: Blue Blurred Ellipse */}
//       <Animated.View
//         style={[animatedEllipseStyle]}
//         className="absolute inset-0 justify-center items-center pointer-events-none"
//       >
//         <Image
//           source={ellipseGlow}
//           resizeMode="contain"
//           className="w-96 h-96"
//         />
//       </Animated.View>

//       {/* PHASE 1: Solo Animated Bolt */}
//       <Animated.View
//         className="absolute inset-0 justify-center items-center"
//         style={animatedSoloBoltStyle}
//       >
//         <Image source={boltIcon} resizeMode="contain" className="w-20 h-20" />
//       </Animated.View>

//       {/* PHASE 2: Off-White Icon + Text Logo */}
//       <Animated.View
//         style={[animatedOffWhiteLogoStyle]}
//         className="absolute inset-0 flex-row justify-center items-center"
//       >
//         <Image source={boltIcon} resizeMode="contain" className="w-12 h-12" />
//         {/* <Animated.Text className="text-4xl font-bold text-[#08192C] ml-3">
//           CraftBolt
//         </Animated.Text> */}
//         <Image
//           source={brandWordmarkBlack}
//           resizeMode="contain"
//           className="w-56 h-16"
//         />
//       </Animated.View>

//       {/* PHASE 3: Full Blue Screen */}
//       <Animated.View
//         style={[animatedBlueBrandStyle]}
//         className="absolute inset-0 flex-row justify-center items-center bg-[#045389]"
//       >
//         <Image
//           source={boltIcon}
//           resizeMode="contain"
//           className="w-12 h-12"
//           style={{ tintColor: "#FFFFFF" }}
//         />
//         {/* <Animated.Text className="text-4xl font-bold text-white ml-3">
//           CraftBolt
//         </Animated.Text> */}
//         <Image
//           source={brandWordmark}
//           resizeMode="contain"
//           className="w-56 h-16"
//         />
//       </Animated.View>
//     </View>
//   );
// }

// import { useRouter } from "expo-router";
// import * as SplashScreen from "expo-splash-screen";
// import React, { useEffect } from "react";
// import { Image, View } from "react-native";
// import Animated, {
//   Easing,
//   runOnJS,
//   useAnimatedStyle,
//   useSharedValue,
//   withTiming,
// } from "react-native-reanimated";

// SplashScreen.preventAutoHideAsync().catch(() => {});

// // const boltIcon = require("../assets/splash-assets/bolt.png");
// const brandWordmark = require("../assets/splash-assets/craftbolt-wordmark.png");
// const brandWordmarkBlack = require("../assets/splash-assets/craftbolt-wordmark-black.png");

// // Ellipses & Backgrounds
// const ellipseGlow = require("../assets/splash-assets/ellipse.png");
// const finalBg = require("../assets/splash-assets/splash-screen-blue-gradient.png");

// export default function Index() {
//   const router = useRouter();

//   // Solo Bolt Shared Values
//   const scale = useSharedValue<number>(1.0);
//   const rotate = useSharedValue<number>(0);
//   const translateY = useSharedValue<number>(500);

//   // Background Ellipse Glow Opacity (Phase 1 & 2)
//   const ellipseOpacity = useSharedValue<number>(0);

//   // Phase Opacity Shared Values
//   const soloBoltOpacity = useSharedValue<number>(1);
//   const offWhiteLogoOpacity = useSharedValue<number>(0);
//   const blueBrandOpacity = useSharedValue<number>(0);

//   const handleNavigation = () => {
//     setTimeout(() => {
//       router.replace("/welcome");
//     }, 800);
//   };

//   const triggerBlueScreenTransition = () => {
//     setTimeout(() => {
//       // Fade out Phase 2 logo and phase 1 ellipse
//       offWhiteLogoOpacity.value = withTiming(0, { duration: 500 });
//       ellipseOpacity.value = withTiming(0, { duration: 500 });

//       // Fade in Phase 3 Gradient screen
//       blueBrandOpacity.value = withTiming(
//         1,
//         { duration: 500 },
//         (isBlueFinished) => {
//           if (isBlueFinished) {
//             runOnJS(handleNavigation)();
//           }
//         },
//       );
//     }, 1000);
//   };

//   const triggerOffWhiteLogoTransition = () => {
//     setTimeout(() => {
//       soloBoltOpacity.value = withTiming(0, { duration: 400 });
//       offWhiteLogoOpacity.value = withTiming(
//         1,
//         { duration: 400 },
//         (isLogoFinished) => {
//           if (isLogoFinished) {
//             runOnJS(triggerBlueScreenTransition)();
//           }
//         },
//       );
//     }, 500);
//   };

//   useEffect(() => {
//     SplashScreen.hideAsync().catch(() => {});

//     // STEP 1: Travel from bottom to center (800ms)
//     translateY.value = withTiming(
//       0,
//       { duration: 800, easing: Easing.out(Easing.cubic) },
//       (isTravelFinished) => {
//         if (isTravelFinished) {
//           // Fade in initial blue ellipse glow
//           ellipseOpacity.value = withTiming(1, { duration: 400 });

//           // STEP 2: Pop to 4.0x + Slant -15deg (1000ms)
//           scale.value = withTiming(
//             4.0,
//             { duration: 1000, easing: Easing.out(Easing.back(1.5)) },
//             (isPopFinished) => {
//               if (isPopFinished) {
//                 // STEP 3: Shrink small (1200ms)
//                 scale.value = withTiming(0.6, {
//                   duration: 1200,
//                   easing: Easing.inOut(Easing.quad),
//                 });
//                 rotate.value = withTiming(
//                   0,
//                   { duration: 1200, easing: Easing.inOut(Easing.quad) },
//                   (isShrinkFinished) => {
//                     if (isShrinkFinished) {
//                       runOnJS(triggerOffWhiteLogoTransition)();
//                     }
//                   },
//                 );
//               }
//             },
//           );

//           rotate.value = withTiming(-15, {
//             duration: 1000,
//             easing: Easing.out(Easing.back(1.5)),
//           });
//         }
//       },
//     );
//   }, []);

//   const animatedSoloBoltStyle = useAnimatedStyle(() => ({
//     opacity: soloBoltOpacity.value,
//     transform: [
//       { translateY: translateY.value },
//       { scale: scale.value },
//       { rotate: `${rotate.value}deg` },
//     ],
//   }));

//   const animatedEllipseStyle = useAnimatedStyle(() => ({
//     opacity: ellipseOpacity.value,
//   }));

//   const animatedOffWhiteLogoStyle = useAnimatedStyle(() => ({
//     opacity: offWhiteLogoOpacity.value,
//   }));

//   const animatedBlueBrandStyle = useAnimatedStyle(() => ({
//     opacity: blueBrandOpacity.value,
//   }));

//   return (
//     <View className="flex-1 bg-[#F0F4F8]">
//       {/* PERSISTENT BACKGROUND GLOW: Blue Blurred Ellipse (Phases 1 & 2) */}
//       <Animated.View
//         style={[animatedEllipseStyle]}
//         className="absolute inset-0 justify-center items-center pointer-events-none"
//       >
//         <Image
//           source={ellipseGlow}
//           resizeMode="contain"
//           className="w-96 h-96"
//         />
//       </Animated.View>

//       {/* PHASE 1: Solo Animated Bolt */}
//       <Animated.View
//         className="absolute inset-0 justify-center items-center"
//         style={animatedSoloBoltStyle}
//       >
//         <Image source={boltIcon} resizeMode="contain" className="w-20 h-20" />
//       </Animated.View>

//       {/* PHASE 2: Off-White Icon + Text Logo */}
//       <Animated.View
//         style={[animatedOffWhiteLogoStyle]}
//         className="absolute inset-0 flex-row justify-center items-center"
//       >
//         <Image source={boltIcon} resizeMode="contain" className="w-12 h-12" />
//         <Image
//           source={brandWordmarkBlack}
//           resizeMode="contain"
//           className="w-56 h-16"
//         />
//       </Animated.View>

//       {/* PHASE 3: Exact Figma Background Image */}
//       <Animated.View
//         style={[animatedBlueBrandStyle]}
//         className="absolute inset-0 justify-center items-center"
//       >
//         {/* The Exact Figma Background */}
//         <Image
//           source={finalBg}
//           className="absolute inset-0 w-full h-full"
//           resizeMode="cover"
//         />

//         {/* The White Logo on Top */}
//         <Image
//           source={brandWordmark}
//           resizeMode="contain"
//           className="w-56 h-16 z-10"
//         />
//       </Animated.View>
//     </View>
//   );
// }

import { useRouter } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import React, { useEffect } from "react";
import { Image, View } from "react-native";
import Animated, {
  Easing,
  runOnJS,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from "react-native-reanimated";

// 1. Import your SVG Bolt Icon
import BoltIcon from "../assets/splash-assets/bolt-svg.svg";

SplashScreen.preventAutoHideAsync().catch(() => {});

// 2. Wrap the SVG inside an Animated Component
const AnimatedBoltIcon = Animated.createAnimatedComponent(BoltIcon);

const brandWordmark = require("../assets/splash-assets/craftbolt-wordmark.png");
const brandWordmarkBlack = require("../assets/splash-assets/craftbolt-wordmark-black.png");

// Ellipses & Backgrounds
const ellipseGlow = require("../assets/splash-assets/ellipse.png");
const finalBg = require("../assets/splash-assets/splash-screen-blue-gradient.png");

export default function Index() {
  const router = useRouter();

  // Solo Bolt Shared Values (Rendered at 600x600 ultra-high vector resolution)
  const scale = useSharedValue<number>(0.133); // 600px * 0.133 = 80px (initial size)
  const rotate = useSharedValue<number>(0);
  const translateY = useSharedValue<number>(500);

  // Background Ellipse Glow Opacity (Phase 1 & 2)
  const ellipseOpacity = useSharedValue<number>(0);

  // Phase Opacity Shared Values
  const soloBoltOpacity = useSharedValue<number>(1);
  const offWhiteLogoOpacity = useSharedValue<number>(0);
  const blueBrandOpacity = useSharedValue<number>(0);

  const handleNavigation = () => {
    setTimeout(() => {
      router.replace("/welcome");
    }, 500);
  };

  const triggerBlueScreenTransition = () => {
    setTimeout(() => {
      // Fade out Phase 2 logo and phase 1 ellipse
      offWhiteLogoOpacity.value = withTiming(0, { duration: 400 });
      ellipseOpacity.value = withTiming(0, { duration: 400 });

      // Fade in Phase 3 Gradient screen
      blueBrandOpacity.value = withTiming(
        1,
        { duration: 400 },
        (isBlueFinished) => {
          if (isBlueFinished) {
            runOnJS(handleNavigation)();
          }
        },
      );
    }, 500);
  };

  const triggerOffWhiteLogoTransition = () => {
    setTimeout(() => {
      soloBoltOpacity.value = withTiming(0, { duration: 300 });
      offWhiteLogoOpacity.value = withTiming(
        1,
        { duration: 300 },
        (isLogoFinished) => {
          if (isLogoFinished) {
            runOnJS(triggerBlueScreenTransition)();
          }
        },
      );
    }, 200);
  };

  useEffect(() => {
    SplashScreen.hideAsync().catch(() => {});

    // STEP 1: Travel from bottom to center (500ms)
    translateY.value = withTiming(
      0,
      { duration: 500, easing: Easing.out(Easing.cubic) },
      (isTravelFinished) => {
        if (isTravelFinished) {
          // Fade in initial blue ellipse glow
          ellipseOpacity.value = withTiming(1, { duration: 300 });

          // STEP 2: Pop to Max Vector Size (600px * 0.533 = 320px) + Slant -15deg (600ms)
          scale.value = withTiming(
            0.533,
            { duration: 600, easing: Easing.out(Easing.back(1.5)) },
            (isPopFinished) => {
              if (isPopFinished) {
                // STEP 3: Shrink small (600px * 0.08 = 48px) (700ms)
                scale.value = withTiming(0.08, {
                  duration: 700,
                  easing: Easing.inOut(Easing.quad),
                });
                rotate.value = withTiming(
                  0,
                  { duration: 700, easing: Easing.inOut(Easing.quad) },
                  (isShrinkFinished) => {
                    if (isShrinkFinished) {
                      runOnJS(triggerOffWhiteLogoTransition)();
                    }
                  },
                );
              }
            },
          );

          rotate.value = withTiming(-15, {
            duration: 600,
            easing: Easing.out(Easing.back(1.5)),
          });
        }
      },
    );
  }, []);

  const animatedSoloBoltStyle = useAnimatedStyle(() => ({
    opacity: soloBoltOpacity.value,
    transform: [
      { translateY: translateY.value },
      { scale: scale.value },
      { rotate: `${rotate.value}deg` },
    ],
  }));

  const animatedEllipseStyle = useAnimatedStyle(() => ({
    opacity: ellipseOpacity.value,
  }));

  const animatedOffWhiteLogoStyle = useAnimatedStyle(() => ({
    opacity: offWhiteLogoOpacity.value,
  }));

  const animatedBlueBrandStyle = useAnimatedStyle(() => ({
    opacity: blueBrandOpacity.value,
  }));

  return (
    <View className="flex-1 bg-[#F0F4F8]">
      {/* PERSISTENT BACKGROUND GLOW: Blue Blurred Ellipse (Phases 1 & 2) */}
      <Animated.View
        style={[animatedEllipseStyle]}
        className="absolute inset-0 justify-center items-center pointer-events-none"
      >
        <Image
          source={ellipseGlow}
          resizeMode="contain"
          className="w-96 h-96"
        />
      </Animated.View>

      {/* PHASE 1: Solo Animated Bolt (SVG Ultra HD 600x600) */}
      <Animated.View
        className="absolute inset-0 justify-center items-center"
        style={animatedSoloBoltStyle}
      >
        <AnimatedBoltIcon width={600} height={600} />
      </Animated.View>

      {/* PHASE 2: Off-White Icon + Text Logo (SVG) */}
      <Animated.View
        style={[animatedOffWhiteLogoStyle]}
        className="absolute inset-0 flex-row justify-center items-center"
      >
        <BoltIcon width={48} height={48} />
        <Image
          source={brandWordmarkBlack}
          resizeMode="contain"
          className="w-56 h-16"
        />
      </Animated.View>

      {/* PHASE 3: Exact Figma Background Image */}
      <Animated.View
        style={[animatedBlueBrandStyle]}
        className="absolute inset-0 justify-center items-center"
      >
        {/* The Exact Figma Background */}
        <Image
          source={finalBg}
          className="absolute inset-0 w-full h-full"
          resizeMode="cover"
        />

        {/* The White Logo on Top */}
        <Image
          source={brandWordmark}
          resizeMode="contain"
          className="w-56 h-16 z-10"
        />
      </Animated.View>
    </View>
  );
}
