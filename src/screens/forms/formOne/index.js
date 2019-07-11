import React, { Component, Fragment } from 'react';
import {
  View, StatusBar, Text, Image, ActivityIndicator
} from 'react-native';
import homeStyles from '../styles';
import styles from './styles';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { Input, Button, Select, Tab, DataPicker, AddFile, CameraButton } from '../../../components';
import DocumentPicker from 'react-native-document-picker';
import { RNCamera } from 'react-native-camera';
import Video from 'react-native-video';
import AudioRecord from 'react-native-audio-record';
import AudioIcon from '../../../assets/icons/Microphone';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {
  postInterview,
  nameChanged,
  surnameChanged,
  phoneChanged,
  presentChanged,
  refererFirstNameChanged,
  refererLastNameChanged,
  refererPhoneChanged,
  standAreaChanged,
  standTimeChanged,
  siteNameChanged,
  blockNameChanged,
  flatNoChanged,
  interViewResultChanged,
  interViewResultDetailChanged,
  revisitTimeChanged,
  otherIssChanged,
  fileChanged,
  photoChanged,
  voiceChanged,
  longChanged,
  latChanged,
  offeredProductChanged,
} from "../../../store/actions/example";

class FormOne extends Component {
  constructor(props) {
    super(props);
    this.state = {
      image: '',
      video: '',
      presentation: '',
      interview: '',
      subscribers: '',
      date: '',
      time: '',
      camera: false,
      recording: false,
      audio: false,
      audioData: false,
      mapRegion: null,
      productArray: [
        {
          label: 'Fiber İnternet',
          value: 1,
        },
        {
          label: 'Fiber+TV’li İnter net',
          value: 2,
        },
        {
          label: 'Fiber+Donanımlı Kampanya',
          value: 3,
        }
      ],
      presentationsTypes: [
        {
          label: 'Referans',
          value: 'ref',
        },
        {
          label: 'Stand',
          value: 'stand',
        },
        {
          label: 'D2D',
          value: 'D2D',
        },
        {
          label: 'Hunter',
          value: 'hunter',
        }
      ],
      interviewResult: [
        {
          label: 'Satış Tamam',
          value: 'ST',
        },
        {
          label: 'Tekrar Ziyaret Edilecek',
          value: 'TZ',
        },
        {
          label: 'Olumsuz',
          value: 'olm',
        },
        {
          label: 'Kapı Açılmadı',
          value: 'KA',
        },
        {
          label: 'Başka ISS Abonesi',
          value: 'BI',
        },
        {
          label: 'Fiyat Yüksek',
          value: 'FY',
        }
      ],
      subscribersArray: [
        {
          label: 'Vodafone',
          value: 'Vodafone',
        },
        {
          label: 'Türk Telekom',
          value: 'Türk Telekom',
        },
        {
          label: 'Metro',
          value: 'Metro',
        },
      ]
    }
  }

  componentDidMount() {
    const options = {
      sampleRate: 44100,  // default 44100
      channels: 1,        // 1 or 2, default 1
      bitsPerSample: 16,  // 8 or 16, default 16
      audioSource: 6,     // android only (see below)
      wavFile: 'record.wav' // default 'audio.wav'
    };

    AudioRecord.init(options);


    if (navigator.geolocation) {
      var location_timeout = setTimeout("geolocFail()", 10000);

      const { latChanged, longChanged } = this.props;

      navigator.geolocation.getCurrentPosition(function (position) {
        clearTimeout(location_timeout);

        var lat = position.coords.latitude;
        var lng = position.coords.longitude;
        latChanged(lat);
        longChanged(lng);
      }, function (error) {
        clearTimeout(location_timeout);
        geolocFail();
      });
    } else {
      // Fallback for no geolocation
      geolocFail();
    }

  }

  onNameChanged = (text) => { this.props.nameChanged(text); };

  onSurnameChanged = (text) => { this.props.surnameChanged(text); };

  onPhoneChanged = (text) => { this.props.phoneChanged(text); };

  onPresentChanged = (text) => { this.props.presentChanged(text); };

  onRefererFirstNameChanged = (text) => { this.props.refererFirstNameChanged(text); };

  onRefererLastNameChanged = (text) => { this.props.refererLastNameChanged(text); };

  onRefererPhoneChanged = (text) => { this.props.refererPhoneChanged(text); };

  onStandAreaChanged = (text) => { this.props.standAreaChanged(text); };

  onStandTimeChanged = (text) => { this.props.standTimeChanged(text); };

  onSiteNameChanged = (text) => { this.props.siteNameChanged(text); };

  onBlockNameChanged = (text) => { this.props.blockNameChanged(text); };

  onFlatNoChanged = (text) => { this.props.flatNoChanged(text); };

