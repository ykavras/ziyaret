import React, { Component } from 'react';
import {
  View, Text, StatusBar, Image, TextInput
} from 'react-native';
import styles from './styles';
import TurkcellLogo from '../../assets/img/turkcell-logo.jpg';
import { Input, Button } from '../../components';

class Welcome extends Component {
  render() {
    return (
      <View style={styles.wrapper}>
        <StatusBar barStyle="light-content" />
        <Text style={styles.loginText}>Giriş Yap</Text>
        <Input label="Kullanıcı Adı" placeholder="Kullanıcı adınızı giriniz" />
        <Input label="Parola" placeholder="Parolanızı giriniz" password />
        <View style={styles.button}>
          <Button title="Giriş Yap" />
        </View>
      </View>
    );
  }
}

export default Welcome;