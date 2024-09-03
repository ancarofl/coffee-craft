import { NavigationProp, useNavigation } from '@react-navigation/native';
import React, { useEffect } from 'react';
import { Pressable, Text, View } from 'react-native';
import { useDispatch } from 'react-redux';
import { COFFEE_MACHINE_ID } from '../../config/api';
import { useGetCoffeeDataQuery } from '../../store/slices/coffeeApiSlice';
import { setInitialCoffeeData } from '../../store/slices/coffeeSlice';
import { RootStackParamList } from '../../types/navigation';
import styles from './styles';

type HomeScreenNavigationProp = NavigationProp<RootStackParamList, 'Home'>;

export const Home = () => {
	const dispatch = useDispatch();
	const navigation = useNavigation<HomeScreenNavigationProp>();

	const { data, error, isLoading } = useGetCoffeeDataQuery(COFFEE_MACHINE_ID);

	useEffect(() => {
		if (data) {
			dispatch(setInitialCoffeeData(data));
		}
	}, [data, dispatch]);

	if (isLoading) return <Text>Loading...</Text>;
	if (error) return <Text>Error: {error.toString()}</Text>;
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
