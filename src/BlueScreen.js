import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import MapView from 'react-native-maps';

export default class Map extends Component {
  render() {
    return (
      <View style={styles.container}>
        <MapView style={{flex: 1}} />
      </View>
    );
  }
 }
  const styles = StyleSheet.create({
    container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    },
    title: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
    }
 });