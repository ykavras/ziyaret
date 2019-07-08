import { Dimensions, StyleSheet } from 'react-native';
import theme from '../../lib/theme';

export default StyleSheet.create({
    buttonWrapper: {
        borderRadius: 6,
        backgroundColor: theme.colorWhite,
      },
      buttonTitle: {
        padding: 12,
        color: theme.colorBlue,
        fontFamily: theme.fontSemiBold,
        fontSize: 14,
        textAlign: 'center'
      },
});
