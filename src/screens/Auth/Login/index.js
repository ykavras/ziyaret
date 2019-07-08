import React, { Component } from 'react';
import {
  View, Text, StatusBar, TouchableOpacity
} from 'react-native';
import homeStyles from '../styles';
import { Input, Button } from '../../../components';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

class Login extends Component {
  render() {
    return (
      <View style={homeStyles.wrapper}>
        <StatusBar barStyle="light-content" />
        <KeyboardAwareScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={homeStyles.keyboard}
          extraHeight={40}>
        <Text style={homeStyles.loginText}>Giriş Yap</Text>
        <Input label="Kullanıcı Adı" 
               placeholder="Kullanıcı adınızı giriniz" 
               blurOnSubmit={false}
               returnKeyType="next"
               onSubmitEditing={() => {
               this.pass.focus();}}/>
        <Input label="Parola" 
               placeholder="Parolanızı giriniz" 
               password 
               onRef={(input) => { this.pass = input;}} />
        <View style={homeStyles.links}>
          <TouchableOpacity style={homeStyles.link}>
            <Text style={homeStyles.linkTitle}>Kayıt Ol</Text>
          </TouchableOpacity>
          <TouchableOpacity style={homeStyles.link}>
            <Text style={homeStyles.linkTitle}>Şifremi Unuttum</Text>
          </TouchableOpacity>
        </View>
        <View style={homeStyles.button}>
          <Button title="Giriş Yap" />
        </View>
        </KeyboardAwareScrollView>
      </View>
    );
  }
}

export default Login;