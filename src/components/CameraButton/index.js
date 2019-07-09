import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import styles from './styles';

export function CameraButton(props) {
  const {
    label,
    onPress
  } = props;
  return (
    <TouchableOpacity onPress={onPress} style={styles.capture}>
      <Text style={styles.captureTitle}>{label}</Text>
    </TouchableOpacity>
  );
}

CameraButton.defaultProps = {
  label: 'TITLE',
};

export default CameraButton;