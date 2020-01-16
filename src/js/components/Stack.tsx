import React from 'react';
import { connect } from 'react-redux';

import { Oscillator, OscillatorProps, init } from './Oscillator';
import { Filter, FilterProps } from './Filter';
import { Effect } from './Effect';
import { store } from '../store/store';

interface StackProps {
    id: string,
    name: string,
    oscillators: {
        [key: string]: OscillatorProps
    },
    sounds: any
}

class Stack extends React.Component<StackProps> {
    constructor(props: any) {
        super(props);
    }

    componentDidUpdate() {
        console.log("reconcile - update the synth engine");
    }

    addOscillator() {
        store.dispatch({
            type: "CREATE_OSCILLATOR",
            payload: init(),
            stack: this.props.name
        })
    }

    processEvents(event: any) {
        switch (event.type) {
            case 'NOTE_ON':
            // connect generators and play
            case 'NOTE_OFF':
            // stop + disconnect
        }
    }



    render() {
        return (
            <div className="shadow-md rounded">
                <div className="p-1 bg-blue-700 rounded relative z-30 ">
                    {/* Stack Title */}
                    <span className="flex flex-row justify-between align-center">
                        <h2 className="text-gray-500">{this.props.name}</h2>
                        <span className="text-gray-500">edit</span>
                    </span>
                    {/* Oscillators List */}
                    <div className="flex flex-col">
                        {/* Oscillator Component */}
                        {Object.keys(this.props.oscillators).map((key) => {
                            return <Oscillator key={key} />
                        })}
                    </div>
                    <div className="flex justify-center border-t-8 border-blue-800 -mt-1 rounded">
                        <button onClick={() => { this.addOscillator() }} className="bg-blue-800 text-gray-500 px-4 pt-1 rounded -mt-1">+</button>
                    </div>
                </div>
                {/* Stack Filters */}
                <div className="flex flex-col">
                    <Filter />
                </div>
                {/* Stack FX */}
                <div className="flex flex-col">
                    <Effect />
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state: any, history: any) => {
    return state.stacks[history.id]
}
export default connect(mapStateToProps)(Stack);