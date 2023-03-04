import { configureStore } from '@reduxjs/toolkit';

import weatherDay from './weatherDay';
import weatherWeek from './weatherWeek';

export const store = configureStore({
	reducer: {
		weatherDay,
		weatherWeek,
	},
});
