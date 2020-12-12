import React, { Component } from "react";
import { StyleSheet, View, Text, FlatList, Image, ImageBackground, AsyncStorage } from "react-native";

import { TouchableOpacity } from "react-native-gesture-handler";



function TopicSelection({route, navigation}) {
  
  const { PrimaryType } = route.params;
  let Topics = []
  let recentlyOpenedColour = ''

  

const _storeData = async (data) => {
  try {
    await AsyncStorage.setItem("recentlyOpenedData", JSON.stringify(data));
    console.log('done')

    
} catch (error) {
    // Error saving data
}
}

  if (PrimaryType.toLowerCase() == "lower primary"){
     Topics = [
      {topic: "Cycles", lesson: "2",id: '1'}, 
      {topic: "Systems", lesson: "2",id: '2'},
      {topic: "Diversity", lesson: "3",id: '3'}, 
      {topic: "Interactions", lesson: "7",id: '4'}, 
      
    ]

    recentlyOpenedColour = "rgba(117,170,230,1)"
  }else {
     Topics = [
      {topic: "Cycles", lesson: "3", id: '1'}, 
      {topic: "Systems", lesson: "6", id: '2'},
      {topic: "Interactions", lesson: "2", id: '3'}, 
      {topic: "Energy", lesson: "6", id: '4'}
    ]
    recentlyOpenedColour = "rgba(83,148,223,1)"

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
        <Text style={styles.upperPrimary4}>The {PrimaryType} Syllabus</Text>
      </ImageBackground>

      <FlatList style = {{marginTop: 20}}
    keyExtractor={(item) => item.id}
    data = {Topics}
    renderItem = {({ item }) => (
      <TouchableOpacity onPress={() => _storeData({"primary": PrimaryType, "colour":  recentlyOpenedColour,"topic": item.topic }).then(() => navigation.navigate("Lessons",{
      screen: 'Topic Explaination',
      params: { PrimaryType: PrimaryType, TopicName: item.topic }
      })
      
      )}>
      <View style = {styles.comp}>
      <View style={styles.rect3}>
        <View style={styles.rect2Row}>
          <View style={styles.rect2}></View>
          <View style={styles.titleColumn}>
            <Text style={styles.title}>{item.topic}</Text>
            <Text style={styles.concept}>{item.lesson} lessons</Text>
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
    shadowRadius: 8,
    marginTop: 6
  
  },
  title: {
    fontFamily: "helvetica-regular",
    color: "rgba(113,113,113,1)",
    height: 30,
    width: 160,
    fontSize: 22
  },
  concept: {
    fontFamily: "helvetica-regular",
    color: "rgba(113,113,113,1)",
    height: 24,
    width: 160,
    fontSize: 16,
    marginTop: 1
  },
  titleColumn: {
    width: 160,
    marginLeft: 13,
    marginBottom: 7
  },
  rect2Row: {
    height: 62,
    flexDirection: "row",
    marginTop: 5,
    marginLeft: 10,
    marginRight: 91
  }
});

export default TopicSelection;



