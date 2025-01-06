import { singUp } from '@/lib/actions/user.actions';
import { signUpFormSchema } from '@/lib/schemas';
import { zodResolver } from '@hookform/resolvers/zod';
import { Loader } from 'lucide-react';
import { Dispatch, SetStateAction, useState } from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import CustomInput from './CustomInput';
import { Button } from './ui/button';
import { Form } from './ui/form';

type SignUpFormValues = z.infer<typeof signUpFormSchema>;

interface SignUpFormProps {
  setUser: Dispatch<SetStateAction<null>>;
}

const SignUpForm = ({ setUser }: SignUpFormProps) => {
  const [isLoading, setIsLoading] = useState(false);

  const form = useForm<SignUpFormValues>({
    resolver: zodResolver(signUpFormSchema),
    defaultValues: {
      email: '',
      password: '',
      address1: '',
      dateOfBirth: '',
      firstName: '',
      lastName: '',
      ssn: '',
      state: '',
      zipcode: '',
    },
  });

  async function onSubmit(data: SignUpFormValues) {
    try {
      setIsLoading(true);

      const newUser = await singUp(data);
      setUser(newUser);
    } catch (err) {
      console.log(err);
    } finally {
      setIsLoading(false);
    }
  }
  return (
    <>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className='space-y-6'>
          <div className='flex items-center justify-between'>
            <CustomInput<SignUpFormValues>
              control={form.control}
              label='First Name'
              name='firstName'
              placeholder='john'
            />
            <CustomInput<SignUpFormValues> control={form.control} label='Last Name' name='lastName' placeholder='doe' />
          </div>
          <CustomInput<SignUpFormValues>
            control={form.control}
            label='Address'
            name='address1'
            placeholder='Mota Varachha'
          />
          <CustomInput<SignUpFormValues> control={form.control} label='City' name='city' placeholder='Surat' />
          <div className='flex items-center justify-between'>
            <CustomInput<SignUpFormValues> control={form.control} label='State' name='state' placeholder='Gujarat' />
            <CustomInput<SignUpFormValues>
              control={form.control}
              label='ZIP Code'
              name='zipcode'
              placeholder='394101'
            />
          </div>
          <div className='flex items-center justify-between'>
            <CustomInput<SignUpFormValues>
              control={form.control}
              label='Date Of Birth'
              name='dateOfBirth'
              placeholder='yyyy-mm-dd'
            />
            <CustomInput<SignUpFormValues> control={form.control} label='SSN' name='ssn' placeholder='1234' />
          </div>
          <CustomInput<SignUpFormValues>
            control={form.control}
            label='Email'
            name='email'
            placeholder='john@email.com'
          />
          <CustomInput<SignUpFormValues>
            control={form.control}
            label='Password'
            name='password'
            placeholder='********'
            type='password'
          />
          <div className='flex flex-col gap-4'>
            <Button className='form-btn' type='submit' disabled={isLoading}>
              {isLoading ? (
                <>
                  <Loader size={20} className='animate-spin' /> &nbsp; Signing In
                </>
              ) : (
                <span>Sign In</span>
              )}
            </Button>
          </div>
        </form>
      </Form>
    </>
  );
};

export default SignUpForm;
