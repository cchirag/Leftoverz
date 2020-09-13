import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  Dimensions,
  TouchableNativeFeedback,
  ActivityIndicator,
} from "react-native";
import ProfileColor from "./ProfileColor";
import CheckBox from "@react-native-community/checkbox";

export default function ModalContent(props) {
  const [rippleColor, setRippleColor] = useState("#4F3836");
  const [loading, setLoading] = useState(false);
  return (
    <View style={{ marginVertical: "50%" }}>
      <ProfileColor
        i={props.i}
        setI={props.setI}
        size={props.size}
      ></ProfileColor>
      <TextInput
        placeholderTextColor="#FD3A33"
        placeholder="Food Name"
        style={Styles.textInput}
        value={props.foodName}
        onChangeText={(e) => props.setFoodName(e)}
      ></TextInput>
      <View
        style={{
          alignItems: "center",
          flexDirection: "row",
          justifyContent: "center",
        }}
      >
        <CheckBox
          disabled={false}
          value={props.isNonVeg}
          onValueChange={(newValue) => props.setIsNonVeg(newValue)}
          tintColors={{ true: "#FD3A33", false: "#D9D9D9" }}
        />
        <Text style={{ fontSize: 20 }}>Is Non Veg</Text>
      </View>
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
            props.handleShare();
          }}
          background={TouchableNativeFeedback.Ripple(rippleColor, true)}
          disabled={props.foodName.length > 0 ? false : true}
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
            {props.shareEnabled ? (
              <Text
                style={{
                  alignSelf: "center",
                  color: "white",
                  fontSize: 20,
                  fontWeight: "bold",
                }}
              >
                Share
              </Text>
            ) : (
              <ActivityIndicator color="white"></ActivityIndicator>
            )}
          </View>
        </TouchableNativeFeedback>
      </View>
    </View>
  );
}

const Styles = StyleSheet.create({
  textInput: {
    backgroundColor: "#D9D9D9",
    marginVertical: 20,
    height: 45,
    borderRadius: 25,
    paddingLeft: 25,
    color: "#FD3A33",
  },
});
