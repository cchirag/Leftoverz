import { CurrentRenderContext } from "@react-navigation/native";
import React, { useContext, useEffect, useState } from "react";
import { View, Text, Button, StatusBar, StyleSheet } from "react-native";
import { CurrentUserContext } from "../Contexts/CurrentUserContext";
import { Auth, FireStore } from "../Services/Firebase";
import { Entypo } from "@expo/vector-icons";
import HomeTopTab from "../Navigators/HomeTopTab";

export default function HomeScreen({ navigation }) {
  const [currentUser, setCurrentUser] = useContext(CurrentUserContext);
  return (
    <View style={{ flex: 1, justifyContent: "space-around", backgroundColor: '#FD3A33' }}>
      <View
        style={{
          marginVertical: StatusBar.currentHeight + 20,
          marginHorizontal: 20,
        }}
      >
        <Entypo
          name="menu"
          size={40}
          color="white"
          onPress={() => navigation.openDrawer()}
        />
      </View>
      <HomeTopTab></HomeTopTab>
    </View>
  );
}

const Styles = StyleSheet.create({
  filterText: {
    fontSize: 22,
    color: "#4F3836",
  },
});
