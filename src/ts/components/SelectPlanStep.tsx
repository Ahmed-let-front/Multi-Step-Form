import iconArcade from '/src/assets/images/icon-arcade.svg';
import iconAdvanced from '/src/assets/images/icon-advanced.svg';
import iconPro from '/src/assets/images/icon-pro.svg';

import Footer from './FooterBtns';

import { type FormStepProps } from '../types';
import { type SyntheticEvent } from 'react';

const plans = [
  { name: 'Arcade', price: '$90/yr', icon: iconArcade, active: true },
  { name: 'Advanced', price: '$120/yr', icon: iconAdvanced, active: false },
  { name: 'Pro', price: '$150/yr', icon: iconPro, active: false },
];

const SelectPlanStep = ({
  onChangeActiveStep,
  activeStep,
  personalPayload,
  onChangePersonalPayLoad,
}: FormStepProps) => {
  const handleSubmit = (e: SyntheticEvent) => {
    e.preventDefault();
    onChangeActiveStep(activeStep + 1);
  };
  return (
    <form className="flex flex-1 flex-col" onSubmit={handleSubmit}>
      <div className="step">
        <div>
          <h2 className="step-title">Select your plan</h2>
          <p className="step-text">
            You have the option of monthly or yearly billing.
          </p>

          <div className="mt-[3.2rem] grid gap-[1.2rem] lg:grid-cols-3 lg:gap-[1.9rem]">
            {plans.map(plan => (
              <div
                key={plan.name}
                className={`plan-card ${plan.active ? 'plan-card-active' : ''}`}
              >
                <img
                  src={plan.icon}
                  alt=""
                  aria-hidden="true"
                  className="size-[4rem] shrink-0"
                />
                <div className="flex flex-col">
                  <span className="text-[1.6rem] font-medium text-blue-950">
                    {plan.name}
                  </span>
                  <span className="text-[1.4rem] text-grey-500">
                    {plan.price}
                  </span>
                  <span className="text-[1.2rem] font-medium text-blue-950">
                    2 months free
                  </span>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-[2.4rem] flex items-center justify-center gap-[1.6rem] rounded-[.8rem] bg-blue-50 p-[1.4rem] text-[1.4rem]">
            <span className="font-medium text-blue-950">Monthly</span>
            <span className="relative h-[2.2rem] w-[4rem] rounded-full bg-blue-950">
              <span className="absolute left-[2.2rem] top-[.4rem] size-[1.4rem] rounded-full bg-white" />
            </span>
            <span className="text-grey-500">Yearly</span>
          </div>
        </div>
      </div>

      <Footer onChangeActiveStep={onChangeActiveStep} activeStep={activeStep} />
    </form>
  );
};

export default SelectPlanStep;
