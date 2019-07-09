import { Dimensions, StyleSheet } from 'react-native';
import theme from '../../lib/theme';

export default StyleSheet.create({
  capture: {
    backgroundColor: theme.colorWhite,
    borderRadius: 6,
    width: 70,
    height: 70,
    borderRadius: 30,
    alignItems: 'center',
    justifyContent: 'center',
  },
  captureTitle: {
    padding: 6,
    fontFamily: theme.fontMedium,
    color: 'black',
    fontSize: 16,
    textAlign: 'center'
  }
});
