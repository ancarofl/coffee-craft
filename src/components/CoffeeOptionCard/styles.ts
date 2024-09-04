import { StyleSheet } from 'react-native';
import { colors } from '../../constants/colors';
import { sizes } from '../../constants/sizes';

export default StyleSheet.create({
	container: {
		alignItems: 'flex-start',
		borderRadius: sizes.viewBorderRadiusDefault,
		marginVertical: sizes.paddingOption / 2,
		padding: sizes.paddingOption,
		width: '100%',
	},
	subselectionContainer: {
		width: '100%',
	},
	subselection: {
		alignItems: 'center',
		backgroundColor: colors.secondaryBackgroundColor,
		borderRadius: sizes.viewBorderRadiusDefault,
		flexDirection: 'row',
		justifyContent: 'space-between',
		marginTop: sizes.paddingDefault,
		padding: sizes.paddingDefault / 2,
		width: '100%',
	},
	circle: {
		borderColor: colors.primaryTextColor,
		borderRadius: 12,
		borderWidth: 2,
		backgroundColor: 'transparent',
		height: 24,
		width: 24,
	},
	checkedCircle: {
		backgroundColor: colors.primaryTextColor,
	},
	textContainer: {
		flexDirection: 'row',
		alignItems: 'center',
	},
	iconContainer: {
		marginRight: sizes.paddingDefault,
	},
});