  onInterViewResultChanged = (text) => { this.props.interViewResultChanged(text); };

  onInterViewResultDetailChanged = (text) => { this.props.interViewResultDetailChanged(text); };

  onRevisitTimeChanged = () => {
    const { date, time } = this.state;
    if (date && time) {
      const month = date.slice(0, 2);
      const day = date.slice(3, 5);
      const year = date.slice(-2);
      const hour = time.slice(0, 2);
      const min = time.slice(-2);
      const newDate = new Date(year, month, day, hour, min)
      this.props.revisitTimeChanged(newDate);
    }
  };

  onOtherIssChanged = (text) => { this.props.otherIssChanged(text); };

  onFileChanged = (text) => { this.props.fileChanged(text); };

  onPhotoChanged = (text) => { this.props.photoChanged(text); };

  onVoiceChanged = (text) => { this.props.voiceChanged(text); };

  onOfferedProductChanged = (text) => { this.props.offeredProductChanged(text) };

  renderPresentation = (presentation) => {
    switch (presentation) {
      case 0:
        return (
          <Fragment>
            <Input label="Referans Adı"
              placeholder="Referansın adını giriniz"
              blurOnSubmit={false}
              returnKeyType="next"
              onSubmitEditing={() => { this.phoneNumber.focus(); }}
              onChangeText={this.onRefererFirstNameChanged.bind(this)}
            />
            <Input label="Referans Soyadı"
              placeholder="Referansın soyadını giriniz"
              blurOnSubmit={false}
              returnKeyType="next"
              onSubmitEditing={() => { this.phoneNumber.focus(); }}
              onChangeText={this.onRefererLastNameChanged.bind(this)}
            />
            <Input label="Cep Telefonu Numarası"
              placeholder="Cep telefonu numarasını giriniz"
              keyboardType="numeric"
              onRef={(input) => { this.phoneNumber = input; }}
              onChangeText={this.onRefererPhoneChanged.bind(this)}
            />
          </Fragment>
        )
        break;
      case 1:
        return (
          <Fragment>
            <Input label="Standın Kurulduğu Bölge Textbox"
              placeholder="Standın kurulduğu bölgeyi yazınız"
              blurOnSubmit={false}
              returnKeyType="next"
              onSubmitEditing={() => { this.stand.focus(); }}
              onChangeText={this.onStandAreaChanged.bind(this)}
            />
            <Input label="Stand Süresi"
              placeholder="Stand süresini giriniz"
              onRef={(input) => { this.stand = input; }}
              onChangeText={this.onStandTimeChanged.bind(this)}
            />
          </Fragment>
        )
        break;
      case 2:
        return (
          <Fragment>
            <Input label="Site Adı"
              placeholder="Site adını giriniz"
              blurOnSubmit={false}
              returnKeyType="next"
              onSubmitEditing={() => { this.block.focus(); }}
              onChangeText={this.onSiteNameChanged.bind(this)}
            />
            <Input label="Blok Adı"
              placeholder="Blok adını giriniz"
              blurOnSubmit={false}
              returnKeyType="next"
              onRef={(input) => { this.block = input; }}
              onSubmitEditing={() => { this.circle.focus(); }}
              onChangeText={this.onBlockNameChanged.bind(this)}
            />
            <Input label="Daire Numarası"
              placeholder="Daire Numarasını Giriniz"
              onRef={(input) => { this.circle = input; }}
              onChangeText={this.onFlatNoChanged.bind(this)}
            />
          </Fragment>
        )
        break;
      default:
      // code block
    }
  }

  renderInterview = (interview) => {
    const { date, time } = this.state;
    switch (interview) {
      case 0:
        return <Input
          label="Satış Tamam Metni"
          placeholder="Satış tamam metnini giriniz"
          onChangeText={this.onInterViewResultDetailChanged.bind(this)}
        />
        break;
      case 1:
        return (
          <DataPicker
            label="Tekrar Ziyaret Edilecek"
            date={date}
            time={time}
            onDateChangeDate={(item) => {
              this.setState({ date: item });
              this.onRevisitTimeChanged()
            }}
            onDateChangeTime={(item) => {
              this.setState({ time: item });
              this.onRevisitTimeChanged()
            }}
          />
        )
        break;
      case 2:
        return <Input
          label="Olumsuz Metni"
          placeholder="Neden olumsuz olduğunu giriniz"
          onChangeText={this.onInterViewResultDetailChanged.bind(this)}
        />
        break;
      case 3:
        break;
      case 4:
        return (
          <Select
            label="Başka ISS Abonesi"
            selectText="İlgili aboneyi seçiniz"
            array={this.state.subscribersArray}
            onValueChange={value => { this.onOtherIssChanged(value) }} />
        )
        break;
      case 5:
        return <Input
          label="Fiyat Yüksek"
          placeholder="Mevcut fatura tutarını giriniz"
          keyboardType="numeric"
          onChangeText={this.onInterViewResultDetailChanged.bind(this)}
        />
        break;
      default:
      // code block
    }
  }

