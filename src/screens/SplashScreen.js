import React, {Component} from 'react';
import {StyleSheet, View, Text} from 'react-native';

export default class SplashScreen extends Component {


    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.text}>Welcome to WanAndroid !</Text>
            </View>
        )
    }


}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        fontSize: 18,
        color: '#03a9f4',
        fontWeight: 'bold',
    }
});