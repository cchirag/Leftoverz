import { CurrentRenderContext } from "@react-navigation/native";
import React, { useContext } from "react";
import { View, Text, Button } from "react-native";
import { CurrentUserContext } from "../Contexts/CurrentUserContext";
import { Auth } from "../Services/Firebase";

export default function HomeScreen({ navigation }) {
  const [currentUser, setCurrentUser] = useContext(CurrentUserContext);
  return (
    <View style = {{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>Welcome {currentUser.displayName}</Text>
    </View>
  );
}
