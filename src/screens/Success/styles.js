import { StyleSheet } from 'react-native';
import theme from '../../lib/theme';

export default StyleSheet.create({
  successWrapper: {
    position: 'absolute',
    left: 0,
    top: 0,
    right: 0,
    bottom: 0,
    backgroundColor: theme.colorYellow,
    zIndex: 2,
    alignItems: 'center',
    justifyContent: 'center',
    alignContent: 'center',
  },
  successIcon: {
    width: 200,
    height: 200,
    resizeMode: 'contain',
  },
  successTitle: {
    fontFamily: theme.fontSemiBold,
    color: theme.colorBlue,
    fontSize: 40,
    paddingTop: 20,
  },
})