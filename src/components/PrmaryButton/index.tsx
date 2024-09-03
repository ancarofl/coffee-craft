import React from 'react';
import { Pressable, Text } from 'react-native';
import { colors } from '../../constants/colors';
import styles from './styles';

type PrimaryButtonProps = {
	backgroundColor?: string;
	textColor?: string;
	text: string;
	onPress?: () => void;
};

export const PrimaryButton = ({
	backgroundColor = colors.primaryBackgroundColor,
	textColor = colors.primaryTextColor,
	text,
	onPress,
}: PrimaryButtonProps) => {
	return (
		<Pressable style={[styles.container, { backgroundColor }]} onPress={onPress}>
			<Text style={[styles.text, { color: textColor }]}>{text}</Text>
		</Pressable>
	);
};
