import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialState: CoffeeState = {
	availableCoffeesData: null,
	typeId: '',
	sizeId: '',
	extras: [],
};

const coffeeSlice = createSlice({
	name: 'coffee',
	initialState,
	reducers: {
		setInitialCoffeeData: (state, action: PayloadAction<CoffeeData>) => {
			state.availableCoffeesData = action.payload;
		},
		setTypeId: (state, action: PayloadAction<string>) => {
			state.typeId = action.payload;
		},
		setSizeId: (state, action: PayloadAction<string>) => {
			state.sizeId = action.payload;
		},
		addExtra: (state, action: PayloadAction<SelectedCoffeeExtra>) => {
			const { extraId, subselectionId } = action.payload;

			// If the extra is already added to the coffee, update its subselection to the newly selected one. Otherwise add the extra
			const existingExtra = state.extras.find((extra) => extra.extraId === extraId);
			existingExtra
				? (existingExtra.subselectionId = subselectionId)
				: state.extras.push({ extraId, subselectionId });
		},
		removeExtra: (state, action: PayloadAction<{ extraId: string; subselectionId: string }>) => {
			const { extraId, subselectionId } = action.payload;

			state.extras = state.extras.filter(
				(extra) => !(extra.extraId === extraId && extra.subselectionId === subselectionId)
			);
		},
	},
});

export const { setTypeId, setSizeId, addExtra, removeExtra, setInitialCoffeeData } =
	coffeeSlice.actions;
export default coffeeSlice.reducer;
