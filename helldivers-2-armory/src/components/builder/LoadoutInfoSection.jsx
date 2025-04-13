import React from "react";

function LoadoutInfoSection({ loadout, updateField }) {
  return (
    <section className='bg-neutral-900 p-6 rounded-2xl shadow-md'>
        <h2 className='text-2xl text-helldiversYellow uppercase mb-4'>Loadout Info</h2>
        <div className='flex flex-col md:flex-row gap-6'>
            <input
                type='text'
                value={loadout.loadoutName}
                onChange={(e) => updateField('loadoutName', e.target.value)}
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
  );
}

export default LoadoutInfoSection;