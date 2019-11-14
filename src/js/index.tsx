import React from 'react';
import ReactDOM from 'react-dom';

// Components Import
import Stack from './components/Stack';

// Store import
import { GeneratorStore } from './store/store';

ReactDOM.render(
    <div id="app" className="w-screen">
        <div className="w-64 bg-gray-600 h-screen">
            {/* Button Area */}
            <div className="w-full p-2 h-20 flex justify-center">
                <button className="w-1/2 h-full p-4 bg-blue-800 text-gray-500 rounded">+</button>
            </div>
            {/* Stacks List */}
            <div className="flex flex-col h-100 p-1">
                {/* Stack Component */}
                <Stack />
            </div>
        </div>
        <GeneratorStore />
    </div>
    ,
    document.getElementById('root')
);