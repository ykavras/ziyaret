import { StyleSheet } from 'react-native';
import theme from '../../lib/theme';

export default StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: theme.colorBlue,
    justifyContent: 'center',
    alignContent: 'center'
  },
  errorText: {
    textAlign: 'center',
    paddingVertical: 10,
    fontSize: 14,
    fontFamily: theme.fontRegular,
    color: theme.colorYellow,
  },
  listing: {
    paddingHorizontal: 15,
    paddingTop: 80,
    paddingBottom: 60
  },
  textWrapper: {
    paddingHorizontal: 10,
    paddingVertical: 15,
    borderWidth: 2,
    borderRadius: 6,
    borderColor: theme.colorYellow,
    marginBottom: 20,
  },
  text: {
    fontFamily: theme.fontRegular,
    fontSize: 16,
    color: theme.colorWhite
  },
  wrapperNote: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundColor: 'rgba(0,0,0,0.8)',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 15,
  },
  wrapperNoteIn: {
    padding: 10,
    backgroundColor: theme.colorWhite,
    borderWidth: 2,
    borderRadius: 6,
    borderColor: theme.colorYellow,
    width: '100%',
  },
  noteTitle: {
    color: theme.colorBlue,
    fontFamily: theme.fontBlack,
    fontSize: 26,
    textAlign: 'center',
    marginBottom: 10,
  },
  noteInput: {
    backgroundColor: theme.colorBlue,
    color: theme.colorWhite,
    fontFamily: theme.fontMedium,
    fontSize: 14,
    padding: 10,
    marginBottom: 10,
    borderRadius: 6,
    textAlignVertical: "top"
  },
  noteButton: {
    marginTop: 10,
  },
  openPost: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    width: '100%',
    height: 60,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 2,
    zIndex: 2,
    backgroundColor: theme.colorWhite,
    flexDirection: 'row',
  },
  openPostBtn: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row'
  },
  openPostBtnIcon: {
    width: 30,
    height: 30,
    resizeMode: 'contain'
  },
  openPostTitle: {
    fontSize: 16,
    color: theme.colorBlue,
    fontFamily: theme.fontMedium,
    paddingLeft: 10,
  },
  btnBack: {
    width: 60,
    height: 60,
    borderBottomRightRadius: 30,
    backgroundColor: theme.colorWhite,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    left: 0,
    top: 0,
    zIndex: 1,
    elevation: 1,
  },
  btnBackIcon: {
    width: 24,
    height: 30,
    resizeMode: 'contain'
  },
});