import iconArcade from '/src/assets/images/icon-arcade.svg';
import iconAdvanced from '/src/assets/images/icon-advanced.svg';
import iconPro from '/src/assets/images/icon-pro.svg';

const plans = [
  { name: 'Arcade', price: '$9/mo', icon: iconArcade, active: true },
  { name: 'Advanced', price: '$12/mo', icon: iconAdvanced, active: false },
  { name: 'Pro', price: '$15/mo', icon: iconPro, active: false },
];

const SelectPlanStep = () => {
  return (
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
              </div>
            </div>
          ))}
        </div>

        <div className="mt-[2.4rem] flex items-center justify-center gap-[1.6rem] rounded-[.8rem] bg-blue-50 p-[1.4rem] text-[1.4rem]">
          <span className="font-medium text-blue-950">Monthly</span>
          <span className="relative h-[2.2rem] w-[4rem] rounded-full bg-blue-950">
            <span className="absolute left-[.4rem] top-[.4rem] size-[1.4rem] rounded-full bg-white" />
          </span>
          <span className="text-grey-500">Yearly</span>
        </div>
      </div>

      <footer className="step-footer">
        <button className="btn-ghost">Go Back</button>
        <button className="btn-primary">Next Step</button>
      </footer>
    </div>
  );
};

export default SelectPlanStep;