  documentAdd = async () => {
    // Pick a single file
    try {
      const res = await DocumentPicker.pick({
        type: [DocumentPicker.types.images],
      });
      console.log(
        res.uri,
        res.type, // mime type
        res.name,
        res.size,
      );
      this.onFileChanged(res.uri)
    } catch (err) {
      if (DocumentPicker.isCancel(err)) {
        // User cancelled the picker, exit any dialogs or menus and move on
      } else {
        throw err;
      }
    }
  }

  takePicture = async (camera) => {
    if (camera) {
      const options = { quality: 0.5, base64: true };
      const data = await camera.takePictureAsync(options);
      await this.closeCamera(data.uri)
      this.onPhotoChanged(data.base64)
    }
  };

  openCamera = () => {
    this.setState({ camera: true })
  }

  closeCamera = (image) => { this.setState({ image, camera: false }) }

  stopRecording = async (camera) => {
    camera.stopRecording();
    this.setState({ camera: false, })
  }

  startRecording = async (camera) => {
    this.setState({ recording: true });
    const { uri, codec = "mp4" } = await camera.recordAsync();
    this.setState({ video: uri })
  }

  cameraView = () => {
    const { camera, recording } = this.state;
    const PendingView = () => (
      <View style={homeStyles.waiting}>
        <Text style={homeStyles.waitingTitle}>Yükleniyor...</Text>
      </View>
    );


    if (camera) {
      return (
        <View style={homeStyles.cameraWrapper}>
          <RNCamera
            style={homeStyles.preview}
            type={RNCamera.Constants.Type.back}
            flashMode={RNCamera.Constants.FlashMode.on}
            permissionDialogTitle={"Permission to use camera"}
            permissionDialogMessage={"We need your permission to use your camera phone"}
            androidCameraPermissionOptions={{
              title: 'Permission to use camera',
              message: 'We need your permission to use your camera',
              buttonPositive: 'Ok',
              buttonNegative: 'Cancel',
            }}
            androidRecordAudioPermissionOptions={{
              title: 'Permission to use audio recording',
              message: 'We need your permission to use your audio',
              buttonPositive: 'Ok',
              buttonNegative: 'Cancel',
            }}
          >
            {({ camera, status, recordAudioPermissionStatus }) => {
              if (status !== 'READY') return <PendingView />;
              return (
                <View style={homeStyles.captureWrapper}>
                  <CameraButton label="KAPAT" onPress={() => this.closeCamera()} />
                  <CameraButton label="ÇEK" onPress={() => this.takePicture(camera)} />
                  {
                    recording ?
                      <CameraButton label="BİTİR" onPress={() => this.stopRecording(camera)} />
                      :
                      <CameraButton label="KAYIT" onPress={() => this.startRecording(camera)} />
                  }
                </View>
              );
            }}
          </RNCamera>
        </View>
      )
    }
  }

  audioStart = () => {
    AudioRecord.start();
    this.setState({ audio: true })
  }

  audioStop = async () => {
    audioFile = await AudioRecord.stop();
    AudioRecord.on('data', data => {
      this.setState({ audio: false, audioData: true })
      this.onVoiceChanged(data)
    });
  }

  postDatas = async () => {
    try {
      const { name, surname, phone, present, refererFirstName, refererLastName, refererPhone, standArea,
        standTime, siteName, blockName, flatNo, interViewResult, interViewResultDetail, revisitTime, otherIss,
        file, photo, voice, long, lat, offeredProduct } = await this.props.postInterviewToProps;
      await this.props.postInterview(name, surname, phone, present, refererFirstName, refererLastName, refererPhone, standArea,
        standTime, siteName, blockName, flatNo, interViewResult, interViewResultDetail, revisitTime, otherIss,
        file, photo, voice, long, lat, offeredProduct);
    } catch (e) {
      console.log(error)
    }
  };

  renderItems = (isPost, isPostErrorMessage, post) => {
    console.log(isPost, isPostErrorMessage, post)
    if (isPost) {
      return (<ActivityIndicator style={styles.loading} color="white" />)
    }
    if (post) {
      return (<Text style={styles.successText}>Teşekkürler</Text>)
    }
    if (isPostErrorMessage) {
      for (let [key, value] of Object.entries(isPostErrorMessage.data)) {
        return (<Text style={[styles.successText, styles.successTextErr]}>{key} : {value}</Text>)
      }
    }
  }

