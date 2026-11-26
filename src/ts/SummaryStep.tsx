const plan = { name: 'Arcade (Monthly)', price: '$9/mo' };

const selectedAddons = [
  { name: 'Online service', price: '+$1/mo' },
  { name: 'Larger storage', price: '+$2/mo' },
];

const SummaryStep = () => {
  return (
    <form className="flex flex-1 flex-col" onSubmit={e => e.preventDefault()}>
      <div className="step">
        <div>
          <h2 className="step-title">Finishing up</h2>
          <p className="step-text">
            Double-check everything looks OK before confirming.
          </p>

          <div className="summary-box mt-[3.2rem]">
            <div className="summary-row">
              <div className="flex flex-col">
                <span className="text-[1.6rem] font-medium text-blue-950">
                  {plan.name}
                </span>
                <button
                  type="button"
                  className="w-fit text-[1.4rem] text-grey-500 underline underline-offset-4 hover:text-purple-600"
                >
                  Change
                </button>
              </div>
              <span className="text-[1.6rem] font-bold text-blue-950">
                {plan.price}
              </span>
            </div>

            <div className="my-[1.6rem] h-px bg-grey-500/30" />

            <div className="flex flex-col gap-[1.2rem]">
              {selectedAddons.map(addon => (
                <div key={addon.name} className="summary-row">
                  <span className="text-[1.4rem] text-grey-500">
                    {addon.name}
                  </span>
                  <span className="text-[1.4rem] text-blue-950">
                    {addon.price}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="summary-row mt-[2.4rem] px-[2.4rem]">
            <span className="text-[1.4rem] text-grey-500">
              Total (per month)
            </span>
            <span className="text-[2rem] font-bold text-purple-600">
              +$12/mo
            </span>
          </div>
        </div>
      </div>

      <footer className="step-footer justify-between">
        <button type="button" className="btn-ghost">
          Go Back
        </button>
        <button type="submit" className="btn-primary">
          Confirm
        </button>
      </footer>
    </form>
  );
};

export default SummaryStep;
