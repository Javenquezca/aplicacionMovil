import React from "react";
import { createStackNavigator } from '@react-navigation/stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { HomeScreen } from "../screens/HomeScreen";
import { SplashScreen } from "../screens/SplashScreen";
import { UserScreen } from "../screens/UserScreen";
import { LoginScreen } from "../screens/LoginScreen";
import { RegisterScreen} from "../screens/RegisterScreen";

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const TabNavigator = () => {
    return (
        <Tab.Navigator initialRouteName = 'Home'>
            <Tab.Screen name = 'Home' component = {HomeScreen} options = {{}} />
            <Tab.Screen name = 'User' component = {UserScreen} options = {{}} />
            <Tab.Screen name = 'Login' component = {LoginScreen} options = {{}} />
            <Tab.Screen name = 'Register' component = {RegisterScreen} options = {{}} />
        </Tab.Navigator>
    )
}

export const AppNavigator = () => {
    return (
        <Stack.Navigator initialRouteName = 'Splash'>
            <Stack.Screen name = 'Splash' component = {SplashScreen} options = {{headerShown: false}} />
            <Stack.Screen name = 'MainTabs' component = {TabNavigator} options = {{headerShown: false}} />
            <Stack.Screen name = 'Login' component = {TabNavigator} options = {{headerShown: false}} />
            <Stack.Screen name = 'Register' component = {TabNavigator} options = {{headerShown: false}} />
        </Stack.Navigator>
    )
}