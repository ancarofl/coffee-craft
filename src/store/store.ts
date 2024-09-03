import { configureStore } from '@reduxjs/toolkit';
import { coffeeApi } from './slices/coffeeApiSlice';
import coffeeReducer from './slices/coffeeSlice';

export const store = configureStore({
	reducer: {
		coffee: coffeeReducer,
		[coffeeApi.reducerPath]: coffeeApi.reducer,
	},
	middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(coffeeApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
