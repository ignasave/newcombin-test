import { FC } from 'react';
import { Member } from '../../../services/members';
import MemberItem from './MemberItem';
import styles from './styles.module.css';

interface Props {
	members: Member[];
}

const List: FC<Props> = ({ members }) => {
	return (
		<div className={styles.container}>
			<table className={styles.flTable}>
				<thead>
					<tr>
						<th>First Name</th>
						<th>Second Name</th>
						<th>address</th>
						<th>SSN</th>
					</tr>
				</thead>
				<tbody>
					{members.map((member) => (
						<MemberItem key={member.ssn} member={member} />
					))}
				</tbody>
			</table>
		</div>
	);
};

export default List;
