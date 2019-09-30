import React from 'react';
import {StyleSheet, Text, View, Dimensions} from 'react-native';

import {createAppContainer} from 'react-navigation';
import {createDrawerNavigator, DrawerActions} from 'react-navigation-drawer';
import {createStackNavigator} from 'react-navigation-stack';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import { ScrollView } from 'react-native-gesture-handler';
import { SafeAreaView } from 'react-navigation';
import ProfileScreen from './ProfileScreen';
import DefaultScreen from './DefaultScreen';
import BottomTabs from './BottomTabs';
import CustomSidebarMenu from './CustomDrawer'

const HamburgerNavigation = createDrawerNavigator({
    Tabs: BottomTabs,
  },
  {
    initialRouteName: 'Tabs',
    contentComponent: CustomSidebarMenu,
    drawerWidth: Dimensions.get('window').width - 50,
    drawerPosition: 'left',  
  }
);

const Stack = createStackNavigator(
  {
    Drawer: {
      screen: HamburgerNavigation,
      navigationOptions: {
        header: null,
      },
    },

    ProfileScreen: {
      screen: ProfileScreen,
      navigationOptions: () => ({
        title: 'Profile Screen',
        headerStyle: {
          backgroundColor: '#000080',
        },
        headerTintColor: '#fff',
      })
    },

    DefaultScreen: {
      screen: DefaultScreen,
      navigationOptions: () => ({
        title: 'DefaultScreen',
        headerStyle: {
          backgroundColor: '#000080',
        },
        headerTintColor: '#fff',
      })
    }
  }
);
export default createAppContainer(Stack);