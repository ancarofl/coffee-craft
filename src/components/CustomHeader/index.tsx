import { Feather } from '@expo/vector-icons';
import { StackNavigationProp } from '@react-navigation/stack';
import { Pressable, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { colors } from '../../constants/colors';
import { sizes } from '../../constants/sizes';
import { RootStackParamList } from '../../types/navigation';
import styles from './styles';

type CustomHeaderProps = {
	title: string;
	navigation: StackNavigationProp<RootStackParamList>;
	onBackPress?: () => void;
};

export const CustomHeader = ({ title, navigation }: CustomHeaderProps) => {
	return (
		<SafeAreaView style={styles.header}>
			{navigation.canGoBack() && (
				<Pressable onPress={() => navigation.goBack()}>
					<Feather
						name="chevron-left"
						size={sizes.iconSmall}
						color={colors.black}
						style={styles.chevron}
					/>
				</Pressable>
			)}
			<Text style={styles.title}>{title}</Text>
		</SafeAreaView>
	);
};
