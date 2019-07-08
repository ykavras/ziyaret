import React, { Component } from 'react';
import {
  View, StatusBar, TouchableOpacity, Text, Animated, Easing, Dimensions
} from 'react-native';
import homeStyles from '../styles';
import styles from './styles';

const { width, height } = Dimensions.get('window');

class Choose extends Component {

  constructor(props){
    super(props);
    this.state = {
       top: new Animated.Value(-height/2),
       bottom: new Animated.Value(-height/2),
       opacity: new Animated.Value(0),
    }
  }

  anim = (state, toValue) => {
    Animated.timing(state, {
      toValue,
      duration: 2000,
      easing: Easing.elastic()
    }).start()
  }

  componentDidMount(){
    const { top, bottom, opacity } = this.state;
    this.anim(top, 0)
    this.anim(bottom, 0)
    this.anim(opacity, 1)
  }

  render() {
    const { top, bottom, opacity } = this.state;
    return (
      <View style={homeStyles.wrapper}>
        <StatusBar barStyle="dark-content" />
        <Animated.View style={ styles.centered }>
          <Animated.View style={[ styles.button, styles.buttonLeft, { top, opacity } ]}>
            <TouchableOpacity style={ styles.buttons }>
              <Text style={[ styles.buttonTitle, styles.buttonTitleLeft ]}>Fiberteknoloji</Text>
              <Text style={[ styles.buttonTitle, styles.buttonTitleLeft ]}>ve</Text>
              <Text style={[ styles.buttonTitle, styles.buttonTitleLeft ]}>Hometechnology</Text>
            </TouchableOpacity>
          </Animated.View>
          <Animated.View style={[ styles.button, styles.buttonRight, { bottom, opacity } ]}>
            <TouchableOpacity style={ styles.buttons }>
              <Text style={styles.buttonTitle}>Bilişim Mobil Teknoloji</Text>
            </TouchableOpacity>
          </Animated.View>
        </Animated.View>
      </View>
    );
  }
}

export default Choose;