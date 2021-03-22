import React, { Component } from "react";
import { StyleSheet, View, Text, AsyncStorage, ImageBackground } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { Lesson } from "../../App";



function MainQuiz({navigation, route}) {
    const network = React.useContext(Lesson);
    
    const {PrimaryType} = network.params.params;
    const {TopicName} = network.params.params;
    console.log(PrimaryType)
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

    <View style={styles.rect}>
        <Text style={styles.spelling}>Spelling</Text>
      </View>
    
      <TouchableOpacity onPress = {() => navigation.navigate("MCQ",{
        
      PrimaryType: PrimaryType, 
      TopicName: TopicName 
      })}

      style={styles.rect1}
      >
        <Text style={styles.multipleChoice}>Multiple Choice Questions</Text>
      </TouchableOpacity>
      
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
  rect: {
    width: 337,
    height: 98,
    backgroundColor: "rgba(117,170,230,1)",
    borderWidth: 0,
    borderColor: "#000000",
    borderRadius: 20,
    marginTop: 80,
    alignSelf: "center"
  },
  spelling: {
    fontFamily: "roboto-regular",
    color: "rgba(255,255,255,1)",
    fontSize: 35,
    textAlign: "center",
    marginTop: 28,
    marginLeft: 28,
    marginRight: 27
  },
  rect1: {
    width: 337,
    height: 98,
    backgroundColor: "rgba(117,170,230,1)",
    borderWidth: 0,
    borderColor: "#000000",
    borderRadius: 20,
    marginTop: 63,
    alignSelf: "center"
  },
  multipleChoice: {
    fontFamily: "roboto-regular",
    color: "rgba(255,255,255,1)",
    fontSize: 25,
    textAlign: "center",
    marginTop: 34,
    marginLeft: 25
  }
});

export default MainQuiz;
