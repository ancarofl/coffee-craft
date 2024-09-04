import { Feather } from '@expo/vector-icons';
import { StackNavigationProp } from '@react-navigation/stack';
import { Pressable, Text, View } from 'react-native';
import { colors } from '../../constants/colors';
import { sizes } from '../../constants/sizes';
import { RootStackParamList } from '../../types/navigation';
import styles from './styles';

interface CustomHeaderProps {
	title: string;
	navigation: StackNavigationProp<RootStackParamList>;
	onBackPress?: () => void;
}

export const CustomHeader = ({ title, navigation }: CustomHeaderProps) => {
	return (
		<View style={styles.header}>
			{navigation.canGoBack() && (
				<Pressable onPress={() => navigation.goBack()}>
					<Feather name="chevron-left" size={sizes.iconSmall} color={colors.black} />
				</Pressable>
			)}
			<Text style={styles.title}>{title}</Text>
		</View>
	);
};
