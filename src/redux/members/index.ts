import { createSlice } from '@reduxjs/toolkit';
import { Member } from '../../services/members';

interface membersState {
	members: Member[];
}

const initialState: membersState = {
	members: [],
};

export const membersSlice = createSlice({
	name: 'members',
	initialState,
	reducers: {
		addMember: (state, action) => {
			state.members.push(action.payload);
		},
        setMembers: (state, action) => {
            state.members = action.payload;
        }
	},
});

export default membersSlice.reducer;