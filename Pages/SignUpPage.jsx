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
  Alert,
  ActivityIndicator,
} from "react-native";
import TopImage from "../assets/images/Asset3.png";
import { Entypo } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Auth, FireStore } from "../Services/Firebase";

export default function SignUpPage({ navigation }) {
  const [rippleColor, setRippleColor] = useState("#4F3836");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const handleSignUp = async () => {
    if (password === confirmPassword) {
      await Auth.createUserWithEmailAndPassword(email, password)
        .then(async (res) => {
          await res.user
            .updateProfile({ displayName: email })
            .then(async () => {
              await FireStore.collection("users").doc(res.user.uid).set({
                email: res.user.email,
                displayName: res.user.displayName,
                searchRadius: 1,
                uid: res.user.uid,
                foodSaved: 0,
                foodShared: 0
              });
            });
        })
        .then(() => {
          setEmail("");
          setPassword("");
          setConfirmPassword("");
          navigation.navigate("Sign In");
        })
        .catch((err) => Alert.alert("Error", err.toString()))
        .then(() => setLoading(false));
    } else {
      Alert.alert("Passwords don't match", "Make sure that passwords match");
    }
  };
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
            Sign Up
          </Text>
          <TextInput
            style={Styles.textInput}
            placeholder="Email"
            placeholderTextColor="#FD3A33"
            value={email}
            onChangeText={(e) => setEmail(e)}
            editable={!loading}
          ></TextInput>
          <TextInput
            style={Styles.textInput}
            placeholder="Password"
            placeholderTextColor="#FD3A33"
            value={password}
            onChangeText={(e) => setPassword(e)}
            editable={!loading}
            secureTextEntry={true}
          ></TextInput>
          <TextInput
            style={Styles.textInput}
            placeholder="Confirm Password"
            placeholderTextColor="#FD3A33"
            value={confirmPassword}
            onChangeText={(e) => setConfirmPassword(e)}
            editable={!loading}
            secureTextEntry={true}
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
                handleSignUp();
                setLoading(true);
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
                {loading === true ? (
                  <ActivityIndicator color="white"></ActivityIndicator>
                ) : (
                  <Text
                    style={{
                      alignSelf: "center",
                      color: "white",
                      fontSize: 20,
                      fontWeight: "bold",
                    }}
                  >
                    Sign Up
                  </Text>
                )}
              </View>
            </TouchableNativeFeedback>
          </View>
          <Text style={Styles.textStyle}>Or Sign Up Using</Text>
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
          <Text style={Styles.textStyle}>Already have an account?</Text>
          <Text
            style={{ color: "white", fontSize: 16, fontWeight: "700" }}
            onPress={() => navigation.navigate("Sign In")}
          >
            Sign In
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
