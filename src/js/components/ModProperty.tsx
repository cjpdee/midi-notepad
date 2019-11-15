import React from 'react';

import ADSR from './ADSR';

interface ModPropertyProps {

}

export default class ModProperty extends React.Component<ModPropertyProps> {
    render() {
        return (
            <div>
                <label className="flex flex-row justify-between align-center underline hover:font-bold">Prop.name
                    <input type="range" />
                </label>
                <div>
                    <ADSR />
                </div>
            </div>
        )
    }
}