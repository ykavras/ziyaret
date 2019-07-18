import { StyleSheet, Dimensions } from 'react-native';
import theme from '../../../lib/theme';

export default StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: theme.colorBlue,
  },
  keyboard: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 15,
  },
  logo: {
    width: 'auto',
    height: 44,
    resizeMode: 'contain',
    marginBottom: 44,
  },
  loginText: {
    fontFamily: theme.fontSemiBold,
    fontSize: 20,
    color: theme.colorWhite,
    marginBottom: 20,
  },
  links: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 5,
  },
  link: {
    paddingVertical: 10,
  },
  linkTitle: {
    fontFamily: theme.fontRegular,
    fontSize: 12,
    lineHeight: 14,
    color: theme.colorWhite,
  },
  button: {
    marginTop: 10,
  },
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
  contractBtn: {
    marginTop: 10
  },
  contractText: {
    paddingVertical: 10,
    fontFamily: theme.fontRegular,
    color: theme.colorWhite
  },
  popupWrapper: {
    position: 'absolute',
    left: 0,
    top: 0,
    width: '100%',
    height: '100%',
    backgroundColor: theme.colorBlue,
    zIndex: 1,
    elevation: 1,
    paddingBottom: 60,
  },
  popupContent: {
    paddingHorizontal: 10,
  },
  h1: {
    fontFamily: theme.fontSemiBold,
    fontSize: 20,
    color: theme.colorWhite,
    paddingTop: 10,
  },
  version: {
    paddingBottom: 10,
    fontFamily: theme.fontRegular,
    color: theme.colorWhite,
    fontSize: 12,
  },
  description: {
    fontFamily: theme.fontRegular,
    color: theme.colorWhite,
    fontSize: 12,
  },
  h3: {
    fontFamily: theme.fontSemiBold,
    color: theme.colorWhite,
    fontSize: 16,
    paddingVertical: 10,
  },
  circle: {
    paddingLeft: 10
  },
  bold: {
    fontFamily: theme.fontSemiBold,
  },
  mt10: {
    marginTop: 10,
  },
  popupClose: {
    position: 'absolute',
    bottom: 10,
    width: '90%',
    height: 40,
    backgroundColor: theme.colorWhite,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 6,
    zIndex: 1,
    elevation: 1,
    alignSelf: 'center',
  },
  popupCloseTitle: {
    fontSize: 14,
    fontFamily: theme.fontMedium,
    color: theme.colorBlue,
  },
});
