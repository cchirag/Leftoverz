import { CurrentRenderContext } from "@react-navigation/native";
import React, { useContext, useState, useEffect } from "react";
import { View, Text, Button, StatusBar, StyleSheet, Modal } from "react-native";
import { CurrentUserContext } from "../Contexts/CurrentUserContext";
import { Auth, FireStore } from "../Services/Firebase";
import {
  ScrollView,
  TextInput,
  TouchableWithoutFeedback,
} from "react-native-gesture-handler";
import SharedFood from "../Components/SharedFood";
import getDirections from "react-native-google-maps-directions";
import * as Location from "expo-location";

export default function SaveScreen({ navigation }) {
  const [currentUser, setCurrentUser] = useContext(CurrentUserContext);
  const [loopStopper, setLoopStopper] = useState(0);
  const [sharedList, setSharedList] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);
  const [filter, setFilter] = useState("all");
  const [i, setI] = useState(0);
  const [foodName, setFoodName] = useState("");
  const [isNonVeg, setIsNonVeg] = useState(true);
  const [shareEnabled, setShareEnabled] = useState(true);
  let tempList = [];
  useEffect(() => {
    function fetchSharedList() {
      if (filter === "all") {
        FireStore.collection("sharedList")
          .get()
          .then((snapShot) => {
            snapShot.forEach((doc) => {
              if (doc.data().postedBy === currentUser.uid) {
                null;
              } else {
                tempList.push(doc.data());
              }
            });
          })
          .then(() => {
            setSharedList(tempList);
            tempList.length = 0;
          });
      } else if (filter === "veg") {
        FireStore.collection("sharedList")
          .where("nonVeg", "==", false)
          .get()
          .then((snapShot) => {
            snapShot.forEach((doc) => {
              if (doc.data().postedBy === currentUser.uid) {
                null;
              } else {
                tempList.push(doc.data());
              }
            });
          })
          .then(() => {
            setSharedList(tempList);
            tempList.length = 0;
          });
      } else if (filter === "nonVeg") {
        FireStore.collection("sharedList")
          .where("nonVeg", "==", true)
          .get()
          .then((snapShot) => {
            snapShot.forEach((doc) => {
              if (doc.data().postedBy === currentUser.uid) {
                null;
              } else {
                tempList.push(doc.data());
              }
            });
          })
          .then(() => {
            setSharedList(tempList);
            tempList.length = 0;
          });
      }
    }
    fetchSharedList();
  }, [filter, modalVisible]);

  return (
    <View
      style={{
        flex: 1,
        width: "90%",
        alignSelf: "flex-end",
        borderTopLeftRadius: 50,
        borderLeftWidth: 0,
        borderLeftColor: "transparent",
        elevation: 5,
        padding: 30,
      }}
    >
      <Text
        style={{
          fontSize: 22,
          color: "black",
          fontWeight: 'bold',
          alignSelf: 'center',
          marginVertical: 10
        }}
      >
        Food Nearby
      </Text>
      <View
        style={{
          flexDirection: "row",
          width: "90%",
          justifyContent: "space-around",
        }}
      >
        <Text
          style={{
            fontSize: 22,
            color: filter === "all" ? "#FD3A33" : "#4F3836",
          }}
          onPress={() => setFilter("all")}
        >
          All Food
        </Text>
        <Text
          style={{
            fontSize: 22,
            color: filter === "veg" ? "#FD3A33" : "#4F3836",
          }}
          onPress={() => setFilter("veg")}
        >
          Veg
        </Text>
        <Text
          style={{
            fontSize: 22,
            color: filter === "nonVeg" ? "#FD3A33" : "#4F3836",
          }}
          onPress={() => setFilter("nonVeg")}
        >
          Non Veg
        </Text>
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        {sharedList.map((res) => (
          <TouchableWithoutFeedback
            onPress={() => {
              const data = {
                destination: {
                  latitude: res.location.latitude,
                  longitude: res.location.longitude,
                },
                params: [
                  {
                    key: "travelmode",
                    value: "driving", // may be "walking", "bicycling" or "transit" as well
                  },
                  {
                    key: "dir_action",
                    value: "navigate", // this instantly initializes navigation using the given travel mode
                  },
                ],
              };
              getDirections(data).then((res) => {console.log(res)});
            }}
          >
            <SharedFood name={res.name} color={res.color}></SharedFood>
          </TouchableWithoutFeedback>
        ))}
      </ScrollView>
    </View>
  );
}
