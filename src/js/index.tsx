import React from 'react';
import ReactDOM from 'react-dom';

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
                <div>
                    <div className="p-1 bg-blue-800 rounded">
                        {/* Stack Title */}
                        <span className="flex flex-row justify-between align-center">
                            <h2 className="text-gray-500">Stack stackName</h2>
                            <span className="text-gray-500">edit</span>
                        </span>
                        {/* Oscillators List */}
                        <div className="flex flex-col">
                            {/* Oscillator Component */}
                            <div className="w-full bg-gray-200 rounded p-1 mb-1 last:mb-0 z-50">
                                {/* Select Component */}
                                <label className="flex flex-row justify-between align-center w-100">Prop.name
                                    <select name="prop.name.toLowerCase()">
                                        <option value="prop.option.toLowercase()">Prop.option</option>
                                    </select>
                                </label>
                                {/* ModProp Component */}
                                <label className="flex flex-row justify-between align-center underline">Prop.name
                                    <input type="range" />
                                </label>
                                {/* Modprop Envelope View goes here */}
                            </div>
                            {/* Osc Filters List */}
                            <div className="flex flex-col">
                                {/* Filter Component */}
                                <div className="w-full bg-gray-700 rounded p-1 pt-2 mb-1 -mt-2 last:mb-0">
                                    <label className="flex flex-row justify-between align-center">Prop.name
                                        <select name="prop.name.toLowerCase()">
                                            <option value="prop.option.toLowercase()">Prop.option</option>
                                        </select>
                                    </label>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Stack Filters */}
                    <div className="flex flex-col">
                    </div>
                    {/* Stack FX */}
                    <div className="flex flex-col"></div>
                </div>
            </div>
        </div>
    </div>
    ,
    document.getElementById('root')
)