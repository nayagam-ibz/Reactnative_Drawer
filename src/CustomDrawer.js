import React, {Component} from 'react';
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,Image
} from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons'

export default class Custom_Side_Menu extends Component {
  render() {
    return (
      <View style={styles.sideMenuContainer}>
        <Image source={{ uri: 'https://reactnativecode.com/wp-content/uploads/2017/10/Guitar.jpg' }}
          style={styles.sideMenuProfileIcon} />

        <View style={{ width: '100%', height: 1, backgroundColor: '#e2e2e2', marginTop: 15}} />

        <View style={{width: '100%'}}>
          <View style={{flexDirection: 'row', alignItems: 'center', marginTop: 10}}>
            <Icon style={styles.sideMenuIcon} size={25} name={'md-images'}/> 
            <Text 
              style={styles.menuText} 
              onPress={() => {
                this.props.navigation.navigate('ProfileScreen');
                this.props.navigation.closeDrawer();
              }} > 
              File Upload
            </Text>
          </View>
 
          <View style={{flexDirection: 'row', alignItems: 'center', marginTop: 10}}>
            <Icon style={styles.sideMenuIcon} size={25} name={'md-document'}/> 
            <Text 
              style={styles.menuText} 
              onPress={() => {
                this.props.navigation.navigate('DefaultScreen');
                this.props.navigation.closeDrawer();
              }} > 
              Default Screen
            </Text>
          </View>
        </View>
        
        <View style={{ width: '100%', height: 1, backgroundColor: '#e2e2e2', marginTop: 15}} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },

  text: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },

  sideMenuIcon: {
    resizeMode: 'center',
    width: 28, 
    height: 28, 
    marginRight: 10,
    marginLeft: 20,
    color: 'gray',
  },

  MainContainer: {
    flex: 1,
    paddingTop: (Platform.OS) === 'ios' ? 20 : 0,
    alignItems: 'center',
    justifyContent: 'center',
  },

  sideMenuContainer: {
    width: '100%',
    height: '100%',
    backgroundColor: '#fff',
    alignItems: 'center',
    paddingTop: 20
  },

  sideMenuProfileIcon:{
    resizeMode: 'center',
    width: 150, 
    height: 150, 
    borderRadius: 150/2
  }
});


