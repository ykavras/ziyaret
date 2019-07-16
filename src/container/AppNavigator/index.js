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
  Form,
  Success,
  Choose,
  Notes,
} from '../../screens';


const StackNavigator = createStackNavigator({
  Login,
  Form,
  Success,
  Choose,
  Notes,
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
  Form,
  Success,
  Choose,
  Notes,
}, {
  initialRouteName: 'Login',
});

export default createAppContainer(RootNavigator);
