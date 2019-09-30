import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {createAppContainer } from 'react-navigation';
import {createDrawerNavigator, DrawerActions} from 'react-navigation-drawer';
import {createStackNavigator} from 'react-navigation-stack';
import {createBottomTabNavigator} from 'react-navigation-tabs';

import Icon from 'react-native-vector-icons/Ionicons'
import GreenScreen from "./GreenScreen";
import RedScreen from "./RedScreen";
import BlueScreen from "./BlueScreen"
import ContactScreen from "./ContactScreen"


const Green = createStackNavigator({
  GreenScreen: { 
    screen: GreenScreen, 
    navigationOptions:{
      title  : "Home",
      headerStyle: {
          backgroundColor: '#000080',
        },
        headerTintColor: '#fff',
    }
  }
});

const Red = createStackNavigator({ 
  RedScreen: { 
    screen: RedScreen, 
    navigationOptions:{
      headerMode: 'float',
      drawerLockMode: 'locked-closed',
      title  : "Red Screen",
      headerStyle: {
          backgroundColor: '#000080',
        },
        headerTintColor: '#fff',
    }
  }
});

const Blue = createStackNavigator({ 
  BlueScreen: { 
    screen: BlueScreen, 
    navigationOptions:{
      headerMode: 'float',
      title  : "Map",
      headerStyle: {
          backgroundColor: '#000080',
        },
        headerTintColor: '#fff',
    }
  }
});

const Contact = createStackNavigator({ 
  Contact: { 
    screen: ContactScreen, 
    navigationOptions:{
      headerMode: 'float',
      title  : "Contact Screen",
      headerStyle: {
          backgroundColor: '#000080',
        },
        headerTintColor: '#fff',
    }
  }
});


const TabNavigator = createBottomTabNavigator(
  {  
    Green: { screen: Green,  
      navigationOptions:{  
        tabBarLabel:'Home',  
        tabBarIcon: ({ tintColor }) => (  
        <View>  
          <Icon style={[{color: tintColor}]} size={25} name={'md-home'}/> 
        </View>),  
      }  
    }, 

    Red: { screen: Red,  
      navigationOptions:{  
        tabBarLabel:'Gallery',  
        tabBarIcon: ({ tintColor }) => (  
        <View>  
          <Icon style={[{color: tintColor}]} size={25} name={'md-photos'}/>  
        </View>),  
      }  
    },

    Blue: { screen: Blue,  
      navigationOptions:{  
        tabBarLabel:'Map',  
        tabBarIcon: ({ tintColor }) => (  
        <View>  
          <Icon style={[{color: tintColor}]} size={25} name={'md-map'}/>  
        </View>),  
      }  
    },  

    Contact: { screen: Contact,  
      navigationOptions:{  
        tabBarLabel:'Contact',  
        tabBarIcon: ({ tintColor }) => (  
        <View>  
          <Icon style={[{color: tintColor}]} size={25} name={'md-contacts'}/>  
        </View>),  
      }  
    },  
        
  },  
  {  
    tabBarOptions: {
      activeTintColor: 'red',
      inactiveTintColor: 'gray',
    },  
  },  
);  
  
export default createAppContainer(TabNavigator);
