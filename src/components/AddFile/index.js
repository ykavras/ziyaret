import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import styles from './styles';
import AddFileIcon from '../../assets/icons/AddFile';
import GalleryIcon from '../../assets/icons/Gallery';
import AudioIcon from '../../assets/icons/Microphone';

const types = {
  file: <AddFileIcon style={styles.addFileIcon} />,
  gallery: <GalleryIcon style={styles.addFileIcon} />,
  audio: <AudioIcon style={styles.addFileIcon} />,
}

export function AddFile(props) {
  const {
    title,
    onPress,
    type
  } = props;
  return (
    <TouchableOpacity style={styles.addFile} onPress={onPress}>
      {
        types[type]
      }
      <Text style={styles.addFileText}>{title}</Text>
    </TouchableOpacity>
  );
}

AddFile.defaultProps = {
  title: 'Default title',
};

export default AddFile;