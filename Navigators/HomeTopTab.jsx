import React from "react";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import ShareScreen from "../Pages/ShareScreen";
import SaveScreen from "../Pages/SaveScreen";

const Tab = createMaterialTopTabNavigator();

export default function HomeTopTab() {
  return (
    <Tab.Navigator tabBar={() => null} initialRouteName="Save">
      <Tab.Screen name="Save" component={SaveScreen}></Tab.Screen>
      <Tab.Screen name="Share" component={ShareScreen}></Tab.Screen>
    </Tab.Navigator>
  );
}
