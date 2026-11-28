import { useState, type ChangeEvent, type SyntheticEvent } from 'react';
import type {
  StepSetterProps,
  FieldConfig,
  PersonalInfoFormData,
} from '../types';
const fields: FieldConfig[] = [
  {
    id: 'name',
    label: 'Name',
    type: 'text',
    placeholder: 'e.g. Stephen King',
    autoComplete: 'name',
  },
  {
    id: 'email',
    label: 'Email Address',
    type: 'email',
    placeholder: 'e.g. stephenking@lorem.com',
    autoComplete: 'email',
  },
  {
    id: 'phone',
    label: 'Phone Number',
    type: 'tel',
    placeholder: 'e.g. +1 234 567 890',
    autoComplete: 'tel',
  },
];
const initialInputsValues: PersonalInfoFormData = {
  name: '',
  email: '',
  phone: '',
};

const PersonalInfoStep = ({
  onChangeActiveStep,
  activeStep,
}: StepSetterProps) => {
  const [form, setForm] = useState(initialInputsValues);

  const [formError, SetFormError] = useState<PersonalInfoFormData>({
    name: '',
    email: '',
    phone: '',
  });
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { value, id } = e.target;
    if (!(id in initialInputsValues)) return;
    const update: PersonalInfoFormData = {
      ...form,
      [id]: value,
    };
    setForm(update);
  };

  const validateName = (value: string): string => {
    const clean = value.trim();
    if (!clean) return 'This field is required';
    if (clean.length < 3) return 'Name must be at least 3 characters';
    return '';
  };

  const validateEmail = (value: string): string => {
    const clean = value.trim();
    if (!clean) return 'This field is required';
    if (clean.includes(' ')) return 'Please enter a valid email address';

    const atIndex = clean.indexOf('@');
    const hasSingleAt = atIndex > 0 && atIndex === clean.lastIndexOf('@');
    if (!hasSingleAt) return 'Please enter a valid email address';

    const domain = clean.slice(atIndex + 1);
    const hasValidDomain =
      domain.includes('.') &&
      !domain.startsWith('.') &&
      !domain.endsWith('.') &&
      !domain.includes('..');
    if (!hasValidDomain) return 'Please enter a valid email address';

    return '';
  };

  const validatePhone = (value: string): string => {
    const clean = value.trim();
    if (!clean) return 'This field is required';
    const regexOnlyDigit = /^\+?[\d\s]+$/;
    if (!regexOnlyDigit.test(clean)) return 'Phone can only have numbers and +';
    const digits = clean.replace(/\D/g, '');
    if (digits.length < 7 || digits.length > 15)
      return 'Please enter a valid phone number';
    return '';
  };

  const isValidate = (): boolean => {
    const errors: PersonalInfoFormData = {
      name: validateName(form.name),
      email: validateEmail(form.email),
      phone: validatePhone(form.phone),
    };

    SetFormError(errors);
    return !errors.name && !errors.email && !errors.phone;
  };

  const handleSubmit = (e: SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!isValidate()) return;

    onChangeActiveStep(activeStep + 1);
  };
  return (
    <form className="flex flex-1 flex-col" onSubmit={handleSubmit} noValidate>
      <div className="step">
        <div>
          <h2 className="step-title">Personal info</h2>
          <p className="step-text">
            Please provide your name, email address, and phone number.
          </p>
          <div className="mt-[3.2rem] flex flex-col gap-[2rem]">
            {fields.map(field => {
              const errorMessage = formError[field.id];
              const errorId = `${field.id}-error`;

              return (
                <div key={field.id} className="field">
                  <div className="flex justify-between">
                    <label htmlFor={field.id} className="field-label">
                      {field.label}
                    </label>
                    {errorMessage && (
                      <span
                        id={errorId}
                        role="alert"
                        className="text-red-500 font-bold text-xl"
                      >
                        {errorMessage}
                      </span>
                    )}
                  </div>
                  <input
                    id={field.id}
                    type={field.type}
                    className={`field-input border-2 ${errorMessage ? 'border-red-500' : ''}`}
                    placeholder={field.placeholder}
                    autoComplete={field.autoComplete}
                    value={form[field.id]}
                    onChange={handleChange}
                    aria-invalid={Boolean(errorMessage)}
                    aria-describedby={errorMessage ? errorId : undefined}
                    {...(field.type === 'tel' && { inputMode: 'tel' })}
                    required
                  />
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <footer className="step-footer justify-end">
        <button type="submit" className="btn-primary">
          Next Step
        </button>
      </footer>
    </form>
  );
};

export default PersonalInfoStep;
