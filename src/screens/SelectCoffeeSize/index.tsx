import { NavigationProp, useNavigation } from '@react-navigation/native';
import { FlatList, Text, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { CoffeeOptionCard } from '../../components/CoffeeOptionCard';
import { setSizeId } from '../../store/slices/coffeeSlice';
import { RootState } from '../../store/store';
import { RootStackParamList } from '../../types/navigation';
import styles from './styles';

type SelectCoffeeSizeScreenNavigationProp = NavigationProp<RootStackParamList, 'SelectCoffeeSize'>;

export const SelectCoffeeSize = () => {
	const dispatch = useDispatch();
	const navigation = useNavigation<SelectCoffeeSizeScreenNavigationProp>();

	const coffeeData = useSelector((state: RootState) => state.coffee.availableCoffeesData);
	const coffeeTypeId = useSelector((state: RootState) => state.coffee.typeId);

	const selectedType = coffeeData?.types.find((type) => type._id === coffeeTypeId);
	const filteredSizes = coffeeData?.sizes.filter((size) => selectedType?.sizes.includes(size._id));

	const handleSelectSize = (size: string) => {
		dispatch(setSizeId(size));
		navigation.navigate('SelectCoffeeExtras');
	};

	const renderItem = ({ item }: { item: { _id: string; name: string } }) => (
		<CoffeeOptionCard key={item._id} text={item.name} onPress={() => handleSelectSize(item._id)} />
	);

	return (
		<View style={styles.container}>
			<Text>Select your size</Text>
			<FlatList data={filteredSizes} renderItem={renderItem} keyExtractor={(item) => item._id} />
		</View>
	);
};
