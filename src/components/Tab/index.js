import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import styles from './styles';


export function Tab(props) {
  const {
    title,
    onPress,
    active
  } = props;
  return (
    <TouchableOpacity style={styles.circleWrapper} onPress={onPress}>
      <View style={styles.circle}>
        {
          active ? <View style={styles.circleIn} /> : null
        }
      </View>
      <Text style={styles.circleTitle}>{title}</Text>
    </TouchableOpacity>
  );
}

Tab.defaultProps = {
  title: 'Default title',
};

export default Tab;