import React from 'react';
import ReactDOM from 'react-dom/client';

import helldiversLogo from './assets/images/hd2-logo.png';

// This function retrieves the query parameters from the URL and returns them as an object.
function getQueryParams() {
    const params = new URLSearchParams(window.location.search);
    return {
        loadoutName: params.get('loadoutName') || '',
        preferredEnemy: params.get('preferredEnemy') || '',
        primaryWeapon: params.get('primaryWeapon') || '',
        secondaryWeapon: params.get('secondaryWeapon') || '',
        throwable: params.get('throwable') || '',
        armor: params.get('armor') || '',
        helmet: params.get('helmet') || '',
        cape: params.get('cape') || '',
        stratagems: [
            params.get('s1'),
            params.get('s2'),
            params.get('s3'),
            params.get('s4')
        ],
        booster: params.get('booster') || ''
    };
}

// This function defines the main component of the preview page.
// It retrieves the loadout data from the URL and displays it in a structured format.
function PreviewPage() {
    const loadout = getQueryParams();

    return (
        <div className='min-h-screen p-6 flex flex-col gap-10 bg-black font-helldiversBody text-white items-center'>
            {/* Header */}
            <div className='flex flex-row items-center justify-center gap-6'>
                <img className='max-w-[128px]' src={helldiversLogo} alt='Helldivers 2 Logo' />
                <h1 className='text-5xl font-helldiversHeader text-helldiversYellow uppercase'>Armory</h1>
            </div>

            {/* Loadout Preview */}
            <div className='flex flex-col gap-2 bg-neutral-900 p-6 rounded-2xl shadow-md'>
                <h2 className='text-5xl font-helldiversBody text-helldiversYellow text-center uppercase'>Loadout</h2>
                <div className='flex flex-col gap-10'>
                    {/* Loadout Info section */}
                    <div>
                        <h3 className='text-3xl font-helldiversHeader text-helldiversYellow uppercase'>Info</h3>
                        <p className='text-xl'>NAME: {loadout.loadoutName}</p>
                        <p className='text-xl'>PREFERRED ENEMY: {loadout.preferredEnemy}</p>
                    </div>
                    {/* Weapons section */}
                    <div>
                        <h3 className='text-3xl font-helldiversHeader text-helldiversYellow uppercase'>Weapons</h3>
                        <p className='text-xl'>PRIMARY: {loadout.primaryWeapon}</p>
                        <p className='text-xl'>SECONDARY: {loadout.secondaryWeapon}</p>
                        <p className='text-xl'>THROWABLE: {loadout.throwable}</p>
                    </div>
                    {/* Armor section */}
                    <div>
                        <h3 className='text-3xl font-helldiversHeader text-helldiversYellow uppercase'>Armor</h3>
                        <p className='text-xl'>ARMOR: {loadout.armor}</p>
                        <p className='text-xl'>HELMET: {loadout.helmet}</p>
                        <p className='text-xl'>CAPE: {loadout.cape}</p>
                    </div>
                    {/* Stratagems section */}
                    <div>
                        <h3 className='text-3xl font-helldiversHeader text-helldiversYellow uppercase'>Stratagems</h3>
                        <p className='text-xl'>S1: {loadout.stratagems[0]}</p>
                        <p className='text-xl'>S2: {loadout.stratagems[1]}</p>
                        <p className='text-xl'>S3: {loadout.stratagems[2]}</p>
                        <p className='text-xl'>S4: {loadout.stratagems[3]}</p>
                    </div>
                    {/* Booster section */}
                    <div>
                        <h3 className='text-3xl font-helldiversHeader text-helldiversYellow uppercase'>Booster</h3>
                        <p className='text-xl'>{loadout.booster}</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

// This function renders the PreviewPage component into the DOM.
// It uses ReactDOM to create a root element and render the component into it.
ReactDOM.createRoot(document.getElementById('preview-root')).render(<PreviewPage />);