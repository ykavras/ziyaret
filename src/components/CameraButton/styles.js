import { Dimensions, StyleSheet } from 'react-native';
import theme from '../../lib/theme';

export default StyleSheet.create({
  capture: {
    backgroundColor: theme.colorWhite,
    borderRadius: 6,
    width: 70,
    height: 70,
    borderRadius: 35,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
  },
  back: {
    width: 50,
    height: 30,
    padding: 6,
    backgroundColor: theme.colorWhite,
    borderRadius: 10,
  },
  icon: {
    width: '100%',
    height: '100%',
    resizeMode: 'contain',
  }
});
