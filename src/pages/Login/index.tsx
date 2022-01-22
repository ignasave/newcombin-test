import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import Button from '../../components/Button';
import Input from '../../components/Input';
import { login } from '../../redux/auth/actions';
import { LoginData } from '../../services/login';
import schema from './schema';
import styles from './styles.module.css';

const Login = () => {
	const {
		register,
		formState: { errors, isValid },
		handleSubmit,
	} = useForm({
		resolver: yupResolver(schema),
		mode: 'onBlur',
	});

	const navigate = useNavigate();

	const onSubmit = (data: LoginData) => {
		login(data, () => navigate('/'));
	};

	return (
		<div className={styles.container}>
			<form onSubmit={handleSubmit(onSubmit as () => void)}>
				<Input name='username' placeholder='Username' register={register} error={errors.username?.message} />
				<Input name='password' placeholder='Password' register={register} error={errors.password?.message} />
				<Button disabled={!isValid} type='submit'>
					Login
				</Button>
			</form>
		</div>
	);
};

export default Login;
