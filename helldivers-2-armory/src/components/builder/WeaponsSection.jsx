import React, { useEffect, useState } from "react";

function WeaponsSection({ loadout, updateField, weaponsPrimary, weaponsSecondary, throwables }) {
    return (
        <section className='bg-neutral-900 p-6 rounded-2xl shadow-md'>
            <h2 className='text-2xl text-helldiversYellow uppercase mb-4'>Weapons</h2>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-4'>
                <select
                    value={loadout.primaryWeapon}
                    onChange={(e) => updateField('primaryWeapon', e.target.value)}
                    className='p-3 rounded bg-neutral-800 text-white'>
                    <option value='' disabled>Primary Weapon</option>
                    {weaponsPrimary.map((weapon) => (
                        <option key={weapon.id + ' ' + weapon.name} value={weapon.id + ' ' + weapon.name}>
                            {weapon.id ? `${weapon.id} ${weapon.name}` : weapon.name}
                        </option>
                    ))}
                </select>
                <select
                    value={loadout.secondaryWeapon}
                    onChange={(e) => updateField('secondaryWeapon', e.target.value)}
                    className='p-3 rounded bg-neutral-800 text-white'>
                    <option value='' disabled>Secondary Weapon</option>
                    {weaponsSecondary.map((weapon) => (
                        <option key={weapon.id + ' ' + weapon.name} value={weapon.id + ' ' + weapon.name}>
                            {weapon.id ? `${weapon.id} ${weapon.name}` : weapon.name}
                        </option>
                    ))}
                </select>
                <select
                    value={loadout.throwable}
                    onChange={(e) => updateField('throwable', e.target.value)}
                    className='p-3 rounded bg-neutral-800 text-white'>
                    <option value='' disabled>Throwable</option>
                    {throwables.map((item) => (
                        <option key={item.id + ' ' + item.name} value={item.id + ' ' + item.name}>
                            {item.id ? `${item.id} ${item.name}` : item.name}
                        </option>
                    ))}
                </select>
            </div>
        </section>
    )
}

export default WeaponsSection;