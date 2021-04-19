import React, { Component, useState } from "react";
import { StyleSheet, View, Text, AsyncStorage, ImageBackground } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { ReloadInstructions } from "react-native/Libraries/NewAppScreen";
import { Lesson } from "../../App";
const data = require('../Data/MCQ.json').questions

function MCQ({navigation, route}) {
    const {PrimaryType} = route.params;
    const {TopicName} = route.params;
    var quesData = []
    var totalQ = 0
    for (var i = 0; i <= data.length-1; i++){
        if (data[i][`upper/lowerPrimary`].toLowerCase() == PrimaryType.toLowerCase() && (data[i].overallTopic).startsWith(TopicName)){
            var usedPos = []
            var pos;
            var options = [0,0,0,0]
            var counter = 0
            var correctAns;
            totalQ += 1
            console.log(totalQ)
            while(usedPos.length < 4){
               pos =  Math.floor((Math.random() * 4))
               
               if (!usedPos.includes(pos)) {
                   usedPos.push(pos)
                   if (counter < 3){
                    options[pos] = data[i][`option${counter+1}`]
                   }else{
                    options[pos] = data[i].answers
                    correctAns = pos
                    
                     
                    

                   }
                   
                   counter += 1
                }
              }
           
          quesData.push({"Q":data[i].questions,
                          "1":options[0],
                          "2":options[1],
                          "3":options[2],
                          "4":options[3],
                          "correctOption": correctAns})
                        }
                      }

            console.log(quesData)
    
    
    const[currquesNo, setcurrquesNo] = useState(0)
    const[colourop, setcolourop] = useState(["rgba(204,198,198,1)","rgba(204,198,198,1)","rgba(204,198,198,1)","rgba(204,198,198,1)"])
    
    function checkAns(ans){
      var colourList = [...colourop]
      if (ans == quesData[currquesNo].correctOption){
        ohighlightW = 0
        ohighlightR = quesData[currquesNo].correctOption
        
        colourList[ans] = "rgb(144, 205, 183)"
          
      }else{

        ohighlightW = ans
        ohighlightR = quesData[currquesNo].correctOption
        colourList = colourop
        colourList[ohighlightR] = "rgb(144, 205, 183)"
        colourList[ans] = "rgb(247, 128, 128)"

      }
      setcolourop(colourList)
      
      console.log(colourop)
      

  
    }

    
    var style1 = {
      backgroundColor: colourop[0]
      }
    var style2 = {
      backgroundColor: colourop[1]
      }
    var style3 = {
      backgroundColor: colourop[2]
      }
    var style4 = {
      backgroundColor: colourop[3]
      }
      console.log(style1)
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

        <View style={styles.rect1}>
          <Text style={styles.loremIpsum}>{currquesNo}/{totalQ}</Text>
      </View>
      <View style={styles.rect}>
        <Text style={styles.question}>{quesData[currquesNo].Q}</Text>
      </View>
      
      <TouchableOpacity onPress={() => checkAns(0)}
      style={[styles.rect2, style1]}>
          <Text style={styles.option1}>{quesData[currquesNo]["1"]}</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => checkAns(1)} style={[styles.rect3,style2]}>
         <Text style={styles.option2}>{quesData[currquesNo]["2"]}</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => checkAns(2)} style={[styles.rect4,style3]}>
         <Text style={styles.option3}>{quesData[currquesNo]["3"]}</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => checkAns(3)} style={[styles.rect5, style4]}>
        <Text style={styles.option4}>{quesData[currquesNo]["4"]}</Text>
      </TouchableOpacity>
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
    },

    rect: {
      width: 342,
      height: 80,
      backgroundColor: "rgba(211,205,205,1)",
      borderRadius: 14,
      marginTop: 10,
      marginLeft: 25
    },
    question: {
      fontFamily: "roboto-regular",
      color: "#121212",
      marginTop: 10,
      marginLeft: 15
    },
    rect1: {
      width: 55,
      height: 27,
      backgroundColor: "rgba(211,205,205,1)",
      borderRadius: 11,
      marginTop: 20,
      marginLeft: 25
    },
    loremIpsum: {
      fontFamily: "helvetica-regular",
      color: "#121212",
      fontSize: 15,
      marginTop: 3,
      marginLeft: 12
    },
    rect2: {
      width: 342,
      height: 42,
      
      borderRadius: 14,
      marginTop: 20,
      alignSelf: "center"
    },
    option1: {
      fontFamily: "roboto-regular",
      color: "#121212",
      marginTop: 10,
      alignSelf: "center"
    },
    rect3: {
      width: 342,
      height: 42,
      borderRadius: 14,
      
      marginTop: 15,
      alignSelf: "center"
    },
    option2: {
      fontFamily: "roboto-regular",
      color: "#121212",
      marginTop: 10,
      alignSelf: "center"
    },
    rect4: {
      width: 342,
      height: 42,
      
      borderRadius: 14,
      marginTop: 15,
      
      alignSelf: "center"
    },
    option3: {
      fontFamily: "roboto-regular",
      color: "#121212",
      marginTop: 10,
      alignSelf: "center"
    },
    rect5: {
      width: 342,
      height: 42,
      
      borderRadius: 14,
      marginTop: 15,
      alignSelf: "center"
    },
    option4: {
      fontFamily: "roboto-regular",
      color: "#121212",
      marginTop: 10,
      alignSelf: "center"
    }
})
export default MCQ