import { StyleSheet } from 'react-native';
import { colors } from '../../constants/colors';
import { sizes } from '../../constants/sizes';

export default StyleSheet.create({
	container: {
		justifyContent: 'space-between',
		width: '100%',
	},
	optionsContainer: {
		borderRadius: sizes.viewBorderRadiusDefault,
		width: '100%',
	},
	option: {
		backgroundColor: colors.primaryBackgroundColor,
		borderRadius: sizes.viewBorderRadiusDefault,
		color: colors.white,
		marginVertical: sizes.paddingOption / 2,
		padding: sizes.paddingOption,
		width: '100%',
	},
	text: {
		color: colors.white,
	},
});
