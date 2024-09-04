import { NavigationProp, useNavigation } from '@react-navigation/native';
import React, { useEffect } from 'react';
import { Pressable, Text, View } from 'react-native';
import { useDispatch } from 'react-redux';
import HomeIcon from '../../../assets/icons/HomeIcon';
import { COFFEE_MACHINE_ID } from '../../config/api';
import theme from '../../constants/theme';
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
		<View style={theme.container}>
			<Text style={theme.title}>Tap the machine to start</Text>
			<Pressable onPress={() => navigation.navigate('SelectCoffeeType')}>
				<View>
					<HomeIcon style={styles.homeIcon} />
				</View>
			</Pressable>
		</View>
	);
};
