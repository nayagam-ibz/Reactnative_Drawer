import React, {Component} from 'react';
import {
  Text,
  View,
  StyleSheet,
  Button,Image, TouchableOpacity
} from 'react-native';

import ImagePicker from 'react-native-image-picker';
import axios from 'axios';

const options = {
  title: 'Select Photo',
  takePhotoButtonTitle: 'Take a Photo',
  chooseFromLibraryButtonTitle: 'Choose from gallery',
  quality: 1
};

export default class ProfileScreen extends Component {
  constructor() {
     super()
     this.state = {
      imageSource: null,
      data:null
    }
  }

  selectImage(){
    ImagePicker.showImagePicker(options, (response) => {
      console.log('Response = ', response);

      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      } else {
        axios.defaults.headers.common['API-Auth'] = 'testAPI';
        axios.post('http://192.168.15.239:3000/api/v1/user_profile', {
        })
        .then(function(response){
          alert("login sucessfull completed")
        }).catch((error) =>{
          //Network error comes in
          console.warn(error);
        });
      }
    });
  }

  // uploadPhoto() {

  //   console.log('testing.......')
  //   console.log(res);

    // RNFetchBlob.fetch('POST', 'http://192.168.15.239:3000/api/v1/users/sign_in', {
    //   Authorization : "Bearer access-token",
    //   otherHeader : "foo",
    //   'Content-Type' : 'multipart/form-data',
    // }, [
    //   { name : 'image', filename : 'image.png', type:'image/png', data: this.state.data},
    // ]).then((resp) => {
    //   // ...
    // }).catch((err) => {
    //   // ...
    // })

  // }



  render () {
    return (
      <View style={styles.container}>

        <Image style={styles.image} source={this.state.imageSource != null ? this.state.imageSource : require('../image/unknown.jpg')}
        />

        <TouchableOpacity style={styles.button} onPress={this.selectImage.bind(this)}>
          <Text style={styles.text}> Select </Text>
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
    backgroundColor: '#a0a0a0'
  },

  button: {
    width: 240,
    height: 40,
    backgroundColor: '#000080',
    borderRadius: 30,
    justifyContent: 'center',
    marginTop: 15,
  },

  text: {
    color: '#fff',
    fontSize: 18 ,
    textAlign: 'center'
  },

  image: {
    width: 240,
    height: 240,
    marginTop: 30,
    borderRadius: 5
  }
});

