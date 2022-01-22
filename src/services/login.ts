import axiosInstance from './axiosInstance';

export interface LoginData {
	username: string;
	password: string;
}

export const loginService = async (data: LoginData) => {
	const request = await axiosInstance.post('/auth', data)
	return request
}