import React, { Component } from 'react';
import {
  View, Text
} from 'react-native';
import styles from './styles';


class Welcome extends Component {
  render() {
    return (
      <View style={styles.wrapper}>
        <Text>Welcome</Text>
      </View>
    );
  }
}

export default Welcome;
