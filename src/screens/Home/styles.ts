import { StyleSheet } from 'react-native';
import { colors } from '../../constants/colors';
import { sizes } from '../../constants/sizes';

export default StyleSheet.create({
	container: {
		backgroundColor: colors.white,
		flex: 1,
		paddingBottom: sizes.paddingDefault,
		paddingHorizontal: sizes.paddingDefault,
	},
	title: {
		fontSize: sizes.fontLarge,
	},
	homeIcon: {
		marginLeft: -sizes.paddingDefault,
		paddingTop: sizes.paddingDefault * 2,
	},
});
