import { NavigationProp, useNavigation } from '@react-navigation/native';
import React from 'react';
import { Text, View } from 'react-native';
import { useSelector } from 'react-redux';
import { PrimaryButton } from '../../components/PrimaryButton';
import { RootState } from '../../store/store';
import { RootStackParamList } from '../../types/navigation';
import { extractExtraNameFromAPIResponse } from '../../utils/utils';
import styles from './styles';

type ViewOrderScreenNavigationProp = NavigationProp<RootStackParamList, 'SelectCoffeeSize'>;
// TODO: clean this
export const ViewOrder = () => {
	const navigation = useNavigation<ViewOrderScreenNavigationProp>();
	const { typeId, sizeId, extras, availableCoffeesData } = useSelector(
		(state: RootState) => state.coffee
	);

	const selectedType = availableCoffeesData?.types.find((type) => type._id === typeId);
	const selectedSize = availableCoffeesData?.sizes.find((size) => size._id === sizeId);

	const handleOnPress = () => {
		navigation.navigate('SelectCoffeeExtras');
	};

	return (
		<View style={styles.container}>
			<Text>Overview</Text>

			<Text style={styles.option}>{selectedType?.name || 'None'}</Text>

			<Text style={styles.option}>{selectedSize?.name || 'None'}</Text>

			{extras.length > 0 ? (
				extras.map((extra) => {
					const extraDetail = availableCoffeesData?.extras.find((e) => e._id === extra.extraId);
					const subselectionDetail = extraDetail?.subselections.find(
						(sub) => sub._id === extra.subselectionId
					);

					return (
						<View key={extra.extraId} style={styles.option}>
							<Text>{extractExtraNameFromAPIResponse(extraDetail?.name || '')} </Text>
							<Text>{subselectionDetail?.name || 'None'}</Text>
						</View>
					);
				})
			) : (
				<View>
					<PrimaryButton text={'No extras added. Add now?'} onPress={() => handleOnPress()} />
				</View>
			)}

			<PrimaryButton text={'Brew your coffee'}></PrimaryButton>
		</View>
	);
};
