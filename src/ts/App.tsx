import Sidebar from './components/Sidebar';
import PersonalInfoStep from './components/PersonalInfoStep';
import SelectPlanStep from './components/SelectPlanStep';
import AddOnsStep from './components//AddOnsStep';
import SummaryStep from './components/SummaryStep';
import { useState, type ReactNode } from 'react';
import ThankYouStep from './components/ThankYouStep';
import { TOTAL_STEPS } from './config';

const App = () => {
  const [activeStep, setActiveStep] = useState(1);

  const onChangeActiveStep = (step: number) => {
    setActiveStep(() => Math.min(Math.max(step, 1), TOTAL_STEPS));
  };

  const STEP_COMPONENTS: Record<number, ReactNode> = {
    1: (
      <PersonalInfoStep
        onChangeActiveStep={onChangeActiveStep}
        activeStep={activeStep}
      />
    ),
    2: (
      <SelectPlanStep
        onChangeActiveStep={onChangeActiveStep}
        activeStep={activeStep}
      />
    ),
    3: (
      <AddOnsStep
        onChangeActiveStep={onChangeActiveStep}
        activeStep={activeStep}
      />
    ),
    4: (
      <SummaryStep
        onChangeActiveStep={onChangeActiveStep}
        activeStep={activeStep}
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
