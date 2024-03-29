import {
	StyleSheet,
	Dimensions
} from 'react-native';
import theme from '../../lib/theme';

const {
	width,
	height
} = Dimensions.get('window');
export default StyleSheet.create({
	wrapper: {
		flex: 1,
		backgroundColor: theme.colorWhite,
	},
	loading: {
		marginBottom: 20,
	},
	keyboard: {
		justifyContent: 'center',
		paddingHorizontal: 15,
		paddingBottom: 40,
	},
	successText: {
		textAlign: 'center',
		paddingVertical: 10,
		fontSize: 14,
		fontFamily: theme.fontRegular,
		color: theme.colorBlue
	},
	successTextErr: {
		color: 'red',
	},
	logo: {
		width: 'auto',
		height: 44,
		resizeMode: 'contain',
		marginBottom: 44,
	},
	loginText: {
		fontFamily: theme.fontSemiBold,
		fontSize: 26,
		color: theme.colorBlack,
		marginBottom: 10,
		paddingHorizontal: 15,
	},
	links: {
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-between',
		marginBottom: 5,
	},
	link: {
		paddingVertical: 10,
	},
	linkTitle: {
		fontFamily: theme.fontRegular,
		fontSize: 12,
		lineHeight: 14,
		color: theme.colorBlue,
	},
	button: {
		marginTop: 10
	},
	tabs: {
		borderWidth: 1,
		borderColor: theme.colorBlue,
		borderRadius: 6,
		paddingVertical: 16,
		paddingHorizontal: 10,
		fontFamily: theme.fontMedium,
		color: theme.colorBlue,
		fontSize: 12,
		marginVertical: 15,
		paddingBottom: 8,
	},
	tabTitle: {
		position: 'absolute',
		top: -14,
		left: 10,
		fontSize: 12,
		fontFamily: theme.fontMedium,
		color: theme.colorBlue,
		padding: 4,
		backgroundColor: theme.colorBlue,
	},
	filesWrapper: {marginBottom: 10,},
	cameraWrapper: {
		position: 'absolute',
		left: 0,
		top: 0,
		right: 0,
		bottom: 0,
		width,
		height,
		backgroundColor: 'black',
		zIndex: 4,
		elevation: 4,
	},
	cameraBack: {
		position: 'absolute',
		left: 10,
		top: 10,
	},
	preview: {
		flex: 1,
		justifyContent: 'flex-end',
		alignItems: 'center',
	},
	captureWrapper: {
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-around',
		width: '100%',
		paddingBottom: 60,
	},
	waiting: {
		backgroundColor: theme.colorBlue,
		position: 'absolute',
		left: 0,
		top: 0,
		right: 0,
		bottom: 0,
		width: '100%',
		height: '100%',
		textAlign: 'center',
		justifyContent: 'center',
	},
	waitingTitle: {
		color: theme.colorBlue,
		fontSize: 16,
		fontFamily: theme.fontMedium,
		textAlign: 'center'
	},
	imgWrapper: {
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-between',
		paddingBottom: 20
	},
	snapImage: {
		width: '40%',
		height: 200,
		marginRight: 2,
	},
	snapVideo: {
		width: '30%',
		height: 200,
		marginLeft: 2,
	},
	closedBtn: {
		position: 'absolute',
		right: 6,
		top: 6,
		width: 30,
		height: 30,
		zIndex: 1,
	},
	closed: {
		width: '100%',
		height: '100%',
		resizeMode: 'contain'
	},
	snapImageImg: {
		width: '100%',
		height: '100%',
		resizeMode: 'cover',
		borderRadius: 6,
	},
	snapVideoVid: {
		width: '100%',
		height: '100%',
		borderRadius: 6,
	},
	clearDocument: {
		marginVertical: 20,
		height: 100,
		flexDirection: 'row',
		alignItems: 'center',
	},
	clearDocumentIcon: {
		width: 100,
		height: 100,
		resizeMode: 'contain'
	},
	clearDocumentText: {
		fontSize: 16,
		color: theme.colorBlue,
		fontFamily: theme.fontMedium,
		paddingLeft: 10,
	},
	btnBack: {
		width: 60,
		height: 60,
		borderBottomRightRadius: 30,
		borderWidth: 2,
		borderColor: theme.colorBlack,
		borderLeftWidth: 0,
		borderTopWidth: 0,
		marginBottom: 30,
		justifyContent: 'center',
		alignItems: 'center',
	},
	btnBackIcon: {
		width: 24,
		height: 30,
		resizeMode: 'contain'
	},
	audioText: {
		fontSize: 14,
		fontFamily: theme.fontMedium,
		color: theme.colorBlack,
		textAlign: 'center',
		paddingBottom: 20,
	},
	siteWrapper: {
		marginBottom: 6,
	},
	siteListing: {
		backgroundColor: theme.colorBlack,
		paddingTop: 6,
	},
	siteItem: {
		marginBottom: 6
	},
	siteItemText: {
		fontFamily: theme.fontRegular,
		paddingHorizontal: 6,
		color: theme.colorWhite,
		fontSize: 16,
	},
	resultsSite: {
		backgroundColor: theme.colorBlue,
		padding: 5,
	},
	getLocation: {
		position: 'absolute',
		width: 40,
		height: 40,
		right: 10,
		bottom: 10,
		borderRadius: 6,
		backgroundColor: theme.colorBlack,
		alignItems: 'center',
		justifyContent: 'center',
		borderWidth: 1,
		borderColor: theme.colorWhite,
		zIndex: 3,
		elevation: 3
	},
	getLocationBtn: {
		width: '100%',
		height: '100%',
		padding: 10
	},
	getLocationIcon: {
		width: '100%',
		height: '100%',
		resizeMode: 'contain'
	},
	addedLocationBox: {
		backgroundColor: theme.colorBlack,
		position: 'absolute',
		left: 0,
		right: 0,
		bottom: 0,
		width: '100%',
		zIndex: 2,
		elevation: 2
	},
	addedLocation: {
		textAlign: 'center',
		padding: 10,
		fontSize: 14,
		color: theme.colorWhite,
	},
	counterWrapper: {
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-between'
	},
	counterNumb: {
		fontSize: 20,
		fontFamily: theme.fontSemiBold,
		color: theme.colorBlack
	},
});
