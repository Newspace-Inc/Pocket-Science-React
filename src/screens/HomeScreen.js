import React, { Component } from "react";
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  Image,
  ImageBackground
} from "react-native";

function HomeScreen({navigation}) {
  return (
    <View style={styles.container}>
      <View style={styles.rectStack}>
        <View style={styles.rect}>
          <Text style={styles.welcomeTo}>Welcome to</Text>
          <View style={styles.pocketScienceStack}>
            <Text style={styles.pocketScience}>Pocket Science,</Text>
            <Text style={styles.name}>Name</Text>
          </View>
        </View>
        <View style={styles.rect2}></View>
        <Text style={styles.numberPoints}>Number Points</Text>
        <TouchableOpacity
          onPress={() => navigation.navigate("TopicSelection",{
            PrimaryType: "Upper Primary" 
          }
          
          )}
          style={styles.button2}

          
        >
          
          <Text style={styles.upperPrimary}>Upper Primary</Text>
          
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate("TopicSelection",{
            PrimaryType: "Lower Primary"
          }
          
          )}
          style={styles.button}
        >
          <Text style={styles.lowerPrimary4}>Lower Primary</Text>
          <Text style={styles.lowerPrimary5}>5 Chapters</Text>
        </TouchableOpacity>

        <Image
          source={require("../assets/images/image_QZKw..png")}
          resizeMode="contain"
          style={styles.image}
        ></Image>
        
        <ImageBackground
          source={require("../assets/images/image_Y9cR..png")}
          resizeMode="contain"
          style={styles.image2}
          imageStyle={styles.image2_imageStyle}
        >
          <Text style={styles.lowerPrimary8}>4 Chapters</Text>
        </ImageBackground>
      </View>
      <View style={styles.rect6Stack}>
        <View style={styles.rect6}>
          <Text style={styles.lowerPrimary}>Lower Primary</Text>
        </View>
        <Text style={styles.name2}>5 Chapters</Text>
      </View>
      <Text style={styles.recentlyOpened}>Recently Opened</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  rect: {
    top: 0,
    left: 7,
    height: 239,
    position: "absolute",
    backgroundColor: "rgba(247,142,105,1)",
    right: 16
  },
  welcomeTo: {
    fontFamily: "roboto-regular",
    color: "rgba(255,255,255,1)",
    fontSize: 17,
    height: 32,
    width: 150,
    marginTop: 36,
    marginLeft: 9
  },
  pocketScience: {
    top: 0,
    left: 0,
    position: "absolute",
    fontFamily: "roboto-700",
    color: "rgba(255,255,255,1)",
    fontSize: 23,
    height: 70,
    width: 187
  },
  name: {
    top: 32,
    left: 4,
    position: "absolute",
    fontFamily: "roboto-regular",
    color: "rgba(255,255,255,1)",
    fontSize: 20,
    height: 60,
    width: 178
  },
  pocketScienceStack: {
    width: 187,
    height: 92,
    marginLeft: 5
  },
  rect2: {
    top: 151,
    left: 4,
    height: 141,
    position: "absolute",
    backgroundColor: "rgba(255,255,255,1)",
    borderRadius: 100,
    right: 12
  },
  numberPoints: {
    top: 36,
    position: "absolute",
    fontFamily: "roboto-regular",
    color: "rgba(255,255,255,1)",
    fontSize: 18,
    height: 32,
    right: 0,
    width: 169
  },
  button2: {
    top: 239,
    width: 158,
    height: 228,
    position: "absolute",
    backgroundColor: "rgba(239,219,150,1)",
    borderRadius: 22,
    right: 31
  },
  upperPrimary: {
    fontFamily: "roboto-700",
    color: "rgba(127,127,127,1)",
    fontSize: 18,
    height: 35,
    width: 125,
    marginTop: 31,
    marginLeft: 20
  },
  button: {
    top: 239,
    left: 23,
    width: 158,
    height: 228,
    position: "absolute",
    backgroundColor: "rgba(125,207,182,1)",
    borderRadius: 22
  },
  lowerPrimary4: {
    fontFamily: "roboto-700",
    color: "rgba(255,255,255,1)",
    fontSize: 18,
    height: 35,
    width: 129,
    marginTop: 31,
    marginLeft: 15
  },
  lowerPrimary5: {
    fontFamily: "roboto-regular",
    color: "rgba(255,255,255,1)",
    fontSize: 15,
    height: 27,
    width: 91,
    marginLeft: 26
  },
  image: {
    position: "absolute",
    top: 353,
    left: 0,
    height: 114,
    width: 189
  },
  image2: {
    position: "absolute",
    top: 305,
    height: 200,
    width: 200,
    right: 13
  },
  image2_imageStyle: {},
  lowerPrimary8: {
    fontFamily: "roboto-regular",
    color: "rgba(127,127,127,1)",
    fontSize: 15,
    height: 27,
    width: 94,
    marginLeft: 56
  },
  rectStack: {
    height: 505,
    marginLeft: -7,
    marginRight: -16
  },
  rect6: {
    left: 0,
    height: 78,
    position: "absolute",
    backgroundColor: "rgba(100,170,149,1)",
    borderRadius: 22,
    bottom: 9,
    right: 0
  },
  lowerPrimary: {
    fontFamily: "roboto-700",
    color: "rgba(255,255,255,1)",
    fontSize: 23,
    height: 71,
    width: 187,
    marginTop: 7,
    marginLeft: 49
  },
  name2: {
    top: 49,
    left: 49,
    position: "absolute",
    fontFamily: "roboto-regular",
    color: "rgba(255,255,255,1)",
    fontSize: 20,
    height: 38,
    width: 274
  },
  rect6Stack: {
    height: 87,
    marginTop: 62,
    marginLeft: 21,
    marginRight: 15
  },
  recentlyOpened: {
    fontFamily: "roboto-700",
    color: "rgba(123,122,122,1)",
    fontSize: 21,
    height: 62,
    width: 308,
    marginTop: -149,
    marginLeft: 16
  }
});

export default HomeScreen;
