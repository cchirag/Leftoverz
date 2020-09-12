import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import HomeScreen from "../Pages/HomeScreen";
import DrawerContent from "../Components/DrawerContent";
import FriendsScreen from "../Pages/FriendsScreen";
import SettingsScreen from "../Pages/SettingsScreen";

const Drawer = createDrawerNavigator();

export default function AppDrawer() {
  return (
    <Drawer.Navigator
      drawerContent={(props) => <DrawerContent {...props}></DrawerContent>}
      drawerStyle = {
          {
              backgroundColor: 'transparent'
          }
      }
    >
      <Drawer.Screen name="Home Screen" component={HomeScreen}></Drawer.Screen>
      <Drawer.Screen name="Friends Screen" component={FriendsScreen}></Drawer.Screen>
      <Drawer.Screen name="Settings Screen" component={SettingsScreen}></Drawer.Screen>
    </Drawer.Navigator>
  );
}
