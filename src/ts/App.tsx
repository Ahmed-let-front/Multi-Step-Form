import Sidebar from './components/Sidebar';
import PersonalInfoStep from './components/PersonalInfoStep';
import SelectPlanStep from './components/SelectPlanStep';
import AddOnsStep from './components//AddOnsStep';
import SummaryStep from './components/SummaryStep';
import { useState, type ReactNode } from 'react';
import ThankYouStep from './components/ThankYouStep';
import { TOTAL_STEPS } from './config';
import type { MultiStepFormData } from './types';

const initialMultiStepFormData: MultiStepFormData = {
  planSelection: {
    billingCycle: 'Monthly',
    plan: 'Arcade',
    price: 9,
  },
  addOns: [],
};

const App = () => {
  const [activeStep, setActiveStep] = useState(1);
  const [personalPayload, setPersonalPayload] = useState(
    initialMultiStepFormData,
  );

  const handleChangeActiveStep = (step: number) => {
    setActiveStep(() => Math.min(Math.max(step, 1), TOTAL_STEPS));
  };

  const handlePersonalPayLoad = (newData: MultiStepFormData) => {
    setPersonalPayload(newData);
  };

  const STEP_COMPONENTS: Record<number, ReactNode> = {
    1: (
      <PersonalInfoStep
        onChangeActiveStep={handleChangeActiveStep}
        activeStep={activeStep}
      />
    ),
    2: (
      <SelectPlanStep
        onChangeActiveStep={handleChangeActiveStep}
        activeStep={activeStep}
        personalPayload={personalPayload}
        onChangePersonalPayLoad={handlePersonalPayLoad}
      />
    ),
    3: (
      <AddOnsStep
        onChangeActiveStep={handleChangeActiveStep}
        activeStep={activeStep}
        personalPayload={personalPayload}
        onChangePersonalPayLoad={handlePersonalPayLoad}
      />
    ),
    4: (
      <SummaryStep
        onChangeActiveStep={handleChangeActiveStep}
        activeStep={activeStep}
        personalPayload={personalPayload}
        onChangePersonalPayLoad={handlePersonalPayLoad}
      />
    ),
    5: <ThankYouStep />,
  };

  return (
    <div className="min-h-dvh bg-blue-100 pb-[8rem] lg:flex lg:items-center lg:justify-center lg:pb-0">
      <div className="flex flex-col lg:h-[60rem] lg:w-[94rem] lg:flex-row lg:rounded-[1rem] lg:bg-white lg:p-[1.6rem] lg:shadow-2xl">
        <Sidebar activeStep={activeStep} />
        <div className="flex flex-1 flex-col">
          {STEP_COMPONENTS[activeStep]}
        </div>
      </div>
    </div>
  );
};

export default App;
