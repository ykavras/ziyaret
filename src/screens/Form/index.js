import React, {Component, Fragment} from 'react';
import {
	View, StatusBar, Text, Image, ActivityIndicator, TouchableOpacity, SafeAreaView, FlatList
} from 'react-native';
import styles from './styles';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {Input, Button, Select, DataPicker, AddFile, CameraButton} from '../../components';
import DocumentPicker from 'react-native-document-picker';
import {RNCamera} from 'react-native-camera';
import Video from 'react-native-video'
import AudioIcon from '../../assets/icons/Microphone';
import ClosedIcon from '../../assets/icons/Closed';
import FileIcon from '../../assets/icons/AddFile';
import BackIcon from '../../assets/icons/Back';
import LocationIcon from '../../assets/icons/Location';
import theme from '../../lib/theme';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import RNFetchBlob from 'react-native-fetch-blob'
import SoundRecorder from 'react-native-sound-recorder';

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
import {getServices} from '../../store/actions/services';
import {getDealers, getSites} from '../../store/actions/dealers';

let filteringData = [];
let AUDIO_DATA = null;

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
			openForm3: false,
			whichPresent: '',
			whichInterView: '',
			whichIsDecider: '',
			whichCities: '',
			searchedFilter: [],
			query: '',
			queryWrapper: false,
			getLocationLoader: false,
			getLocationLoaderText: '',
			counter: 0,
			counterBox: false,
			presentTypeState: [
				{label: 'Referans', value: 'ref'},
				{label: 'Stand', value: 'stand'},
				{label: 'D2D', value: 'D2D'},
			],
			interviewResult: [
				{label: 'Satış Tamam', value: 'ST'},
				{label: 'Tekrar Ziyaret Edilecek', value: 'TZ'},
				{label: 'Olumsuz', value: 'olm'},
				{label: 'Kapı Açılmadı', value: 'KA'},
				{label: 'Başka ISS Abonesi', value: 'BI'},
				{label: 'Fiyat Yüksek', value: 'FY',}
			],
			otherCompany: [
				{label: 'Vodafone', value: 'vadafone'},
				{label: 'Türk Telekom', value: 'turktelekom'},
				{label: 'Metro', value: 'metro'},
				{label: 'Diğer', value: 'other'},
			],
			otherCompany2: [
				{label: 'Vodafone', value: 'vadafone'},
				{label: 'Türk Telekom', value: 'turktelekom'},
				{label: 'Diğer', value: 'other'},
			],
			isDecider: [
				{label: 'Evet', value: true},
				{label: 'Hayır', value: false}
			],
			cities: [
				{label: 'İstanbul', value: 'İstanbul'},
				{label: 'Bölge Dışı', value: 'Bölge Dışı',}
			],
			district: [
				{label: 'Bayrampaşa', value: 'Bayrampaşa'},
				{label: 'Sultangazi', value: 'Sultangazi'},
				{label: 'Bölge Dışı', value: 'Bölge Dışı'}
			],
			standAreaList: [
				{label: 'Başakşehir', value: 'Başakşehir'},
				{label: 'Bahçeşehir', value: 'Bahçeşehir'},
				{label: 'Kayaşehir', value: 'Kayaşehir'},
				{label: 'Esenyurt', value: 'Esenyurt'},
				{label: 'Ispartakule', value: 'Ispartakule'},
				{label: 'Halkalı', value: 'Halkalı'},
				{label: 'Hadımköy', value: 'Hadımköy',}
			],
			sectorList: [
				{label: 'AKARYAKIT', value: 'AKARYAKIT'},
				{label: 'BİLGİ TEKNOLOJİLERİ', value: 'BİLGİ TEKNOLOJİLERİ'},
				{label: 'DİĞER', value: 'DİĞER'},
				{label: 'EĞİTİM', value: 'EĞİTİM'},
				{label: 'ENDÜSTRİ VE TİCARET', value: 'ENDÜSTRİ VE TİCARET'},
				{label: 'ENERJİ VE İNŞAAT', value: 'ENERJİ VE İNŞAAT'},
				{label: 'FİNANS SİGORTA VE BANKACILIK', value: 'FİNANS SİGORTA VE BANKACILIK'},
				{label: 'HOLDİNG', value: 'HOLDİNG'},
				{label: 'KAMU VE DEVLET', value: 'KAMU VE DEVLET'},
				{label: 'MEDYA VE REKLAM', value: 'MEDYA VE REKLAM'},
				{label: 'OTOMOTİV', value: 'OTOMOTİV'},
				{label: 'PROFESYONEL HİZMETLER', value: 'PROFESYONEL HİZMETLER'},
				{label: 'SAĞLIK', value: 'SAĞLIK'},
				{label: 'SENDİKA DERNEK BÜYÜKELÇİLİK', value: 'SENDİKA DERNEK BÜYÜKELÇİLİK'},
				{label: 'TAŞIMA ULAŞIM VE DAĞITIM', value: 'TAŞIMA ULAŞIM VE DAĞITIM'},
				{label: 'TEKSTİL', value: 'TEKSTİL'},
				{label: 'TURİZM', value: 'TURİZM'},
				{label: 'TÜKETİM MALZEMELERİ', value: 'TÜKETİM MALZEMELERİ'},
			]
		}
	}

	componentDidMount() {
		this.props.getServices();
		this.props.getDealers();
		this.getCustomLocation();
		const myTimer = setInterval(() => {
			this.setState({counter: this.state.counter += 1})
		},1000);
	}

	getCustomLocation = () => {
		this.setState({getLocationLoader: true, getLocationLoaderText: ''});
		const {latChanged, longChanged} = this.props;
		navigator.geolocation.getCurrentPosition(
			(position) => {
				this.setState({
					getLocationLoader: false,
					getLocationLoaderText: position.coords.latitude + ' ' + position.coords.longitude
				});
				latChanged(position.coords.latitude);
				longChanged(position.coords.longitude);
			},
			(error) => this.setState({error: error.message}),
			{enableHighAccuracy: false, timeout: 200000, maximumAge: 1000},
		);
	}

	onCompanyName = (text) => {
		this.props.companyName(text)
	}
	onCustomerFirstName = (text) => {
		this.props.customerFirstName(text)
	}
	onCustomerLastName = (text) => {
		this.props.customerLastName(text)
	}
	onCustomerMobilePhone = (text) => {
		this.props.customerMobilePhone(text)
	}
	onCustomerPhone = (text) => {
		this.props.customerPhone(text)
	}

	onIsDeciders = (text) => {
		this.props.isDecider(text)
	}
	onDeciderFirstName = (text) => {
		this.props.deciderFirstName(text)
	}
	onDeciderLastName = (text) => {
		this.props.deciderLastName(text)
	}
	onDeciderMobilePhone = (text) => {
		this.props.deciderMobilePhone(text)
	}

	onSectorChanged = (text) => {
		this.props.sectorChanged(text)
	}

	onCityChanged = (text) => {
		this.props.cityChanged(text)
	}
	onDistrictChanged = (text) => {
		this.props.districtChanged(text)
	}

	onPresentType = (text) => {
		this.props.presentType(text);
	}

	onRefererFirstName = (text) => {
		this.props.refererFirstName(text)
	}
	onRefererLastName = (text) => {
		this.props.refererLastName(text)
	}
	onRefererMobilePhone = (text) => {
		this.props.refererMobilePhone(text)
	}

	onStandArea = (text) => {
		this.props.standArea(text)
	}
	onStandTime = (text) => {
		this.props.standTime(text)
	}

	onSiteName = (text) => {
		this.props.siteName(text)
	}
	onBlockName = (text) => {
		this.props.blockName(text)
	}
	onFlatNo = (text) => {
		this.props.flatNo(text)
	}

	onInterviewResult = (text) => {
		this.props.interviewResult(text)
	}
	onInterviewResultDetail = (text) => {
		this.props.interviewResultDetail(text)
	}

	onRevisitTime = () => {
		const {date, time} = this.state;
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

	onOtherCompany = (text) => {
		this.props.otherCompany(text)
	}

	onFileChanged = (text) => {
		this.props.fileChanged(text)
	}

	onPhotoChanged = (text) => {
		this.props.photoChanged(text)
	}

	onVoiceChanged = (text) => {
		this.props.voiceChanged(text)
	}

	onDealerChanged = (text) => {
		this.props.dealerChanged(text)
	}

	onOfferedProduct = (text) => {
		this.props.offeredProduct(text)
	}

	documentAdd = async () => {
		// Pick a single file
		try {
			const res = await DocumentPicker.pick({
				type: [DocumentPicker.types.pdf],
			});
			console.log(
				res.uri,
				res.type, // mime type
				res.name,
				res.size,
			);
			this.setState({document: true, documentName: res.name})
			this.convertToBase64(res.uri)
		} catch (err) {
			if (DocumentPicker.isCancel(err)) {
				// User cancelled the picker, exit any dialogs or menus and move on
			} else {
				throw err;
			}
		}
	}

	convertToBase64 = (path) => {
		RNFetchBlob.fs.readFile(path, 'base64')
			.then((files) => {
				this.onFileChanged(files);
			})
	}

	clearDocument = () => {
		this.setState({document: false, documentName: ''})
		this.onFileChanged(null)
	}

	takePicture = async (camera) => {
		if (camera) {
			const options = {quality: 0.5, base64: true};
			const data = await camera.takePictureAsync(options);
			await this.closeCamera(data.uri)
			this.onPhotoChanged(data.base64)
		}
	};

	openCamera = () => {
		this.setState({camera: true})
	}

	closeCamera = (image) => {
		//console.log(image)
		if (image) {
			this.setState({image, camera: false})
		} else {
			this.setState({camera: false})
		}
	}

	clearImage = () => {
		this.setState({image: ''})
		this.onPhotoChanged('')
	}

	clearVoice = () => {
		this.setState({audioData: false})
		this.onVoiceChanged(null)
	}

	clearVideo = () => {
		this.setState({video: ''})
	}

	stopRecording = async (camera) => {
		camera.stopRecording();
		this.setState({camera: false,})
	}

	startRecording = async (camera) => {
		this.setState({recording: true});
		const {uri, codec = "mp4"} = await camera.recordAsync();
		this.setState({video: uri})
	}

	cameraView = () => {
		const {camera, recording} = this.state;
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
						{({camera, status, recordAudioPermissionStatus}) => {
							if (status !== 'READY') return <PendingView/>;
							return (
								<Fragment>
									<CameraButton style={styles.cameraBack} type="back" label="KAPAT" onPress={() => this.closeCamera()}/>
									<View style={styles.captureWrapper}>
										<CameraButton type="camera" label="ÇEK" onPress={() => this.takePicture(camera)}/>
										{
											//recording ?
											//  <CameraButton label="BİTİR" onPress={() => this.stopRecording(camera)} />
											//  :
											//  <CameraButton label="KAYIT" onPress={() => this.startRecording(camera)} />
										}
									</View>
								</Fragment>
							);
						}}
					</RNCamera>
				</View>
			)
		}
	}

	audioStart = () => {
		this.setState({audio: true, audioData: false, counter: 0});
		this.myTimer;
		SoundRecorder.start(SoundRecorder.PATH_CACHE + '/ses-kaydi.mp4')
			.then(function () {
				console.log('started recording');
			});
	};

	audioStop = async () => {
		this.setState({counter: 0});
		clearInterval(this.myTimer);
		await SoundRecorder.stop()
			.then(function (result) {
				AUDIO_DATA = result.path
			});
		await this.audioPost()
	};

	audioPost() {
		//console.log(AUDIO_DATA);
		RNFetchBlob.fs.readFile(AUDIO_DATA, 'base64')
			.then((files) => {
				this.setState({audio: false, audioData: true});
				this.onVoiceChanged(files);
				//console.log(files)
			})
	}

	searchedFilter = (text) => {
		if (text === '') {
			return this.setState({searchedFilter: [], queryWrapper: false})
		} else {
			var searchedFilter = filteringData.filter(function (item) {
				return item.name.toLowerCase().indexOf(text.toLowerCase()) > -1;
			});
			this.setState({searchedFilter});
			this.setState({queryWrapper: true})
		}
	};

	renderDealers = (isDealers, dealersErrorMessage, dealers) => {
		if (isDealers) return (<ActivityIndicator color="black"/>)
		if (dealersErrorMessage) {
			for (let [key, value] of Object.entries(dealersErrorMessage.data)) {
				return (<Text style={[styles.successText, styles.successTextErr]}>{key} : {value}</Text>)
			}
		}
		if (dealers) {
			return (
				<Select
					label="Hangi Bayi ?"
					selectText="Lütfen ilgili bayiyi seçiniz"
					array={dealers.map(a => ({label: a.name, value: a.id}))}
					onValueChange={value => {
						this.renderForms(value);
						this.onDealerChanged(value);
						this.postSites(value)
					}}/>
			)
		}
	};

	postSites = (key) => {
		return this.props.getSites(key)
	}

	renderForms = (key) => {
		this.setState({whichPresent: '', whichInterView: '', whichIsDecider: ''})
		switch (key) {
			case 1:
				this.setState({openForm1: true, openForm2: false, openForm3: false})
				break;
			case 2:
				this.setState({openForm2: true, openForm1: false, openForm3: false})
				break;
			case 3:
				this.setState({openForm3: true, openForm1: false, openForm2: false})
				break;
			default:
				this.setState({openForm1: false, openForm2: false, openForm3: false})
				break;
		}
	};

	//FORM 1
	renderForm1 = () => {
		const {isServices, servicesErrorMessage, services} = this.props.getServicesToProps;
		const {presentTypeState, interviewResult} = this.state;
		return (
			<Fragment>
				<Input type="black" label="Kişi Adı" placeholder="Kişi adını giriniz"
							 onChangeText={this.onCustomerFirstName.bind(this)}/>
				<Input type="black" label="Kişi Soyadı" placeholder="Kişi soyadınız giriniz"
							 onChangeText={this.onCustomerLastName.bind(this)}/>
				<Input type="black" label="Kişi Cep Telefonu" placeholder="Kişi cep telefonunu giriniz" keyboardType="numeric"
							 onChangeText={this.onCustomerMobilePhone.bind(this)}/>
				{
					this.renderWhichProduct(isServices, servicesErrorMessage, services)
				}
				<Select
					label="Sunum Şekli"
					selectText="Sunum şeklini seçiniz"
					array={presentTypeState}
					onValueChange={value => {
						this.onPresentType(value)
						this.setState({whichPresent: value})
					}}/>
				{
					this.renderWhichPresent()
				}
				<Select
					label="Görüşme Sonucu"
					selectText="İlgili sonucu seçiniz"
					array={interviewResult}
					onValueChange={value => {
						this.onInterviewResult(value)
						this.setState({whichInterView: value})
					}}/>
				{
					this.renderWhichInterView()
				}
			</Fragment>
		)
	};

	//FORM 2
	renderForm2 = () => {
		const {isServices, servicesErrorMessage, services} = this.props.getServicesToProps;
		const {presentTypeState, interviewResult} = this.state;
		return (
			<Fragment>
				<Input type="black" label="Kişi Adı" placeholder="Kişi adını giriniz"
							 onChangeText={this.onCustomerFirstName.bind(this)}/>
				<Input type="black" label="Kişi Soyadı" placeholder="Kişi soyadınız giriniz"
							 onChangeText={this.onCustomerLastName.bind(this)}/>
				<Input type="black" label="Kişi Cep Telefonu" placeholder="Kişi cep telefonunu giriniz" keyboardType="numeric"
							 onChangeText={this.onCustomerMobilePhone.bind(this)}/>
				{
					this.renderWhichProduct(isServices, servicesErrorMessage, services)
				}
				<Select
					label="Sunum Şekli"
					selectText="Sunum şeklini seçiniz"
					array={presentTypeState}
					onValueChange={value => {
						this.onPresentType(value)
						this.setState({whichPresent: value})
					}}/>
				{
					this.renderWhichPresent()
				}
				<Select
					label="Görüşme Sonucu"
					selectText="İlgili sonucu seçiniz"
					array={interviewResult}
					onValueChange={value => {
						this.onInterviewResult(value)
						this.setState({whichInterView: value})
					}}/>
				{
					this.renderWhichInterView()
				}
			</Fragment>
		)
	};

	renderWhichProduct = (isServices, servicesErrorMessage, services) => {
		if (isServices) return (<ActivityIndicator color="white"/>)
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
					array={services.map(a => ({label: a.name, value: a.id}))}
					onValueChange={value => {
						this.onOfferedProduct(value)
					}}
				/>
			)
		}
	}

	renderWhichPresent = () => {
		const {whichPresent, standAreaList, query} = this.state;
		switch (whichPresent) {
			case 'ref':
				return (
					<Fragment>
						<Input type="black" label="Referans Adı" placeholder="Referans adını giriniz"
									 onChangeText={this.onRefererFirstName.bind(this)}/>
						<Input type="black" label="Referans Soyadı" placeholder="Referans soyadını giriniz"
									 onChangeText={this.onRefererLastName.bind(this)}/>
						<Input type="black" label="Referans Cep Telefonu" placeholder="Referans cep telefonunu giriniz"
									 keyboardType="numeric" onChangeText={this.onRefererMobilePhone.bind(this)}/>
					</Fragment>
				)
				break;
			case 'stand':
				return (
					<Fragment>
						<Select
							label="Standın Kurulduğu Bölge"
							selectText="Standın kurulduğu bölgeyi seçiniz"
							array={standAreaList}
							onValueChange={value => {
								this.onStandArea(value)
							}}/>
						<Input type="black" label="Standın Süresi" placeholder="Standın süresini giriniz"
									 onChangeText={this.onStandTime.bind(this)}/>
					</Fragment>
				)
			case 'D2D':
				return (
					<Fragment>
						<View style={styles.siteWrapper}>
							<Input type="black" label="Site Adı" placeholder="Site adını giriniz" value={query}
										 onChangeText={value => {
											 this.setState({query: value})
											 this.searchedFilter(value)
											 this.onSiteName(value)
										 }}
							/>
							{
								this.returnQueryWrapper()
							}
						</View>
						<Input type="black" label="Blok Adı" placeholder="Blok adını giriniz"
									 onChangeText={this.onBlockName.bind(this)}/>
						<Input type="black" label="Daire Numarası" placeholder="Daire numararını giriniz"
									 onChangeText={this.onFlatNo.bind(this)}/>
					</Fragment>
				);
			case 'hunter':
				return (
					<Fragment>
						<View style={styles.siteWrapper}>
							<Input type="black" label="Site Adı" placeholder="Site adını giriniz" value={query}
										 onChangeText={value => {
											 this.setState({query: value})
											 this.searchedFilter(value)
											 this.onSiteName(value)
										 }}
							/>
							{
								this.returnQueryWrapper()
							}
						</View>
						<Input type="black" label="Blok Adı" placeholder="Blok adını giriniz"
									 onChangeText={this.onBlockName.bind(this)}/>
						<Input type="black" label="Daire Numarası" placeholder="Daire numararını giriniz"
									 onChangeText={this.onFlatNo.bind(this)}/>
					</Fragment>
				);
			default:
				break;
		}
	};

	returnQueryWrapper = () => {
		const {queryWrapper, searchedFilter} = this.state;
		if (queryWrapper) {
			return (
				<Fragment>
					<FlatList data={searchedFilter} style={styles.siteListing}
										renderItem={({item}) => {
											return (
												<TouchableOpacity key={item.id} style={styles.siteItem} onPress={() => {
													this.setState({query: item.name, queryWrapper: false})
													this.onSiteName(item.name)
												}}>
													<Text style={styles.siteItemText}>{item.name}</Text>
												</TouchableOpacity>
											)
										}}
					/>
				</Fragment>
			)
		}
	}

	renderWhichInterView = () => {
		const {whichInterView, date, time, otherCompany} = this.state;
		switch (whichInterView) {
			case 'ST':
				return (<Input type="black" label="Görüşme Sonucu Tamam" placeholder="Görüşme tamam metnini giriniz"
											 onChangeText={this.onInterviewResultDetail.bind(this)}/>);
				break;
			case 'TZ':
				return (
					<DataPicker label="Tekrar Ziyaret Edilecek" date={date} time={time}
											onDateChangeDate={(item) => {
												this.setState({date: item});
												this.onRevisitTime()
											}}
											onDateChangeTime={(item) => {
												this.setState({time: item});
												this.onRevisitTime()
											}}/>
				);
				break;
			case 'olm':
				return (<Input type="black" label="Görüşme Sonucu Olumsuz" placeholder="Görüşme olumsuz metnini giriniz"
											 onChangeText={this.onInterviewResultDetail.bind(this)}/>);
			case 'KA':
				break;
			case 'BI':
				return (
					<Select
						label="Başka ISS Abonesi"
						selectText="Lütfen ilgili aboneyi seçiniz"
						array={otherCompany}
						onValueChange={value => {
							this.onOtherCompany(value)
						}}/>
				);
				break;
			case 'FY':
				return (<Input type="black" label="Fiyat Yüksek" placeholder="Mevcut Fatura Tutarını Giriniz"
											 onChangeText={this.onInterviewResultDetail.bind(this)}/>);
			default:
				break;
		}
	};

	renderWhichInterView2 = () => {
		const {whichInterView, date, time, otherCompany2} = this.state;
		switch (whichInterView) {
			case 'ST':
				return (<Input type="black" label="Görüşme Sonucu Tamam" placeholder="Görüşme tamam metnini giriniz"
											 onChangeText={this.onInterviewResultDetail.bind(this)}/>);
				break;
			case 'TZ':
				return (
					<DataPicker label="Tekrar Ziyaret Edilecek" date={date} time={time}
											onDateChangeDate={(item) => {
												this.setState({date: item});
												this.onRevisitTime()
											}}
											onDateChangeTime={(item) => {
												this.setState({time: item});
												this.onRevisitTime()
											}}/>
				);
				break;
			case 'olm':
				return (<Input type="black" label="Görüşme Sonucu Olumsuz" placeholder="Görüşme olumsuz metnini giriniz"
											 onChangeText={this.onInterviewResultDetail.bind(this)}/>);
			case 'KA':
				break;
			case 'BI':
				return (
					<Select
						label="Başka ISS Abonesi"
						selectText="Lütfen ilgili aboneyi seçiniz"
						array={otherCompany2}
						onValueChange={value => {
							this.onOtherCompany(value)
						}}/>
				);
				break;
			case 'FY':
				return (<Input type="black" label="Fiyat Yüksek" placeholder="Mevcut Fatura Tutarını Giriniz"
											 onChangeText={this.onInterviewResultDetail.bind(this)}/>);
			default:
				break;
		}
	};

	//FORM 2
	renderForm3 = () => {
		const {isDecider, cities, interviewResult, sectorList} = this.state;
		return (
			<Fragment>
				<Input type="black" label="Firma Ünvanı" placeholder="Firma ünvanını giriniz"
							 onChangeText={this.onCompanyName.bind(this)}/>
				<Input type="black" label="Görüşülen Kişinin Adı" placeholder="Görüşülen kişinin adını giriniz"
							 onChangeText={this.onCustomerFirstName.bind(this)}/>
				<Input type="black" label="Görüşülen Kişinin Soyadı" placeholder="Görüşülen kişinin soyadını giriniz"
							 onChangeText={this.onCustomerLastName.bind(this)}/>
				<Input type="black" label="Görüşülen Kişinin Cep Telefonu"
							 placeholder="Görüşülen kişinin cep telefonunu giriniz" keyboardType="numeric"
							 onChangeText={this.onCustomerMobilePhone.bind(this)}/>
				<Input type="black" label="Görüşülen Kişinin Sabit Telefonu"
							 placeholder="Görüşülen kişinin sabit telefonunu giriniz" keyboardType="numeric"
							 onChangeText={this.onCustomerPhone.bind(this)}/>
				<Select
					label="Karar Verici mi ?"
					selectText="Lütfen ilgili alanı seçiniz"
					array={isDecider}
					onValueChange={value => {
						this.onIsDeciders(value);
						this.setState({whichIsDecider: value});
					}}
				/>
				{
					this.renderWhichIsDeciders()
				}
				<Select
					label="Sektör"
					selectText="Sektörünüzü seçiniz"
					array={sectorList}
					onValueChange={value => {
						this.onSectorChanged(value);
					}}
				/>
				<Select
					label="İl"
					selectText="Lütfen ili seçiniz"
					array={cities}
					onValueChange={value => {
						this.onCityChanged(value);
						this.setState({whichCities: value})
						if (value === 'Bölge Dışı') {
							this.onDistrictChanged('Bölge Dışı')
						}
					}
					}/>
				{
					this.renderWhichCities()
				}
				<Select
					label="Görüşme Sonucu"
					selectText="İlgili sonucu seçiniz"
					array={interviewResult}
					onValueChange={value => {
						this.onInterviewResult(value)
						this.setState({whichInterView: value})
					}}/>
				{
					this.renderWhichInterView2()
				}
			</Fragment>
		)
	};

	renderWhichIsDeciders = () => {
		const {whichIsDecider} = this.state;
		if (whichIsDecider === false) {
			return (
				<Fragment>
					<Input type="black" label="Karar Verici Adı" placeholder="Karar verici adını giriniz"
								 onChangeText={this.onDeciderFirstName.bind(this)}/>
					<Input type="black" label="Karar Verici Soyadı" placeholder="Karar verici soyadını giriniz"
								 onChangeText={this.onDeciderLastName.bind(this)}/>
					<Input type="black" label="Karar Verici Cep Telefonu" placeholder="Karar verici cep telefonunu giriniz"
								 keyboardType="numeric"
								 onChangeText={this.onDeciderMobilePhone.bind(this)}/>
				</Fragment>
			)
		}
	};

	renderWhichCities = () => {
		const {whichCities, district} = this.state;
		if (whichCities === 'İstanbul') {
			return (
				<Select
					label="İlçe"
					selectText="Lütfen ilçe seçiniz"
					array={district}
					onValueChange={value => {
						this.onDistrictChanged(value)
					}}/>
			)
		}
		if (whichCities === 'Bölge Dışı') {
			return (
				<Input type="black" label="İlçe" value="Bölge Dışı"/>
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
				file,
				photo,
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
				file,
				photo,
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
			return (<ActivityIndicator style={styles.loading} color="black"/>)
		}
		if (post) {
			this.props.visitsDefault();
			this.props.navigation.navigate('Success');
		}
		if (isPostErrorMessage) {
			for (let [key, value] of Object.entries(isPostErrorMessage.data)) {
				return <Text style={[styles.successText, styles.successTextErr]}>{key} : {value}</Text>
			}
		}
	}

	sitesRendered = (isSites, sitessErrorMessage, sites) => {
		if (isSites) return (<ActivityIndicator color="black"/>)
		if (sitessErrorMessage) {
			for (let [key, value] of Object.entries(sitessErrorMessage.data)) {
				return <Text style={[styles.successText, styles.successTextErr]}>{key} : {value}</Text>
			}
		}
		if (sites) filteringData = sites;
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
			openForm3,
			getLocationLoader,
			getLocationLoaderText,
			counter
		} = this.state;
		const {isPost, isPostErrorMessage, post} = this.props.postVisitsToProps;
		const {isDealers, dealersErrorMessage, dealers} = this.props.getDealersToProps;
		const {isSites, sitessErrorMessage, sites} = this.props.getSitesToProps;
		this.sitesRendered(isSites, sitessErrorMessage, sites);
		return (
			<SafeAreaView style={{flex: 1}}>
				<View style={styles.wrapper}>
					<StatusBar barStyle="dark-content"/>
					<TouchableOpacity style={styles.btnBack} onPress={() => this.props.navigation.navigate('Choose')}>
						<BackIcon fill="black" style={styles.btnBackIcon}/>
					</TouchableOpacity>
					<Text style={styles.loginText}>Ziyaret Formu</Text>
					<KeyboardAwareScrollView
						showsVerticalScrollIndicator={false} contentContainerStyle={styles.keyboard} extraHeight={40}>
						{
							this.renderDealers(isDealers, dealersErrorMessage, dealers)
						}
						{
							openForm1 ? this.renderForm1() : null
						}
						{
							openForm2 ? this.renderForm2() : null
						}
						{
							openForm3 ? this.renderForm3() : null
						}
						<View style={styles.filesWrapper}>
							<AddFile title="Dosya Ekle" type="file" onPress={() => this.documentAdd()}/>
							<AddFile title="Fotoğraf Çek" type="gallery" onPress={() => this.openCamera()}/>
							{
								audio ?
									<View style={styles.counterWrapper}>
										<AddFile title="Durdur" type="audio" onPress={() => this.audioStop()}/>
										<Text style={styles.counterNumb}>{counter}</Text>
									</View> :
									<AddFile title="Ses Kaydı Al" type="audio" onPress={() => this.audioStart()}/>
							}
						</View>
						{
							document
								?
								<View style={styles.clearDocument}>
									<FileIcon fill="black" style={styles.clearDocumentIcon}/>
									<Text style={styles.clearDocumentText}>{documentName.substring(0, 30) + '...'}</Text>
									<TouchableOpacity style={styles.closedBtn} onPress={() => this.clearDocument()}>
										<ClosedIcon style={styles.closed}/>
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
											<ClosedIcon style={styles.closed}/>
										</TouchableOpacity>
										<Image source={{uri: image}} style={styles.snapImageImg}/>
									</View>
									: null
							}
							{
								video
									?
									<View style={styles.snapVideo}>
										<TouchableOpacity style={styles.closedBtn} onPress={() => this.clearVideo()}>
											<ClosedIcon style={styles.closed}/>
										</TouchableOpacity>
										<Video
											paused
											source={{uri: video}} ref={(ref) => {
											this.player = ref
										}}
											onBuffer={this.onBuffer} onError={this.videoError}
											resizeMode="cover"
											style={styles.snapVideoVid}/>
									</View>
									:
									null
							}
							{
								audioData
									?
									<View style={styles.snapImage}>
										<TouchableOpacity style={styles.closedBtn} onPress={() => this.clearVoice()}>
											<ClosedIcon style={styles.closed}/>
										</TouchableOpacity>
										<AudioIcon fill="black" style={styles.snapImageImg}/>
										<Text style={styles.audioText}>ses-kaydi.wav</Text>
									</View>
									:
									null
							}
						</View>
						{
							this.renderItems(isPost, isPostErrorMessage, post)
						}
						<Button bg={theme.colorBlack} color={theme.colorWhite} title="Formu Gönder"
										onPress={this.postDatas.bind(this)}/>
					</KeyboardAwareScrollView>
					{
						this.cameraView()
					}
					<View style={styles.getLocation}>
						<TouchableOpacity style={styles.getLocationBtn} onPress={() => this.getCustomLocation()}>
							{
								getLocationLoader ?
									<ActivityIndicator color="white"/> :
									<LocationIcon fill="white" style={styles.getLocationIcon}/>
							}
						</TouchableOpacity>
					</View>
					{
						getLocationLoaderText ?
							<View style={styles.addedLocationBox}>
								<Text style={styles.addedLocation}>Yeni Konumunuz eklendi ( {getLocationLoaderText} )</Text>
							</View> : null
					}
				</View>
			</SafeAreaView>
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
	getSites: PropTypes.func.isRequired,
	getSitesToProps: PropTypes.object.isRequired,
};

const mapStateToProps = state => {
	return {
		postVisitsToProps: state.visitsReducer,
		getServicesToProps: state.servicesReducer,
		getDealersToProps: state.dealersReducer,
		getSitesToProps: state.dealersReducer,
	}
};

export default connect(mapStateToProps, {
	postVisits,
	visitsDefault,
	getServices,
	getDealers,
	getSites,
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
