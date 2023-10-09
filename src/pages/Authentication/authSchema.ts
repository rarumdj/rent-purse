import { isValidPhoneNumber } from 'libphonenumber-js';
import * as Yup from 'yup';

const PhoneSchema = Yup.string().test('phone', 'Invalid phone number', value =>
  isValidPhoneNumber(value as string)
);

export const signUpScheme = Yup.object().shape({
  first_name: Yup.string().required('First Name is required'),
  last_name: Yup.string().required('Last name is required'),
  email: Yup.string().required('Email is required').email('Email is invalid'),
  phone_number: PhoneSchema.required('Phone is required'),
  referral: Yup.string().notRequired(),
  heard_from: Yup.string().notRequired(),
  password: Yup.string()
    .min(8, 'Password must be at least 8 characters')
    .required('Password is required')
    .test(
      'passwordRequirements',
      'Include (a-z, A-Z, 0-9, @#$)',
      (value: any) =>
        [/[a-z]/, /[A-Z]/, /[0-9]/, /[^a-zA-Z0-9]/].every(pattern =>
          pattern.test(value)
        )
    ),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref('password'), null], 'Passwords must match')
    .required('Confirm Password is required'),
  acceptTerms: Yup.bool().oneOf([true], 'Accept Ts & Cs is required'),
});

export const loginFormScheme = Yup.object().shape({
  email: Yup.string().required('Email is required').email('Email is invalid'),
  password: Yup.string().required('Password is required'),
  Remember: Yup.bool().notRequired(),
});
