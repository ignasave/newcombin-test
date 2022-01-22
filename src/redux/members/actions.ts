import { membersSlice } from '.';
import { getMembers, Member, postMember } from '../../services/members';
import { logout } from '../auth/actions';
import store from '../store';

export const addMemberToStore = async (member: Member) => {
	const { members } = store.getState().members;
	const ssnExists = members.some((m) => m.ssn === member.ssn);
	if (!ssnExists) {
		try {
			await postMember(member);
			store.dispatch(membersSlice.actions.addMember(member));
		} catch (error) {
			if (error.response.status === 401) {
				logout();
			} else {
				alert(error.response.data.message);
			}
		}
	} else {
		alert('Member with this SSN already exists');
	}
};

export const getMembersToStore = async () => {
	try {
		const membersRequest = await getMembers();
		store.dispatch(membersSlice.actions.setMembers(membersRequest.data));
	} catch (error) {
		if (error.response.status === 401) {
			logout();
		} else {
			alert(error.response.data.message);
		}
	}
};
