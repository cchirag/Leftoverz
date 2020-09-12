import React from "react";
import { View, Text, Image, TouchableWithoutFeedback } from "react-native";
import IntroImage from "../assets/images/1_1.png";
import { MaterialIcons } from "@expo/vector-icons";
import { Directions, TouchableOpacity, State } from "react-native-gesture-handler";
import { FlingGestureHandler } from "react-native-gesture-handler";

export default function IntroScreenTwo({ navigation }) {
  return (
    <FlingGestureHandler
      direction={Directions.RIGHT}
      onHandlerStateChange={({ nativeEvent }) => {
        if (nativeEvent.state === State.ACTIVE) {
          navigation.goBack();
        }
      }}
    >
      <View
        style={{
          flex: 1,
          backgroundColor: "#FD3A33",
          justifyContent: "space-between",
        }}
      >
        <View style={{ alignItems: "center" }}>
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
            Friendship
          </Text>
          <Text
            style={{
              color: "white",
              fontFamily: "TimesNewRoman",
              fontSize: 26,
              paddingLeft: 20,
            }}
          >
            "Laughter is brightest in the place where food is"
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
            <TouchableOpacity
              onPress={() => navigation.navigate("Intro Screen One")}
            >
              <View
                style={{
                  height: 10,
                  width: 10,
                  borderRadius: 5,
                  backgroundColor: "#B80000",
                }}
              ></View>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => navigation.navigate("Intro Screen Two")}
            >
              <View
                style={{
                  height: 10,
                  width: 10,
                  borderRadius: 5,
                  backgroundColor: "white",
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
            <TouchableWithoutFeedback onPress = {() => navigation.navigate("Sign In")}>
              <MaterialIcons name="navigate-next" size={40} color="#FD3A33" />
            </TouchableWithoutFeedback>
          </View>
        </View>
      </View>
    </FlingGestureHandler>
  );
}
