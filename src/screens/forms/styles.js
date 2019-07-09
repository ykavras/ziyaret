import { StyleSheet, Dimensions } from 'react-native';
import theme from '../../lib/theme';

const { width, height } = Dimensions.get('window');

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
  tabs: {
    borderWidth: 1,
    borderColor: theme.colorWhite,
    borderRadius: 6,
    paddingVertical: 16,
    paddingHorizontal: 10,
    fontFamily: theme.fontMedium,
    color: theme.colorWhite,
    fontSize: 12,
    marginVertical: 15,
    paddingBottom: 8,
  },
  tabTitle: {
    position: 'absolute',
    top: -14,
    left: 10,
    fontSize: 12,
    fontFamily: theme.fontMedium,
    color: theme.colorWhite,
    padding: 4,
    backgroundColor: theme.colorBlue,
  },
  filesWrapper: {
    marginBottom: 10,
  },
  cameraWrapper: {
    position: 'absolute',
    left: 0,
    top: 0,
    right: 0,
    width,
    height: height - 20,
    backgroundColor: 'black',
    zIndex: 2
  },
  preview: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    paddingBottom: 20,
  },
  captureWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    width: '100%',
  },
  waiting: {
    backgroundColor: theme.colorBlue,
    width: '100%',
    height: '100%',
    textAlign: 'center',
    justifyContent: 'center'
  },
  waitingTitle: {
    color: theme.colorWhite,
    fontSize: 16,
    fontFamily: theme.fontMedium,
    textAlign: 'center'
  },
  snapImage: {
    width: 40,
    height: 80,
    resizeMode: 'contain',
    borderRadius: 6,
  }
});