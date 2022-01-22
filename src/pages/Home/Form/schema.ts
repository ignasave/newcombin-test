import * as yup from 'yup';

const isRequired = 'Field is required';

const schema = yup
	.object({
		firstName: yup.string().required(isRequired).trim(),
		lastName: yup.string().required(isRequired).trim(),
		address: yup.string().required(isRequired).trim(),
		ssn: yup
			.string()
			.required(isRequired)
			.trim()
			.matches(/^([0-9][0-9][0-9]-[0-9][0-9]-[0-9][0-9][0-9][0-9])$/, 'Invalid format, must be xxx-xx-xxxx, x being a number'),
	})
	.required();

export default schema;
