import React, {Component} from 'react';
import { withNavigation } from 'react-navigation';
import Icon from 'react-native-vector-icons/SimpleLineIcons';
import { View, Image, TouchableOpacity, StatusBar } from 'react-native';

class HamburgerIcon extends Component{
  render() {
    return (
      <View style={{ flexDirection: 'row' }}>
        <StatusBar
          backgroundColor="#000080"
          barStyle = "ligh-content"
        />
        <TouchableOpacity 
          style={{ width: 44, height: 44, marginLeft: 20, marginTop: 25 }}
          onPress={()=>{ this.props.navigation.openDrawer();}}>
          <Icon name='menu' size={20} color='white'/>
        </TouchableOpacity>
      </View>
    )
  };
}
export default withNavigation(HamburgerIcon);