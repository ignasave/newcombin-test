import { useEffect } from 'react';
import { RootStateOrAny, useSelector } from 'react-redux';
import { getMembersToStore } from '../../redux/members/actions';
import Form from './Form';
import List from './List';
import styles from './styles.module.css';

const Home = () => {
	const { members } = useSelector((state: RootStateOrAny) => state.members);

	/* get members every 2 minutes */
	useEffect(() => {
		getMembersToStore();
		const timer = setInterval(() => {
			getMembersToStore();
		}, 120000);
		return () => clearInterval(timer);
	}, []);

	return (
		<div className={styles.container}>
			<Form />
			<List members={members} />
		</div>
	);
};

export default Home;
