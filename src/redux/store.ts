import { configureStore } from '@reduxjs/toolkit';
import authReducer from './auth';
import membersReducer from './members';

const store = configureStore({
	reducer: {
		members: membersReducer,
		auth: authReducer
	},
});

export default store