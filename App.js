
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from "./src/screens/HomeScreen"
import TopicSelection from "./src/screens/TopicSelection"
import * as React from 'react';
import TopicExplaination from './src/screens/TopicExplaination';
import MainQuiz from './src/screens/MainQuiz';
import ChapterSelection from './src/screens/ChapterSelection'
import Flashcards from './src/screens/Flashcards'
const Stack = createStackNavigator();
const learning = createStackNavigator();
const Tab = createBottomTabNavigator();
const tabTheme = {...DefaultTheme,colors: {...DefaultTheme.colors, card: 'white', text: 'black', background: 'white' }};
export const Lesson = React.createContext();
function App() {
  return (
    <NavigationContainer theme = {tabTheme}>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name = "Home" component={HomeScreen} options = {{headerShown: false}}  />
        <Stack.Screen name="TopicSelection" component={TopicSelection} />
        <Stack.Screen name="Lessons" component={Lessons} />
        <Stack.Screen name="ChapterSelection" component={ChapterSelection}  />
        <Stack.Screen name = 'Flashcards' component = {Flashcards}/>
      </Stack.Navigator>

      
    </NavigationContainer>
  );
}
function Lessons({route}){
  return (
    <Lesson.Provider value={route}>
    <Tab.Navigator initialRouteName = "TopicExplaination">
        <Tab.Screen name="TopicExplaination" component={TopicExplaination}/>
        <Tab.Screen name="topics" component={ChapterSelection} />
        <Tab.Screen name="Quiz" component={MainQuiz}/>

      </Tab.Navigator>
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

