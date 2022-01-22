import { FC } from 'react';
import { FieldValues, UseFormRegister } from 'react-hook-form';
import styles from './styles.module.css';

interface Props {
	placeholder: string;
	name: string;
	error: string | null;
	register: UseFormRegister<FieldValues>;
}

const Input: FC<Props> = ({ placeholder, name, error, register }) => {
	return (
		<>
			<input className={styles.input} type='text' placeholder={placeholder} {...register(name)} />
			<p className={styles.error}>{error}</p>
		</>
	);
};

export default Input;
