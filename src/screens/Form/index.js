import React, { Component, Fragment } from 'react';
import {
  View, StatusBar, Text, Image, ActivityIndicator, TouchableOpacity
} from 'react-native';
import styles from './styles';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { Input, Button, Select, Tab, DataPicker, AddFile, CameraButton } from '../../components';
import DocumentPicker from 'react-native-document-picker';
import { RNCamera } from 'react-native-camera';
import Video from 'react-native-video';
import AudioRecord from 'react-native-audio-record';
import AudioIcon from '../../assets/icons/Microphone';
import ClosedIcon from '../../assets/icons/Closed';
import FileIcon from '../../assets/icons/AddFile';
import AsyncStorage from '@react-native-community/async-storage';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {
  postVisits,
  visitsDefault,
  companyName,
  customerFirstName,
  customerLastName,
  customerMobilePhone,
  customerPhone,
  isDecider,
  deciderFirstName,
  deciderLastName,
  deciderMobilePhone,
  sectorChanged,
  cityChanged,
  districtChanged,
  presentType,
  refererFirstName,
  refererLastName,
  refererMobilePhone,
  standArea,
  standTime,
  siteName,
  blockName,
  flatNo,
  interviewResult,
  interviewResultDetail,
  revisitTime,
  otherCompany,
  fileChanged,
  photoChanged,
  voiceChanged,
  longChanged,
  latChanged,
  dealerChanged,
  offeredProduct
} from "../../store/actions/visits";
import { getServices } from '../../store/actions/services';
import { getDealers } from '../../store/actions/dealers';

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      image: '',
      video: '',
      document: false,
      documentName: '',
      presentation: '',
      subscribers: '',
      date: '',
      time: '',
      camera: false,
      recording: false,
      audio: false,
      audioData: false,
      mapRegion: null,
      openForm1: false,
      openForm2: false,
      whichPresent: '',
      whichInterView: '',
      whichIsDecider: '',
      whichCities: '',
      presentTypeState: [
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
      otherCompany: [
        {
          label: 'Vodafone',
          value: 'vadafone',
        },
        {
          label: 'Türk Telekom',
          value: 'turktelekom',
        },
        {
          label: 'Metro',
          value: 'metro',
        },
        {
          label: 'Diğer',
          value: 'other',
        },
      ],
      isDecider: [
        {
          label: 'Evet',
          value: true
        },
        {
          label: 'Hayır',
          value: false
        }
      ],
      cities: [
        {
          label: 'İstanbul',
          value: 'İstanbul',
        },
        {
          label: 'Bölge Dışı',
          value: 'Bölge Dışı',
        }
      ],
      district: [
        {
          label: 'Bayrampaşa',
          value: 'Bayrampaşa',
        },
        {
          label: 'Sultangazi',
          value: 'Sultangazi',
        },
        {
          label: 'Bölge Dışı',
          value: 'Bölge Dışı',
        }
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
    this.props.getServices();
    this.props.getDealers();
  }

  onCompanyName = (text) => { this.props.companyName(text) }
  onCustomerFirstName = (text) => { this.props.customerFirstName(text) }
  onCustomerLastName = (text) => { this.props.customerLastName(text) }
  onCustomerMobilePhone = (text) => { this.props.customerMobilePhone(text) }
  onCustomerPhone = (text) => { this.props.customerPhone(text) }

  onIsDeciders = (text) => { this.props.isDecider(text) }
  onDeciderFirstName = (text) => { this.props.deciderFirstName(text) }
  onDeciderLastName = (text) => { this.props.deciderLastName(text) }
  onDeciderMobilePhone = (text) => { this.props.deciderMobilePhone(text) }

  onSectorChanged = (text) => { this.props.sectorChanged(text) }

  onCityChanged = (text) => { this.props.cityChanged(text) }
  onDistrictChanged = (text) => { this.props.districtChanged(text) }

  onPresentType = (text) => { this.props.presentType(text); }

  onRefererFirstName = (text) => { this.props.refererFirstName(text) }
  onRefererLastName = (text) => { this.props.refererLastName(text) }
  onRefererMobilePhone = (text) => { this.props.refererMobilePhone(text) }

  onStandArea = (text) => { this.props.standArea(text) }
  onStandTime = (text) => { this.props.standTime(text) }

  onSiteName = (text) => { this.props.siteName(text) }
  onBlockName = (text) => { this.props.blockName(text) }
  onFlatNo = (text) => { this.props.flatNo(text) }

  onInterviewResult = (text) => { this.props.interviewResult(text) }
  onInterviewResultDetail = (text) => { this.props.interviewResultDetail(text) }

  onRevisitTime = () => {
    const { date, time } = this.state;
    if (date && time) {
      const day = date.slice(0, 2);
      const month = date.slice(3, 5);
      const year = date.slice(-4);
      const hour = time.slice(0, 2);
      const min = time.slice(-2);
      const newDate = new Date(year, month - 1, day, hour, min)
      this.props.revisitTime(newDate);
    }
  }
  onOtherCompany = (text) => { this.props.otherCompany(text) }

  onFileChanged = (text) => { this.props.fileChanged(text) }
  onPhotoChanged = (text) => { this.props.photoChanged(text) }
  onVoiceChanged = (text) => { this.props.voiceChanged(text) }

  onDealerChanged = (text) => { this.props.dealerChanged(text) }

  onOfferedProduct = (text) => { this.props.offeredProduct(text) }

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
      this.setState({ document: true, documentName: res.name })
      this.onFileChanged(res.uri)
    } catch (err) {
      if (DocumentPicker.isCancel(err)) {
        // User cancelled the picker, exit any dialogs or menus and move on
      } else {
        throw err;
      }
    }
  }

  clearDocument = () => {
    this.setState({ document: false, documentName: '' })
    this.onFileChanged(null)
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

  closeCamera = (image) => {
    console.log(image)
    if (image) {
      this.setState({ image, camera: false })
    } else {
      this.setState({ camera: false })
    }
  }


  clearImage = () => {
    this.setState({ image: '' })
    this.onPhotoChanged(null)
  }

  clearVoice = () => {
    this.setState({ audioData: false })
    this.onVoiceChanged(null)
  }

  clearVideo = () => {
    this.setState({ video: '' })
  }

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
      <View style={styles.waiting}>
        <Text style={styles.waitingTitle}>Yükleniyor...</Text>
      </View>
    );


    if (camera) {
      return (
        <View style={styles.cameraWrapper}>
          <RNCamera
            style={styles.preview}
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
                <View style={styles.captureWrapper}>
                  <CameraButton label="KAPAT" onPress={() => this.closeCamera()} />
                  <CameraButton label="ÇEK" onPress={() => this.takePicture(camera)} />
                  {
                    //recording ?
                    //  <CameraButton label="BİTİR" onPress={() => this.stopRecording(camera)} />
                    //  :
                    //  <CameraButton label="KAYIT" onPress={() => this.startRecording(camera)} />
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

  renderDealers = (isDealers, dealersErrorMessage, dealers) => {
    if (isDealers) return (<ActivityIndicator color="white" />)
    if (dealersErrorMessage) {
      if (dealersErrorMessage.data.detail === 'Invalid token.') {
        AsyncStorage.clear()
        setTimeout(() => {
          this.props.navigation.navigate('Login');
        }, 2000)
      }
      for (let [key, value] of Object.entries(dealersErrorMessage.data)) {
        return (<Text style={[styles.successText, styles.successTextErr]}>{key} : {value}</Text>)
      }
    }
    if (dealers) {
      return (
        <Select
          label="Hangi Bayi ?"
          selectText="Lütfen ilgili bayiyi seçiniz"
          array={dealers.map(a => ({ label: a.name, value: a.id }))}
          onValueChange={value => { this.renderForms(value); this.onDealerChanged(value) }} />
      )
    }
  };

  renderForms = (key) => {
    switch (key) {
      case 1:
        this.setState({ openForm1: true, openForm2: false })
        break;
      case 2:
        this.setState({ openForm1: true, openForm2: false })
        break;
      case 3:
        this.setState({ openForm2: true, openForm1: false })
        break;
      default:
        this.setState({ openForm1: false, openForm2: false })
        break;
    }
  };

  //FORM 1
  renderForm1 = () => {
    const { isServices, servicesErrorMessage, services } = this.props.getServicesToProps;
    const { presentTypeState, interviewResult } = this.state;
    return (
      <Fragment>
        <Input label="Kişi Adı" placeholder="Kişi adını giriniz" onChangeText={this.onCustomerFirstName.bind(this)} />
        <Input label="Kişi Soyadı" placeholder="Kişi soyadınız giriniz" onChangeText={this.onCustomerLastName.bind(this)} />
        <Input label="Kişi Cep Telefonu" placeholder="Kişi cep telefonunu giriniz" keyboardType="numeric" onChangeText={this.onCustomerMobilePhone.bind(this)} />
        {
          this.renderWhichProduct(isServices, servicesErrorMessage, services)
        }
        <Select
          label="Sunum Şekli"
          selectText="Sunum şeklini seçiniz"
          array={presentTypeState}
          onValueChange={value => {
            this.onPresentType(value)
            this.setState({ whichPresent: value })
          }} />
        {
          this.renderWhichPresent()
        }
        <Select
          label="Görüşme Sonucu"
          selectText="İlgili sonucu seçiniz"
          array={interviewResult}
          onValueChange={value => {
            this.onInterviewResult(value)
            this.setState({ whichInterView: value })
          }} />
        {
          this.renderWhichInterView()
        }
      </Fragment>
    )
  };

  renderWhichProduct = (isServices, servicesErrorMessage, services) => {
    if (isServices) return (<ActivityIndicator color="white" />)
    if (servicesErrorMessage) {
      for (let [key, value] of Object.entries(servicesErrorMessage.data)) {
        return (<Text style={[styles.successText, styles.successTextErr]}>{key} : {value}</Text>)
      }
    }
    if (services) {
      return (
        <Select
          label="Hangi Ürün Sunuldu ?"
          selectText="Lütfen ilgili ürünü seçiniz"
          array={services.map(a => ({ label: a.name, value: a.id }))}
          onValueChange={value => { this.onOfferedProduct(value) }}
        />
      )
    }
  }

  renderWhichPresent = () => {
    const { whichPresent } = this.state;
    switch (whichPresent) {
      case 'ref':
        return (
          <Fragment>
            <Input label="Referans Adı" placeholder="Referans adını giriniz" onChangeText={this.onRefererFirstName.bind(this)} />
            <Input label="Referans Soyadı" placeholder="Referans soyadını giriniz" onChangeText={this.onRefererLastName.bind(this)} />
            <Input label="Referans Cep Telefonu" placeholder="Referans cep telefonunu giriniz" keyboardType="numeric" onChangeText={this.onRefererMobilePhone.bind(this)} />
          </Fragment>
        )
        break;
      case 'stand':
        return (
          <Fragment>
            <Input label="Standın Kurulduğu Bölge" placeholder="Standın kurulduğu bölgeyi giriniz" onChangeText={this.onStandArea.bind(this)} />
            <Input label="Standın Süresi" placeholder="Standın süresini giriniz" onChangeText={this.onStandTime.bind(this)} />
          </Fragment>
        )
        break;
      case 'D2D':
        return (
          <Fragment>
            <Input label="Site Adı" placeholder="Site adını giriniz" onChangeText={this.onSiteName.bind(this)} />
            <Input label="Blok Adı" placeholder="Blok adını giriniz" onChangeText={this.onBlockName.bind(this)} />
            <Input label="Daire Numarası" placeholder="Daire numararını giriniz" onChangeText={this.onFlatNo.bind(this)} />
          </Fragment>
        );
        break;
      case 'hunter':
        return (
          <Fragment>
            <Input label="Site Adı" placeholder="Site adını giriniz" onChangeText={this.onSiteName.bind(this)} />
            <Input label="Blok Adı" placeholder="Blok adını giriniz" onChangeText={this.onBlockName.bind(this)} />
            <Input label="Daire Numarası" placeholder="Daire numararını giriniz" onChangeText={this.onFlatNo.bind(this)} />
          </Fragment>
        );
        break;
      default:
        break;
    }
  };

  renderWhichInterView = () => {
    const { whichInterView, date, time, otherCompany } = this.state;
    switch (whichInterView) {
      case 'ST':
        return (<Input label="Görüşme Sonucu Tamam" placeholder="Görüşme tamam metnini giriniz" onChangeText={this.onInterviewResultDetail.bind(this)} />);
        break;
      case 'TZ':
        return (
          <DataPicker label="Tekrar Ziyaret Edilecek" date={date} time={time}
            onDateChangeDate={(item) => { this.setState({ date: item }); this.onRevisitTime() }}
            onDateChangeTime={(item) => { this.setState({ time: item }); this.onRevisitTime() }} />
        );
        break;
      case 'olm':
        return (<Input label="Görüşme Sonucu Olumsuz" placeholder="Görüşme olumsuz metnini giriniz" onChangeText={this.onInterviewResultDetail.bind(this)} />);
      case 'KA':
        break;
      case 'BI':
        return (
          <Select
            label="Başka ISS Abonesi"
            selectText="Lütfen ilgili aboneyi seçiniz"
            array={otherCompany}
            onValueChange={value => { this.onOtherCompany(value) }} />
        );
        break;
      case 'FY':
        return (<Input label="Fiyat Yüksek" placeholder="Mevcut Fatura Tutarını Giriniz" onChangeText={this.onInterviewResultDetail.bind(this)} />);
      default:
        break;
    }
  };

  //FORM 2
  renderForm2 = () => {
    const { isDecider, cities, interviewResult } = this.state;
    return (
      <Fragment>
        <Input label="Firma Ünvanı" placeholder="Firma ünvanını giriniz"
          onChangeText={this.onCompanyName.bind(this)} />
        <Input label="Görüşülen Kişinin Adı" placeholder="Görüşülen kişinin adını giriniz"
          onChangeText={this.onCustomerFirstName.bind(this)} />
        <Input label="Görüşülen Kişinin Soyadı" placeholder="Görüşülen kişinin soyadını giriniz"
          onChangeText={this.onCustomerLastName.bind(this)} />
        <Input label="Görüşülen Kişinin Cep Telefonu" placeholder="Görüşülen kişinin cep telefonunu giriniz" keyboardType="numeric"
          onChangeText={this.onCustomerMobilePhone.bind(this)} />
        <Input label="Görüşülen Kişinin Sabit Telefonu" placeholder="Görüşülen kişinin sabit telefonunu giriniz" keyboardType="numeric"
          onChangeText={this.onCustomerPhone.bind(this)} />
        <Select
          label="Karar Verici mi ?"
          selectText="Lütfen ilgili alanı seçiniz"
          array={isDecider}
          onValueChange={value => { this.onIsDeciders(value); this.setState({ whichIsDecider: value }); }}
        />
        {
          this.renderWhichIsDeciders()
        }
        <Input label="Sektör" placeholder="Sektörünüzü yazınız" onChangeText={this.onSectorChanged.bind(this)} />
        <Select
          label="İl"
          selectText="Lütfen ili seçiniz"
          array={cities}
          onValueChange={value => {
            this.onCityChanged(value); this.setState({ whichCities: value })
            if (value === 'Bölge Dışı') {
              this.onDistrictChanged('Bölge Dışı')
            }
          }
          } />
        {
          this.renderWhichCities()
        }
        <Select
          label="Görüşme Sonucu"
          selectText="İlgili sonucu seçiniz"
          array={interviewResult}
          onValueChange={value => {
            this.onInterviewResult(value)
            this.setState({ whichInterView: value })
          }} />
        {
          this.renderWhichInterView()
        }
      </Fragment >
    )
  };

  renderWhichIsDeciders = () => {
    const { whichIsDecider } = this.state;
    if (whichIsDecider === false) {
      return (
        <Fragment>
          <Input label="Karar Verici Adı" placeholder="Karar verici adını giriniz"
            onChangeText={this.onDeciderFirstName.bind(this)} />
          <Input label="Karar Verici Soyadı" placeholder="Karar verici soyadını giriniz"
            onChangeText={this.onDeciderLastName.bind(this)} />
          <Input label="Karar Verici Cep Telefonu" placeholder="Karar verici cep telefonunu giriniz" keyboardType="numeric"
            onChangeText={this.onDeciderMobilePhone.bind(this)} />
        </Fragment>
      )
    }
  };

  renderWhichCities = () => {
    const { whichCities, district } = this.state;
    if (whichCities === 'İstanbul') {
      return (
        <Select
          label="İlçe"
          selectText="Lütfen ilçe seçiniz"
          array={district}
          onValueChange={value => { this.onDistrictChanged(value) }} />
      )
    }
    if (whichCities === 'Bölge Dışı') {
      return (
        <Input label="İlçe" value="Bölge Dışı" />
      )
    }
  };

  postDatas = async () => {
    try {
      const {
        company_name,
        customer_first_name,
        customer_last_name,
        customer_mobile_phone,
        customer_phone,
        is_decider,
        decider_first_name,
        decider_last_name,
        decider_mobile_phone,
        sector,
        city,
        district,
        present_type,
        referer_firt_name,
        referer_last_name,
        referer_mobile_phone,
        stand_area,
        stand_time,
        site_name,
        block_name,
        flat_no,
        interview_result,
        interview_result_detail,
        revisit_time,
        other_company,
        file, photo,
        voice,
        long,
        lat,
        dealer,
        offered_product
      } = await this.props.postVisitsToProps;
      await this.props.postVisits(
        company_name,
        customer_first_name,
        customer_last_name,
        customer_mobile_phone,
        customer_phone,
        is_decider,
        decider_first_name,
        decider_last_name,
        decider_mobile_phone,
        sector,
        city,
        district,
        present_type,
        referer_firt_name,
        referer_last_name,
        referer_mobile_phone,
        stand_area,
        stand_time,
        site_name,
        block_name,
        flat_no,
        interview_result,
        interview_result_detail,
        revisit_time,
        other_company,
        file, photo,
        voice,
        long,
        lat,
        dealer,
        offered_product
      );
    } catch (e) {
      console.log(error)
    }
  };

  renderItems = (isPost, isPostErrorMessage, post) => {
    if (isPost) {
      return (<ActivityIndicator style={styles.loading} color="white" />)
    }
    if (post) {
      this.props.visitsDefault();
      this.props.navigation.navigate('Success');
    }
    if (isPostErrorMessage) {
      for (let [key, value] of Object.entries(isPostErrorMessage.data)) {
        return (<Text style={[styles.successText, styles.successTextErr]}>{key} : {value}</Text>)
      }
    }
  }

  render() {
    const {
      image,
      video,
      audio,
      document,
      documentName,
      audioData,
      openForm1,
      openForm2,
    } = this.state;
    const { isPost, isPostErrorMessage, post } = this.props.postVisitsToProps;
    const { isDealers, dealersErrorMessage, dealers } = this.props.getDealersToProps;
    return (
      <View style={styles.wrapper}>
        <StatusBar barStyle="light-content" />
        <KeyboardAwareScrollView
          showsVerticalScrollIndicator={false} contentContainerStyle={[styles.keyboard]} extraHeight={40}>
          <Text style={styles.loginText}>İlgili Bayiyi Seçiniz.</Text>
          {
            this.renderDealers(isDealers, dealersErrorMessage, dealers)
          }
          {
            openForm1 ? this.renderForm1() : null
          }
          {
            openForm2 ? this.renderForm2() : null
          }
          <View style={styles.filesWrapper}>
            <AddFile title="Dosya Ekle" type="file" onPress={() => this.documentAdd()} />
            <AddFile title="Fotoğraf Çek" type="gallery" onPress={() => this.openCamera()} />
            {
              audio ? <AddFile title="Stop" type="audio" onPress={() => this.audioStop()} /> : <AddFile title="Ses Kaydı Al" type="audio" onPress={() => this.audioStart()} />
            }
          </View>
          {
            document
              ?
              <View style={styles.clearDocument}>
                <FileIcon style={styles.clearDocumentIcon} />
                <Text style={styles.clearDocumentText}>{documentName.substring(0, 30) + '...'}</Text>
                <TouchableOpacity style={styles.closedBtn} onPress={() => this.clearDocument()}>
                  <ClosedIcon style={styles.closed} />
                </TouchableOpacity>
              </View>
              :
              null
          }
          <View style={styles.imgWrapper}>
            {
              image
                ?
                <View style={styles.snapImage}>
                  <TouchableOpacity style={styles.closedBtn} onPress={() => this.clearImage()}>
                    <ClosedIcon style={styles.closed} />
                  </TouchableOpacity>
                  <Image source={{ uri: image }} style={styles.snapImageImg} />
                </View>
                : null
            }
            {
              video
                ?
                <View style={styles.snapVideo}>
                  <TouchableOpacity style={styles.closedBtn} onPress={() => this.clearVideo()}>
                    <ClosedIcon style={styles.closed} />
                  </TouchableOpacity>
                  <Video
                    paused
                    source={{ uri: video }} ref={(ref) => { this.player = ref }}
                    onBuffer={this.onBuffer} onError={this.videoError}
                    resizeMode="cover"
                    style={styles.snapVideoVid} />
                </View>
                :
                null
            }
            {
              audioData
                ?
                <View style={styles.snapImage}>
                  <TouchableOpacity style={styles.closedBtn} onPress={() => this.clearVoice()}>
                    <ClosedIcon style={styles.closed} />
                  </TouchableOpacity>
                  <AudioIcon style={styles.snapImageImg} />
                </View>
                :
                null
            }
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

Form.propTypes = {
  postVisits: PropTypes.func.isRequired,
  visitsDefault: PropTypes.func.isRequired,
  postVisitsToProps: PropTypes.object.isRequired,
  getServices: PropTypes.func.isRequired,
  getServicesToProps: PropTypes.object.isRequired,
  getDealers: PropTypes.func.isRequired,
  getDealersToProps: PropTypes.object.isRequired,
};

const mapStateToProps = state => {
  return {
    postVisitsToProps: state.visitsReducer,
    getServicesToProps: state.servicesReducer,
    getDealersToProps: state.dealersReducer,
  }
};

export default connect(mapStateToProps, {
  postVisits,
  visitsDefault,
  getServices,
  getDealers,
  companyName,
  customerFirstName,
  customerLastName,
  customerMobilePhone,
  customerPhone,
  isDecider,
  deciderFirstName,
  deciderLastName,
  deciderMobilePhone,
  sectorChanged,
  cityChanged,
  districtChanged,
  presentType,
  refererFirstName,
  refererLastName,
  refererMobilePhone,
  standArea,
  standTime,
  siteName,
  blockName,
  flatNo,
  interviewResult,
  interviewResultDetail,
  revisitTime,
  otherCompany,
  fileChanged,
  photoChanged,
  voiceChanged,
  longChanged,
  latChanged,
  dealerChanged,
  offeredProduct
})(Form)