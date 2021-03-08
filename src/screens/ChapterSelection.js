import React, { Component } from "react";
import { StyleSheet, View, Text,FlatList, TouchableOpacity, ImageBackground } from "react-native";
import { Lesson } from "../../App";


const data = require('../Data/MainData.json').mainData

  
  
  function ChapterSelection({route, navigation}) {
  let Chapters = []
  let addedChapters = []
  let chapterid = 0
  let flashcardelements = []
    const network = React.useContext(Lesson);
    const { PrimaryType } = network.params.params;
    const {TopicName} = network.params.params;

  
    for (var i = 0; i <= data.length-1; i++){
        
        if (data[i].level.toLowerCase() == PrimaryType.toLowerCase() && (data[i].overallTopic).startsWith(TopicName)){
            if (addedChapters.includes(data[i].topic)){

            }else{
            Chapters.push({chapter: data[i].topic, id: chapterid})
            chapterid += 1
            addedChapters.push(data[i].topic)
            }

            flashcardelements.push(i)
        }
        
    }
    
    return (
      <View style={styles.container}>
      <ImageBackground
        source={require("../assets/images/image_ZzgH..png")}
        resizeMode="contain"
        style={styles.image}
        imageStyle={styles.image_imageStyle}
      >
        <Text style={styles.upperPrimary}>{PrimaryType}</Text>
       <Text style={styles.upperPrimary4}>Primary School {TopicName}</Text>
      </ImageBackground>

      <FlatList style = {{marginTop: 20, marginBottom: 0}}
    keyExtractor={(item) => item.id}
    data = {Chapters}
    renderItem = {({ item }) => (
      <TouchableOpacity onPress={() => navigation.navigate('Flashcards',{
 
        screen: 'Flashcards',
       params: { PrimaryType: PrimaryType, TopicName: TopicName, Elements: flashcardelements, Chapter: item.chapter}
  
      })}> 
      <View style = {styles.comp}>
      <View style={styles.rect3}>
        <View style={styles.rect2Row}>
          <View style={styles.rect2}></View>
          <View style={styles.titleColumn}>
          <Text style={styles.title}>{item.chapter}</Text>
           
          </View>
        </View>
      </View>
      </View>
      </TouchableOpacity>
      
    )}
    />
    </View>
    );
  }
  
  const styles = StyleSheet.create({
    container: {
      flex: 1
    },
    image: {
      height: 157,
      width: 403,
      marginTop: -9,
      alignSelf: "center"
    },
    image_imageStyle: {},
    upperPrimary: {
      fontFamily: "helvetica-regular",
      color: "rgba(255,255,255,1)",
      width: 210,
      height: 43,
      fontSize: 30,
      marginTop: 39,
      marginLeft: 25
    },
    upperPrimary4: {
      fontFamily: "helvetica-regular",
      color: "rgba(255,255,255,1)",
      width: 245,
      height: 37,
      fontSize: 19,
      marginTop: 9,
      marginLeft: 25
    },
    
    comp:{
      width: 358,
      height: 107,
      alignSelf: "center",
      
     
    },
    rect3: {
      width: 336,
      height: 83,
      backgroundColor: "rgba(255,255,255,1)",
      borderRadius: 16,
      shadowColor: "rgba(0,0,0,1)",
      shadowOffset: {
        width: 2,
        height: 2
      },
      elevation: 18,
      shadowOpacity: 0.16,
      shadowRadius: 6,
      marginTop: 10,
      alignSelf: "center"
    },
    rect2: {
      width: 62,
      height: 62,
      backgroundColor: "rgba(198,198,198,1)",
      borderRadius: 12,
      shadowColor: "rgba(0,0,0,1)",
      shadowOffset: {
        width: 3,
        height: 3
      },
      elevation: 24,
      shadowOpacity: 0.16,
      shadowRadius: 8
    },
    title: {
      fontFamily: "helvetica-regular",
      color: "rgba(113,113,113,1)",
      height: 51,
      width: 239,
      fontSize: 19,
      textAlign: "left",
      marginLeft: 3,
      marginTop: 15
    },
    concept: {
      fontFamily: "helvetica-regular",
      color: "rgba(113,113,113,1)",
      height: 24,
      width: 160,
      fontSize: 16
    },
    titleColumn: {
      width: 239,
      marginLeft: 13
    },
    rect2Row: {
      height: 70,
      flexDirection: "row",
      marginTop: 10,
      marginLeft: 10,
      marginRight: 12
    }
  
    
  });
  
  export default ChapterSelection;