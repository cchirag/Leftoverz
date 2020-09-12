import React, { useContext, useEffect, useState } from "react";
import { View, Text, Image } from "react-native";

import { DrawerContentScrollView, DrawerItem } from "@react-navigation/drawer";
import { Auth, FireStore } from "../Services/Firebase";
import fries from "../assets/images/fries.png";
import burger from "../assets/images/burger.png";
import { CurrentUserContext } from "../Contexts/CurrentUserContext";
import { SimpleLineIcons } from "@expo/vector-icons";

export default function DrawerContent({ navigation }) {
  const [currentUser, setCurrentUser] = useContext(CurrentUserContext);
  const [foodShared, setFoodShared] = useState(0);
  const [foodSaved, setFoodSaved] = useState(0);

  useEffect(() => {
    async function getData() {
      FireStore.collection("users")
        .doc(currentUser.uid)
        .onSnapshot((doc) => {
          setFoodShared(doc.data().foodShared);
          setFoodSaved(doc.data().foodSaved);
        });
    }
    getData();
  });

  return (
    <DrawerContentScrollView
      style={{
        borderTopRightRadius: 40,
        borderBottomRightRadius: 40,
        backgroundColor: "white",
      }}
      contentContainerStyle={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <View style={{ flex: 1, alignItems: "center" }}>
        <View
          style={{
            height: 100,
            width: 100,
            borderRadius: 50,
            backgroundColor: "black",
            marginVertical: 20,
          }}
        ></View>
        <Text style={{ fontWeight: "bold" }}>{Auth.currentUser.displayName}</Text>
        <View
          style={{
            justifyContent: "space-around",
            alignItems: "center",
            flexDirection: "row",
            width: "60%",
            borderRadius: 30,
            backgroundColor: "#EFEFEF",
            padding: 7,
            marginTop: 20,
          }}
        >
          <Image source={burger}></Image>
          <Text style={{ color: "#FD3A33", fontWeight: "bold" }}>
            {foodSaved} Food Saved
          </Text>
        </View>
        <View
          style={{
            justifyContent: "space-around",
            alignItems: "center",
            flexDirection: "row",
            width: "60%",
            borderRadius: 30,
            backgroundColor: "#EFEFEF",
            padding: 7,
            marginVertical: 20,
          }}
        >
          <Image source={fries}></Image>
          <Text style={{ color: "#FD3A33", fontWeight: "bold" }}>
            {foodShared} Food Shared
          </Text>
        </View>
        <DrawerItem
          label="Home"
          labelStyle={{ color: "#4F3836", fontWeight: "bold" }}
          style={{ alignSelf: "flex-start" }}
          onPress={() => {
            navigation.navigate("Home Screen");
          }}
        ></DrawerItem>
        <DrawerItem
          label="Friends"
          labelStyle={{ color: "#4F3836", fontWeight: "bold" }}
          style={{ alignSelf: "flex-start" }}
          onPress={() => {
            navigation.navigate("Friends Screen");
          }}
        ></DrawerItem>
        <DrawerItem
          label="Settings"
          labelStyle={{ color: "#4F3836", fontWeight: "bold" }}
          style={{ alignSelf: "flex-start" }}
          onPress={() => {
            navigation.navigate("Settings Screen");
          }}
        ></DrawerItem>
        <View
          style={{
            flex: 1,
            justifyContent: "flex-end",
            alignSelf: "flex-start",
            marginVertical: 10
          }}
        >
          <DrawerItem
            label="Logout"
            icon={() => (
              <SimpleLineIcons name="logout" size={20} color="black" />
            )}
            labelStyle={{ color: "#4F3836", fontWeight: "bold" }}
            onPress={async () => {
              navigation.navigate("Sign In");
              Auth.signOut();
            }}
          ></DrawerItem>
        </View>
      </View>
    </DrawerContentScrollView>
  );
}
