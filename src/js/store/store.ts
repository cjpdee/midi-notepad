import React from 'react';
import { createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
/*
Store layout:

var state = {
    project: {
        name: "name",
        bpm: 120,
    },
    patternEditor: { // Based on note lengths
        noteLength: 1, // one bar
        patternLength: 4, // 4 bars
        selectedKey: 'g'
    },
    generators: {
        oscillators: [],
        sounds: [],
    },
    patterns: [
        {
            oscillator: "4A5e6",
            notes: []
        }
    ],
    timeline: {},
}


var oscillator = {
    waveform: "waveform",

}

var pattern = {

}

var note = {
    start: 0,
    length: 1
}

*/

export class GeneratorStore extends React.Component {
    render() {

        interface Actions {
            type: string,
            payload?: any
        }

        const reducer = (state: any, action: Actions) => {
            switch (action.type) {
                default: return state;
                case "CREATE_OSCILLATOR": return {
                    ...state,
                    oscillators: { ...state.oscillators, [Object.keys(state.oscillators).length + 1]: action.payload.oscillator }
                }
                case "UPDATE_OSCILLATOR": return {
                    ...state,
                    oscillators: { ...state.oscillators, [action.payload.id]: { ...action.payload.oscillator } }
                }
            }
        }


        const generators = createStore(
            reducer,
            { test: 'testValue', oscillators: { 1: { thing: 'x' } } },
            composeWithDevTools()
        );

        generators.subscribe(() => {
            console.log("state is now " + generators.getState());
        })

        generators.dispatch({ type: "UPDATE_OSCILLATOR", payload: { id: '1', oscillator: { thing: 'y' } } })

        generators.dispatch({ type: "CREATE_OSCILLATOR", payload: { oscillator: { thing: 'z' } } })

        return ('')
    }
}