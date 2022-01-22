import { Link } from 'react-router-dom';
import styles from './styles.module.css';

const Header = () => {
	return (
		<header className={styles.header}>
			<Link to='/'>Home</Link>
			<Link to='/other'>Other</Link>
		</header>
	);
};

export default Header;
