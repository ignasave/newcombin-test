import { FC } from 'react';
import { Member } from '../../../../services/members';

interface Props {
	member: Member;
}

const MemberItem: FC<Props> = ({ member }) => {
	return (
		<tr>
			<td>{member.firstName}</td>
			<td>{member.lastName}</td>
			<td>{member.address}</td>
			<td>{member.ssn}</td>
		</tr>
	);
};

export default MemberItem;
