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
		setInitialCoffeeData: (state, action) => {
			state.availableCoffeesData = action.payload;
		},
		setType: (state, action: PayloadAction<string>) => {
			state.typeId = action.payload;
		},
		setSize: (state, action: PayloadAction<string>) => {
			state.sizeId = action.payload;
		},
		addExtra: (state, action: PayloadAction<SelectedCoffeeExtra>) => {
			// TODO: implement
			const { extraId, subselectionId } = action.payload;
			console.log('Coffee slice add extra: ', extraId, ' and ', subselectionId);
		},
		removeExtra: (state, action: PayloadAction<{ extraId: string; subselectionId: string }>) => {
			// TODO: implement
			const { extraId, subselectionId } = action.payload;
			console.log('Coffee slice remove extra: ', extraId, ' and ', subselectionId);
		},
	},
});

export const { setType, setSize, addExtra, removeExtra, setInitialCoffeeData } = coffeeSlice.actions;
export default coffeeSlice.reducer;
