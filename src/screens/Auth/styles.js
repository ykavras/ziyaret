import { StyleSheet, Dimensions } from 'react-native';
import theme from '../../lib/theme';

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
  }
});