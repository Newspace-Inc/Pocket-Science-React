import React, { Component } from "react";
import { StyleSheet, View, Text, AsyncStorage, ImageBackground } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { Lesson } from "../../App";

function MCQ({navigation, route}) {
    
    const {PrimaryType} = route.params;
    const {TopicName} = route.params;
    
    
    return (
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
        </View>

)
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
    }
})
export default MCQ