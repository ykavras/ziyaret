import { StyleSheet, Dimensions } from 'react-native';
import theme from '../../../lib/theme';

export default StyleSheet.create({
  loading: {
    marginTop: 40,
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
