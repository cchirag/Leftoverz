import React from "react";
import { View, Text } from "react-native";

export default function SharedFood(props) {
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
        width: "100%",
        height: 100,
        justifyContent: "space-between",
        flexDirection: "row",
        alignItems: "center",
      }}
    >
      <View
        style={{
          height: 80,
          width: 80,
          borderRadius: 40,
          backgroundColor: colors[props.color],
        }}
      ></View>
      <Text style={{ fontSize: 20, alignSelf: "center", paddingRight: 20 }}>{props.name}</Text>
    </View>
  );
}
