import { NavigationProp, useNavigation } from '@react-navigation/native';
import { FlatList, Text, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import CoffeeType1Icon from '../../../assets/icons/CoffeeType1Icon';
import CoffeeType2Icon from '../../../assets/icons/CoffeeType2Icon';
import CoffeeType3Icon from '../../../assets/icons/CoffeeType3Icon';
import { CoffeeOptionCard } from '../../components/CoffeeOptionCard';
import theme from '../../constants/theme';
import { setTypeId } from '../../store/slices/coffeeSlice';
import { RootState } from '../../store/store';
import { RootStackParamList } from '../../types/navigation';

type SelectCoffeeTypeScreenNavigationProp = NavigationProp<RootStackParamList, 'SelectCoffeeType'>;

export const SelectCoffeeType = () => {
	const dispatch = useDispatch();
	const navigation = useNavigation<SelectCoffeeTypeScreenNavigationProp>();
	const coffeeData = useSelector((state: RootState) => state.coffee.availableCoffeesData);

	const handleSelectType = (type: string) => {
		dispatch(setTypeId(type));
		navigation.navigate('SelectCoffeeSize');
	};

	const getRandomCoffeeTypeIcon = () => {
		const icons = [CoffeeType1Icon, CoffeeType2Icon, CoffeeType3Icon];
		const randomIndex = Math.floor(Math.random() * icons.length);
		return icons[randomIndex];
	};

	const renderItem = ({ item }: { item: CoffeeSize }) => {
		const RandomIcon = getRandomCoffeeTypeIcon();

		return (
			<CoffeeOptionCard
				icon={<RandomIcon />}
				key={item._id}
				text={item.name}
				onPress={() => handleSelectType(item._id)}
			/>
		);
	};

	return (
		<View style={theme.container}>
			<Text style={theme.title}>Select your style</Text>
			<FlatList
				data={coffeeData?.types}
				renderItem={renderItem}
				keyExtractor={(item) => item._id}
				style={theme.list}
			/>
		</View>
	);
};
