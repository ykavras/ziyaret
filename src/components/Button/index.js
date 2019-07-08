import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import styles from './styles';

export function Input(props) {
  const {
    title,
    onPress
  } = props;
  return (
    <TouchableOpacity style={styles.buttonWrapper} onPress={onPress}>
        <Text style={styles.buttonTitle}>{title}</Text>
    </TouchableOpacity>
  );
}

Input.defaultProps = {
  title: 'Default title',
};

export default Input;