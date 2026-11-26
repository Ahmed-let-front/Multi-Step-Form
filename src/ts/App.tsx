import Sidebar from './Sidebar';
import PersonalInfoStep from './PersonalInfoStep';
import SelectPlanStep from './SelectPlanStep';
import AddOnsStep from './AddOnsStep';
import SummaryStep from './SummaryStep';
import { useState, type ReactNode } from 'react';

const App = () => {
  const [activeStep, setActiveStep] = useState(1);

  const onChangeStepActive = (newStep: number) => setActiveStep(newStep);

  const STEP_COMPONENTS: Record<number, ReactNode> = {
    1: <PersonalInfoStep />,
    2: <SelectPlanStep />,
    3: <AddOnsStep />,
    4: <SummaryStep />,
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
