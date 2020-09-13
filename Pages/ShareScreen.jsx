import { CurrentRenderContext } from "@react-navigation/native";
import React, { useContext, useState, useEffect } from "react";
import { View, Text, Button, StatusBar, StyleSheet, Modal } from "react-native";
import { CurrentUserContext } from "../Contexts/CurrentUserContext";
import { Auth, FireStore } from "../Services/Firebase";
import { ScrollView, TextInput } from "react-native-gesture-handler";
import SharedFood from "../Components/SharedFood";
import { FloatingAction } from "react-native-floating-action";
import ModalContent from "../Components/ModalContent";
import * as Location from "expo-location";

export default function ShareScreen({ navigation }) {
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
          .where("postedBy", "==", currentUser.uid)
          .get()
          .then((snapShot) => {
            snapShot.forEach((doc) => {
              tempList.push(doc.data());
            });
          })
          .then(() => {
            setSharedList(tempList);
            tempList.length = 0;
          });
      } else if (filter === "veg") {
        FireStore.collection("sharedList")
          .where("postedBy", "==", currentUser.uid)
          .where("nonVeg", "==", false)
          .get()
          .then((snapShot) => {
            snapShot.forEach((doc) => {
              tempList.push(doc.data());
            });
          })
          .then(() => {
            setSharedList(tempList);
            tempList.length = 0;
          });
      } else if (filter === "nonVeg") {
        FireStore.collection("sharedList")
          .where("postedBy", "==", currentUser.uid)
          .where("nonVeg", "==", true)
          .get()
          .then((snapShot) => {
            snapShot.forEach((doc) => {
              tempList.push(doc.data());
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

  async function handleShare() {
    setShareEnabled(false)
    let currentLocation = await Location.getCurrentPositionAsync({});
    let loop = true;
    FireStore.collection("users")
      .doc(currentUser.uid)
      .onSnapshot(async (snapShot) => {
        let SF = snapShot.data().foodShared;
        if (loop === true) {
          FireStore.collection("users")
            .doc(currentUser.uid)
            .update({
              foodShared: SF + 1,
            });
          loop = false;
        }
      });
    await FireStore.collection("sharedList")
      .add({
        color: i,
        name: foodName,
        nonVeg: isNonVeg,
        postedBy: currentUser.uid,
        location: currentLocation.coords,
      })
      .then(() => {
        setFoodName("");
        setModalVisible(false);
        setShareEnabled(true);
        setI(0);
        setFoodName("");
        setIsNonVeg(true);
      });
  }
  return (
    <View
      style={{
        flex: 1,
        width: "90%",
        alignSelf: "flex-start",
        borderTopRightRadius: 50,
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
        My Shared Food
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
          <SharedFood name={res.name} color={res.color}></SharedFood>
        ))}
      </ScrollView>
      <FloatingAction
        color="#FD3A33"
        position="center"
        overlayColor="transparent"
        animated={false}
        onPressMain={() => setModalVisible(true)}
      ></FloatingAction>
      <Modal
        visible={modalVisible}
        onDismiss={() => setModalVisible(false)}
        animationType="fade"
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={{ justifyContent: "center", alignItems: "center" }}>
          <ModalContent
            foodName={foodName}
            setFoodName={setFoodName}
            isNonVeg={isNonVeg}
            setIsNonVeg={setIsNonVeg}
            i={i}
            setI={setI}
            size={150}
            handleShare={handleShare}
            shareEnabled={shareEnabled}
            setShareEnabled={setShareEnabled}
          ></ModalContent>
        </View>
      </Modal>
    </View>
  );
}
