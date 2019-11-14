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

export class ReduxTest extends React.Component {
    render() {

        interface Actions {
            type: string,
            payload?: any
        }
        const reducer = (state: object, action: Actions) => {
            switch (action.type) {
                default: return state;
                case "DO_THING": return action.payload
            }
        }

        const store = createStore(
            reducer,
            { test: 'testValue' },
            composeWithDevTools()
        );

        store.subscribe(() => {
            console.log("state is now " + store.getState());
        })

        store.dispatch({ type: "DO_THING", payload: "Reeeeee" })

        return ('')
    }
}