import React, { Component } from 'react';
import {
  View, StatusBar
} from 'react-native';
import homeStyles from '../styles';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { Input, Button } from '../../../components';

class FormTwo extends Component {
  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={homeStyles.wrapper}>
        <StatusBar barStyle="light-content" />
        <KeyboardAwareScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={homeStyles.keyboard}
          extraHeight={40}>
          
        </KeyboardAwareScrollView>
      </View>
    );
  }
}

export default FormTwo;