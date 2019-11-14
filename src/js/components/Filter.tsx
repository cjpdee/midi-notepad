import React from 'react';

import Select from './Select';
import ModProp from './ModProperty';

export default class Filter extends React.Component {
    render() {
        return (
            <div className="w-full bg-gray-700 rounded p-1 pt-3 mb-1 -mt-2 last:mb-0">
                {/* ModProp Component */}
                <Select />
                <ModProp />
            </div>
        )
    }
}