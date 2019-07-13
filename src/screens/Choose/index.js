import React, { Component } from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
import styles from './styles';
import { connect } from 'react-redux';
import AsyncStorage from '@react-native-community/async-storage';
import { logout } from '../../store/actions/login';
import LogoutIcon from '../../assets/icons/Logout';

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
        <TouchableOpacity style={styles.btnLogout} onPress={() => this.removeItemValue('token')}>
          <LogoutIcon fill="red" style={styles.btnLogoutIcon} />
        </TouchableOpacity>
        <TouchableOpacity style={[styles.button, styles.buttonTop]} onPress={() => navigate('Form')}>
          <Text style={styles.buttonTitle}>Ziyaret</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.button, styles.buttonBottom]}>
          <Text style={[styles.buttonTitle, styles.buttonTitleBlue]}>Notlarım</Text>
        </TouchableOpacity>
      </View>
    )
  }
}

Choose.propTypes = {};

const mapStateToProps = state => { return {} };

export default connect(mapStateToProps, { logout })(Choose)
