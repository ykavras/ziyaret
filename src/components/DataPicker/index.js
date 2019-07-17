import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import DatePicker from 'react-native-datepicker';
import styles from './styles';
import theme from '../../lib/theme';
import DownArrowIcon from '../../assets/icons/DownArrow';

const dateSetting = {
  dateInput: {
    borderWidth: 0,
    alignItems: 'flex-start',
  },
  btnTextCancel: {
    color: 'red',
    fontFamily: theme.fontSemiBold,
  },
  btnTextConfirm: {
    color: theme.colorBlue,
    fontFamily: theme.fontSemiBold,
  },
  placeholderText: {
    fontSize: 12,
    fontFamily: theme.fontMedium,
    color: theme.colorBlack,
  },
  dateText: {
    fontSize: 12,
    color: theme.colorBlack,
    fontFamily: theme.fontMedium,
  },
};

export function DataPicker(props) {
  const {
    label,
    date,
    time,
    onDateChangeDate,
    onDateChangeTime,
  } = props;
  return (
    <View style={styles.inputWrapper}>
      <Text style={styles.inputLabel}>{label}:</Text>
      <View style={styles.dateWrapper}>
        <View style={styles.date}>
          <DatePicker
            style={styles.dateInput}
            date={date}
            mode="date"
            placeholder="Tarih Seçiniz"
            format="DD-MM-YYYY"
            confirmBtnText="Tamam"
            cancelBtnText="Vazgeç"
            showIcon={false}
            customStyles={dateSetting}
            onDateChange={onDateChangeDate}
            androidMode="spinner"
          />
          <DownArrowIcon style={styles.dateIcon} />
        </View>
        <View style={styles.time}>
          <DatePicker
            style={styles.dateInput}
            date={time}
            mode="time"
            placeholder="Saat Seçiniz"
            confirmBtnText="Tamam"
            cancelBtnText="Vazgeç"
            showIcon={false}
            customStyles={dateSetting}
            onDateChange={onDateChangeTime}
            androidMode="spinner"
          />
          <DownArrowIcon style={styles.dateIcon} />
        </View>
      </View>
    </View>
  );
}

DataPicker.defaultProps = {
  label: 'Default title',
};

export default DataPicker;