// These types are separate because imports are not allowed in d.ts files

import { RouteProp } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

export type RootStackParamList = {
	Home: undefined;
	SelectCoffeeType: undefined;
	SelectCoffeeSize: undefined;
	SelectCoffeeExtras: undefined;
	ViewOrder: undefined;
};

export type StackNavigationProps<T extends keyof RootStackParamList> = NativeStackNavigationProp<
	RootStackParamList,
	T
>;

export type StackRouteProps<T extends keyof RootStackParamList> = RouteProp<RootStackParamList, T>;
