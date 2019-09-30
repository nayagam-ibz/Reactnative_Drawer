import React, {Component} from 'react';
import {View, StyleSheet, TextInput, Text, TouchableOpacity} from 'react-native';

export default class RegisterScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      confirmPassword: ''
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.textInputContainer}>
          <Text style={styles.textInputLeft}>Username</Text>
          <TextInput style={styles.textInput}
            maxLength={12}
            underlineColorAndroid='transparent'
            placeholder='请输入用户名'
            placeholderTextColor='grey'
            returnKeyType='next'
            selectionColor='grey'
            onChangeText={(text) => this.setState({username: text})}
            onSubmitEditing={() => this.refs.txtPassword.focus()}
          />
        </View>

        <View style={styles.divider}/>

        <View style={styles.textInputContainer}>
          <Text style={styles.textInputLeft}>Password</Text>
          <TextInput style={styles.textInput}
            maxLength={12}
            underlineColorAndroid='transparent'
            placeholder='请输入密码'
            placeholderTextColor='grey'
            returnKeyType='next'
            selectionColor='grey'
            secureTextEntry={true}
            ref={'txtPassword'}
            onChangeText={(text) => this.setState({password: text})}
            onSubmitEditing={() => this.refs.txtPasswordConfirm.focus()}
          />
        </View>
        <View style={styles.divider}/>
          <View style={styles.textInputContainer}>
          <Text style={styles.textInputLeft}>Password</Text>
          <TextInput style={styles.textInput}
            maxLength={12}
            underlineColorAndroid='transparent'
            placeholder='请确认密码'
            placeholderTextColor='grey'
            returnKeyType='go'
            selectionColor='grey'
            secureTextEntry={true}
            onChangeText={(text) => this.setState({confirmPassword: text})}
            ref={'txtPasswordConfirm'}
          />
        </View>
        <View style={styles.divider}/>
        <TouchableOpacity
          activeOpacity={0.9}
          style={styles.loginTextContainer}
          onPress={() => {
            this.props.navigation.navigate('Home');
            fetch('http://www.wanandroid.com/user/register', {
              method: 'POST',
              headers: {
                  'Accept': 'application/json',
                  'Content-Type': 'application/x-www-form-urlencoded',
              },
              body: 'username=' + this.state.username + '&password=' + this.state.password + '&repassword=' + this.state.confirmPassword
              // body: JSON.stringify({
              //     username: this.state.username,
              //     password: this.state.password,
              //     repassword: this.state.confirmPassword,
              // })
            }).then(function (response) {
                return response.json();
            }).then(function (myJson) {
                alert('success' + myJson);
            }).catch(function () {
                console.log("Promise Rejected");
            });
          }}>
          <Text style={styles.loginText}>注册</Text>
        </TouchableOpacity>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50,
    backgroundColor: '#fbfbfb'
  },
  textInputContainer: {
    flexDirection: 'row',
    marginTop: 10,
    marginLeft: 10,
    marginRight: 10,
    paddingTop: 5,
    paddingBottom: 5,
    alignItems: 'center'
  },
  textInputLeft: {
    padding: 0,
    fontSize: 16,
    color: '#2A2A2A'
  },
  textInput: {
    flex: 1,
    marginLeft: 10,
    padding: 0,
    fontSize: 14,
    color: '#2A2A2A'
  },
  divider: {
    height: 1,
    backgroundColor: '#757575',
    marginLeft: 10,
    marginRight: 10,
    marginBottom: 10,
  },
  loginTextContainer: {
    marginTop: 50,
    marginLeft: 20,
    marginRight: 20,
    padding: 10,
    borderRadius: 5,
    backgroundColor: '#03a9f4'
  },
  loginText: {
    textAlign: 'center',
    fontSize: 14,
    color: 'white',
  }
});