import React, { Component } from 'react';
import { View, TouchableOpacity, Text, Image } from 'react-native';
import styles from './styles';
import { connect } from 'react-redux';
import AsyncStorage from '@react-native-community/async-storage';
import { logout } from '../../store/actions/login';
import LogoutIcon from '../../assets/icons/Logout';
import TurkcellLogo from '../../assets/img/turkcell-logo.png';

class Choose extends Component {

  removeItemValue = async (key) => {
    try {
      await AsyncStorage.removeItem(key);
      await this.props.logout();
      return await this.props.navigation.navigate('Login');
    } catch (exception) {
      return false;
    }
  }

  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.wrapper}>
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
    )
  }
}

Choose.propTypes = {};

const mapStateToProps = state => { return {} };

export default connect(mapStateToProps, { logout })(Choose)
