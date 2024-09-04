import { StyleSheet } from 'react-native';
import { sizes } from '../../constants/sizes';

export default StyleSheet.create({
	container: {
		alignItems: 'flex-start',
		borderRadius: sizes.viewBorderRadiusDefault,
		marginVertical: sizes.paddingOption / 2,
		padding: sizes.paddingOption,
		width: '100%',
	},
	text: {
		fontSize: sizes.fontMedium,
		fontWeight: 500,
	},
});
