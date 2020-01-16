import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

// Components Import
import Stack from './components/Stack';
import Player from './components/Player';

// Store import
import { store } from './store/store';

/**
 * TODO
 * - Change the structure from using object keys for identification,
 *   to using arrays with a universal recursive findById(id) function
 */


/* ---- / Sandbox - must not stay here / ----------------------------------- */
// export const ctx = new AudioContext();

store.subscribe(() => { console.log(store.getState()) });

/* ------------------------------------------------------------------------- */

export class App extends React.Component {
    render() {
        return (
            <Provider store={store}>
                <div id="app" className="w-screen flex overflow-y-hidden">
                    <div className="w-72 bg-blue-800 h-screen overflow-y-scroll hide-scrollbar">
                        {/* Button Area */}
                        <div className="w-full p-2 h-16 flex justify-center">
                            <button className="w-1/3 h-full p-4 bg-blue-700 text-gray-500 rounded shadow">+</button>
                        </div>
                        {/* Stacks */}
                        <div className="flex flex-col h-100 p-1">
                            {Object.keys(store.getState().stacks).map(key => {
                                let stack = store.getState().stacks[key];

                                return <Stack key={key} id={key} name={key} oscillators={stack.oscillators} sounds={stack.sounds} />
                            })}
                        </div>
                    </div >
                    <div className="w-full h-100 bg-green-500">
                        <div className="w-full p-2 h-16 flex justify-center bg-blue-800">
                            <Player></Player>
                        </div>
                    </div>
                </div >
            </Provider >
        )
    }
}

ReactDOM.render(
    <App />
    ,
    document.getElementById('root')
);