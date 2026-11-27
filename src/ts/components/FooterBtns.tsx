import { type FooterBtnsProps } from '../types';
const Footer = ({
  nextLabel = 'Next Step',
  activeStep,
  onChangeActiveStep,
}: FooterBtnsProps) => {
  return (
    <footer className="step-footer justify-between">
      <button
        type="button"
        className="btn-ghost"
        onClick={() => onChangeActiveStep(activeStep - 1)}
      >
        Go Back
      </button>
      <button type="submit" className="btn-primary">
        {nextLabel}
      </button>
    </footer>
  );
};
export default Footer;
