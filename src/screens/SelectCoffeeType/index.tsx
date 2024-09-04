import { NavigationProp, useNavigation } from '@react-navigation/native';
import { FlatList, Text, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { CoffeeOptionCard } from '../../components/CoffeeOptionCard';
import { setTypeId } from '../../store/slices/coffeeSlice';
import { RootState } from '../../store/store';
import { RootStackParamList } from '../../types/navigation';
import styles from './styles';

type SelectCoffeeTypeScreenNavigationProp = NavigationProp<RootStackParamList, 'SelectCoffeeType'>;

export const SelectCoffeeType = () => {
	const dispatch = useDispatch();
	const navigation = useNavigation<SelectCoffeeTypeScreenNavigationProp>();
	const coffeeData = useSelector((state: RootState) => state.coffee.availableCoffeesData);

	const handleSelectType = (type: string) => {
		dispatch(setTypeId(type));
		navigation.navigate('SelectCoffeeSize');
	};

	const renderItem = ({ item }: { item: { _id: string; name: string } }) => (
		<CoffeeOptionCard key={item._id} text={item.name} onPress={() => handleSelectType(item._id)} />
	);

	return (
		<View style={styles.container}>
			<Text>Select your style</Text>
			<FlatList
				data={coffeeData?.types}
				renderItem={renderItem}
				keyExtractor={(item) => item._id}
			/>
		</View>
	);
};
