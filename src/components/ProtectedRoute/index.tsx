import { FC } from 'react';
import { RootStateOrAny, useSelector } from 'react-redux';
import { Navigate, Outlet } from 'react-router-dom';

const ProtectedRoute: FC = () => {
    const { token } = useSelector((state: RootStateOrAny) => state.auth);
	return token ? <Outlet /> : <Navigate to='/login' replace />
};

export default ProtectedRoute;
