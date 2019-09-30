
import React, { Component } from 'react';
import { View, Image, TouchableOpacity, StatusBar } from 'react-native';
import {createAppContainer} from 'react-navigation';
import {createDrawerNavigator} from 'react-navigation-drawer';
import {createStackNavigator} from 'react-navigation-stack';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import MainScreen from "./MainScreen";
import DetailScreen from "./DetailScreen";
import Page1 from "./Page1";
import Page2 from "./Page2";
import Page3 from "./Page3";
 
class NavigationDrawerStructure extends Component {
  toggleDrawer = () => {
    this.props.navigationProps.toggleDrawer();
  };
  render() {
    return (
      <View style={{ flexDirection: 'row' }}>
        <StatusBar
          backgroundColor="#000080"
          barStyle = "ligh-content"
        />
        <TouchableOpacity onPress={this.toggleDrawer.bind(this)}>
          <Image
            source={require('../image/drawer.png')}
            style={{ width: 25, height: 25, marginLeft: 5 }}
          />
        </TouchableOpacity>
      </View>
    );
  }
}


const stackNav = createStackNavigator({
  First: {
    screen: MainScreen,
    navigationOptions: ({ navigation }) => ({
      title: 'Home',
      headerLeft: <NavigationDrawerStructure navigationProps={navigation} />,
      headerStyle: {
        backgroundColor: '#000080',
      },
      headerTintColor: '#fff',
    }),
  },

  Detail: {
    screen: DetailScreen,
    navigationOptions: ({navigation}) => ({
      title: "Detail",
      headerStyle: {
        backgroundColor: '#000080',
      },
      headerTintColor: '#fff',
    })     
  },
  Page1: {
    screen: Page1,
    navigationOptions: ({navigation}) => ({
      title: 'Page1',
      headerStyle: {
        backgroundColor: '#000080',
      },
      headerTintColor: '#fff',
    })
  }
});

export default (stackNav)

// const App = createBottomTabNavigator(
//   {
//     Home: { screen: MainScreen },
//     Settings: { screen: DetailScreen },
//   },
//   {
//     defaultNavigationOptions: ({ navigation }) => ({
//       tabBarIcon: ({ focused, horizontal, tintColor }) => {
//         const { routeName } = navigation.state;
//         let IconComponent = Ionicons;
//         let iconName;
//         if (routeName === 'Home') {
//           iconName = `ios-information-circle${focused ? '' : '-outline'}`;
//         } else if (routeName === 'Settings') {
//           iconName = `ios-checkmark-circle${focused ? '' : '-outline'}`;
//         }
//         return <IconComponent name={iconName} size={25} color={tintColor} />;
//       },
//     }),
//     tabBarOptions: {
//       activeTintColor: '#42f44b',
//       inactiveTintColor: 'gray',
//     },
//   }
// );

// export default createAppContainer(App)