  render() {
    const { navigate } = this.props.navigation;
    const {
      productArray,
      presentationsTypes,
      presentation,
      interviewResult,
      interview,
      image,
      video,
      audio,
      audioData,
    } = this.state;
    const { isPost, isPostErrorMessage, post } = this.props.postInterviewToProps;
    return (
      <View style={homeStyles.wrapper}>
        <StatusBar barStyle="dark-content" />
        <KeyboardAwareScrollView
          showsVerticalScrollIndicator={false} contentContainerStyle={[styles.keyboard]} extraHeight={40}>
          <Text style={homeStyles.loginText}>Fiberteknoloji ve Hometechnology</Text>
          <Input
            label="Adı"
            placeholder="Adınızı giriniz"
            blurOnSubmit={false} returnKeyType="next"
            onSubmitEditing={() => { this.surname.focus(); }}
            onChangeText={this.onNameChanged.bind(this)}
          />
          <Input
            label="Soyadı"
            placeholder="Soyadınızı giriniz"
            onRef={(input) => { this.surname = input; }}
            blurOnSubmit={false}
            returnKeyType="next"
            onSubmitEditing={() => { this.phone.focus(); }}
            onChangeText={this.onSurnameChanged.bind(this)}
          />
          <Input
            label="Cep Telefonu"
            keyboardType="numeric"
            placeholder="Cep telefonunuzu giriniz"
            onRef={(input) => { this.phone = input; }}
            onChangeText={this.onPhoneChanged.bind(this)}
          />
          <Select
            label="Hangi Ürün Sunuldu ?"
            selectText="İlgili alanı seçiniz"
            array={productArray}
            onValueChange={value => { this.onOfferedProductChanged(value) }} />
          <View style={homeStyles.tabs}>
            <Text style={homeStyles.tabTitle}>Sunum Şekli</Text>
            {
              presentationsTypes.map((item, index) => {
                return (
                  presentation === index ?
                    <Tab key={index} title={item.label} active />
                    :
                    <Tab
                      key={index}
                      title={item.label}
                      onPress={() => {
                        this.setState({ presentation: index })
                        this.onPresentChanged(item.value)
                      }
                      } />
                )
              })
            }
          </View>
          {
            this.renderPresentation(presentation)
          }
          <View style={homeStyles.tabs}>
            <Text style={homeStyles.tabTitle}>Görüşme Sonucu</Text>
            {
              interviewResult.map((item, index) => {
                return (
                  interview === index ?
                    <Tab key={index} title={item.label} active />
                    :
                    <Tab key={index} title={item.label} onPress={() => {
                      this.setState({ interview: index })
                      this.onInterViewResultChanged(item.value)
                    }} />
                )
              })
            }
          </View>
          {
            this.renderInterview(interview)
          }
          <View style={homeStyles.filesWrapper}>
            <AddFile title="Dosya Ekle" type="file" onPress={() => this.documentAdd()} />
            <AddFile title="Video/Fotoğraf Çek veya Ekle" type="gallery" onPress={() => this.openCamera()} />
            {
              audio ? <AddFile title="Stop" type="audio" onPress={() => this.audioStop()} /> : <AddFile title="Ses Kaydı Al" type="audio" onPress={() => this.audioStart()} />
            }
          </View>
          <View style={homeStyles.imgWrapper}>
            {image ? <Image source={{ uri: image }} style={homeStyles.snapImage} /> : null}
            {video ? <Video paused source={{ uri: video }} ref={(ref) => { this.player = ref }} onBuffer={this.onBuffer} onError={this.videoError} resizeMode="cover" style={homeStyles.snapVideo} /> : null}
            {audioData ? <AudioIcon style={homeStyles.snapImage} /> : null}
          </View>
          {
            this.renderItems(isPost, isPostErrorMessage, post)
          }
          <Button title="Formu Gönder" onPress={this.postDatas.bind(this)} />
        </KeyboardAwareScrollView>
        {
          this.cameraView()
        }
      </View>
    );
  }
}

FormOne.propTypes = {
  postInterview: PropTypes.func.isRequired,
  postInterviewToProps: PropTypes.object.isRequired
};

const mapStateToProps = state => {
  return {
    postInterviewToProps: state.exampleReducer,
  }
};

export default connect(mapStateToProps, {
  postInterview,
  nameChanged,
  surnameChanged,
  phoneChanged,
  presentChanged,
  refererFirstNameChanged,
  refererLastNameChanged,
  refererPhoneChanged,
  standAreaChanged,
  standTimeChanged,
  siteNameChanged,
  blockNameChanged,
  flatNoChanged,
  interViewResultChanged,
  interViewResultDetailChanged,
  revisitTimeChanged,
  otherIssChanged,
  fileChanged,
  photoChanged,
  voiceChanged,
  longChanged,
  latChanged,
  offeredProductChanged,
})(FormOne)