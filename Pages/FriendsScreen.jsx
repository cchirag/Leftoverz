import React from "react";
import { View, Text, ScrollView } from "react-native";
import { Card } from "react-native-elements";

export default function FriendsScreen() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <ScrollView style={{ width: "90%", elevation: 5, margin: 50 }}>
        <Card containerStyle={{ elevation: 5, borderRadius: 10 }}>
          <View
            style={{
              width: 100,
              height: 100,
              borderRadius: 50,
              backgroundColor: "black",
              alignSelf: 'center'
            }}
          ></View>
          <Card.Title>Aditya Krishna Sharma</Card.Title>
          <Text style = {{alignSelf: 'center'}}>aadithya794@gmail.com</Text>
        </Card>
      </ScrollView>
    </View>
  );
}
