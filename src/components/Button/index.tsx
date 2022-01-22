import { FC } from 'react';
import styles from './styles.module.css';

interface Props {
	type: 'submit' | 'reset' | 'button' | undefined;
	disabled: boolean;
}
const Button: FC<Props> = ({ type, disabled = false, children }) => {
	return (
		<button type={type} disabled={disabled} className={styles.button}>
			{children}
		</button>
	);
};

export default Button;
