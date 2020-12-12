import { ValidationError } from 'yup';

const getYupErrors = async (errors: ValidationError): Promise<void> => {
  console.log(errors);
};

export default getYupErrors;
