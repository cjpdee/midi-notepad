import React from 'react';

import Select from './Select';
import ModProp from './ModProperty';

export class Effect extends React.Component {
    render() {
        return (
            <div className="w-full bg-red-600 rounded p-1 pt-3 mb-1 -mt-2 last:mb-0 shadow">
                {/* ModProp Component */}
                <Select label="Effect" options={['effect type']} />
                <div className="mb-1 last:mb-0">
                    <label className="flex flex-row justify-between align-center rounded"><span className="px-1 rounded">Wet/Dry</span>
                        <input type="range" />
                    </label>
                </div>
            </div>
        )
    }
}