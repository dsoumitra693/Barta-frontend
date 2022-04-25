import React, { useContext, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './HomeScreen'
import ChatScreen from './ChatScreen'
import ProfileScreen from './ProfileScreen';
import ReelsScreen from './ReelsScreen';
import StoryScreen from './StoryScreen';
import Login__phone from './LoginScreen';
import { Login__otp } from './LoginScreen';
import { User } from '../App';
import WelcomeScreen from './WelcomeScreen';

const Stack = createNativeStackNavigator();

function Navigation() {
  const { userData } = useContext(User)
  
  if(userData) {
    return <LogInStack />;
  }
  return <LogOutStack />
}

const LogInStack = () => (
  <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen}options={{ headerShown: false }}/>
        <Stack.Screen name="Reels" component={ReelsScreen}options={{ headerShown: false }}/>
        <Stack.Screen name="StoryScreen" component={StoryScreen}options={{ headerShown: false }}/>
        <Stack.Screen name="Profile" component={ProfileScreen}options={{ headerShown: false }}/>
        <Stack.Screen name="Chat" component={ChatScreen}options={{ headerShown: false }}/>
      </Stack.Navigator>
    </NavigationContainer>
)
const LogOutStack = () => (
  <NavigationContainer>
      <Stack.Navigator initialRouteName="welcome" >
        <Stack.Screen name='welcome' component={WelcomeScreen}options={{ headerShown: false }}/>
        <Stack.Screen name="phone" component={Login__phone}options={{ headerShown: false }}/>
        <Stack.Screen name="otp" component={Login__otp}options={{ headerShown: false }}/>
      </Stack.Navigator>
    </NavigationContainer>
)

export default Navigation;