import Sidebar from './Sidebar';
import PersonalInfoStep from './PersonalInfoStep';

const App = () => {
  return (
    <main className="min-h-dvh bg-blue-50 lg:flex lg:items-center lg:justify-center">
      <h1 className="sr-only">Multi Step Form</h1>
      <div className="flex flex-col lg:h-[60rem] lg:w-[94rem] lg:flex-row lg:rounded-[1rem] lg:bg-white lg:p-[1.6rem] lg:shadow-2xl">
        <Sidebar />
        <PersonalInfoStep />
      </div>
    </main>
  );
};

export default App;
