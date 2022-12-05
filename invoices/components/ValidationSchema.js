import * as yup from 'yup';

export const SignInValidationSchema = yup.object().shape({
  email: yup
    .string()
    .email('Please enter valid email')
    .required('Email Address is Required'),
  password: yup
    .string()
    .min(8, ({min}) => `Password must be at least ${min} characters`)
    .required('Password is required'),
});

export const RegisterValidationSchema = yup.object().shape({
  firstName: yup.string().required("First name can't be empty"),
  lastName: yup.string().required("Last name can't be empty"),
  email: yup
    .string()
    .email('Please enter valid email')
    .required('Email Address is Required'),
  password: yup
    .string()
    .min(8, ({min}) => `Password must be at least ${min} characters`)
    .required('Password is required'),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref('password'), null], 'Passwords must match')
    .required('Need to match password criteria'),
  terms: yup.boolean().oneOf([true], 'You need to agree terms and conditions'),
});
