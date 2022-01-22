import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { authSlice } from '../redux/auth';

const useAuth = () => {
	const dispatch = useDispatch();
	let navigate = useNavigate();

	useEffect(() => {
		const token = localStorage.getItem('token');
		if (token) {
			dispatch(authSlice.actions.setToken(token));
			navigate('/');
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);
};

export default useAuth;
