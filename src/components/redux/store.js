import { configureStore } from '@reduxjs/toolkit';

import weatherDay from './weatherDay';
import weatherWeek from './weatherWeek';
import themeSlice from './theme';

export const store = configureStore({
	reducer: {
		weatherDay,
		weatherWeek,
		themeSlice,
	},
});
