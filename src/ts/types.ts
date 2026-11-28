interface StepSetterProps {
  activeStep: number;
  onChangeActiveStep: (step: number) => void;
}

export interface FooterBtnsProps {
  nextLabel?: string;
  activeStep: number;
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

type FieldId = 'name' | 'email' | 'phone';

export interface FieldConfig {
  id: FieldId;
  label: string;
  type: 'text' | 'email' | 'tel';
  placeholder: string;
  autoComplete: string;
}

export interface PersonalInfoFormData {
  name: string;
  email: string;
  phone: string;
}
