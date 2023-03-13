import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { useSelector } from 'react-redux';
import axios from 'axios';

const API = import.meta.env.VITE_API_WEATHER;

export const fetchWeather = createAsyncThunk(
	'weather/fetchWeather',
	async function ({ lat, lon, units }, { rejectWithValue }) {
		try {
			const res = await axios.get(
				`https://api.weatherbit.io/v2.0/current?lat=${lat}&lon=${lon}&lang=ru&key=${API}`,
				{
					params: {
						units,
					},
				},
			);
			return res.data.data[0];
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
	extraReducers: (builder) => {
		builder.addCase(fetchWeather.fulfilled, (state, action) => {
			state.status = 'ok';
			state.value = action.payload;
		});
		builder.addCase(fetchWeather.rejected, (state, action) => {
			state.status = 'error';
			state.error = action.payload;
			fetchWeather();
		});
	},
});

export default weatherDay.reducer;
