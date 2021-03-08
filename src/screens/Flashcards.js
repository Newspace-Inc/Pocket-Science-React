
import React, { Component, useState } from "react";
import { StyleSheet, View, Text,FlatList, TouchableOpacity, ScrollView, ImageBackground } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Lesson } from "../../App";
import GestureRecognizer, {swipeDirections} from 'react-native-swipe-gestures';


const data = require('../Data/MainData.json').mainData

  
  
  function Flashcards({route, navigation}) {

    let index = []
    const[counter, setCounter] = useState(0)
    let points = ""
    const { PrimaryType } = route.params.params;
    const {TopicName} = route.params.params;
    const {Elements} = route.params.params;
    const {Chapter} = route.params.params;
    
    


    for (var i = 0; i <= Elements.length-1; i++){
      if (data[Elements[i]].topic.toLowerCase() == Chapter.toLowerCase()){
        index.push(Elements[i])
      }
    }
  
    //index is all concepts under a topic
  
  console.log(index)
  
  function getpoint(countvar) {
    points = ''
    for (var i = 1; i <= 20; i++){
      
      if (data[index[countvar]][`point${i}`] != "Empty Cell"){
        points += `${data[index[countvar]][`point${i}`]}\n\n`
      }
      
      
    }
  }


  getpoint(counter);

  const [dataValue, setdataValue] = useState(points);
  const [conceptValue, setconceptValue] = useState(data[index[counter]].concepts);

  const onSwipeLeft = (gestureState) => {
    console.log(index)
    if (counter == index.length-1){
      console.log("reset")
      
      setCounter(0)
    }else{
      setCounter(counter+1)
    }
    console.log(counter)
    getpoint(counter);
    setconceptValue(data[index[counter]].concepts);
    setdataValue(points);
  
  }

  const onSwipeRight = (gestureState) => {
    if (counter == 0){
      setCounter(index.length-1);
    }else{
      setCounter(counter-1);
    }
    console.log(counter)
    getpoint(counter);
    setconceptValue(data[index[counter]].concepts);
    setdataValue(points);
  
  }
  const config = {
    velocityThreshold: 0.3,
    directionalOffsetThreshold: 80
  };


 return (
   
  <GestureRecognizer
      onSwipeLeft={(state) => onSwipeLeft(state)}
      onSwipeRight={(state) => onSwipeRight(state)}
      config={config}
      style={{
        flex: 1,
        backgroundColor: 'white'
      }}
    >
  <View style = {styles.container}>
  <ImageBackground
        source={require("../assets/images/image_ZzgH..png")}
        resizeMode="contain"
        style={styles.image1}
        imageStyle={styles.image1_imageStyle}
      >
        <Text style={styles.diversity}>{PrimaryType}</Text>
    <Text style={styles.upperPrimary5}>{PrimaryType} {TopicName} {Chapter}</Text>
  </ImageBackground>

    
    
  <View style={styles.rect2}>
     
  <ScrollView 
      style = {styles.scrollView}
      contentContainerStyle={styles.contentContainer}
      >
        
      <View style={styles.rect}></View>

      <Text style={styles.conceptName}>{conceptValue}</Text>
      <Text style={styles.conceptName2}>{dataValue}</Text>
        
  </ScrollView>

  </View>
    </View>
    </GestureRecognizer>
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
    marginTop: 25,
    marginLeft: 34
  },
  upperPrimary5: {
    fontFamily: "roboto-500",
    color: "rgba(255,255,255,1)",
    width: 350,
    height: 50,
    fontSize: 19,
    marginTop: 11,
    marginLeft: 34
  },
    rect2: {
      
      height: 440,
      backgroundColor: "rgba(167,167,167,1)",
      borderWidth: 0,
      borderColor: "#000000",
      borderRadius: 18,
      marginTop: 50,
      marginLeft: 15,
      marginRight: 15
    },
    rect1: {
      width: 336,
      height: 523,
      backgroundColor: "rgba(117,170,230,1)",
      borderWidth: 0,
      borderColor: "#000000",
      borderRadius: 18,
      marginTop: 4,
      marginLeft: 5
    },
    rect: {
      
      height: 147,
      backgroundColor: "rgba(216,214,214,1)",
      borderWidth: 0,
      borderColor: "#000000",
      borderRadius: 17,
      marginTop: 28,
      marginLeft: 17,
      marginRight: 17
    },
    conceptName: {
      fontFamily: "roboto-regular",
      color: "rgba(255,255,255,1)",
      fontSize: 23,
      textAlign: "center",
      margin: 12
    },
    conceptName2: {
      fontFamily: "roboto-regular",
      color: "rgba(255,255,255,1)",
      fontSize: 19,
      textAlign: "left",
      marginTop: 12,
      marginLeft: 15,
      marginRight: 10
    },
    scrollView: {
      height: '20%',
      margin: 4,
      alignSelf: 'center',
      borderRadius: 18,
      backgroundColor: "rgba(117,170,230,1)"

      
    },
      contentContainer: {
        
        paddingBottom: 10
      }
      
  
    
  });

export default Flashcards;