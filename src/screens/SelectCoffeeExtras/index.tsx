import { NavigationProp, useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import { FlatList, Text, View } from 'react-native';
import { useSelector } from 'react-redux';
import { CoffeeOptionCard } from '../../components/CoffeeOptionCard';
import { PrimaryButton } from '../../components/PrimaryButton';
import theme from '../../constants/theme';
import { RootState } from '../../store/store';
import { RootStackParamList } from '../../types/navigation';

type SelectCoffeeExtrasScreenNavigationProp = NavigationProp<
	RootStackParamList,
	'SelectCoffeeExtras'
>;

export const SelectCoffeeExtras = () => {
	const [toggledExtrasIds, setToggledExtrasIds] = useState<string[]>([]);

	const navigation = useNavigation<SelectCoffeeExtrasScreenNavigationProp>();

	const coffeeTypeId = useSelector((state: RootState) => state.coffee.typeId);
	const coffeeData = useSelector((state: RootState) => state.coffee.availableCoffeesData);
	const extras = useSelector((state: RootState) => state.coffee.extras);

	const selectedType = coffeeData?.types.find((type) => type._id === coffeeTypeId);
	const extrasAvailableForSelectedType = coffeeData?.extras.filter((extra) =>
		selectedType?.extras.includes(extra._id)
	);

	const handleToggleExtra = (extraId: string) => {
		isToggled(extraId)
			? setToggledExtrasIds((prev) => prev.filter((id) => id !== extraId))
			: setToggledExtrasIds((prev) => [...prev, extraId]);
	};

	const isToggled = (extraId: string) => toggledExtrasIds.includes(extraId);

	const renderItem = ({ item }: { item: CoffeeExtra }) => (
		<CoffeeOptionCard
			key={item._id}
			text={item.name}
			id={item._id}
			onPress={() => handleToggleExtra(item._id)}
			subselections={item.subselections}
			isToggled={isToggled(item._id)}
		/>
	);

	return (
		<View style={theme.container}>
			<Text style={theme.title}>Select your extras</Text>
			<FlatList
				data={extrasAvailableForSelectedType}
				renderItem={renderItem}
				keyExtractor={(item) => item._id}
				style={theme.list}
			/>
			<PrimaryButton
				text={`Continue with ${extras.length} extra(s).`}
				onPress={() => navigation.navigate('ViewOrder')}></PrimaryButton>
		</View>
	);
};
