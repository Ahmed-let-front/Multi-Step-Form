type FieldId = 'name' | 'email' | 'phone';
type BillingCycle = 'Monthly' | 'Yearly';
type PlanName = 'Arcade' | 'Advanced' | 'Pro';
type AddOnId = 'online-service' | 'larger-storage' | 'customizable-profile';

export interface FooterBtnsProps {
  nextLabel?: string;
  activeStep: number;
  onChangeActiveStep: (step: number) => void;
}

export interface SidebarProps {
  activeStep: number;
}

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

export interface AddOnSelection {
  id: AddOnId;
  isChecked: boolean;
  monthlyPrice: number;
}

export interface MultiStepFormData {
  planSelection: {
    billingCycle: BillingCycle;
    plan: PlanName;
    price: number;
  };
  addOns: AddOnSelection[] | [];
}

export interface StepSetterProps {
  activeStep: number;
  onChangeActiveStep: (step: number) => void;
}

export interface FormStepProps extends StepSetterProps {
  personalPayload: MultiStepFormData;
  onChangePersonalPayLoad(pram: MultiStepFormData): void;
}
