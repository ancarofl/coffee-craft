import { StyleSheet } from 'react-native';
import { colors } from '../../constants/colors';
import { sizes } from '../../constants/sizes';

export default StyleSheet.create({
	container: {
		alignItems: 'flex-start',
		backgroundColor: colors.white,
		flex: 1,
		paddingBottom: sizes.paddingDefault,
		paddingHorizontal: sizes.paddingDefault,
	},
	title: {
		fontSize: sizes.fontLarge,
	},
	list: {
		width: '100%',
	},
});
