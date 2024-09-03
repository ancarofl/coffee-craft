import React from 'react';
import { Pressable, Text } from 'react-native';
import { colors } from '../../constants/colors';
import styles from './styles';

export const CoffeeOptionCard = ({
	backgroundColor = colors.primaryBackgroundColor,
	textColor = colors.primaryTextColor,
	text,
	onPress,
}: CoffeeOptionCardProps) => {
	return (
		<Pressable style={[styles.container, { backgroundColor }]} onPress={onPress}>
			<Text style={[styles.text, { color: textColor }]}>{text}</Text>
		</Pressable>
	);
};
