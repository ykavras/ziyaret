import React, { Component } from 'react';
import {
  View,
  Text,
  StatusBar,
  TouchableOpacity,
  Image,
  ActivityIndicator,
  PermissionsAndroid,
  Platform,
} from 'react-native';
import styles from './styles';
import { Input, Button } from '../../../components';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import TurkcellLogo from '../../../assets/img/turkcell-logo.png'
import { connect } from 'react-redux';
import { login, emailChanged, passwordChanged } from "../../../store/actions/login";
import PropTypes from 'prop-types';
import AsyncStorage from '@react-native-community/async-storage';
import LocationServicesDialogBox from "react-native-android-location-services-dialog-box";
import Contract from '../Contract';

LocationServicesDialogBox.checkLocationServicesIsEnabled({
  message: "<h2 style='color: #0af13e'>Konum kullanılsın mı ?</h2>Bu uygulama cihazınızın ayarlarını değiştirmek istiyor:<br/><br/>Konum için GPS, Wifi ve hücre ağını kullanın",
  ok: "EVET",
  cancel: "HAYIR",
  enableHighAccuracy: true, // true => GPS AND NETWORK PROVIDER, false => GPS OR NETWORK PROVIDER
  showDialog: true, // false => Opens the Location access page directly
  openLocationServices: true, // false => Directly catch method is called if location services are turned off
  preventOutSideTouch: false, // true => To prevent the location services window from closing when it is clicked outside
  preventBackClick: false, // true => To prevent the location services popup from closing when it is clicked back button
  providerListener: false // true ==> Trigger locationProviderStatusChange listener when the location state changes
}).then(function (success) {
  console.log(success); // success => {alreadyEnabled: false, enabled: true, status: "enabled"}
}).catch((error) => {
  console.log(error.message); // error.message => "disabled"
});

class Login extends Component {

  constructor(props) {
    super(props);
    this.state = {
      popup: false
    }
  }

  componentDidMount() {
    //AsyncStorage.clear();
    AsyncStorage.getItem('token').then((value) => {
      if (value !== null) {
        this.props.loginToProps.token = value;
        const { navigate } = this.props.navigation;
        return (navigate('Choose'))
      }
    });
    this.requestPermission()
  }

  openPopup = () => {
    this.setState({ popup: !this.state.popup })
  }

  requestPermission = async () => {
    try {
      if (Platform.OS === "android") {
        const userResponse = await PermissionsAndroid.requestMultiple([
          PermissionsAndroid.PERMISSIONS.CAMERA,
          PermissionsAndroid.PERMISSIONS.RECORD_AUDIO,
          PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
        ]);
        return userResponse;
      }
    } catch (err) {
      Warning(err);
    }
    return null;
  }

  onEmailChanged = (text) => {
    this.props.emailChanged(text);
  };

  onPasswordChanged = (text) => {
    this.props.passwordChanged(text);
  };

  goLogin = async () => {
    try {
      const { username, password } = await this.props.loginToProps;
      await this.props.login(username, password)
    } catch (e) {
      console.log(error)
    }
  };

  renderItem = (isLogin, loginErrorMessage, login, token) => {
    if (isLogin) {
      return (<ActivityIndicator style={styles.loading} color="white" />)
    }
    if (login && token) {
      AsyncStorage.setItem('token', login.token);
      const { navigate } = this.props.navigation;
      return (navigate('Choose'))
    }
    if (loginErrorMessage) {
      for (let [key, value] of Object.entries(loginErrorMessage.data)) {
        return (<Text style={[styles.successText, styles.successTextErr]}>{key} : {value}</Text>)
      }
    }
  };

  render() {

    const { isLogin, loginErrorMessage, login, token } = this.props.loginToProps;
    const { popup } = this.state;
    return (
      <View style={styles.wrapper}>
        <StatusBar barStyle="light-content" />
        <KeyboardAwareScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.keyboard}
          extraHeight={40}>
          <Image source={TurkcellLogo} style={styles.logo} />
          <Text style={styles.loginText}>Giriş Yap</Text>
          <Input label="Sicil No"
            placeholder="Sicil noyu giriniz"
            blurOnSubmit={false}
            returnKeyType="next"
            onSubmitEditing={() => {
              this.pass.focus();
            }}
            onChangeText={this.onEmailChanged.bind(this)}
          />
          <Input label="Parola"
            placeholder="Parolanızı giriniz"
            password
            onRef={(input) => { this.pass = input; }}
            onChangeText={this.onPasswordChanged.bind(this)}
          />
          <View style={[styles.links, { display: 'none' }]}>
            <TouchableOpacity style={styles.link}>
              <Text style={styles.linkTitle}>Kayıt Ol</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.link}>
              <Text style={styles.linkTitle}>Şifremi Unuttum</Text>
            </TouchableOpacity>
          </View>
          {this.renderItem(isLogin, loginErrorMessage, login, token)}
          <View style={styles.button}>
            <Button title="Giriş Yap" onPress={this.goLogin.bind(this)} />
          </View>
          <TouchableOpacity style={styles.contractBtn} onPress={() => this.openPopup()}>
            <Text style={styles.contractText}>Gizlilik Sözleşmesi</Text>
          </TouchableOpacity>
        </KeyboardAwareScrollView>
        {
          popup
            ?
            <Contract onPress={() => this.openPopup()} />
            : null
        }
      </View>
    );
  }
}

Login.propTypes = {
  login: PropTypes.func.isRequired,
  loginToProps: PropTypes.object.isRequired,
};

const mapStateToProps = state => {
  return {
    loginToProps: state.loginReducer,
  }
};

export default connect(mapStateToProps, { login, emailChanged, passwordChanged })(Login)