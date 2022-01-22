import { FC } from 'react';
import { RootStateOrAny, useSelector } from 'react-redux';
import Footer from './Footer';
import Header from './Header';
import styles from './styles.module.css';

const Layout: FC = ({ children }) => {
	const { token } = useSelector((state: RootStateOrAny) => state.auth);
	return (
		<div className={styles.container}>
			{token && <Header />}
			{children}
			<Footer />
		</div>
	);
};

export default Layout;

