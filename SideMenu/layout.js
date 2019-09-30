import React, { Component } from 'react';
import { AppRegistry, Dimensions } from 'react-native';
import {createDrawerNavigator} from 'react-navigation-drawer';
import {createAppContainer} from 'react-navigation';

import SideMenu from './SideMenu/SideMenu'
import stackNav from './app/stacknav';

const drawernav = createDrawerNavigator({
  Item1: {
      screen: stackNav,
    }
  }, {
    contentComponent: SideMenu,
    drawerWidth: Dimensions.get('window').width - 90,  
});


export default createAppContainer(drawernav);