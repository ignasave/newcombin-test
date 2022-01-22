import { createSlice } from '@reduxjs/toolkit';

interface auth {
	token: string | null;
}

const initialState: auth = {
	token: null,
};

export const authSlice = createSlice({
	name: 'auth',
	initialState,
	reducers: {
		setToken: (state, action) => {
			state.token = action.payload;
		}
	},
});

export default authSlice.reducer;
