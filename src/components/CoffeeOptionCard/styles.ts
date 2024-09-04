import { StyleSheet } from 'react-native';
import { colors } from '../../constants/colors';

export default StyleSheet.create({
	container: {
		padding: 16,
		marginVertical: 8,
		borderRadius: 8,
		alignItems: 'center',
		width: '100%',
	},
	text: {
		fontSize: 16,
	},
	subselectionContainer: {
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-between',
		marginBottom: 8,
	},
	text2: {
		fontSize: 16,
		marginRight: 8,
	},
	circle: {
		width: 24,
		height: 24,
		borderRadius: 12,
		borderWidth: 2,
		borderColor: colors.primaryTextColor,
		backgroundColor: 'transparent',
	},
	checkedCircle: {
		backgroundColor: colors.primaryTextColor,
	},
});
