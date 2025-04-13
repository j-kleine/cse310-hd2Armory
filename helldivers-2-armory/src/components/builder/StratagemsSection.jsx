import React from "react";

function StratagemsSection({ loadout, updateStratagem, stratagems }) {
    return (
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
                        {stratagems.map((strat) => (
                            <option key={strat.id + ' ' + strat.name} value={strat.id ? `${strat.id} ${strat.name}` : strat.name}>
                                {strat.id ? `${strat.id} ${strat.name}` : strat.name}
                            </option>
                        ))}
                    </select>
                ))}
            </div>
        </section>
    )
}

export default StratagemsSection;