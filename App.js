// import React, { Component } from 'react';
// import { AppRegistry, Dimensions } from 'react-native';
// import {createDrawerNavigator} from 'react-navigation-drawer';
// import {createAppContainer} from 'react-navigation';

// import SideMenu from './SideMenu/SideMenu'
// import stackNav from './app/stacknav';

// const drawernav = createDrawerNavigator({
//   Item1: {
//       screen: stackNav,
//     }
//   }, {
//     contentComponent: SideMenu,
//     drawerWidth: Dimensions.get('window').width - 120,  
// });


// export default createAppContainer(drawernav);




// import React, {Component} from 'react';
// import DrawerNav from "./src/navigator/DrawerNav"


// export default class App extends Component {
//     render() {
//         return (<DrawerNav/>);
//     }
// }


import React, {Component} from 'react';
import HamburgerNav from './src/HamburgerNav'
export default class App extends Component {
 render() {
   return (
     <HamburgerNav/>
   );
 }
}