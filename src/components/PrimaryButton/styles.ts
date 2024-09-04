import { StyleSheet } from 'react-native';
import { sizes } from '../../constants/sizes';

export default StyleSheet.create({
	container: {
		padding: 16,
		marginVertical: 8,
		borderRadius: sizes.viewBorderRadiusDefault,
		alignItems: 'center',
		width: '100%',
	},
	text: {
		fontSize: 16,
	},
});
