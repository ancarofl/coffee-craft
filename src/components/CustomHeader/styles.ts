import { StyleSheet } from 'react-native';
import { colors } from '../../constants/colors';
import { sizes } from '../../constants/sizes';

export default StyleSheet.create({
	header: {
		alignItems: 'center',
		backgroundColor: colors.white,
		borderBottomWidth: 0,
		flexDirection: 'row',
		justifyContent: 'flex-start',
		paddingHorizontal: sizes.paddingDefault,
		paddingTop: sizes.paddingDefault,
	},
	title: {
		fontSize: sizes.fontMedium,
		fontWeight: 'bold',
	},
	chevron: {
		marginLeft: -sizes.paddingDefault / 3,
	},
});
