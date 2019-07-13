import React from 'react';
import { View, Text } from 'react-native';
import RNPickerSelect from 'react-native-picker-select';
import styles from './styles';
import theme from '../../lib/theme';

const pickerStyle = {
  inputIOS: {
    paddingVertical: 16,
    paddingHorizontal: 10,
    fontFamily: theme.fontMedium,
    color: theme.colorWhite,
    fontSize: 12,
  },
  inputAndroid: {
    paddingVertical: 16,
    paddingHorizontal: 10,
    fontFamily: theme.fontMedium,
    color: theme.colorWhite,
    fontSize: 12,
  }
};

export function Select(props) {
  const {
    label,
    array,
    onRef,
    onValueChange,
    selectText,
    itemKey,
    value
  } = props;
  return (
    <View style={styles.inputWrapper}>
      <Text style={styles.inputLabel}>{label}</Text>
      <RNPickerSelect
        hideIcon
        doneText="Tamam"
        placeholder={{
          label: `${selectText}`,
          value: value ? value : undefined,
          color: theme.colorBlue,
        }}
        placeholderTextColor="rgba(255,255,255,0.4)"
        items={array}
        onValueChange={onValueChange}
        style={pickerStyle}
        useNativeAndroidPickerStyle={false}
        ref={onRef}
        itemKey={itemKey}
        value={value}
      />
    </View>
  );
}

Select.defaultProps = {
  label: 'Default title',
  selectText: 'Default Text'
};

export default Select;