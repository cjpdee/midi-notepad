import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

// Components Import
import Stack from './components/Stack';

// Store import
import { store } from './store/store';

console.log(store.getState());
store.subscribe(() => { console.log(store.getState()) });
store.dispatch({ type: "CREATE_OSCILLATOR", payload: { stack: "stack1", oscillator: 'waaaa' } })

ReactDOM.render(
    <Provider store={store}>
        <div id="app" className="w-screen flex">
            <div className="w-64 bg-gray-600 h-screen">
                {/* Button Area */}
                <div className="w-full p-2 h-16 flex justify-center">
                    <button className="w-1/3 h-full p-4 bg-blue-800 text-gray-500 rounded">+</button>
                </div>
                {/* Stacks List */}
                <div className="flex flex-col h-100 p-1">
                    {/* Stack Component */}
                    {
                        Object.keys(store.getState().stacks).map(key => {
                            let stack = store.getState().stacks[key];
                            console.log(stack, 'aaa', key);
                            return <Stack key={key} name={key} oscillators={stack.oscillators} sounds={stack.sounds} />
                        })

                    }
                </div>
            </div>
            <div className="w-full h-full bg-green-500"></div>
        </div>
    </Provider>
    ,
    document.getElementById('root')
);