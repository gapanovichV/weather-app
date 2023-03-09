import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { useSelector } from 'react-redux';

const API = import.meta.env.VITE_API_WEATHER;

export const fetchWeatherWeek = createAsyncThunk(
	'weather/fetchWeatherWeek',
	async function ({ lat, lon, units }, { rejectWithValue }) {
		try {
			const res = await axios(
				`https://api.weatherbit.io/v2.0/forecast/daily?lat=${lat}&lon=${lon}&days=8&lang=ru&key=${API}`,
				{
					params: {
						units,
					},
				},
			);
			return res.data.data;
		} catch (error) {
			return rejectWithValue(error.message);
		}
	},
);

const initialState = {
	value: [],
	status: null,
	error: null,
};

export const weatherWeek = createSlice({
	name: 'weather',
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder.addCase(fetchWeatherWeek.pending, (state) => {
			state.status = 'loading';
		});
		builder.addCase(fetchWeatherWeek.fulfilled, (state, action) => {
			state.status = 'ok';
			state.value = action.payload;
		});
		builder.addCase(fetchWeatherWeek.rejected, (state, action) => {
			state.status = 'error';
			state.error = action.payload;
		});
	},
});

export default weatherWeek.reducer;
