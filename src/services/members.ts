import axiosInstance from './axiosInstance';

export interface Member {
	firstName: string;
	lastName: string;
	address: string;
	ssn: string;
}

export const postMember = (member: Member) => {
	return axiosInstance.post('api/members', member, {
		headers: {
			Authorization: `Bearer ${localStorage.getItem('token')}`,
		},
	});
};

export const getMembers = () => {
	return axiosInstance.get('api/members', {
		headers: {
			Authorization: `Bearer ${localStorage.getItem('token')}`,
		},
	});
};
