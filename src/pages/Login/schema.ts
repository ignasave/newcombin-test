import * as yup from 'yup';

const isRequired = 'Field is required';

const schema = yup
	.object({
		username: yup.string().required(isRequired).trim(),
		password: yup.string().required(isRequired).trim(),
	})
	.required();

export default schema;
