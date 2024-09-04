import { StyleSheet } from 'react-native';
import { colors } from '../../constants/colors';

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
		borderRadius: 8,
		alignItems: 'center',
		width: '100%',
	},
});
