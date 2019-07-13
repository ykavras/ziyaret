import React, { Component } from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
import styles from './styles';
import { connect } from 'react-redux';
import AsyncStorage from '@react-native-community/async-storage';
import { logout } from '../../store/actions/login';
import { getDealers } from '../../store/actions/dealers';
import PropTypes from 'prop-types';
import LogoutIcon from '../../assets/icons/Logout';

class Choose extends Component {

  componentDidMount() {
    this.props.getDealers();
  }

  async removeItemValue(key) {
    try {
      await AsyncStorage.removeItem(key);
      await this.props.logout();
      return await this.props.navigation.navigate('Login');
    } catch (exception) {
      return false;
    }
  }

  renderDealers = (dealersErrorMessage) => {
    if (dealersErrorMessage) {
      if (dealersErrorMessage.data.detail === 'Invalid token.') {
        this.removeItemValue('token');
      }
    }
  }

  render() {
    const { navigate } = this.props.navigation;
    const { dealersErrorMessage } = this.props.getDealersToProps;
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
        {
          this.renderDealers(dealersErrorMessage)
        }
      </View>
    )
  }
}

Choose.propTypes = {
  getDealers: PropTypes.func.isRequired,
  getDealersToProps: PropTypes.object.isRequired,
};

const mapStateToProps = state => {
  return {
    getDealersToProps: state.dealersReducer,
  }
};

export default connect(mapStateToProps, { logout, getDealers })(Choose)
