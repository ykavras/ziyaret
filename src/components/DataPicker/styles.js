import { StyleSheet } from 'react-native';
import theme from '../../lib/theme';

export default StyleSheet.create({
  inputWrapper: {
    borderWidth: 1,
    borderRadius: 6,
    borderColor: theme.colorWhite,
    marginVertical: 15
  },
  inputLabel: {
    position: 'absolute',
    top: -14,
    left: 10,
    fontSize: 12,
    fontFamily: theme.fontMedium,
    color: theme.colorWhite,
    padding: 4,
    backgroundColor: theme.colorBlue,
  },
  dateWrapper: {
    flexDirection: 'row',
  },
  date: {
    width: '60%',
    justifyContent: 'center',
  },
  time: {
    width: '40%',
    justifyContent: 'center',
  },
  dateIcon: {
    position: 'absolute',
    right: 14,
    width: 14,
    height: 7,
    resizeMode: 'contain',
  },
  dateInput: {
    paddingVertical: 8,
    paddingHorizontal: 10,
    width: '100%',
  }
});