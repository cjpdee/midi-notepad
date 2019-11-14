import React from 'react';

interface ModPropertyProps {

}

export default class ModProperty extends React.Component<ModPropertyProps> {
    render() {
        return (
            <div>
                <label className="flex flex-row justify-between align-center underline">Prop.name
                    <input type="range" />
                </label>
                <div>
                    this is the ADSR
                </div>
            </div>
        )
    }
}