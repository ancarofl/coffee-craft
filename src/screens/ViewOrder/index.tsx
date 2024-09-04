import { NavigationProp, useNavigation } from '@react-navigation/native';
import React from 'react';
import { Text, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { CoffeeOptionCard } from '../../components/CoffeeOptionCard';
import { PrimaryButton } from '../../components/PrimaryButton';
import theme from '../../constants/theme';
import { reset } from '../../store/slices/coffeeSlice';
import { RootState } from '../../store/store';
import { RootStackParamList } from '../../types/navigation';
import styles from './styles';

type ViewOrderScreenNavigationProp = NavigationProp<RootStackParamList, 'SelectCoffeeSize'>;

export const ViewOrder = () => {
	const dispatch = useDispatch();
	const navigation = useNavigation<ViewOrderScreenNavigationProp>();
	const { typeId, sizeId, extras, availableCoffeesData } = useSelector(
		(state: RootState) => state.coffee
	);

	const selectedType = availableCoffeesData?.types.find((type) => type._id === typeId);
	const selectedSize = availableCoffeesData?.sizes.find((size) => size._id === sizeId);

	const handleOnPress = () => {
		navigation.navigate('SelectCoffeeExtras');
	};

	const handleDone = () => {
		dispatch(reset());
		navigation.navigate('Home');
	};

	return (
		<View style={[theme.container, styles.container]}>
			<View style={styles.optionsContainer}>
				<Text style={theme.title}>Overview</Text>
				<CoffeeOptionCard id={selectedType?._id} text={selectedType?.name || ''}></CoffeeOptionCard>
				<CoffeeOptionCard id={selectedSize?._id} text={selectedSize?.name || ''}></CoffeeOptionCard>

				{extras.length > 0 ? (
					extras.map((extra) => {
						const extraObject = availableCoffeesData?.extras.find((e) => e._id === extra.extraId);
						const subselectionObject = extraObject?.subselections.find(
							(sub) => sub._id === extra.subselectionId
						);
						const subselections = subselectionObject ? [subselectionObject] : [];

						return (
							<CoffeeOptionCard
								key={extraObject?._id}
								isToggled={true}
								subselections={subselections.length > 0 ? subselections : null}
								preselectedSubselectionId={subselectionObject?._id}
								isSubselectionEditable={false}
								text={extraObject?.name || ''}></CoffeeOptionCard>
						);
					})
				) : (
					<PrimaryButton text={'No extras added. Add now?'} onPress={() => handleOnPress()} />
				)}
			</View>

			<PrimaryButton text={'Brew your coffee'} onPress={() => handleDone()} />
		</View>
	);
};
