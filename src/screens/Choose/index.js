import React, { Component } from 'react';
import { View, TouchableOpacity, Text, Image, ActivityIndicator, SafeAreaView } from 'react-native';
import styles from './styles';
import { connect } from 'react-redux';
import AsyncStorage from '@react-native-community/async-storage';
import { logout } from '../../store/actions/login';
import { getUser } from '../../store/actions/user';
import PropTypes from 'prop-types';
import LogoutIcon from '../../assets/icons/Logout';
import TurkcellLogo from '../../assets/img/turkcell-logo.png';

class Choose extends Component {

  componentDidMount() {
    this.props.getUser();
  }

  removeItemValue = async (key) => {
    try {
      await AsyncStorage.removeItem(key);
      await this.props.logout();
      return await this.props.navigation.navigate('Login');
    } catch (exception) {
      return false;
    }
  }

  renderGetUser = (isUser, userErrorMessage, user) => {
    console.log(isUser, userErrorMessage, user)
    if (isUser) {
      return (<ActivityIndicator style={styles.loading} color="white" />)
    }
    if (user) {
      const userInfo = user[0];
      return (
        <View style={styles.userInfo}>
          <Text style={styles.userText}>EXT: {userInfo.first_name + ' ' + userInfo.last_name}</Text>
        </View>
      )
    }
    if (userErrorMessage) {
      for (let [key, value] of Object.entries(userErrorMessage.data)) {
        return (<Text style={styles.successTextErr}>{key} : {value}</Text>)
      }
    }
  }

  render() {
    const { navigate } = this.props.navigation;
    const { isUser, userErrorMessage, user } = this.props.getUserToProps;
    return (
      <SafeAreaView style={{ flex: 1 }}>
        <View style={styles.wrapper}>
          {
            this.renderGetUser(isUser, userErrorMessage, user)
          }
          <Image style={styles.logo} source={TurkcellLogo} />
          <View style={styles.wrapperIn}>
            <TouchableOpacity style={[styles.button, styles.buttonTop]} onPress={() => navigate('Form')}>
              <Text style={styles.buttonTitle}>Ziyaret Formu</Text>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.button, styles.buttonBottom]} onPress={() => navigate('Notes')}>
              <Text style={[styles.buttonTitle, styles.buttonTitleBlue]}>Notlarım</Text>
            </TouchableOpacity>
          </View>
          <TouchableOpacity style={styles.btnLogout} onPress={() => this.removeItemValue('token')}>
            <LogoutIcon fill="red" style={styles.btnLogoutIcon} />
            <Text style={styles.btnLogoutText}>Çıkış Yap</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    )
  }
}

Choose.propTypes = {
  getUser: PropTypes.func.isRequired,
  getUserToProps: PropTypes.object.isRequired
};

const mapStateToProps = state => {
  return {
    getUserToProps: state.userReducer
  }
};

export default connect(mapStateToProps, { logout, getUser })(Choose)
