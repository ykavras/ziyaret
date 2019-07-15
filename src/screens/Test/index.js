import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  ListView,
  View,
  TouchableOpacity
} from 'react-native';


var ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });

class SampleApp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchedFilter: [],
      query: '',
      filteringData: [
        {
          "id": 2,
          "name": "AÇELYA EVLERİ BAHÇEŞEHİR",
          "dealer": 1
        },
        {
          "id": 3,
          "name": "ADAY KONUT",
          "dealer": 1
        },
        {
          "id": 4,
          "name": "AĞAOĞLU MYTOWN ISPARTAKULE",
          "dealer": 1
        },
      ]
    };
  };

  searchedFilter = (text) => {
    if (text === '') {
      return this.setState({ searchedFilter: [] })
    } else {
      var searchedFilter = this.state.filteringData.filter(function (item) {
        return item.name.toLowerCase().indexOf(text.toLowerCase()) > -1;
      });
      this.setState({ searchedFilter: searchedFilter });
    }
  };

  renderText = (item) => {
    return (
      <TouchableOpacity onPress={() => this.setState({ query: item.name })}>
        <Text>{item.name}</Text>
      </TouchableOpacity>
    );
  };
  render() {
    const { query } = this.state;
    return (
      <View style={styles.container}>
        <TextInput style={styles.textinput} value={query}
          onChangeText={value => {
            this.setState({ query: value })
            this.searchedFilter(value)
          }}
          placeholder="Type your adress here" />
        <ListView dataSource={ds.cloneWithRows(this.state.searchedFilter)} renderRow={this.renderText} />
      </View>
    );
  };
}

var styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
  },
  textinput: {
    marginTop: 30,
    backgroundColor: '#DDDDDD',
    width: '100%',
    height: 40,
  }
});

export default SampleApp