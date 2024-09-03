import { NavigationProp, useNavigation } from '@react-navigation/native';
import React from 'react';
import { Text, View } from 'react-native';
import { RootStackParamList } from '../../types/navigation';
import styles from './styles';

type SelectCoffeeTypeScreenNavigationProp = NavigationProp<RootStackParamList, 'SelectCoffeeType'>;

export const SelectCoffeeType = () => {
	const navigation = useNavigation<SelectCoffeeTypeScreenNavigationProp>();

	return (
		<View style={styles.container}>
			<Text>Select your style</Text>
		</View>
	);
};
