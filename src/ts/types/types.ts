interface StepSetterProps {
  onChangeActiveStep: (step: number) => void;
}

export interface SidebarProps {
  activeStep: number;
}

export interface StepNavigationProps extends StepSetterProps {}

export interface PersonalInfoStepProps extends StepSetterProps {}

export interface SelectPlanStepProps extends StepSetterProps {}

export interface AddOnsStepProps extends StepSetterProps {}

export interface SummaryStepProps extends StepSetterProps {}
