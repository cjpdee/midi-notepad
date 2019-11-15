import React from 'react';
import { createStore, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

import { stacksReducer } from '../reducers/stacks';
import { projectReducer } from '../reducers/project';
import { patternsReducer } from '../reducers/patterns';
import { timelineReducer } from '../reducers/timeline';
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
    store: {
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

interface StoreInterface {

}

export const store = createStore(
    combineReducers({ project: projectReducer, stacks: stacksReducer, patterns: patternsReducer, timeline: timelineReducer }),
    {
        project: { bpm: 120, name: "untitled" },
        stacks: { "stack1": { oscillators: {}, sounds: {} } },
        patterns: {},
        timeline: {}
    }
    ,
    composeWithDevTools()
)

export default class Store extends React.Component {
    render() {
        // const store = createStore(
        //     generatorsReducer,
        //     { test: 'testValue', oscillators: { 1: { thing: 'x' } } },
        //     composeWithDevTools()
        // );

        // store.subscribe(() => {
        //     console.log("state is now " + JSON.stringify(store.getState()));
        // })
        /*
        store.dispatch({ type: "UPDATE_OSCILLATOR", payload: { id: 1, oscillator: { thing: 'y' } } })

        store.dispatch({ type: "CREATE_OSCILLATOR", payload: { oscillator: { thing: 'z' } } })

        store.dispatch({ type: "DELETE_OSCILLATOR", payload: { id: 1 } })

        store.dispatch({ type: "CREATE_OSCILLATOR", payload: { oscillator: { thing: "fff" } } })
        */
        return ('')
    }
}