
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator, } from '@react-navigation/bottom-tabs';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import HomeScreen from "./src/screens/HomeScreen"
import TopicSelection from "./src/screens/TopicSelection"
import * as React from 'react';
import TopicExplaination from './src/screens/TopicExplaination';
import MainQuiz from './src/screens/MainQuiz';
import ChapterSelection from './src/screens/ChapterSelection'
import Flashcards from './src/screens/Flashcards'

const topTab = createMaterialTopTabNavigator();
const Stack = createStackNavigator();
const learning = createStackNavigator();
const Tab = createBottomTabNavigator();
const homeBottom = createBottomTabNavigator();
const tabTheme = {...DefaultTheme,colors: {...DefaultTheme.colors, card: 'white', text: 'black', background: 'white' }};
export const Lesson = React.createContext();
function App() {
  return (
    <NavigationContainer theme = {tabTheme}>
      <homeBottom.Navigator initialRouteName = "HomeFunctions">
        <homeBottom.Screen name="Home" component={homeScreenFunctions} />
      </homeBottom.Navigator>
    </NavigationContainer>
  );
}

function homeScreenFunctions({route}){
  return(
    
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name = "Home" component={HomeScreen} options = {{headerShown: false}}  />
        <Stack.Screen name="TopicSelection" component={TopicSelection} />
        <Stack.Screen name="Lessons" component={Lessons} />
        <Stack.Screen name="ChapterSelection" component={ChapterSelection}  />
        <Stack.Screen name = 'Flashcards' component = {Flashcards}/>
      </Stack.Navigator>

      
    
  )
}
function Lessons({route}){
  return (
    <Lesson.Provider value={route}>
    <topTab.Navigator 
    tabBarOptions={{
      labelStyle: {
        fontSize: 10
      }

    }}
    initialRouteName = "Topic Explaination">
        <Tab.Screen name="Topic Explaination" component={TopicExplaination}/>
        <Tab.Screen name="subtopics" component={ChapterSelection} />
        <Tab.Screen name="Quiz" component={MainQuiz}/>

      </topTab.Navigator>
      </Lesson.Provider>
  
  );
}

function Topics({route}){
  return (
    
      <learning.Navigator initialRouteName = "ChapterSelection">
        <learning.Screen name="ChapterSelection" component={ChapterSelection}  />
        <learning.Screen name = 'Flashcards' component = {Flashcards}/>

      </learning.Navigator>

  
  );
}





export default App;

