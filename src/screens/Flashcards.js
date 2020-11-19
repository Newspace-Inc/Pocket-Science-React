
import React, { Component, useState } from "react";
import { StyleSheet, View, Text,FlatList, TouchableOpacity, ScrollView } from "react-native";
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
    <View style={styles.rect1Stack}>
      <View style={styles.rect1}>
      <Text style={styles.lowerPrimary}>{PrimaryType}</Text>
      <Text style={styles.syllabus}>Primary School {TopicName}</Text>
      </View>
      <View style={styles.rect2}></View>
    </View>

    <View style = {styles.yellowrec}>
      <Text style={styles.conceptName}>{conceptValue}</Text>
    </View>
    <ScrollView 

        style={styles.scrollView} 
        contentContainerStyle={styles.contentContainer}
      >
        
        <Text style={styles.paragraph}>{dataValue}</Text>

      </ScrollView>
    </View>
    </GestureRecognizer>
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
      
      left: 3,
      right: 4
    },
    lowerPrimary: {
      fontFamily: "roboto-700",
      color: "rgba(255,255,255,1)",
      fontSize: 26,
      height: 88,
      width: 286,
      marginTop: 30,
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
  
    syllabus: {
      fontFamily: "roboto-700",
      color: "rgba(255,255,255,1)",
      fontSize: 20,
      height: 35,
      width: 286,
      marginTop: -30,
      marginLeft: 20
    },

    yellowrec: {
        height: 50,
        backgroundColor: "rgba(255,231,185,1)",
        marginTop: 0,
        marginLeft: 10,
        marginRight: 10
      },
      conceptName: {
        fontFamily: "roboto-regular",
        color: "#121212",
        fontSize: 18,
        marginTop: 10,
        textAlign: "center",
        fontWeight: 'bold',
        marginLeft: 0,
        marginRight: 0,
        alignSelf: "center"
       
      },
      info: {
        
        position: "absolute",
        fontFamily: "roboto-regular",
        color: "#121212",
        top: 50,
        left: 5,
        marginRight: 10,
        fontSize: 18,
        marginLeft: 10,
      },

      /*ScrollView: {
        top: 0,
        left: 0,
        marginRight: 10,
        height: 400,
        marginLeft: 10,
        backgroundColor: "rgba(255,231,185,1)"
        
        
        

      },
    */
      paragraph: {
        margin: 24,
        fontSize: 18,
        textAlign: 'left',
      },
      scrollView: {
        height: '20%',
        width: '95%',
        marginLeft: 10,
        marginRight: 10,
        alignSelf: 'center',
    
        backgroundColor: "rgba(255,231,185,1)"
      },
      contentContainer: {
        
        paddingBottom: 10
      }
      
  
    
  });

export default Flashcards;