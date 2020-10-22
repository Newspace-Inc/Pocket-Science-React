import React, { Component } from "react";
import { StyleSheet, View, Text } from "react-native";

const explaination = require('../Data/TopicExplaination.json').Explaintions
console.log(explaination[0][``])

function TopicExplaination({navigation, route}) {
    const {PrimaryType} = route.params;
    const {TopicName} = route.params;
    let explainationID = 0;
    let explainationtext = "";

  for (var i = 0; i < explaination.length-1; i++){
    if (TopicName == explaination[i]){
      explainationID = i
      
    }

  }

  for (var i = 1; i <= 3; i++){
    if (explaination[explainationID][`Point${i}`] != "Empty Cell"){
      explainationtext += explaination[explainationID][`point${i}`]
    }
  }
  return (
    <View style={styles.container}>
      <View style={styles.rect1Stack}>
        <View style={styles.rect1}>
          <Text style={styles.lowerPrimary2}>{PrimaryType}</Text>
          <Text style={styles.lowerPrimary1}>Primary School {TopicName}</Text>
        </View>

        <View style={styles.rect2}></View>
      </View>
      <Text style={styles.topicSelection}>Explaination of the topic</Text>
      <Text style={styles.topicSelection2}> {explainationtext} </Text>
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
    left: 3,
    right: 4
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
  topicSelection2: {
    fontFamily: "roboto-regular",
    color: "rgba(67,67,67,1)",
    top: 20,
    marginLeft: 20,
    fontSize: 18,
    marginRight: 20,
    flex: 1
    
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
  },
  topicSelection: {
    fontFamily: "roboto-700",
    color: "rgba(67,67,67,1)",
    fontSize: 23,
    height: 35,
    width: 298,
    marginTop: 8,
    marginLeft: 20
  },
});

export default TopicExplaination;
