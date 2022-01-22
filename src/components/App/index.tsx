import { Route, Routes } from 'react-router-dom';

import Login from '../../pages/Login';
import Home from '../../pages/Home';
import useAuth from '../../hooks/useAuth';
import ProtectedRoute from '../ProtectedRoute';
import Other from '../../pages/Other';
import Layout from '../Layout';

function App() {
	useAuth();

	return (
		<Layout>
			<Routes>
				<Route path='/login' element={<Login />} />
				<Route path='/' element={<ProtectedRoute />}>
					<Route path='/' element={<Home />} />
				</Route>
				<Route path='/other' element={<ProtectedRoute />}>
					<Route path='/other' element={<Other />} />
				</Route>
			</Routes>
		</Layout>
	);
}

export default App;
