import React, { useState } from 'react';
import { Pressable, Text, View } from 'react-native';
import { useDispatch } from 'react-redux';
import { colors } from '../../constants/colors';
import { addExtra, removeExtra } from '../../store/slices/coffeeSlice';
import { extractExtraNameFromAPIResponse } from '../../utils/utils';
import styles from './styles';

type CoffeeOptionCardProps = {
	text: string;
	id?: string;
	onPress?: () => void;
	subselections?: CoffeeExtraSubselection[] | null;
	isToggled?: boolean;
	preselectedSubselectionId?: string;
	isSubselectionEditable?: boolean;
	backgroundColor?: string;
	textColor?: string;
};

export const CoffeeOptionCard = ({
	text,
	id,
	onPress,
	subselections,
	isToggled = false,
	preselectedSubselectionId,
	isSubselectionEditable = true,
	backgroundColor = colors.primaryBackgroundColor,
	textColor = colors.primaryTextColor,
}: CoffeeOptionCardProps) => {
	const [selectedSubselectionId, setSelectedSubselectionId] = useState<string | null>(
		preselectedSubselectionId || null
	);

	const dispatch = useDispatch();

	const handleOnPress = (subselectionId: string) => {
		if (!isSubselectionEditable) return;

		const newSelectionId = selectedSubselectionId === subselectionId ? '' : subselectionId;
		setSelectedSubselectionId(newSelectionId);

		newSelectionId
			? dispatch(addExtra({ extraId: id!, subselectionId: newSelectionId }))
			: dispatch(removeExtra({ extraId: id!, subselectionId }));
	};

	return (
		<Pressable style={[styles.container, { backgroundColor }]} onPress={onPress}>
			<Text style={[{ color: textColor }]}>{extractExtraNameFromAPIResponse(text)}</Text>
			{isToggled && subselections && (
				<View style={styles.subselectionContainer}>
					{subselections.map((subselection) => (
						<Pressable
							style={styles.subselection}
							key={subselection._id}
							onPress={() => handleOnPress(subselection._id)}>
							<Text style={[{ color: textColor }]}>{subselection.name}</Text>
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
