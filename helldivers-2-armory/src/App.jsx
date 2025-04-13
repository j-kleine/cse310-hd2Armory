import { useState } from 'react';
import helldiversLogo from './assets/images/hd2-logo.png';

import LoadoutInfoSection from './components/builder/LoadoutInfoSection';

import WeaponsSection from './components/builder/WeaponsSection';
import weaponsPrimary from './data/weapons_primary.json';
import weaponsSecondary from './data/weapons_secondary.json';
import throwables from './data/throwables.json';

import ArmorSection from './components/builder/ArmorSection';
import armor from './data/armor.json';
import helmets from './data/helmets.json';
import capes from './data/capes.json';

import StratagemsSection from './components/builder/StratagemsSection';
import stratagems from './data/stratagems.json';

import BoostersSection from './components/builder/BoostersSection';
import boosters from './data/boosters.json';

function App() {
  const [view, setView] = useState('home');

  const [loadout, setLoadout] = useState({
    loadoutName: '',
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
          <LoadoutInfoSection
            loadout={loadout}
            updateField={updateField}
          />

          {/* Section #2: Weapons */}
          <WeaponsSection
            loadout={loadout}
            updateField={updateField}
            weaponsPrimary={weaponsPrimary}
            weaponsSecondary={weaponsSecondary}
            throwables={throwables}
          />

          {/* Section #3: Armor */}
          <ArmorSection
            loadout={loadout}
            updateField={updateField}
            armor={armor}
            helmets={helmets}
            capes={capes}
          />

          {/* Section #4: Stratagems */}
          <StratagemsSection
            loadout={loadout}
            updateStratagem={updateStratagem}
            stratagems={stratagems}
          />

          {/* Section #5: Booster */}
          <BoostersSection
            loadout={loadout}
            updateField={updateField}
            boosters={boosters}
          />

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
