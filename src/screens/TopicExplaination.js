import React, { Component } from "react";
import { StyleSheet, View, Text, ImageBackground } from "react-native";

const explaination = require('../Data/TopicExplaination.json').Explaintions


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
  return(
    <View style={styles.container}>
    <ImageBackground
      source={require("../assets/images/image_ZzgH..png")}
      resizeMode="contain"
      style={styles.image1}
      imageStyle={styles.image1_imageStyle}
    >
      <Text style={styles.diversity}>{TopicName}</Text>
      <Text style={styles.upperPrimary5}>{PrimaryType} {TopicName}</Text>
    </ImageBackground>
    <View style={styles.loremIpsumStack}>
      <Text style={styles.loremIpsum}></Text>
      <Text style={styles.learningOutcomes}>Learning Outcomes</Text>
    </View>
    <Text style={styles.placeholderTextLol}>{explainationtext}</Text>
    <View style={styles.rect}></View>
  </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  image1: {
    height: 157,
    width: 403,
    marginTop: -7,
    marginLeft: -2
  },
  image1_imageStyle: {},
  diversity: {
    fontFamily: "roboto-700",
    color: "rgba(255,255,255,1)",
    width: 210,
    height: 43,
    fontSize: 30,
    marginTop: 35,
    marginLeft: 34
  },
  upperPrimary5: {
    fontFamily: "roboto-500",
    color: "rgba(255,255,255,1)",
    width: 245,
    height: 37,
    fontSize: 19,
    marginTop: 11,
    marginLeft: 34
  },
  loremIpsum: {
    top: 26,
    left: 13,
    position: "absolute",
    fontFamily: "roboto-regular",
    color: "#121212"
  },
  learningOutcomes: {
    top: 0,
    left: 0,
    position: "absolute",
    fontFamily: "roboto-700",
    color: "rgba(112,112,112,1)",
    fontSize: 29
  },
  loremIpsumStack: {
    width: 255,
    height: 34,
    marginTop: 30,
    marginLeft: 32
  },
  placeholderTextLol: {
    fontFamily: "roboto-regular",
    color: "rgba(112,112,112,1)",
    fontSize: 18,
    marginTop: 26,
    marginLeft: 47,
    marginRight: 40
  },
  rect: {
    width: 132,
    height: 132,
    backgroundColor: "rgba(198,198,198,1)",
    borderWidth: 0,
    borderColor: "#000000",
    borderRadius: 20,
    marginTop: 15,
    marginLeft: 134
  }
});

export default TopicExplaination;
