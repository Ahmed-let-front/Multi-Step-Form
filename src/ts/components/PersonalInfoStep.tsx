import type { SyntheticEvent } from 'react';
import { type PersonalInfoStepProps } from '../types';
const fields = [
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

const PersonalInfoStep = ({
  onChangeActiveStep,
  activeStep,
}: PersonalInfoStepProps) => {
  const handleSubmit = (e: SyntheticEvent) => {
    e.preventDefault();
    onChangeActiveStep(activeStep + 1);
  };
  return (
    <form className="flex flex-1 flex-col" onSubmit={handleSubmit}>
      <div className="step">
        <div>
          <h2 className="step-title">Personal info</h2>
          <p className="step-text">
            Please provide your name, email address, and phone number.
          </p>

          <div className="mt-[3.2rem] flex flex-col gap-[2rem]">
            {fields.map(field => (
              <div key={field.id} className="field">
                <label htmlFor={field.id} className="field-label">
                  {field.label}
                </label>
                <input
                  id={field.id}
                  type={field.type}
                  className="field-input"
                  placeholder={field.placeholder}
                  autoComplete={field.autoComplete}
                />
              </div>
            ))}
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
