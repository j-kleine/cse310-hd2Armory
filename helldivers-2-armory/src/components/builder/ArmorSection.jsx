import React from "react";

function ArmorSection({ loadout, updateField, armor, helmets, capes }) {
    return (
        <section className='bg-neutral-900 p-6 rounded-2xl shadow-md'>
            <h2 className='text-2xl text-helldiversYellow uppercase mb-4'>Armor</h2>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-4'>
                <select
                    value={loadout.armor}
                    onChange={(e) => updateField('armor', e.target.value)}
                    className='p-3 rounded bg-neutral-800 text-white'>
                    <option value='' disabled>Armor</option>
                    {armor.map((armor) => (
                        <option key={armor.id + ' ' + armor.name} value={armor.id + ' ' + armor.name}>
                            {armor.id ? `${armor.id} ${armor.name} (${armor.passive}, ${armor.type})` : armor.name}
                        </option>
                    ))}
                </select>
                <select
                    value={loadout.helmet}
                    onChange={(e) => updateField('helmet', e.target.value)}
                    className='p-3 rounded bg-neutral-800 text-white'>
                    <option value='' disabled>Helmet</option>
                    {helmets.map((helmet) => (
                        <option key={helmet.id + ' ' + helmet.name} value={helmet.id + ' ' + helmet.name}>
                            {helmet.id ? `${helmet.id} ${helmet.name}` : helmet.name}
                        </option>
                    ))}
                </select>
                <select
                    value={loadout.cape}
                    onChange={(e) => updateField('cape', e.target.value)}
                    className='p-3 rounded bg-neutral-800 text-white'>
                    <option value='' disabled>Cape</option>
                    {capes.map((cape) => (
                        <option key={cape.name} value={cape.name}>
                            {cape.name}
                        </option>
                    ))}
                </select>
            </div>
        </section>
    )
}

export default ArmorSection;