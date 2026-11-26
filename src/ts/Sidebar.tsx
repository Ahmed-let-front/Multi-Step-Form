import bgMobile from '/src/assets/images/bg-sidebar-mobile.svg';
import bgDesktop from '/src/assets/images/bg-sidebar-desktop.svg';

const steps = ['Your info', 'Select plan', 'Add-ons', 'Summary'];

const Sidebar = () => {
  return (
    <aside className="relative h-[17.2rem] w-full shrink-0 overflow-hidden bg-purple-600 lg:h-auto lg:w-[27.4rem] lg:self-stretch lg:rounded-[.8rem]">
      <img
        src={bgMobile}
        alt=""
        aria-hidden="true"
        className="absolute inset-0 size-full object-cover object-bottom lg:hidden"
      />
      <img
        src={bgDesktop}
        alt=""
        aria-hidden="true"
        className="absolute inset-x-0 bottom-0 hidden w-full object-cover object-bottom lg:block"
      />

      {/* mobile: step circles */}
      <ol className="relative flex justify-center gap-[1.6rem] pt-[3.4rem] lg:hidden">
        {steps.map((_, i) => (
          <li
            key={i}
            className={`step-circle ${i === 0 ? 'step-circle-active' : ''}`}
          >
            {i + 1}
          </li>
        ))}
      </ol>

      {/* desktop: step list */}
      <ol className="relative hidden flex-col gap-[3.2rem] p-[3.2rem] lg:flex">
        {steps.map((name, i) => (
          <li key={name} className="flex items-center gap-[1.6rem]">
            <span
              className={`step-circle ${i === 0 ? 'step-circle-active' : ''}`}
            >
              {i + 1}
            </span>
            <div className="flex flex-col">
              <span className="text-[1.2rem] uppercase tracking-[.1rem] text-blue-200">
                Step {i + 1}
              </span>
              <span className="text-[1.4rem] font-medium uppercase tracking-[.15rem] text-white">
                {name}
              </span>
            </div>
          </li>
        ))}
      </ol>
    </aside>
  );
};

export default Sidebar;
