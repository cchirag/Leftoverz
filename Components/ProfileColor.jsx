import React, { useEffect, useState } from "react";
import { View, Text } from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default function ProfileColor(props) {
  const colors = [
    "#00A4CCFF",
    "#F95700FF",
    "#101820FF",
    "#FEE715FF",
    "#00239CFF",
    "#00239CFF",
  ];
  

  return (
    <View
      style={{
        width: "80%",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-around",
      }}
    >
      <Ionicons
        name="ios-arrow-back"
        size={30}
        color="black"
        onPress={() => {
          if (props.i <= 4) {
            props.setI((i) => i + 1);
          }else{
              props.setI(0)
          }
        }}
        style = {{padding: 20}}
      />
      <View
        style={{
          height: props.size,
          width: props.size,
          borderRadius: props.size/2,
          backgroundColor: colors[props.i],
        }}
      ></View>
      <Ionicons
        name="ios-arrow-forward"
        size={30}
        color="black"
        onPress={() => {
          if (props.i >= 1) {
            props.setI((i) => i - 1);
          }else{
              props.setI(5)
          }
        }}
        style = {{padding: 20}}
      />
    </View>
  );
}
