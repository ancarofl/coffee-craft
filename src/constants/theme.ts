import { StyleSheet } from 'react-native';
import { colors } from './colors';

import { sizes } from './sizes';

export default StyleSheet.create({
	container: {
		alignItems: 'flex-start',
		backgroundColor: colors.white,
		flex: 1,
		fontSize: sizes.fontSmall,
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
