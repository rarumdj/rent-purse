export type LoginFormFields = {
  email?: string;
  password: string;
  Remember?: boolean;
};

export type RegistrationFormFields = {
  first_name: string;
  last_name: string;
  email: string;
  phone_number: any;
  password: string;
  confirmPassword?: string;
  referral?: string;
  heard_from: any;
  acceptTerms?: boolean;
};
