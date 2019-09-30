import React, {Component} from 'react';
import {
  Text,
  View,
  StyleSheet,
  Button
} from 'react-native';

class Page2 extends Component {
  render () {
    return (
      <View style={styles.container}>
        <Text>Main</Text>
        <Button onPress={() => this.props.navigation.navigate("Detail")} title="Detail Page" />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center'
  }
});

export default Page2;
