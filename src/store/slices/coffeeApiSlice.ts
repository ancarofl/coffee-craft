import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { API_BASE_URL } from '../../config/api';

export const coffeeApi = createApi({
	reducerPath: 'coffeeApi',
	baseQuery: fetchBaseQuery({ baseUrl: API_BASE_URL }),
	endpoints: (builder) => ({
		getCoffeeData: builder.query({
			query: (id: string) => `/coffee-machine/${id}`,
		}),
	}),
});

export const { useGetCoffeeDataQuery } = coffeeApi;
