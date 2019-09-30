import React, {Component} from 'react';
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
} from 'react-native';

export default class ClassifyScreen extends Component {

    render() {
        return (
            <View style={styles.container}>
                <TouchableOpacity style={styles.button} activeOpacity={0.5} onPress={
                    () => {
                        this.props.navigation.navigate('Detail', {title: 'from ClassifyScreen'})
                    }
                }>
                    <Text style={{color: 'white'}}>Click</Text>
                </TouchableOpacity>
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
    button: {
        width: 120,
        height: 45,
        borderRadius: 5,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#4398ff',
    }
});