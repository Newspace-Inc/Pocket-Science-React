import React, { Component } from "react";
import { StyleSheet, View, Text,FlatList, TouchableOpacity } from "react-native";
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
  
        <View style={styles.rect1Stack}>
          <View style={styles.rect1}>
          <Text style={styles.lowerPrimary}>{PrimaryType}</Text>
          <Text style={styles.syllabus}>Primary School {TopicName}</Text>
          </View>
          <View style={styles.rect2}></View>
        </View>

      <FlatList
      keyExtractor={(item) => item.id}
    data = {Chapters}
    renderItem = {({ item }) => (
      <TouchableOpacity onPress={() => navigation.navigate('Flashcards',{

        screen: 'Flashcards', 
       params: { PrimaryType: PrimaryType, TopicName: TopicName, Elements: flashcardelements, Chapter: item.chapter}

      })}>
      
        <Text style = {styles.item}> {item.chapter}</Text>
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
    rect1: {
      top: 0,
      height: 207,
      position: "absolute",
      backgroundColor: "rgba(247,142,105,1)",
      width: 400,
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
    item: {
      
      backgroundColor: "rgba(255,255,255,1)",
      borderWidth: 4,
      borderColor: "rgba(227,227,227,1)",
      padding: 15,
      marginVertical: 7,
      marginHorizontal: 15,
      borderRadius: 20,
      fontSize: 20
    },
  
    syllabus: {
      fontFamily: "roboto-700",
      color: "rgba(255,255,255,1)",
      fontSize: 20,
      height: 35,
      width: 286,
      marginTop: -30,
      marginLeft: 20
    }
  
    
  });
  
  export default ChapterSelection;