import React, { Component } from "react";
import { StyleSheet, View, Text, FlatList } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";



function TopicSelection({route, navigation}) {
  const { PrimaryType } = route.params;
  let Topics = []
  if (PrimaryType.toLowerCase() == "lower primary"){
     Topics = [
      {topic: "Cycles", id: '1'}, 
      {topic: "Systems", id: '2'},
      {topic: "Diversity", id: '3'}, 
      {topic: "Interactions", id: '4'}, 
      
    ]
  }else {
     Topics = [
      {topic: "Cycles", id: '1'}, 
      {topic: "Systems", id: '2'},
      {topic: "Interactions", id: '3'}, 
      {topic: "Energy", id: '4'}
    ]

  }
  return (
    <View style={styles.container}>

      <View style={styles.rect1Stack}>
        <View style={styles.rect1}>
        <Text style={styles.lowerPrimary}>{PrimaryType}</Text>
        <Text style={styles.syllabus}>The {PrimaryType} syllabus</Text>
        </View>
        <View style={styles.rect2}></View>
      </View>

      <FlatList
    keyExtractor={(item) => item.id}
    data = {Topics}
    renderItem = {({ item }) => (
      <TouchableOpacity onPress={() => navigation.navigate("Lessons",{
      screen: 'TopicExplaination',
       params: { PrimaryType: PrimaryType, TopicName: item.topic }
      })}>
      
        <Text style = {styles.item}> {item.topic}</Text>
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

export default TopicSelection;
