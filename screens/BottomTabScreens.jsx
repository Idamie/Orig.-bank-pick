import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialIcons } from "@expo/vector-icons";
import HomeScreen from './bottomTabScreens/HomeScreen';
import MyCardScreen from './bottomTabScreens/MyCardScreen';
import StatisticsScreen from './bottomTabScreens/StatisticsScreen';
import SettingsScreen from './bottomTabScreens/SettingsScreen';


const Tab = createBottomTabNavigator();
const BottomTabScreens = () => {
  return (
    <Tab.Navigator 
    screenOptions={{
      tabBarStyle:{
        backgroundColor: '#27273A',
        height: 86,
        paddingTop: 15
      },
      tabBarActiveTintColor: '#0066FF',
      tabBarInactiveTintColor: '#8B8B94'
    }}
    >
      <Tab.Screen
        name="home"
        component={HomeScreen}
        options={{
          headerShown: false,
          tabBarIcon: ({ color }) => (
            <MaterialIcons name="home" size={24} color={color} />
          ),
       title: 'Home'
        }}
      />
      <Tab.Screen
        name="card"
        component={MyCardScreen}
        options={{
          headerShown: false,
          tabBarIcon: ({ color }) => (
            <MaterialIcons name="credit-card" size={24} color={color} />
          ),
          title: 'My Cards'
        }}
      />
      <Tab.Screen
        name="statistics"
        component={StatisticsScreen}
        options={{
          headerShown: false,
          tabBarIcon: ({ color }) => (
            <MaterialIcons name="donut-large" size={24} color={color} />
          ),
          title: 'Statistics'
        }}
      />
      <Tab.Screen
        name="settings"
        component={SettingsScreen}
        options={{
          headerShown: false,
          tabBarIcon: ({ color }) => (
            <MaterialIcons name="settings" size={24} color={color} />
          ),
          title: 'Settings'
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomTabScreens;

const styles = StyleSheet.create({});
