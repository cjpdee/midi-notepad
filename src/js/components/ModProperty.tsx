import React from 'react';

import { ADSR, initAdsr } from './ADSR';
import { store } from '../store/store';

interface ModPropertyProps {
    id?: string,
    label: string,
    value: number,
    modulation?: any
}

export default class ModProperty extends React.Component<ModPropertyProps> {
    addModulator() {
        store.dispatch({
            type: "ADD_MODULATOR",
            payload: initAdsr(),
            for: this.props.id
        })
    }

    render() {
        return (
            <div className="mb-1 last:mb-0">
                <label className="flex flex-row justify-between align-center rounded"><button onClick={() => { this.addModulator() }} className="px-1 rounded hover:bg-hover-100 hover:no-underline">{this.props.label}</button>
                    <input type="range" />
                </label>
                <div>
                    {this.props.modulation &&
                        <ADSR
                            attack={this.props.modulation.attack}
                            sustain={this.props.modulation.sustain}
                            decay={this.props.modulation.decay}
                            release={this.props.modulation.release}
                        />
                    }
                </div>
            </div>
        )
    }
}