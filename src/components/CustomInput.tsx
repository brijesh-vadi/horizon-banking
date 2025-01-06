import { Control, FieldValues, Path } from 'react-hook-form';
import { FormControl, FormField, FormLabel, FormMessage } from './ui/form';
import { Input } from './ui/input';
import { cn } from '@/lib/utils';

interface CustomInputProps<T extends FieldValues> {
  control: Control<T>;
  name: Path<T>;
  label: string;
  className?: string;
  type?: string;
  placeholder: string;
}

const CustomInput = <T extends FieldValues>({
  control,
  name,
  className,
  label,
  type = 'input',
  placeholder,
}: CustomInputProps<T>) => {
  return (
    <>
      <FormField
        control={control}
        name={name}
        render={({ field, fieldState }) => (
          <div className='form-item'>
            <FormLabel className='form-label'>{label}</FormLabel>
            <div className='flex  flex-col'>
              <FormControl>
                <Input
                  id={name as string}
                  placeholder={placeholder}
                  type={type}
                  className={cn('input-class', className)}
                  value={field.value || ''}
                  onChange={(e) => field.onChange(e)}
                />
              </FormControl>
              {fieldState?.error && <FormMessage className='form-message mt-2'></FormMessage>}
            </div>
          </div>
        )}
      />
    </>
  );
};

export default CustomInput;
