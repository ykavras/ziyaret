import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import styles from './styles';
import SuccessIcon from '../../assets/icons/Success';

class Success extends Component {

  componentDidMount() {
    setTimeout(() => {
      this.props.navigation.navigate('Form');
    }, 2000)
  }

  render() {
    return (
      <View style={styles.successWrapper}>
        <SuccessIcon style={styles.successIcon} />
        <Text style={styles.successTitle}>Teşekkürler</Text>
      </View>
    )
  }
}

export default Success