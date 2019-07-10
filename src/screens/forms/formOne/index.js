import React, { Component, Fragment } from 'react';
import {
  View, StatusBar, Text, Image
} from 'react-native';
import homeStyles from '../styles';
import styles from './styles';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { Input, Button, Select, Tab, DataPicker, AddFile, CameraButton } from '../../../components';
import DocumentPicker from 'react-native-document-picker';
import { RNCamera } from 'react-native-camera';
import Video from 'react-native-video';
import AudioRecord from 'react-native-audio-record';
import { Buffer } from 'buffer';
import AudioIcon from '../../../assets/icons/Microphone';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getServices } from "../../../store/actions/example";

class FormOne extends Component {
  constructor(props) {
    super(props);
    this.state = {
      image: '',
      video: '',
      product: '',
      presentation: '',
      interview: '',
      subscribers: '',
      date: '',
      time: '',
      camera: false,
      recording: false,
      audio: false,
      audioData: '',
      productArray: [
        {
          label: 'Fiber İnternet',
          value: '0',
        },
        {
          label: 'Fiber+TV’li İnter net',
          value: '1',
        },
        {
          label: 'Fiber+Donanımlı Kampanya',
          value: '2',
        }
      ],
      presentationsTypes: [
        {
          label: 'Referans',
          value: 0,
        },
        {
          label: 'Stand',
          value: 1,
        },
        {
          label: 'D2D ve Hunter',
          value: 2,
        }
      ],
      interviewResult: [
        {
          label: 'Satış Tamam',
          value: '0',
        },
        {
          label: 'Tekrar Ziyaret Edilecek',
          value: '1',
        },
        {
          label: 'Olumsuz',
          value: '2',
        },
        {
          label: 'Kapı Açılmadı',
          value: '3',
        },
        {
          label: 'Başka ISS Abonesi',
          value: '4',
        },
        {
          label: 'Fiyat Yüksek',
          value: '5',
        }
      ],
      subscribersArray: [
        {
          label: 'Vodafone',
          value: '0',
        },
        {
          label: 'Türk Telekom',
          value: '1',
        },
        {
          label: 'Metro',
          value: '2',
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
      wavFile: 'test.wav' // default 'audio.wav'
    };

    AudioRecord.init(options);

    this.props.getServices();
  }

  renderPresentation = (presentation) => {
    switch (presentation) {
      case 0:
        return (
          <Fragment>
            <Input label="Referans Adı Soyadı"
              placeholder="Referans adı ve soyadı giriniz"
              blurOnSubmit={false}
              returnKeyType="next"
              onSubmitEditing={() => {
                this.phoneNumber.focus();
              }} />
            <Input label="Cep Telefonu Numarası"
              placeholder="Cep telefonu numarasını giriniz"
              keyboardType="numeric"
              onRef={(input) => { this.phoneNumber = input; }} />
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
              onSubmitEditing={() => {
                this.stand.focus();
              }} />
            <Input label="Stand Süresi"
              placeholder="Stand süresini giriniz"
              onRef={(input) => { this.stand = input; }} />
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
              onSubmitEditing={() => { this.block.focus(); }} />
            <Input label="Blok Adı"
              placeholder="Blok adını giriniz"
              blurOnSubmit={false}
              returnKeyType="next"
              onRef={(input) => { this.block = input; }}
              onSubmitEditing={() => { this.circle.focus(); }} />
            <Input label="Daire Numarası"
              placeholder="Daire Numarasını Giriniz"
              onRef={(input) => { this.circle = input; }} />
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
        return <Input label="Satış Tamam Metni" placeholder="Satış tamam metnini giriniz" />
        break;
      case 1:
        return (
          <DataPicker
            label="Tekrar Ziyaret Edilecek"
            date={date}
            time={time}
            onDateChangeDate={(item) => {
              this.setState({ date: item });
            }}
            onDateChangeTime={(item) => {
              this.setState({ time: item });
            }}
          />
        )
        break;
      case 2:
        return <Input label="Olumsuz Metni" placeholder="Neden olumsuz olduğunu giriniz" />
        break;
      case 3:
        break;
      case 4:
        return (
          <Select
            label="Başka ISS Abonesi"
            selectText="İlgili aboneyi seçiniz"
            array={this.state.subscribersArray}
            onValueChange={value => { this.setState({ subscribers: value }) }}
            onRef={el => { this.state.subscribers = el; }} />
        )
        break;
      case 5:
        return <Input label="Fiyat Yüksek" placeholder="Mevcut fatura tutarını giriniz" keyboardType="numeric" />
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
        res.size
      );
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
      chunk = Buffer.from(data, 'base64');
      this.setState({ audio: false, audioData: chunk })
    });
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
      audioData
    } = this.state;
    const { isHome, isHomeErrorMessage, home } = this.props.getServicesToProps;
    console.log(isHome, isHomeErrorMessage, home)
    return (
      <View style={homeStyles.wrapper}>
        <StatusBar barStyle="light-content" />
        <KeyboardAwareScrollView
          showsVerticalScrollIndicator={false} contentContainerStyle={[styles.keyboard]} extraHeight={40}>
          <Text style={homeStyles.loginText}>Fiberteknoloji ve Hometechnology</Text>
          <Input label="Adı" placeholder="Adınızı giriniz" blurOnSubmit={false} returnKeyType="next" onSubmitEditing={() => { this.surname.focus(); }} />
          <Input label="Soyadı" placeholder="Soyadınızı giriniz" onRef={(input) => { this.surname = input; }} blurOnSubmit={false} returnKeyType="next" onSubmitEditing={() => { this.phone.focus(); }} />
          <Input label="Cep Telefonu" keyboardType="numeric" placeholder="Cep telefonunuzu giriniz" onRef={(input) => { this.phone = input; }} />
          <Select
            label="Hangi Ürün Sunuldu ?"
            selectText="İlgili alanı seçiniz"
            array={productArray}
            onValueChange={value => { this.setState({ product: value }) }}
            onRef={el => { this.state.product = el; }} />
          <View style={homeStyles.tabs}>
            <Text style={homeStyles.tabTitle}>Sunum Şekli</Text>
            {
              presentationsTypes.map((item, index) => {
                return (
                  presentation === index ?
                    <Tab key={index} title={item.label} active />
                    :
                    <Tab key={index} title={item.label} onPress={() => this.setState({ presentation: index })} />
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
                    <Tab key={index} title={item.label} onPress={() => this.setState({ interview: index })} />
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
          <Button title="Formu Gönder" />
        </KeyboardAwareScrollView>
        {
          this.cameraView()
        }
      </View>
    );
  }
}

FormOne.propTypes = {
  getServices: PropTypes.func.isRequired,
  getServicesToProps: PropTypes.object.isRequired,
};

const mapStateToProps = state => {
  return {
    getServicesToProps: state.exampleReducer,
  }
};

export default connect(mapStateToProps, { getServices })(FormOne)