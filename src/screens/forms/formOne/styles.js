import { StyleSheet, Dimensions } from 'react-native';
import theme from '../../../lib/theme';

export default StyleSheet.create({
  keyboard: {
    paddingVertical: 40,
    paddingHorizontal: 15,
  },
  successText: {
    textAlign: 'center',
    paddingVertical: 10,
    fontSize: 14,
    fontFamily: theme.fontRegular,
    color: theme.colorWhite
  },
  successTextErr: {
    color: theme.colorYellow,
  },
});
