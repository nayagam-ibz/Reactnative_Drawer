import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import HamburgerIcon from './HamburgerIcon';
import { Container, Tab, Tabs, StyleProvider } from 'native-base';
export default class RedScreen extends Component {
    render() {
        return (
            <View style={styles.container}>
              <Text style={styles.title}>Red Screen</Text>
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