import React, { Component, Fragment } from 'react';
import {
  View, StatusBar, Text, TouchableOpacity
} from 'react-native';
import homeStyles from '../styles';
import styles from './styles';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { Input, Button, Select, Tab } from '../../../components';

class FormOne extends Component {
  constructor(props) {
    super(props);
    this.state = {
      product: '',
      presentation: '',
      interview: '',
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
        }
      ],
      presentationsTypes: [
        {
          label: 'Referans',
          value: 0,
        },
        {
          label: 'Stand',
          value: 1,
        },
        {
          label: 'D2D ve Hunter',
          value: 2,
        }
      ],
      interviewResult: [
        {
          label: 'Satış Tamam',
          value: '0',
        },
        {
          label: 'Tekrar Ziyaret Edilecek',
          value: '1',
        },
        {
          label: 'Olumsuz',
          value: '2',
        },
        {
          label: 'Kapı Açılmadı',
          value: '3',
        },
        {
          label: 'Başka ISS Abonesi',
          value: '4',
        },
        {
          label: 'Fiyat Yüksek',
          value: '5',
        }
      ]
    }
  }

  renderPresentation = (presentation) => {
    switch (presentation) {
      case 0:
        return (
          <Fragment>
            <Input label="Referans Adı Soyadı"
              placeholder="Referans adı ve soyadı giriniz"
              blurOnSubmit={false}
              returnKeyType="next"
              onSubmitEditing={() => {
                this.phoneNumber.focus();
              }} />
            <Input label="Cep Telefonu Numarası"
              placeholder="Cep telefonu numarasını giriniz"
              keyboardType="numeric"
              onRef={(input) => { this.phoneNumber = input; }} />
          </Fragment>
        )
        break;
      case 1:
        return (
          <Fragment>
            <Input label="Standın Kurulduğu Bölge Textbox"
              placeholder="Standın kurulduğu bölgeyi yazınız"
              blurOnSubmit={false}
              returnKeyType="next"
              onSubmitEditing={() => {
                this.stand.focus();
              }} />
            <Input label="Stand Süresi"
              placeholder="Stand süresini giriniz"
              onRef={(input) => { this.stand = input; }} />
          </Fragment>
        )
        break;
      case 2:
        return (
          <Fragment>
            <Input label="Site Adı"
              placeholder="Site adını giriniz"
              blurOnSubmit={false}
              returnKeyType="next"
              onSubmitEditing={() => { this.block.focus(); }} />
            <Input label="Blok Adı"
              placeholder="Blok adını giriniz"
              blurOnSubmit={false}
              returnKeyType="next"
              onRef={(input) => { this.block = input; }}
              onSubmitEditing={() => { this.circle.focus(); }} />
            <Input label="Daire Numarası"
              placeholder="Daire Numarasını Giriniz"
              onRef={(input) => { this.circle = input; }} />
          </Fragment>
        )
        break;
      default:
      // code block
    }
  }

  renderInterview = (interview) => {
    switch (interview) {
      case 0:
        return <Input label="Satış Tamam Metni" placeholder="Satış tamam metnini giriniz" />
        break;
      case 1:
        
        break;
      case 2:
        break;
      default:
      // code block
    }
  }

  render() {
    const { navigate } = this.props.navigation;
    const {
      productArray,
      presentationsTypes,
      presentation,
      interviewResult,
      interview
    } = this.state;
    return (
      <View style={homeStyles.wrapper}>
        <StatusBar barStyle="light-content" />
        <KeyboardAwareScrollView
          showsVerticalScrollIndicator={false} contentContainerStyle={[styles.keyboard]} extraHeight={40}>
          <Text style={homeStyles.loginText}>Fiberteknoloji ve Hometechnology</Text>
          <Input label="Adı" placeholder="Adınızı giriniz" />
          <Input label="Soyadı" placeholder="Soyadınızı giriniz" />
          <Input
            label="Cep Telefonu"
            placeholder="Cep telefonunuzu giriniz"
          />
          <Select
            label="Hangi Ürün Sunuldu ?"
            selectText="İlgili alanı seçiniz"
            array={productArray}
            onValueChange={value => { this.setState({ product: value }) }}
            onRef={el => { this.state.product = el; }} />
          <View style={homeStyles.tabs}>
            <Text style={homeStyles.tabTitle}>Sunum Şekli</Text>
            {
              presentationsTypes.map((item, index) => {
                return (
                  presentation === index ?
                    <Tab title={item.label} active />
                    :
                    <Tab title={item.label} onPress={() => this.setState({ presentation: index })} />
                )
              })
            }
          </View>
          {
            this.renderPresentation(presentation)
          }
          <View style={homeStyles.tabs}>
            <Text style={homeStyles.tabTitle}>Görüşme Sonucu</Text>
            {
              interviewResult.map((item, index) => {
                return (
                  interview === index ?
                    <Tab title={item.label} active />
                    :
                    <Tab title={item.label} onPress={() => this.setState({ interview: index })} />
                )
              })
            }
          </View>
          {
            this.renderInterview(interview)
          }
        </KeyboardAwareScrollView>
      </View>
    );
  }
}

export default FormOne;