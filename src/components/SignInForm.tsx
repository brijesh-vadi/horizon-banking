import { signInFormSchema } from '@/lib/schemas';
import { zodResolver } from '@hookform/resolvers/zod';
import { Loader } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import CustomInput from './CustomInput';
import { Button } from './ui/button';
import { Form } from './ui/form';
import { singIn } from '@/lib/actions/user.actions';

type SignInFormValues = z.infer<typeof signInFormSchema>;

const SignInForm = () => {
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const form = useForm<SignInFormValues>({
    resolver: zodResolver(signInFormSchema),
    defaultValues: {
      email: '',
      password: '',
    },
  });

  async function onSubmit(data: SignInFormValues) {
    try {
      setIsLoading(true);

      const response = await singIn({
        email: data.email,
        password: data.password,
      });

      if (response) router.push('/');
    } catch (err) {
      console.log(err);
    } finally {
      setIsLoading(false);
    }
  }
  return (
    <>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className='space-y-8'>
          <CustomInput<SignInFormValues>
            control={form.control}
            label='Email'
            name='email'
            placeholder='john@email.com'
          />
          <CustomInput<SignInFormValues>
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

export default SignInForm;
