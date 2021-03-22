import React, { Component, useEffect, useState } from "react";

// Height: 737, Width: 392
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  Image,
  ImageBackground,
  AsyncStorage,
  Dimensions
  
} from "react-native";


function HomeScreen({navigation}) {
  const windowWidth = Dimensions.get('window').width; 
  const windowHeight = Dimensions.get('window').height;
 
  const [userData, setData ] =  useState({});

  
  const _retrieveData = async () => {
    try {
        const value = JSON.parse(await AsyncStorage.getItem("recentlyOpenedData"))
       
        if (value !== null) {
            // Our data is fetched successfully
             setData(value)

          }else{
          setData( {"primary": "no recently opened topics", "colour":  "rgba(127,127,127,1)","topic": "" })
        }
      }catch (error) {
        // Error retrieving data
      }

  }

useEffect(() => {
 _retrieveData();
 
})

  return (
    <View style={styles.container}>
      <View style={styles.imageRow}>
        <ImageBackground
          source={require("../assets/images/image_fNox..png")}
          resizeMode="contain"
          style={styles.image}
          imageStyle={styles.image_imageStyle}
        >
          <Text style={styles.loremIpsum2}>5000 Points</Text>
          <Text style={styles.welcomeTo}>Welcome to</Text>
          <Text style={styles.pocketScience}>Pocket Science,</Text>
          <Text style={styles.ethan}>Ethan</Text>
          <TouchableOpacity onPress = {() => navigation.navigate("Lessons",{
      screen: 'Topic Explaination',
      params: { PrimaryType: userData.primary, TopicName: userData.topic }
      })}
            style={{width: 330,
                    height: 144,
                    backgroundColor: userData.colour,
                    borderWidth: 0,
                    borderColor: "#000000",
                    borderRadius: 20,
                    shadowColor: "rgba(0,0,0,1)",
                    shadowOffset: {
                      width: 2,
                      height: 2
                    },
                    elevation: 9,
                    shadowOpacity: 0.38,
                    shadowRadius: 3,
                    marginTop: 62,
                    alignSelf: "center"}}
                    
                    >
            <Text style={styles.lowerPrimary}>{userData.primary}</Text>
            <Text style={styles.diversity}>{userData.topic}</Text>
            <Text style={styles.recentlyOpened}>Recently Opened</Text>
          </TouchableOpacity>
        </ImageBackground>
        <Text style={styles.loremIpsum}></Text>
      </View>

      
      <View style={styles.rect3Row}>
        <TouchableOpacity 
        onPress={() => navigation.navigate("TopicSelection",{PrimaryType: "Lower Primary"})}
        style={styles.rect3}> 

          <Text style={styles.lowerPrimary2}>Lower{"\n"}Primary</Text>
          <Text style={styles.upperPrimary2}>4 chapters</Text>
       

        </TouchableOpacity>
        <View style={styles.rect3Filler}></View>
        <TouchableOpacity 
        onPress={() => navigation.navigate("TopicSelection",{PrimaryType: "Upper Primary"})}
         style={styles.rect2}>
          
          <Text style={styles.upperPrimary}>Upper{"\n"}Primary</Text>
          <Text style={styles.upperPrimary1}>4 chapters</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgba(255,255,255,1)"
  },
  image: {
    height: 461,
    width: 400
  },
  image_imageStyle: {},
  loremIpsum2: {
    fontFamily: "roboto-500",
    color: "rgba(255,255,255,1)",
    fontSize: 17,
    marginTop: 36,
    marginLeft: 288
  },
  welcomeTo: {
    fontFamily: "roboto-regular",
    color: "rgba(255,255,255,1)",
    fontSize: 26,
    marginLeft: 18
  },
  pocketScience: {
    fontFamily: "roboto-700",
    color: "rgba(255,255,255,1)",
    fontSize: 31,
    marginLeft: 18
  },
  ethan: {
    fontFamily: "roboto-500",
    color: "rgba(255,255,255,1)",
    fontSize: 28,
    marginLeft: 18
  },
  rect: {
    width: 330,
    height: 144,
    backgroundColor: "rgba(110,171,237,1)",
    borderWidth: 0,
    borderColor: "#000000",
    borderRadius: 20,
    shadowColor: "rgba(0,0,0,1)",
    shadowOffset: {
      width: 2,
      height: 2
    },
    elevation: 9,
    shadowOpacity: 0.38,
    shadowRadius: 3,
    marginTop: 62,
    alignSelf: "center"
  },
  lowerPrimary: {
    fontFamily: "roboto-700",
    color: "rgba(255,255,255,1)",
    fontSize: 30,
    marginTop: 35,
    alignSelf: "center"
  },
  diversity: {
    fontFamily: "roboto-500",
    color: "rgba(255,255,255,1)",
    fontSize: 16,
    marginTop: 9,
    alignSelf: "center"
  },
  recentlyOpened: {
    fontFamily: "roboto-500",
    color: "rgba(255,255,255,1)",
    fontSize: 12,
    marginTop: 19,
    marginLeft: 220
  },
  loremIpsum: {
    fontFamily: "roboto-regular",
    color: "#121212",
    marginLeft: 203,
    marginTop: 406
  },
  imageRow: {
    height: 461,
    flexDirection: "row",
    marginTop: -11,
    marginRight: -203
  },
  rect3: {
    width: 160,
    height: 167,
    backgroundColor: "rgba(117,170,230,1)",
    borderWidth: 0,
    borderColor: "#000000",
    borderRadius: 20,
    marginLeft: -1,
    shadowColor: "rgba(0,0,0,1)",
    shadowOffset: {
      width: 3,
      height: 3
    },
    elevation: 9,
    shadowOpacity: 0.16,
    shadowRadius: 3,
  },
  lowerPrimary2: {
    fontFamily: "roboto-700",
    color: "rgba(255,255,255,1)",
    fontSize: 30,
    marginTop: 13,
    marginLeft: 26
  },
  upperPrimary2: {
    fontFamily: "roboto-500",
    color: "rgba(255,255,255,1)",
    fontSize: 20,
    marginTop: 23,
    marginLeft: 32
  },
  rect3Filler: {
    flex: 1,
    flexDirection: "row"
  },
  rect2: {
    width: 160,
    height: 167,
    backgroundColor: "rgba(83,148,223,1)",
    borderWidth: 0,
    borderColor: "#000000",
    borderRadius: 20,
    shadowColor: "rgba(0,0,0,1)",
    shadowOffset: {
      width: 3,
      height: 3
    },
    elevation: 9,
    shadowOpacity: 0.16,
    shadowRadius: 3,
  },
  upperPrimary: {
    fontFamily: "roboto-700",
    color: "rgba(255,255,255,1)",
    fontSize: 30,
    marginTop: 13,
    marginLeft: 26
  },
  upperPrimary1: {
    fontFamily: "roboto-500",
    color: "rgba(255,255,255,1)",
    fontSize: 20,
    marginTop: 23,
    marginLeft: 32
  },
  rect3Row: {
    height: 167,
    flexDirection: "row",
    marginTop: 20,
    marginLeft: 19,
    marginRight: 19
  }
});

export default HomeScreen;
