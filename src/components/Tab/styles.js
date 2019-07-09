import { StyleSheet } from 'react-native';
import theme from '../../lib/theme';

export default StyleSheet.create({
  circleWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    marginVertical: 5
  },
  circle: {
    width: 14,
    height: 14,
    borderRadius: 20,
    padding: 2,
    borderWidth: 1,
    borderColor: theme.colorWhite,
    marginRight: 5,
  },
  circleIn: {
    width: '100%',
    height: '100%',
    borderRadius: 14,
    backgroundColor: theme.colorWhite,
  },
  circleTitle: {
    fontSize: 10,
    fontFamily: theme.fontMedium,
    color: theme.colorWhite,
  },
});