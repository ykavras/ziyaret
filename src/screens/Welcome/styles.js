import { StyleSheet, Dimensions } from 'react-native';
import theme from '../../lib/theme';

export default StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: theme.colorBlue,
    justifyContent: 'center',
    paddingHorizontal: 15,
  },
  loginText: {
    fontFamily:theme.fontSemiBold,
    fontSize: 30,
    color: theme.colorWhite,
    marginBottom: 20,
  },
  button: {
    marginTop: 10,
  }
});
