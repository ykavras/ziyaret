import React from 'react';
import { View, Text, TextInput } from 'react-native';
import styles from './styles';

export function Input(props) {
  const {
    label,
    placeholder,
    password,
  } = props;
  return (
    <View style={styles.inputWrapper}>
        <Text style={styles.inputLabel}>{label}:</Text>
        <TextInput 
          style={styles.input} placeholder={placeholder}
          placeholderTextColor="rgba(255,255,255,0.4)"
          secureTextEntry={password} />
    </View>
  );
}

Input.defaultProps = {
  label: 'Default title',
  password: false,
  placeholder: 'Default text',
};

export default Input;