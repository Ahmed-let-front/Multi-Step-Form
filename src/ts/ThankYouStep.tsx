import iconThankYou from '/src/assets/images/icon-thank-you.svg';

const ThankYouStep = () => {
  return (
    <div className="step items-center justify-center pb-[2.4rem] text-center lg:px-0 lg:py-0">
      <img
        src={iconThankYou}
        alt=""
        aria-hidden="true"
        className="size-[6rem]"
      />

      <h1 className="step-title mt-[2.4rem]">Thank you!</h1>
      <p className="step-text max-w-[40rem]">
        Thanks for confirming your subscription! We hope you have fun using our
        platform. If you ever need support, please feel free to email us at
        support@loremgaming.com.
      </p>
    </div>
  );
};

export default ThankYouStep;
