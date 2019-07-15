import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import styles from './styles';
import CameraIcon from '../../assets/icons/Camera';
import BackIcon from '../../assets/icons/Back';

const types = {
  camera: <CameraIcon style={styles.icon} />,
  back: <BackIcon style={styles.icon} />
}

export function CameraButton(props) {
  const {
    onPress,
    type,
    style
  } = props;
  if (type === 'back') {
    return (
      <TouchableOpacity onPress={onPress} style={[styles.back, style]}>
        {types[type]}
      </TouchableOpacity>
    );
  } else {
    return (
      <TouchableOpacity onPress={onPress} style={styles.capture}>
        {types[type]}
      </TouchableOpacity>
    );
  }

}

CameraButton.defaultProps = {
  label: 'TITLE',
  type: 'camera'
};

export default CameraButton;