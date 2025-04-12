import { useState } from 'react';
import helldiversLogo from './assets/images/hd2-logo.png';

function App() {
  const [view, setView] = useState('home');

  const [loadout, setLoadout] = useState({
    name: '',
    preferredEnemy: '',
    primaryWeapon: '',
    secondaryWeapon: '',
    throwable: '',
    armor: '',
    helmet: '',
    cape: '',
    stratagems: ['', '', '', ''],
    booster: ''
  });

  const updateField = (field, value) => {
    setLoadout((prevLoadout) => ({
      ...prevLoadout,
      [field]: value
    }));
  };

  const updateStratagem = (index, value) => {
    const updatedStratagems = [...loadout.stratagems];
    updatedStratagems[index] = value;
    setLoadout((prevLoadout) => ({
      ...prevLoadout,
      stratagems: updatedStratagems
    }));
  };

  return (
    <div className='bg-black font-helldiversBody text-white'>
      {view === 'home' && (
        <div className='min-h-screen p-6 flex flex-col gap-10 items-center justify-center'>
          <div className='flex flex-col gap-2 items-center'>
            <img className='max-w-[256px]' src={helldiversLogo} alt='Helldivers 2 Logo' />
            <h1 className='text-6xl font-helldiversHeader text-helldiversYellow text-center uppercase'>Armory</h1>
          </div>
          <p className='text-xl'>
            Greetings, Helldiver! <br /> Customize your loadout and prepare for deployment.
          </p>
          <button
            onClick={() => setView('builder')}
            className='border-2 border-helldiversYellow hover:text-white px-12 py-3 transition text-xl text-helldiversYellow uppercase'>
            View Armory
          </button>
        </div>
      )}

      {view === 'builder' && (
        <div className='min-h-screen p-6 flex flex-col gap-10'>
          {/* Header */}
          <div className='flex flex-row items-center justify-center gap-6'>
            <img className='max-w-[128px]' src={helldiversLogo} alt='Helldivers 2 Logo' />
            <h1 className='text-5xl font-helldiversHeader text-helldiversYellow uppercase'>Armory</h1>
          </div>

          {/* Section #1: Loadout Info */}
          <section className='bg-neutral-900 p-6 rounded-2xl shadow-md'>
            <h2 className='text-2xl text-helldiversYellow uppercase mb-4'>Loadout Info</h2>
            <div className='flex flex-col md:flex-row gap-6'>
              <input
                type='text'
                value={loadout.name}
                onChange={(e) => updateField('name', e.target.value)}
                placeholder='Loadout Name'
                className='w-full md:w-1/2 p-3 rounded bg-neutral-800 text-white placeholder-gray-400'
              />
              <select 
                value={loadout.preferredEnemy}
                onChange={(e) => updateField('preferredEnemy', e.target.value)}
                className='w-full md:w-1/2 p-3 rounded bg-neutral-800 text-white'>
                <option value='' disabled>Preferred Enemy</option>
                <option>Terminids</option>
                <option>Automatons</option>
                <option>Illuminate</option>
              </select>
            </div>
          </section>

          {/* Section #2: Weapons */}
          <section className='bg-neutral-900 p-6 rounded-2xl shadow-md'>
            <h2 className='text-2xl text-helldiversYellow uppercase mb-4'>Weapons</h2>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-4'>
              <select
                value={loadout.primaryWeapon}
                onChange={(e) => updateField('primaryWeapon', e.target.value)}
                className='p-3 rounded bg-neutral-800 text-white'>
                <option value='' disabled>Primary Weapon</option>
              </select>
              <select
                value={loadout.secondaryWeapon}
                onChange={(e) => updateField('secondaryWeapon', e.target.value)}
                className='p-3 rounded bg-neutral-800 text-white'>
                <option value='' disabled>Secondary Weapon</option>
              </select>
              <select
                value={loadout.throwable}
                onChange={(e) => updateField('throwable', e.target.value)}
                className='p-3 rounded bg-neutral-800 text-white'>
                <option value='' disabled>Throwable</option>
              </select>
            </div>
          </section>

          {/* Section #3: Armor */}
          <section className='bg-neutral-900 p-6 rounded-2xl shadow-md'>
            <h2 className='text-2xl text-helldiversYellow uppercase mb-4'>Armor</h2>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-4'>
              <select
                value={loadout.armor}
                onChange={(e) => updateField('armor', e.target.value)}
                className='p-3 rounded bg-neutral-800 text-white'>
                <option value='' disabled>Armor</option>
              </select>
              <select
                value={loadout.helmet}
                onChange={(e) => updateField('helmet', e.target.value)}
                className='p-3 rounded bg-neutral-800 text-white'>
                <option value='' disabled>Helmet</option>
              </select>
              <select
                value={loadout.cape}
                onChange={(e) => updateField('cape', e.target.value)}
                className='p-3 rounded bg-neutral-800 text-white'>
                <option value='' disabled>Cape</option>
              </select>
            </div>
          </section>

          {/* Section #4: Stratagems */}
          <section className='bg-neutral-900 p-6 rounded-2xl shadow-md'>
            <h2 className='text-2xl text-helldiversYellow uppercase mb-4'>Stratagems</h2>
            <div className='grid grid-cols-1 md:grid-cols-4 gap-4'>
              {loadout.stratagems.map((stratagem, index) => (
                <select
                  key={index}
                  value={stratagem}
                  onChange={(e) => updateStratagem(index, e.target.value)}
                  className='p-3 rounded bg-neutral-800 text-white'>
                  <option value='' disabled>Slot {index + 1}</option>
                </select>
              ))}
            </div>
          </section>

          {/* Section #5: Booster */}
          <section className='bg-neutral-900 p-6 rounded-2xl shadow-md'>
            <h2 className='text-2xl text-helldiversYellow uppercase mb-4'>Booster</h2>
            <select
              value={loadout.booster}
              onChange={(e) => updateField('booster', e.target.value)}
              className='w-full p-3 rounded bg-neutral-800 text-white'>
              <option value='' disabled>Select a Booster</option>
            </select>
          </section>

          {/* Create Preview Button */}
          <div className='flex justify-center'>
            <button
              onClick={() => console.log('Current Loadout:', loadout)}
              className='px-10 py-3 border-2 border-helldiversYellow text-helldiversYellow text-xl uppercase hover:text-white transition'>
              Create Preview
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
