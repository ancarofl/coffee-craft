import { NavigationProp, useNavigation } from '@react-navigation/native';
import React from 'react';
import { Pressable, Text, View } from 'react-native';
import { RootStackParamList } from '../../types/navigation';
import styles from './styles';

type HomeScreenNavigationProp = NavigationProp<RootStackParamList, 'Home'>;

export const Home = () => {
	const navigation = useNavigation<HomeScreenNavigationProp>();

	return (
		<View style={styles.container}>
			<Text>COFEEE MACHINE</Text>
			<Pressable onPress={() => navigation.navigate('SelectCoffeeType')}>
				<View>
					<Text>START</Text>
				</View>
			</Pressable>
		</View>
	);
};
