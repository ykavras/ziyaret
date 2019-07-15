import { StyleSheet } from 'react-native';
import theme from '../../lib/theme';

export default StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: theme.colorBlue,
    paddingTop: 100,
  },
  wrapperIn: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
  },
  button: {
    width: '49%',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 2,
    borderRadius: 6,
    borderColor: theme.colorWhite,
    paddingVertical: 60,
  },
  buttonTop: {
    backgroundColor: theme.colorBlue,
  },
  buttonBottom: {
    backgroundColor: theme.colorYellow,
  },
  buttonTitle: {
    fontFamily: theme.fontBlack,
    fontSize: 20,
    color: theme.colorWhite,
    textAlign: 'center'
  },
  buttonTitleBlue: {
    color: theme.colorBlue,
  },
  btnLogout: {
    height: 60,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 2,
    zIndex: 2,
    backgroundColor: theme.colorWhite,
    flexDirection: 'row',
  },
  btnLogoutIcon: {
    width: 30,
    height: 30,
    resizeMode: 'contain'
  },
  btnLogoutText: {
    fontSize: 16,
    color: 'red',
    fontFamily: theme.fontMedium,
    paddingLeft: 10,
  },
  logo: {
    width: 'auto',
    height: 80,
    resizeMode: 'contain',
  },
  userInfo: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    backgroundColor: theme.colorWhite,
  },
  userText: {
    fontFamily: theme.fontSemiBold,
    color: theme.colorBlue,
    fontSize: 18,
    textAlign: 'center',
    paddingVertical: 10
  },
  successTextErr: {
    paddingBottom: 10,
    textAlign: 'center',
    fontFamily: theme.fontMedium,
    color: theme.colorYellow
  },
});