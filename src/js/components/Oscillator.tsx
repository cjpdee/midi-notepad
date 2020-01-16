import React from 'react';

import Select from './Select';
import ModProp from './ModProperty';
import { Filter, FilterProps } from './Filter';

// TODO: import waveforms
const waveforms = [
    'sine',
    'square',
    'saw',
    'triangle'
];

export interface OscillatorProps {
    name: string,
    waveform: string,
    filters: FilterProps[],
    gain: {
        value: number,
        modulator: any
    }
}

// Default oscillator patch
export function init(): OscillatorProps {
    return {
        name: 'generateId',
        waveform: waveforms[0],
        filters: [],
        gain: {
            value: 80,
            modulator: null
        }
    }
}

export class Oscillator extends React.Component {
    doThing() {
        console.log('yes');
    }

    componentDidMount() {
        console.log('osc props', this.props)
    }



    render() {
        return (
            <div className="mb-1 last:mb-0">
                <div className="w-full bg-blue-100 rounded p-1  relative z-50 mb-1 last:mb-0">
                    {/* Select Component */}
                    <Select label="Waveform" options={waveforms} />
                    {/* ModProp Component */}
                    <ModProp label="Gain" value={0} />
                </div>
                {/* Osc Filters List */}
                <div className="flex flex-col">
                    {/* Filter Component */}
                    <Filter />
                </div>
            </div>
        )
    }
}