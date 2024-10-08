import { NavigationProp, useNavigation } from '@react-navigation/native';
import { FlatList, Text, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import LargeIcon from '../../../assets/icons/LargeIcon';
import TallIcon from '../../../assets/icons/TallIcon';
import VentiIcon from '../../../assets/icons/VentiIcon';
import { CoffeeOptionCard } from '../../components/CoffeeOptionCard';
import theme from '../../constants/theme';
import { setSizeId } from '../../store/slices/coffeeSlice';
import { RootState } from '../../store/store';
import { RootStackParamList } from '../../types/navigation';

type SelectCoffeeSizeScreenNavigationProp = NavigationProp<RootStackParamList, 'SelectCoffeeSize'>;

export const SelectCoffeeSize = () => {
	const dispatch = useDispatch();
	const navigation = useNavigation<SelectCoffeeSizeScreenNavigationProp>();

	const coffeeData = useSelector((state: RootState) => state.coffee.availableCoffeesData);
	const coffeeTypeId = useSelector((state: RootState) => state.coffee.typeId);

	const selectedType = coffeeData?.types.find((type) => type._id === coffeeTypeId);
	const sizesAvailableForSelectedType = coffeeData?.sizes.filter((size) =>
		selectedType?.sizes.includes(size._id)
	);

	const handleSelectSize = (size: string) => {
		dispatch(setSizeId(size));
		navigation.navigate('SelectCoffeeExtras');
	};

	const sizeIconMap: { [key: string]: JSX.Element } = {
		Venti: <VentiIcon />,
		Large: <LargeIcon />,
		Tall: <TallIcon />,
	};

	const renderItem = ({ item }: { item: CoffeeSize }) => (
		<CoffeeOptionCard
			key={item._id}
			text={item.name}
			icon={sizeIconMap[item.name]}
			onPress={() => handleSelectSize(item._id)}
		/>
	);

	return (
		<View style={theme.container}>
			<Text style={theme.title}>Select your size</Text>
			<FlatList
				data={sizesAvailableForSelectedType}
				renderItem={renderItem}
				keyExtractor={(item) => item._id}
				style={theme.list}
			/>
		</View>
	);
};
