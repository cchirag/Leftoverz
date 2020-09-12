import React, { useContext } from "react";
import {
  createStackNavigator,
  CardStyleInterpolators,
} from "@react-navigation/stack";
import IntroScreenOne from "../Pages/IntroScreenOne";
import IntroScreenTwo from "../Pages/IntroScreenTwo";
import SignInPage from "../Pages/SignInPage";
import SignUpPage from "../Pages/SignUpPage";
import AppDrawer from "./AppDrawer";
import { CurrentUserContext } from "../Contexts/CurrentUserContext";
import { Auth } from "../Services/Firebase";

const Stack = createStackNavigator();

export default function IntroStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
      }}
    >
      <Stack.Screen
        name="Intro Screen One"
        component={IntroScreenOne}
        options={{ header: (props) => null, gestureEnabled: true }}
      ></Stack.Screen>
      <Stack.Screen
        name="Intro Screen Two"
        component={IntroScreenTwo}
        options={{ header: (props) => null, gestureEnabled: true }}
      ></Stack.Screen>
      <Stack.Screen
        name="Sign In"
        component={SignInPage}
        options={{ header: (props) => null, gestureEnabled: true }}
      ></Stack.Screen>
      <Stack.Screen
        name="Sign Up"
        component={SignUpPage}
        options={{ header: (props) => null, gestureEnabled: true }}
      ></Stack.Screen>
      <Stack.Screen
        name="App Drawer"
        component={AppDrawer}
        options={{ header: (props) => null, gestureEnabled: true }}
      ></Stack.Screen>
    </Stack.Navigator>
  );
}
