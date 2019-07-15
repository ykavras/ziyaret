import { Dimensions, StyleSheet } from 'react-native';
import theme from '../../lib/theme';

export default StyleSheet.create({
  inputWrapper: {
    borderWidth: 1,
    borderRadius: 6,
    borderColor: theme.colorBlack,
    marginVertical: 15
  },
  inputLabel: {
    position: 'absolute',
    top: -14,
    left: 10,
    fontSize: 12,
    fontFamily: theme.fontMedium,
    color: theme.colorBlack,
    padding: 4,
    backgroundColor: theme.colorWhite,
  }
});