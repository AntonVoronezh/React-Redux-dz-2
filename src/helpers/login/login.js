export const login = controls => {
	const { login, password } = controls;
	return validationField('Admin', login) && validationField('12345', password);
};

const validationField = (field1, field2) => {
	return field1 === field2;
};
