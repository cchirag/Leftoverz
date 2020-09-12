import React, { useState } from "react";
import {
  KeyboardAvoidingView,
  ScrollView,
  Text,
  TextInput,
  View,
  Image,
  StatusBar,
  StyleSheet,
  Dimensions,
  TouchableNativeFeedback,
} from "react-native";
import TopImage from "../assets/images/P.png";
import { Entypo } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";

export default function SignInPage({ navigation }) {
  const [rippleColor, setRippleColor] = useState("#4F3836");
  return (
    <KeyboardAvoidingView style={{ flex: 1, backgroundColor: "#FD3A33" }}>
      <Image source={TopImage} style={{ alignSelf: "center" }}></Image>
      <ScrollView>
        <View
          style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
        >
          <Text
            style={{
              color: "#B80000",
              fontFamily: "TimesNewRoman",
              fontSize: 54,
              paddingLeft: Dimensions.get("screen").width * 0.1,
              alignSelf: "flex-start",
            }}
          >
            Sign In
          </Text>
          <TextInput
            style={Styles.textInput}
            placeholder="Email"
            placeholderTextColor="#FD3A33"
          ></TextInput>
          <TextInput
            style={Styles.textInput}
            placeholder="Password"
            placeholderTextColor="#FD3A33"
          ></TextInput>
          <View
            style={{
              width: Dimensions.get("screen").width * 0.8,
              height: 50,
              borderRadius: 25,
              overflow: "hidden",
              marginVertical: 20,
            }}
          >
            <TouchableNativeFeedback
              onPress={() => {
                setRippleColor("#755F5D");
              }}
              background={TouchableNativeFeedback.Ripple(rippleColor, true)}
            >
              <View
                style={{
                  width: Dimensions.get("screen").width * 0.8,
                  height: 50,
                  borderRadius: 25,
                  justifyContent: "center",
                  backgroundColor: "#4F3836",
                }}
              >
                <Text
                  style={{
                    alignSelf: "center",
                    color: "white",
                    fontSize: 20,
                    fontWeight: "bold",
                  }}
                >
                  Sign In
                </Text>
              </View>
            </TouchableNativeFeedback>
          </View>
          <Text style={Styles.textStyle}>Or Sign In Using</Text>
          <View
            style={{
              flexDirection: "row",
              width: Dimensions.get("screen").width * 0.4,
              justifyContent: "space-around",
              marginVertical: 10,
            }}
          >
            <Entypo name="facebook-with-circle" size={35} color="white" />
            <FontAwesome name="google-plus-circle" size={37} color="white" />
            <MaterialCommunityIcons
              name="twitter-circle"
              size={39}
              color="white"
            />
          </View>
          <Text style={Styles.textStyle}>Don't have an account yet?</Text>
          <Text
            style={{ color: "white", fontSize: 16, fontWeight: "700" }}
            onPress={() => navigation.navigate("Sign Up")}
          >
            Sign Up
          </Text>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

const Styles = StyleSheet.create({
  textInput: {
    backgroundColor: "white",
    height: 50,
    color: "#FD3A33",
    width: Dimensions.get("screen").width * 0.8,
    borderRadius: 25,
    paddingLeft: 25,
    marginVertical: 15,
  },
  textStyle: {
    color: "#4F3836",
    fontSize: 16,
    fontWeight: "700",
  },
});
