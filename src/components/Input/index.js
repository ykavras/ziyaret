import React from 'react';
import { View, Text, TextInput } from 'react-native';
import styles from './styles';
import theme from '../../lib/theme';

export function Input(props) {
  const {
    label,
    placeholder,
    password,
    onRef,
    returnKeyType,
    onSubmitEditing,
    blurOnSubmit,
    keyboardType,
    onChangeText,
    value,
    type
  } = props;
  if (type === 'default') {
    return (
      <View style={[styles.inputWrapper, { borderColor: theme.colorWhite }]}>
        <Text style={[styles.inputLabel, { color: theme.colorWhite, backgroundColor: theme.colorBlue }]}>{label}:</Text>
        <TextInput
          style={[styles.input, { color: theme.colorWhite }]} placeholder={placeholder}
          placeholderTextColor="rgba(255,255,255,0.5)"
          secureTextEntry={password}
          ref={onRef}
          returnKeyType={returnKeyType}
          onSubmitEditing={onSubmitEditing}
          blurOnSubmit={blurOnSubmit}
          keyboardType={keyboardType}
          onChangeText={onChangeText}
          value={value}
        />
      </View >
    );
  }
  if (type === 'black') {
    return (
      <View style={[styles.inputWrapper, { borderColor: theme.colorBlack }]}>
        <Text style={[styles.inputLabel, { color: theme.colorBlack, backgroundColor: theme.colorWhite }]}>{label}:</Text>
        <TextInput
          style={[styles.input, { color: theme.colorBlack }]} placeholder={placeholder}
          placeholderTextColor="rgba(0,0,0,0.5)"
          secureTextEntry={password}
          ref={onRef}
          returnKeyType={returnKeyType}
          onSubmitEditing={onSubmitEditing}
          blurOnSubmit={blurOnSubmit}
          keyboardType={keyboardType}
          onChangeText={onChangeText}
          value={value}
        />
      </View >
    );
  }
}

Input.defaultProps = {
  label: 'Default title',
  password: false,
  placeholder: 'Default text',
  type: 'default'
};

export default Input;