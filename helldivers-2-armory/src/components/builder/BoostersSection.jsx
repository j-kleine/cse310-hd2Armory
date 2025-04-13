import React from "react";

function BoostersSection({ loadout, updateField, boosters }) {
    return (
        <section className='bg-neutral-900 p-6 rounded-2xl shadow-md'>
            <h2 className='text-2xl text-helldiversYellow uppercase mb-4'>Booster</h2>
            <select
                value={loadout.booster}
                onChange={(e) => updateField('booster', e.target.value)}
                className='w-full p-3 rounded bg-neutral-800 text-white'>
                <option value='' disabled>Select a Booster</option>
                {boosters.map((booster) => (
                    <option key={booster.name} value={booster.name}>
                        {booster.name}
                    </option>
                ))}
            </select>
        </section>
    )
}

export default BoostersSection;