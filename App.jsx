import { StatusBar } from "expo-status-bar";
import React, { useContext, useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";
import IntroScreenOne from "./Pages/IntroScreenOne";
import * as Font from "expo-font";
import IntroStack from "./Navigators/IntroStack";
import { NavigationContainer } from "@react-navigation/native";
import { CurrentUserContext, CurrentUserProvider } from "./Contexts/CurrentUserContext";
import { Auth } from "./Services/Firebase";

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
      <CurrentUserProvider>
        <IntroStack></IntroStack>
      </CurrentUserProvider>
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
