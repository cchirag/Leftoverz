import React from "react";
import { View, Text, Image, TouchableWithoutFeedback } from "react-native";
import IntroImage from "../assets/images/Asset-1.png";
import { MaterialIcons } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native-gesture-handler"

export default function IntroScreenOne({ navigation }) {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "#FD3A33",
        justifyContent: "space-between",
      }}
    >
      <View style={{ alignItems: "flex-end", justifyContent: "flex-start" }}>
        <Image source={IntroImage}></Image>
      </View>
      <View>
        <Text
          style={{
            color: "#B80000",
            fontFamily: "TimesNewRoman",
            fontSize: 54,
            paddingLeft: 20,
          }}
        >
          Leftovers
        </Text>
        <Text
          style={{
            color: "white",
            fontFamily: "TimesNewRoman",
            fontSize: 26,
            paddingLeft: 20,
          }}
        >
          "We should look for someone to eat and drink with before looking for
          something to eat and drink"
        </Text>
      </View>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          marginBottom: 15,
        }}
      >
        <View
          style={{
            flexDirection: "row",
            width: 50,
            justifyContent: "space-around",
            marginHorizontal: 20,
          }}
        >
          <TouchableOpacity>
            <View
              style={{
                height: 10,
                width: 10,
                borderRadius: 5,
                backgroundColor: "white",
              }}
            ></View>
          </TouchableOpacity>
          <TouchableOpacity onPress = {() => navigation.navigate("Intro Screen Two")}>
            <View
              style={{
                height: 10,
                width: 10,
                borderRadius: 5,
                backgroundColor: "#B80000",
              }}
            ></View>
          </TouchableOpacity>
        </View>
        <View
          style={{
            height: 50,
            width: 50,
            borderRadius: 25,
            backgroundColor: "white",
            justifyContent: "center",
            alignItems: "center",
            marginHorizontal: 20,
            shadowColor: "#000",
            shadowOffset: {
              width: 0,
              height: 2,
            },
            shadowOpacity: 0.25,
            shadowRadius: 3.84,

            elevation: 10,
          }}
        >
          <TouchableWithoutFeedback
            onPress={() => {
              navigation.navigate("Intro Screen Two");
            }}
          >
            <MaterialIcons name="navigate-next" size={40} color="#FD3A33" />
          </TouchableWithoutFeedback>
        </View>
      </View>
    </View>
  );
}
