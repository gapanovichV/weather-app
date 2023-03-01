import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const API = import.meta.env.VITE_API_WEATHER;

export const fetchWeather = createAsyncThunk(
	'weather/fetchWeather',
	async function ({ lat, lon }, { rejectWithValue }) {
		try {

			const res = await axios(
				`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&lang=ru&units=metric&appid=${API}`,
			);
			return res.data;
		} catch (error) {
			return rejectWithValue(error.message);
		}
	},
);

const initialState = {
	value: {},
	status: null,
	error: null,
};

export const weatherDay = createSlice({
	name: 'weather',
	initialState,
	reducers: {},
	extraReducers: {
		[fetchWeather.pending]: (state) => {
			state.status = 'loading';
		},
		[fetchWeather.fulfilled]: (state, action) => {
			state.status = 'resolved';
			state.value = action.payload;
		},
		[fetchWeather.rejected]: (state, action) => {
			state.status = 'rejected';
			state.error = action.payload;
		},
	},
});

export default weatherDay.reducer;
