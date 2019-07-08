import React, { Component } from 'react';
import {
  View, StatusBar, Text, StyleSheet
} from 'react-native';
import homeStyles from '../styles';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { Input, Button, Select } from '../../../components';

class FormOne extends Component {
  constructor(props) {
    super(props);
    this.state = {
      product: '',
      productArray: [
        {
          label: 'Fiber İnternet',
          value: '0',
        },
        {
          label: 'Fiber+TV’li İnter net',
          value: '1',
        },
        {
          label: 'Fiber+Donanımlı Kampanya',
          value: '2',
        },
      ]
    }
  }

  render() {
    const { navigate } = this.props.navigation;
    const { productArray } = this.state;
    console.log(this.state.product)
    return (
      <View style={homeStyles.wrapper}>
        <StatusBar barStyle="light-content" />
        <KeyboardAwareScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={homeStyles.keyboard}
          extraHeight={40}>
          <Text style={homeStyles.loginText}>Fiberteknoloji ve Hometechnology</Text>
          <Input label="Adı"
            placeholder="Adınızı giriniz"
            blurOnSubmit={false}
            returnKeyType="next"
            onSubmitEditing={() => {
              this.surname.focus();
            }} />
          <Input label="Soyadı"
            placeholder="Soyadınızı giriniz"
            password
            onRef={(input) => { this.surname = input; }} />
          <Input label="Cep Telefonu"
            placeholder="Cep telefonunuzu giriniz"
            password
            onRef={(input) => { this.surname = input; }} />
          <Select
            label="Hangi Ürün Sunuldu ?"
            selectText="İlgili alanı seçiniz"
            array={productArray}
            onValueChange={value => { this.setState({ product: value }) }}
            onRef={el => { this.state.product = el; }} />
        </KeyboardAwareScrollView>
      </View>
    );
  }
}

export default FormOne;