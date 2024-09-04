import { StyleSheet } from 'react-native';
import { colors } from '../../constants/colors';
import { sizes } from '../../constants/sizes';

export default StyleSheet.create({
	container: {
		flex: 1,
		padding: 16,
		//backgroundColor: colors.primaryBackgroundColor,
		//borderWidth: 2,
		//borderColor: 'red',
	},

	option: {
		backgroundColor: colors.primaryBackgroundColor,
		padding: 16,
		marginVertical: 8,
		borderRadius: sizes.viewBorderRadiusDefault,
		alignItems: 'center',
		width: '100%',
	},
});
