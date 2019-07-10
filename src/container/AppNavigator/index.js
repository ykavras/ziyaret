import {
  createStackNavigator,
  createAppContainer,
  createSwitchNavigator,
} from 'react-navigation';
import {
  Animated, Easing,
} from 'react-native';
import {
  Login,
  Choose,
  FormOne,
  FormTwo
} from '../../screens';


const StackNavigator = createStackNavigator({
  Login,
  Choose,
  FormOne,
  FormTwo
}, {
  headerMode: 'none',
  navigationOptions: { headerVisible: false },
  mode: 'card',
  defaultNavigationOptions: {
    gesturesEnabled: true,
  },
  transitionConfig: () => ({
    transitionSpec: {
      duration: 0,
      timing: Animated.timing,
      easing: Easing.ease,
    },
  }),
});

const RootNavigator = createSwitchNavigator({
  StackNavigator,
  Login,
  Choose,
  FormOne,
  FormTwo
}, {
  initialRouteName: 'Login',
});

export default createAppContainer(RootNavigator);
