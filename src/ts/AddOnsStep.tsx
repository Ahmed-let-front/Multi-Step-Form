import iconCheckmark from '/src/assets/images/icon-checkmark.svg';

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

const AddOnsStep = () => {
  return (
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
              className={`addon-card ${addon.checked ? 'bg-blue-50' : ''}`}
            >
              <div className="flex items-center gap-[1.6rem]">
                <span
                  className={`checkbox ${addon.checked ? 'border-purple-600 bg-purple-600' : ''}`}
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
                  <span className="text-[1.6rem] font-medium text-blue-950">
                    {addon.name}
                  </span>
                  <span className="text-[1.4rem] text-grey-500">
                    {addon.desc}
                  </span>
                </div>
              </div>
              <span className="text-[1.4rem] text-purple-600">
                {addon.price}
              </span>
            </div>
          ))}
        </div>
      </div>

      <footer className="step-footer">
        <button className="btn-ghost">Go Back</button>
        <button className="btn-primary">Next Step</button>
      </footer>
    </div>
  );
};

export default AddOnsStep;
