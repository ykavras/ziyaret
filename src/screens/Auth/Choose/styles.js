import { StyleSheet, Dimensions } from 'react-native';
import theme from '../../../lib/theme';

export default StyleSheet.create({
  centered: {
    flex: 1,
  },
  button: {
    flex: 1,
  },
  buttons: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonLeft: {
    backgroundColor: theme.colorYellow,
  },
  buttonRight: {
    backgroundColor: theme.colorBlue,
  },
  buttonTitle: {
    fontSize: 30,
    fontFamily: theme.fontSemiBold,
    color: theme.colorWhite,
    textAlign: 'center'
  },
  buttonTitleLeft: {
    color: theme.colorBlue,
  },
});
