import { StatusBar } from "expo-status-bar";
import React, { useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";
import IntroScreenOne from "./Pages/IntroScreenOne";
import * as Font from "expo-font";
import IntroStack from "./Navigators/IntroStack";
import { NavigationContainer } from "@react-navigation/native";

export default function App() {
  useEffect(() => {
    const loadFont = async () => {
      await Font.loadAsync({
        TimesNewRoman: require("./assets/fonts/TimesNewRoman.ttf"),
      });
    };
    loadFont();
  });

  return (
    <NavigationContainer>
      <IntroStack></IntroStack>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
