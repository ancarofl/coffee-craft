import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import * as React from 'react';
import { Provider } from 'react-redux';
import { Home } from './src/screens/Home';
import { SelectCoffeeExtras } from './src/screens/SelectCoffeeExtras';
import { SelectCoffeeSize } from './src/screens/SelectCoffeeSize';
import { SelectCoffeeType } from './src/screens/SelectCoffeeType';
import { ViewOrder } from './src/screens/ViewOrder';
import { store } from './src/store/store';

const Stack = createNativeStackNavigator();

export default function App() {
	return (
		<Provider store={store}>
			<NavigationContainer>
				<Stack.Navigator
					screenOptions={{
						headerShown: false,
					}}>
					<Stack.Screen name="Home" component={Home} />
					<Stack.Screen name="SelectCoffeeType" component={SelectCoffeeType} />
					<Stack.Screen name="SelectCoffeeSize" component={SelectCoffeeSize} />
					<Stack.Screen name="SelectCoffeeExtras" component={SelectCoffeeExtras} />
					<Stack.Screen name="ViewOrder" component={ViewOrder} />
				</Stack.Navigator>
			</NavigationContainer>
		</Provider>
	);
}
