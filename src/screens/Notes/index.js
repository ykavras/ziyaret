import React, { Component } from 'react';
import { View, StatusBar, FlatList, Text, ActivityIndicator, TextInput, Button, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getNotes, postNote, notesChanged, notesDefault } from '../../store/actions/notes';
import styles from './styles';
import Note from '../../assets/icons/Note';
import BackIcon from '../../assets/icons/Back';

class Notes extends Component {

  constructor(props) {
    super(props);
    this.state = {
      note: false
    }
  }

  componentDidMount() {
    this.props.getNotes()
  }

  renderGetNotes = (isNotes, notesErrorMessage, notes) => {
    if (isNotes) {
      return (<ActivityIndicator size="large" color="white" />)
    }
    if (notesErrorMessage) {
      for (let [key, value] of Object.entries(notesErrorMessage.data)) {
        return <Text style={styles.errorText}>{key} : {value}</Text>
      }
    }
    if (notes) {
      return (
        <FlatList contentContainerStyle={styles.listing} data={notes} renderItem={({ item }) =>
          <View key={item.id} style={styles.textWrapper}>
            <Text style={styles.text}>{item.text}</Text>
          </View>}
        />
      )
    }
  }

  onNotesChanged = (text) => {
    this.props.notesChanged(text)
  }

  onPost = async () => {
    try {
      const { text } = await this.props.getNotesToProps;
      await this.props.postNote(text)
    } catch (e) {
      console.log(error)
    }
  };

  renderPost = (isPostNote, postNoteErrorMessage, postNote) => {
    if (isPostNote) {
      return (<ActivityIndicator color="#114AA1" />)
    }

    if (postNoteErrorMessage) {
      for (let [key, value] of Object.entries(postNoteErrorMessage.data)) {
        return <Text style={styles.errorText}>{key} : {value}</Text>
      }
    }

    if (postNote) {
      this.props.notesDefault();
      this.props.navigation.navigate('Success');
    }

    return (<Button title="Notunu Gönder" color="#114AA1" onPress={this.onPost.bind(this)} />)
  }

  note = () => {
    this.setState({ note: !this.state.note })
  }

  render() {
    const { isNotes, notesErrorMessage, notes, isPostNote, postNoteErrorMessage, postNote } = this.props.getNotesToProps;
    const { note } = this.state;
    return (
      <View style={styles.wrapper}>
        <StatusBar barStyle="light-content" />
        <TouchableOpacity style={styles.btnBack} onPress={() => this.props.navigation.navigate('Choose')}>
          <BackIcon fill="blue" style={styles.btnBackIcon} />
        </TouchableOpacity>
        {
          this.renderGetNotes(isNotes, notesErrorMessage, notes)
        }
        {
          note
            ?
            <View style={styles.wrapperNote}>
              <View style={styles.wrapperNoteIn}>
                <Text style={styles.noteTitle}>Notum</Text>
                <TextInput
                  placeholder="Notunuzu yazınız"
                  placeholderTextColor="rgba(255,255,255,0.5)"
                  style={styles.noteInput}
                  numberOfLines={10}
                  multiline={true}
                  underlineColorAndroid="transparent"
                  onChangeText={this.onNotesChanged.bind(this)}
                />
                {
                  this.renderPost(isPostNote, postNoteErrorMessage, postNote)
                }
              </View>
            </View>
            :
            null
        }
        <View style={styles.openPost}>
          <TouchableOpacity style={styles.openPostBtn} onPress={() => this.note()}>
            <Note fill="#114AA1" style={styles.openPostBtnIcon} />
            <Text style={styles.openPostTitle}>{note ? 'Not Ekleyi Kapat' : 'Not Ekle'}</Text>
          </TouchableOpacity>
        </View>
      </View>
    )
  }
}

Notes.propTypes = {
  getNotes: PropTypes.func.isRequired,
  getNotesToProps: PropTypes.object.isRequired,
  postNote: PropTypes.func.isRequired,
  notesChanged: PropTypes.func.isRequired,
  notesDefault: PropTypes.func.isRequired,
};

const mapStateToProps = state => {
  return {
    getNotesToProps: state.notesReducer,
  }
};

export default connect(mapStateToProps, { getNotes, postNote, notesChanged, notesDefault })(Notes)