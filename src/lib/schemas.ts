import { z } from 'zod';

export const signInFormSchema = z.object({
  email: z.string().email(),
  password: z.string().min(8),
});

export const signUpFormSchema = z.object({
  email: z.string().email({ message: 'Please enter a valid email address.' }),
  password: z
    .string({ message: 'Password is required.' })
    .min(8, { message: 'Password must be at least 8 characters long.' }),
  firstName: z
    .string({ message: 'First name is required.' })
    .min(3, { message: 'First name must be at least 3 characters long.' }),
  lastName: z
    .string({ message: 'Last name is required.' })
    .min(3, { message: 'Last name must be at least 3 characters long.' }),
  address1: z
    .string({ message: 'Address is required.' })
    .max(50, { message: 'Address must be less than 50 characters long.' }),
  city: z.string({ message: 'City is required.' }).min(3, { message: 'City must be at least 3 characters long.' }),
  state: z
    .string({ message: 'State is required.' })
    .min(2, { message: 'State must be at least 2 characters long.' })
    .max(10, { message: 'State must be at most 10 characters long.' }),
  zipcode: z
    .string({ message: 'Zipcode is required.' })
    .min(6, { message: 'Zipcode must be exactly 6 characters long.' })
    .max(6, { message: 'Zipcode must be exactly 6 characters long.' }),
  dateOfBirth: z
    .string({ message: 'Date of birth is required.' })
    .min(3, { message: 'Date of birth must be at least 3 characters long.' }),
  ssn: z.string({ message: 'SSN is required.' }).min(3, { message: 'SSN must be at least 3 characters long.' }),
});
