import React, { useState } from 'react';
import { Pressable, Text, View } from 'react-native';
import { useDispatch } from 'react-redux';
import { colors } from '../../constants/colors';
import { addExtra, removeExtra } from '../../store/slices/coffeeSlice';
import styles from './styles';

type CoffeeOptionCardProps = {
	text: string;
	id?: string;
	onPress?: () => void;
	subselections?: CoffeeExtraSubselection[] | null;
	isToggled?: boolean;
	backgroundColor?: string;
	textColor?: string;
};
// TODO: clean this
export const CoffeeOptionCard = ({
	text,
	id,
	onPress,
	subselections,
	isToggled = false,
	backgroundColor = colors.primaryBackgroundColor,
	textColor = colors.primaryTextColor,
}: CoffeeOptionCardProps) => {
	const [selectedSubselectionId, setSelectedSubselectionId] = useState<string | null>(null);

	const dispatch = useDispatch();

	const handleOnPress = (subselectionId: string) => {
		const newSelectionId = selectedSubselectionId === subselectionId ? '' : subselectionId;
		setSelectedSubselectionId(newSelectionId);

		newSelectionId
			? dispatch(addExtra({ extraId: id!, subselectionId: newSelectionId }))
			: dispatch(removeExtra({ extraId: id!, subselectionId }));
	};

	return (
		<Pressable style={[styles.container, { backgroundColor }]} onPress={onPress}>
			<Text style={[styles.text, { color: textColor }]}>{text}</Text>
			{isToggled && subselections && (
				<View>
					{subselections.map((subselection) => (
						<Pressable
							key={subselection._id}
							style={styles.subselectionContainer}
							onPress={() => handleOnPress(subselection._id)}>
							<Text style={[styles.text2, { color: textColor }]}>{subselection.name}</Text>
							<View
								style={[
									styles.circle,
									selectedSubselectionId === subselection._id && styles.checkedCircle,
								]}
							/>
						</Pressable>
					))}
				</View>
			)}
		</Pressable>
	);
};
