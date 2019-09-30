import React, {Component} from 'react';
import {View, StyleSheet, TextInput, Text, TouchableOpacity} from 'react-native';
import FetchUtils from '../utils/FetchUtils'
import Toast, {DURATION} from 'react-native-easy-toast'

export default class LoginScreen extends Component {
    constructor(props) {
      super(props);
      this.state = {
        inputUsername: '',
        inputPassword: ''
      }
    }

    render() {
        return (
            <View style={styles.container}>
              <View style={styles.textInputContainer}>
                <Text style={styles.textInputLeft}>Username </Text>
                <TextInput style={styles.textInput}
                  maxLength={12}
                  underlineColorAndroid='transparent'
                  placeholder='Username'
                  placeholderTextColor='grey'
                  returnKeyType='next'
                  selectionColor='grey'
                  onChangeText={(text) => this.setState({inputUsername: text})}
                  onSubmitEditing={() => this.refs.txtPassword.focus()}
                />
              </View>
              <View style={styles.divider}/>
              <View style={styles.textInputContainer}>
                <Text style={styles.textInputLeft}>passsword</Text>
                <TextInput style={styles.textInput}
                  maxLength={12}
                  underlineColorAndroid='transparent'
                  placeholder='请输入密码'
                  placeholderTextColor='grey'
                  returnKeyType='go'
                  selectionColor='grey'
                  secureTextEntry={true}
                  ref={'txtPassword'}
                  onChangeText={(text) => this.setState({inputPassword: text})}
                />
              </View>
              <View style={styles.divider}/>
                <Text style={styles.registerText}
                  onPress={() => {
                    this.props.navigation.navigate('Register')
                  }}>
                Register</Text>
                <TouchableOpacity
                    style={styles.loginTextContainer}
                    activeOpacity={0.9}
                    onPress={() => {
                        FetchUtils
                            .post('http://www.wanandroid.com/user/login',
                                {
                                    username: this.state.inputUsername,
                                    password: this.state.inputPassword
                                },
                                successData => {
                                    this.refs.toast.show('登录成功' + successData.data.username, 500, () => {
                                            this.props.navigation.navigate('Home')
                                        }
                                    )
                                },
                                failData => {
                                    this.refs.toast.show(failData);
                                });

                        // fetch('http://www.wanandroid.com/user/login', {
                        //     method: 'POST',
                        //     headers: {
                        //         'Accept': 'application/json',
                        //         'Content-Type': 'application/x-www-form-urlencoded',
                        //     },
                        //     body: 'username=' + this.state.username + '&password=' + this.state.password,
                        // }).then(response => {
                        //         return response.json();
                        //     }
                        // ).then(myJson => {
                        //     if (myJson.errorCode === 0) {
                        //         this.refs.toast.show('登录成功' + myJson.errorMsg);
                        //     } else {
                        //         this.refs.toast.show('登录失败' + myJson.errorMsg);
                        //     }
                        // }).catch(error => {
                        //     this.refs.toast.show('网络错误');
                        // });
                    }}>
                    <Text style={styles.loginText}>登录</Text>
                </TouchableOpacity>
                <Toast ref="toast"/>
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
        marginLeft: 10,
        marginTop: 10,
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
    registerText: {
        alignSelf: 'flex-end',
        marginRight: 10,
        color: 'grey',
        fontSize: 14
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