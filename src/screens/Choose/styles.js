import { StyleSheet } from 'react-native';
import theme from '../../lib/theme';

export default StyleSheet.create({
  wrapper: {
    flex: 1,
    flexDirection: 'column'
  },
  button: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonTop: {
    backgroundColor: theme.colorBlue,
  },
  buttonBottom: {
    backgroundColor: theme.colorYellow,
  },
  buttonTitle: {
    fontFamily: theme.fontBlack,
    fontSize: 50,
    color: theme.colorWhite,
  },
  buttonTitleBlue: {
    color: theme.colorBlue,
  },
  btnLogout: {
    height: 60,
    borderBottomRightRadius: 30,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 2,
    zIndex: 2,
    backgroundColor: theme.colorWhite
  },
  btnLogoutIcon: {
    width: 30,
    height: 30,
    resizeMode: 'contain'
  },
});