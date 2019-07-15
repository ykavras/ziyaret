import { Dimensions, StyleSheet } from 'react-native';
import theme from '../../lib/theme';

export default StyleSheet.create({
  inputWrapper: {
    borderWidth: 1,
    borderRadius: 6,
    marginVertical: 15
  },
  inputLabel: {
    position: 'absolute',
    top: -14,
    left: 10,
    fontSize: 12,
    fontFamily: theme.fontMedium,
    padding: 4,
  },
  input: {
    paddingVertical: 16,
    paddingHorizontal: 10,
    fontFamily: theme.fontMedium,
    fontSize: 12,
  },
});
