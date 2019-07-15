import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import styles from './styles';
import theme from '../../lib/theme';

export function Input(props) {
  const {
    title,
    onPress,
    color,
    bg
  } = props;
  return (
    <TouchableOpacity style={[styles.buttonWrapper, { backgroundColor: bg }]} onPress={onPress}>
      <Text style={[styles.buttonTitle, { color }]}>{title}</Text>
    </TouchableOpacity>
  );
}

Input.defaultProps = {
  title: 'Default title',
  color: theme.colorBlue,
  bg: theme.colorWhite
};

export default Input;