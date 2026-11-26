const PersonalInfoStep = () => {
  return (
    <div className="step">
      <div>
        <h2 className="step-title">Personal info</h2>
        <p className="step-text">
          Please provide your name, email address, and phone number.
        </p>

        <div className="mt-[3.2rem] flex flex-col gap-[2rem]">
          <div className="field">
            <label htmlFor="name" className="field-label">
              Name
            </label>
            <input
              id="name"
              className="field-input"
              placeholder="e.g. Stephen King"
              autoComplete="name"
            />
          </div>

          <div className="field">
            <label htmlFor="email" className="field-label">
              Email Address
            </label>
            <input
              id="email"
              className="field-input"
              placeholder="e.g. stephenking@lorem.com"
              autoComplete="email"
            />
          </div>

          <div className="field">
            <label htmlFor="phone" className="field-label">
              Phone Number
            </label>
            <input
              id="phone"
              type="tel"
              className="field-input"
              placeholder="e.g. +1 234 567 890"
              autoComplete="tel"
            />
          </div>
        </div>
      </div>

      <footer className="step-footer justify-end">
        <button className="btn-primary">Next Step</button>
      </footer>
    </div>
  );
};

export default PersonalInfoStep;
