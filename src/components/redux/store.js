import { configureStore } from '@reduxjs/toolkit';

import weatherDay from './weatherDay';

export const store = configureStore({
	reducer: {
    weatherDay
  },
});
