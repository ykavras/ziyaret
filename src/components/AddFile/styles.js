import { StyleSheet } from 'react-native';
import theme from '../../lib/theme';

export default StyleSheet.create({
  addFile: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 5,
  },
  addFileIcon: {
    width: 30,
    height: 30,
    resizeMode: 'contain',
    marginRight: 10,
  },
  addFileText: {
    fontFamily: theme.fontMedium,
    color: theme.colorWhite,
    fontSize: 12,
  },
})