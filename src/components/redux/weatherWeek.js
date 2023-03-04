import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const API = import.meta.env.VITE_API_WEATHER;

export const fetchWeatherWeek = createAsyncThunk(
	'weather/fetchWeatherWeek',
	async function ({ lat, lon }, { rejectWithValue }) {
		try {
			const res = await axios(
				`https://api.weatherbit.io/v2.0/forecast/daily?lat=${lat}&lon=${lon}&days=8&units=metric&lang=ru&key=${API}`,
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
	extraReducers: {
		[fetchWeatherWeek.pending]: (state) => {
			state.status = 'loading';
		},
		[fetchWeatherWeek.fulfilled]: (state, action) => {
			state.status = 'ok';
			state.value = action.payload;
		},
		[fetchWeatherWeek.rejected]: (state, action) => {
			state.status = 'error';
			state.error = action.payload;
		},
	},
});

export default weatherWeek.reducer;
