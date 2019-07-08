import React, { Component } from 'react';
import {
  View, Text, StatusBar, Image, TextInput
} from 'react-native';
import homeStyles from '../styles';
import { Input, Button } from '../../../components';
import { TouchableOpacity } from 'react-native-gesture-handler';

class Login extends Component {
  render() {
    return (
      <View style={homeStyles.wrapper}>
        <StatusBar barStyle="light-content" />
        <Text style={homeStyles.loginText}>Giriş Yap</Text>
        <Input label="Kullanıcı Adı" placeholder="Kullanıcı adınızı giriniz" />
        <Input label="Parola" placeholder="Parolanızı giriniz" password />
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
      </View>
    );
  }
}

export default Login;