import React from 'react';
import { Provider } from 'react-redux';
import { createAppContainer } from 'react-navigation';
import AppNavigator from './src/container/AppNavigator';
import store from './src/store';
import SplashScreen from 'react-native-splash-screen';

import NavigationService from './src/lib/NavigatorService';

const AppContainer = createAppContainer(AppNavigator);

export default class App extends React.Component {
  componentDidMount(){
    SplashScreen.hide();
  }
  render() {
    return (
      <Provider store={store}>
        <AppContainer ref={(navigatorRef) => {
          NavigationService.setTopLevelNavigator(navigatorRef);
        }}
        />
      </Provider>
    );
  }
}
console.disableYellowBox = true;