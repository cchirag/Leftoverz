import React, { useContext, useEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Dimensions,
  TouchableNativeFeedback,
  ActivityIndicator
} from "react-native";
import Slider from "@react-native-community/slider";
import { Auth, FireStore } from "../Services/Firebase";
import { CurrentUserContext } from "../Contexts/CurrentUserContext";
import ProfileColor from "../Components/ProfileColor";
export default function SettingsScreen({navigation}) {
  const [currentUser, setCurrentUser] = useContext(CurrentUserContext);
  const [displayName, setDisplayName] = useState();
  const [email, setEmail] = useState();
  const [searchRadius, setSearchRadius] = useState();
  const [rippleColor, setRippleColor] = useState("#4F3836");
  const [loading, setLoading] = useState(false);
  const [i, setI] = useState(0);
  useEffect(() => {
    function getData() {
      FireStore.collection("users")
        .doc(currentUser.uid)
        .onSnapshot((snapshot) => {
          setDisplayName(snapshot.data().displayName),
            setEmail(snapshot.data().email);
          setSearchRadius(snapshot.data().searchRadius);
        });
    }
    getData();
  }, []);

  async function handleUpdate() {
    setLoading(true)
    await FireStore.collection("users")
      .doc(currentUser.uid)
      .update({
        displayName: displayName,
        searchRadius: searchRadius,
        email: email,
        color: i
      })
      .then(() => {
        Auth.currentUser
          .updateProfile({
            displayName: displayName,
          })
          .then(() => {
            setCurrentUser(Auth.currentUser);
            navigation.navigate("Home Screen")
            setLoading(false)
          });
      })
      .catch((err) => console.log(err));
  }

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <ProfileColor i={i} setI={setI} size={150}></ProfileColor>
      <TextInput
        placeholderTextColor="#FD3A33"
        placeholder="Display Name"
        style={Styles.textInput}
        value={displayName}
        onChangeText={(e) => setDisplayName(e)}
      ></TextInput>
      <TextInput
        placeholderTextColor="#FD3A33"
        placeholder="Email"
        style={Styles.textInput}
        value={email}
        editable={false}
      ></TextInput>
      <Slider
        maximumValue={5}
        minimumValue={0.1}
        style={{ width: "50%" }}
        minimumTrackTintColor="#FD3A33"
        maximumTrackTintColor="#D9D9D9"
        thumbTintColor="#FD3A33"
        value={searchRadius}
        onValueChange={(e) => {
          setSearchRadius(e);
        }}
      ></Slider>
      <Text>
        Search Radius:{" "}
        {searchRadius === undefined ? null : searchRadius.toFixed(2)}
      </Text>

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
            handleUpdate();
          }}
          background={TouchableNativeFeedback.Ripple(rippleColor, true)}
          disabled={
            displayName === undefined
              ? null
              : displayName.length > 0
              ? false
              : true
          }
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
            {loading ? (
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
                Update
              </Text>
            )}
          </View>
        </TouchableNativeFeedback>
      </View>
    </View>
  );
}

const Styles = StyleSheet.create({
  textInput: {
    width: "80%",
    backgroundColor: "#D9D9D9",
    marginVertical: 20,
    height: 45,
    borderRadius: 25,
    paddingLeft: 25,
    color: "#FD3A33",
  },
});
