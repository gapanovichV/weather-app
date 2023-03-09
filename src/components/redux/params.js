import { createSlice } from '@reduxjs/toolkit';

const initialState = 'm';

export const paramsSlice = createSlice({
	name: 'paramsSlice',
	initialState,
	reducers: {
		setParams: (state, action) => (state = action.payload),
	},
});

export const { setParams } = paramsSlice.actions;
export default paramsSlice.reducer;
