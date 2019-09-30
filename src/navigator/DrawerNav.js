import React, {Component} from 'react';
import {
  View, 
  ScrollView, 
  StyleSheet, 
  Image, 
  Text, 
  TouchableWithoutFeedback
} from 'react-native';

import {
    SafeAreaView,
} from 'react-navigation'

import {createAppContainer} from 'react-navigation';
import {createDrawerNavigator, DrawerActions, DrawerItems} from 'react-navigation-drawer';
import {createStackNavigator} from 'react-navigation-stack';
import {createBottomTabNavigator} from 'react-navigation-tabs';

import HomeScreen from '../screens/HomeScreen';
import StructureScreen from '../screens/StructureScreen';
import ClassifyScreen from '../screens/ClassifyScreen';
import ProjectScreen from '../screens/ProjectScreen';
import DetailScreen from '../screens/DetailScreen';
import AboutMeScreen from '../screens/AboutMeScreen';
import CollectScreen from '../screens/CollectScreen';
import LoginScreen from '../screens/LoginScreen';
import RegisterScreen from '../screens/RegisterScreen';

import { Ionicons } from 'react-native-vector-icons';


const TabNav = createBottomTabNavigator({
  Home: {
    screen: HomeScreen,
    navigationOptions: {
      tabBarLabel: "HOME",
      tabBarIcon: ({tintColor}) => {
        return (<Ionicons name='ios-home-outline' size={26} color={tintColor}/>);
      }
    }
  },

  Structure: {
    screen: StructureScreen,
    navigationOptions: {
      tabBarLabel: "STRUCT",
      tabBarIcon: ({tintColor}) => {
        return (<Ionicons name='ios-construct-outline' size={26} color={tintColor}/>);
      }
    }
  },

  Classify: {
    screen: ClassifyScreen,
    navigationOptions: {
      tabBarLabel: "CLASSIFY",
      tabBarIcon: ({tintColor}) => {
        return ( <Ionicons name='ios-compass-outline' size={26} color={tintColor}/>);
      }
    }
  },

  Project: {
    screen: ProjectScreen,
    navigationOptions: {
      tabBarLabel: "PROJECT",
      tabBarIcon: ({tintColor}) => {
        return ( <Ionicons name='ios-browsers-outline' size={26} color={tintColor}/>);
        }
      }
    }
  }, 

  {
    order: ['Home', 'Structure', 'Classify', 'Project'],
    backBehavior: "initialRoute",
    tabBarOptions: {
      activeTintColor: '#03a9f4',
      activeBackgroundColor: 'white',
      inactiveTintColor: 'gray',
      inactiveBackgroundColor: 'white',
      showLabel: true,
      showIcon: true,
      style: { 
        backgroundColor: 'white'
      },
      labelStyle: {
        fontSize: 13,
      }
    }
});

TabNav.navigationOptions = ({navigation}) => {
  let {routeName} = navigation.state.routes[navigation.state.index];
  let headerTitle;
  let headerLeft;
  let headerRight;
  if (routeName === 'Home') {
    headerTitle = 'Home';
    headerLeft = <Ionicons name="md-menu" size={30} style={[{padding: 10}]} onPress={() => navigation.dispatch(DrawerActions.openDrawer())}/>;
    headerRight = <View/>;
  } else if (routeName === 'Home') {
    headerTitle = 'Home';
  } else if (routeName === 'Classify') {
    headerTitle = 'Home';
  } else if (routeName === 'Project') {
    headerTitle = 'Project';
  }
  return {
    headerTitle,
    headerLeft,
    headerRight,
  };
};

const MainStack = createStackNavigator({
  Main: {
    screen: TabNav,
    navigationOptions: {
      headerMode: 'float',
        headerTitleStyle: {
          textAlign: 'center',
          flex: 1
        }
      }
    },
    Detail: {
      screen: DetailScreen,
      navigationOptions: ({navigation}) => {
        return {
          headerTitle: navigation.getParam('title', 'DetailScreen'),
          headerMode: 'float',
          headerTitleStyle: {
            textAlign: 'center',
            flex: 1
          },
          headerRight: <View/>
        }
      }
    },
    Login: {
      screen: LoginScreen,
      navigationOptions: {
        headerTitle: 'LoginScreen',
        headerMode: 'float',
        headerTitleStyle: {
            textAlign: 'center',
            flex: 1
        },
        headerRight: <View/>
      }
    },
    Register: {
      screen: RegisterScreen,
      navigationOptions: {
        headerTitle: 'RegisterScreen',
        headerMode: 'float',
        headerTitleStyle: {
            textAlign: 'center',
            flex: 1
        },
        headerRight: <View/>
      }
    },
    AboutMe: {
      screen: AboutMeScreen,
      navigationOptions: {
        headerTitle: 'AboutMeScreen',
        headerMode: 'float',
        headerTitleStyle: {
            textAlign: 'center',
            flex: 1
        },
        headerRight: <View/>
      }
    },
    Collect: {
      screen: CollectScreen,
      navigationOptions: {
        headerTitle: 'CollectScreen',
        headerMode: 'float',
        headerTitleStyle: {
            textAlign: 'center',
            flex: 1
        },
        headerRight: <View/>
      }
    }
  }
);


const Drawer = createDrawerNavigator({
  Home: {
    screen: MainStack,
    navigationOptions: {
      title: 'HOME',
      drawerIcon: ({tintColor}) => {
        return (<Ionicons name='ios-home-outline' size={26} color={tintColor}/>);
      }
    }
  },
  Login: {
    screen: LoginScreen,
    navigationOptions: {
      drawerLockMode: 'locked-closed',
      drawerLabel: () => null
    }
  },
  AboutMe: {
    screen: AboutMeScreen,
    navigationOptions: {
      title: 'AboutMeScreen',
      drawerIcon: ({tintColor}) => {
        return (<Ionicons name='ios-people-outline' size={26} color={tintColor}/>);
      }
    }
  },
  Collect: {
    screen: CollectScreen,
    navigationOptions: {
      title: 'CollectScreen',
      drawerIcon: ({tintColor}) => {
        return (<Ionicons name='md-heart-outline' size={26} color={tintColor}/>);
      }
    }
  }
},
{
  
  // contentComponent: CustomDrawerContentComponent,
  drawerWidth: 250,
  drawerPosition: 'left',
  drawerBackgroundColor: 'white',
  contentOptions: {
    activeTintColor: '#03a9f4',
    activeBackgroundColor: 'white',
    inactiveTintColor: 'gray',
    inactiveBackgroundColor: 'white',
  },
  backBehavior: 'initialRoute'
}
);


export default createAppContainer(Drawer);


const styles = StyleSheet.create({
  drawerAreaStyle: {
    flex: 1
  },
  drawerHeadStyle: {
    height: 200,
    backgroundColor: '#03a9f4',
    justifyContent: 'center',
    alignItems: 'center'
  },
  drawerUserImageStyle: {
    width: 60,
    height: 60,
    borderRadius: 30
  },
  drawerUserNameStyle: {
    color: 'white',
    marginTop: 10,
    fontSize: 14
  }
});