import React from "react";

import Select from "./Select";
import ModProp from "./ModProperty";
import { Filter, FilterProps } from "./Filter";

import { store } from "../store/store";

// TODO: import waveforms
const waveforms = ["sine", "square", "saw", "triangle"];

export interface OscillatorProps {
    name: string;
    waveform: string;
    filters: FilterProps[];
    gain: {
        value: number;
        modulator: any;
    };
    oscId: string;
    stackId: string;
}

// Default oscillator patch
export function init(stackId: string): OscillatorProps {
    return {
        name: "Oscillator XYZ",
        waveform: waveforms[0],
        filters: [],
        gain: {
            value: 80,
            modulator: null
        },
        oscId: "generateId",
        stackId: stackId
    };
}

export class Oscillator extends React.Component {
    constructor(props: OscillatorProps) {
        super(props);
    }

    componentDidMount() {
        console.log("osc props", this.props);
    }

    render() {
        return (
            <div className="mb-1 last:mb-0">
                <div className="w-full bg-blue-100 rounded p-1  relative z-50 mb-1 last:mb-0">
                    <div className="flex justify-between">
                        <span>Osc 1</span>
                        <button>X</button>
                    </div>
                    <Select
                        label="Waveform"
                        options={waveforms}
                        parentProps={...this.props}
                        onUpdate={this.updateOscillator}
                    />
                    <ModProp label="Gain" value={0} />
                </div>
                {/* Osc Filters List */}
                {/* <div className="flex flex-col">
                    <Filter />
                </div> */}
            </div>
        );
    }

    updateOscillator(props) {
        console.log("UPDATE_OSCILLATOR props", props);
        store.dispatch({
            type: "UPDATE_OSCILLATOR",
            payload: props
        });
    }
}
