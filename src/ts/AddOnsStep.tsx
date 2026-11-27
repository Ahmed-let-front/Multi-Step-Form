import iconCheckmark from '/src/assets/images/icon-checkmark.svg';

import { type AddOnsStepProps } from './types/types';
import type { SyntheticEvent } from 'react';
import Footer from './FooterBtns';

const addons = [
  {
    name: 'Online service',
    desc: 'Access to multiplayer games',
    price: '+$1/mo',
    checked: true,
  },
  {
    name: 'Larger storage',
    desc: 'Extra 1TB of cloud save',
    price: '+$2/mo',
    checked: true,
  },
  {
    name: 'Customizable profile',
    desc: 'Custom theme on your profile',
    price: '+$2/mo',
    checked: false,
  },
];

const AddOnsStep = ({ onChangeActiveStep, activeStep }: AddOnsStepProps) => {
  const handleSubmit = (e: SyntheticEvent) => {
    e.preventDefault();
    onChangeActiveStep(activeStep + 1);
  };
  return (
    <form className="flex flex-1 flex-col" onSubmit={handleSubmit}>
      <div className="step">
        <div>
          <h2 className="step-title">Pick add-ons</h2>
          <p className="step-text">
            Add-ons help enhance your gaming experience.
          </p>

          <div className="mt-[3.2rem] flex flex-col gap-[1.2rem]">
            {addons.map(addon => (
              <div
                key={addon.name}
                className={`addon-card ${addon.checked ? 'addon-card-active' : ''}`}
              >
                <div className="flex items-center gap-[1.6rem]">
                  <span
                    className={`checkbox ${addon.checked ? 'checkbox-active' : ''}`}
                  >
                    {addon.checked && (
                      <img
                        src={iconCheckmark}
                        alt=""
                        aria-hidden="true"
                        className="size-[1.2rem]"
                      />
                    )}
                  </span>
                  <div className="flex flex-col">
                    <span className="text-[1.4rem] font-medium text-blue-950 lg:text-[1.6rem]">
                      {addon.name}
                    </span>
                    <span className="text-[1.2rem] text-grey-500 lg:text-[1.4rem]">
                      {addon.desc}
                    </span>
                  </div>
                </div>
                <span className="text-[1.2rem] text-purple-600 lg:text-[1.4rem]">
                  {addon.price}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <Footer onChangeActiveStep={onChangeActiveStep} activeStep={activeStep} />
    </form>
  );
};

export default AddOnsStep;
