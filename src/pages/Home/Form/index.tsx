import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import schema from './schema';
import { addMemberToStore } from '../../../redux/members/actions';
import { Member } from '../../../services/members';
import styles from './styles.module.css';
import Input from '../../../components/Input';
import Button from '../../../components/Button';

const Form = () => {
	const {
		register,
		formState: { errors, isValid },
		handleSubmit,
	} = useForm({
		resolver: yupResolver(schema),
		mode: 'onBlur',
	});

	const onSubmit = (data: Member) => {
		addMemberToStore(data);
	};

	return (
		<div className={styles.container}>
			<form onSubmit={handleSubmit(onSubmit as () => void)}>
				<Input
					placeholder='First Name'
					name='firstName'
					register={register}
					error={errors.firstName?.message}
				/>
				<Input placeholder='Last Name' name='lastName' register={register} error={errors.lastName?.message} />
				<Input placeholder='Address' name='address' register={register} error={errors.address?.message} />
				<Input placeholder='SSN' name='ssn' register={register} error={errors.ssn?.message} />
				<Button type='reset' disabled={false}>
					Reset
				</Button>
				<Button type='submit' disabled={!isValid}>
					Submit
				</Button>
			</form>
		</div>
	);
};

export default Form;
