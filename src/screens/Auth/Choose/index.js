import React, { Component } from 'react';
import {
  View, StatusBar, TouchableOpacity, Text, Animated, Easing, Dimensions
} from 'react-native';
import homeStyles from '../styles';
import styles from './styles';

const { width, height } = Dimensions.get('window');

const heightHalf = -height / 2;

class Choose extends Component {

  constructor(props) {
    super(props);
    this.state = {
      top: new Animated.Value(heightHalf),
      bottom: new Animated.Value(heightHalf),
      opacity: new Animated.Value(0),
    }
  }

  anim = (state, toValue) => {
    Animated.timing(state, {
      toValue,
      duration: 500,
      easing: Easing.easing
    }).start()
  }

  componentDidMount() {
    const { top, bottom, opacity } = this.state;
    const animArray = [[top, 0], [bottom, 0], [opacity, 1]];
    animArray.forEach((item) => {
      this.anim(item[0], item[1])
    });
  }

  render() {
    const { top, bottom, opacity } = this.state;
    const { navigate } = this.props.navigation;
    return (
      <View style={homeStyles.wrapper}>
        <StatusBar barStyle="dark-content" />
        <Animated.View style={styles.centered}>
          <Animated.View style={[styles.button, styles.buttonLeft, { top, opacity }]}>
            <TouchableOpacity style={styles.buttons} onPress={() => navigate('FormOne')}>
              <Text style={[styles.buttonTitle, styles.buttonTitleLeft]}>Fiberteknoloji</Text>
              <Text style={[styles.buttonTitle, styles.buttonTitleLeft]}>ve</Text>
              <Text style={[styles.buttonTitle, styles.buttonTitleLeft]}>Hometechnology</Text>
            </TouchableOpacity>
          </Animated.View>
          <Animated.View style={[styles.button, styles.buttonRight, { bottom, opacity }]}>
            <TouchableOpacity style={styles.buttons}>
              <Text style={styles.buttonTitle}>Bilişim Mobil Teknoloji</Text>
            </TouchableOpacity>
          </Animated.View>
        </Animated.View>
      </View>
    );
  }
}

export default Choose;