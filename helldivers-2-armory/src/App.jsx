import helldiversLogo from './assets/images/hd2-logo.png';

function App() {
  return (
    <div className="min-h-screen bg-black font-helldiversBody text-white flex flex-col gap-10 items-center justify-center p-6">
      <div className='flex flex-col gap-2 items-center'>
        <img className='max-w-[256px]' src={helldiversLogo} alt="Helldivers 2 Logo" />
        <h1 className="text-6xl font-helldiversHeader text-helldiversYellow text-center uppercase">Armory</h1>
      </div>
      <p className="text-xl">
        Greetings, Helldiver! <br /> Customize your loadout and prepare for deployment.
      </p>
      <button className="border-2 border-helldiversYellow hover:text-white px-10 py-3 transition text-xl text-helldiversYellow uppercase">
        View Armory
      </button>
    </div>
  );
}

export default App;
