import React from 'react';

import Select from './Select';
import ModProp from './ModProperty';

export interface FilterProps {

}

export class Filter extends React.Component {
    render() {
        return (
            <div className="w-full bg-green-600 rounded p-1 pt-3 mb-1 -mt-2 last:mb-0 z-20 shadow">
                <Select label="Filter" options={['filter type']} />
                <ModProp label="Cutoff" value={0} />
            </div>
        )
    }
}