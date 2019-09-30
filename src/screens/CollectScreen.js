import React, {Component} from 'react';
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
} from 'react-native';

export default class CollectScreen extends Component {

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.text}>CollectScreen</Text>
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
    }
});