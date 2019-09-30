
import {createAppContainer} from 'react-navigation';
import {createDrawerNavigator, DrawerActions} from 'react-navigation-drawer';
import {createStackNavigator} from 'react-navigation-stack';
import {createBottomTabNavigator} from 'react-navigation-tabs';


import BlueScreen from './BlueScreen';
import DefaultScreen from './DefaultScreen';
const HamburgerNavigation = createDrawerNavigator(
    {
        BlueScreen: BlueScreen,
        DefaultScreen: {
            screen: DefaultScreen,
        }
    },
    {
        initialRouteName: 'DefaultScreen',
        
        
    }
 );
export default createAppContainer(HamburgerNavigation);