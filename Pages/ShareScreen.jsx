import { CurrentRenderContext } from "@react-navigation/native";
import React, { useContext } from "react";
import { View, Text, Button, StatusBar, StyleSheet } from "react-native";
import { CurrentUserContext } from "../Contexts/CurrentUserContext";
import { Auth } from "../Services/Firebase";
import { Entypo } from "@expo/vector-icons";

export default function ShareScreen({ navigation }) {
  const [currentUser, setCurrentUser] = useContext(CurrentUserContext);
  return (
    <View
      style={{
        flex: 1,
        width: "90%",
        alignSelf: "flex-start",
        borderTopRightRadius: 50,
        borderLeftWidth: 0,
        borderLeftColor: 'transparent',
        elevation: 5,
        padding: 30,
      }}
    >
      <View
        style={{
          flexDirection: "row",
          width: "90%",
          justifyContent: "space-around",
        }}
      >
        <Text style={Styles.filterText}>All Food</Text>
        <Text style={Styles.filterText}>Veg</Text>
        <Text style={Styles.filterText}>Non Veg</Text>
      </View>
    </View>
  );
}

const Styles = StyleSheet.create({
  filterText: {
    fontSize: 22,
    color: "#4F3836",
  },
});