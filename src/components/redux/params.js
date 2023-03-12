import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	units: '',
	lat: 0,
	lon: 0,
};
export const paramsSlice = createSlice({
	name: 'paramsSlice',
	initialState,
	reducers: {
		setLatLon: (state, action) => {
			state.lat = action.payload.lat;
			state.lon = action.payload.lon;
		},
		setUnits: (state, action) => {
			state.units = action.payload;
		},
	},
});

export const { setLatLon, setUnits } = paramsSlice.actions;
export default paramsSlice.reducer;
