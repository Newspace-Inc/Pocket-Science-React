import React, { Component } from "react";
import { StyleSheet, View, Text, AsyncStorage } from "react-native";
import { Lesson } from "../../App";



function MainQuiz({navigation, route}) {
    const network = React.useContext(Lesson);
    console.log(network.params.params)
    const {PrimaryType} = network.params.params;
    const {TopicName} = network.params.params;
    
  return (
    <View style={styles.container}>
      <View style={styles.rect1Stack}>
        <View style={styles.rect1}>
          <Text style={styles.lowerPrimary2}>{PrimaryType}</Text>
          <Text style={styles.lowerPrimary1}>Primary School {TopicName}</Text>
        </View>
        <View style={styles.rect2}></View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  rect1: {
    top: 0,
    height: 207,
    position: "absolute",
    backgroundColor: "rgba(247,142,105,1)",
    width: 400,
    left: 0,
    right: 0
  },
  lowerPrimary2: {
    fontFamily: "roboto-700",
    color: "rgba(255,255,255,1)",
    fontSize: 26,
    height: 43,
    width: 286,
    marginTop: 30,
    marginLeft: 20
  },
  lowerPrimary1: {
    fontFamily: "roboto-700",
    color: "rgba(255,255,255,1)",
    fontSize: 20,
    height: 35,
    width: 286,
    marginTop: 12,
    marginLeft: 20
  },
  rect2: {
    top: 148,
    left: 0,
    height: 83,
    position: "absolute",
    backgroundColor: "rgba(255,255,255,1)",
    borderRadius: 43,
    right: 0
  },
  rect1Stack: {
    height: 231,
    marginLeft: -3,
    marginRight: -4
  }
});

export default MainQuiz;
