import React from 'react';
import ReactDOM from 'react-dom';

ReactDOM.render(
    <div id="app" className="w-screen">
        <div className="w-64 bg-gray-600 h-screen">
            <div className="w-full p-2 h-20 flex justify-center">
                <button className="w-1/2 h-full p-4 bg-blue-800 text-gray-500 rounded">+</button>
            </div>
            <div className="flex flex-col h-100 p-1">
                <div>
                    <div className="p-1 bg-blue-800 rounded">
                        <span className="flex flex-row justify-between align-center">
                            <h2 className="text-gray-500">Stack stackName</h2>
                            <span className="text-gray-500">edit</span>
                        </span>
                        <div className="flex flex-col">
                            <div className="w-full bg-gray-200 rounded p-1 mb-1 last:mb-0 z-50">
                                <label className="flex flex-row justify-between align-center w-100">Prop.name
                                    <select name="prop.name.toLowerCase()">
                                        <option value="prop.option.toLowercase()">Prop.option</option>
                                    </select>
                                </label>
                                <label className="flex flex-row justify-between align-center">Prop.name
                                    <input type="range" />
                                </label>
                            </div>
                            <div className="flex">
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
                    <div className="flex flex-col"></div>
                    <div className="flex flex-col"></div>
                </div>
            </div>
        </div>
    </div>
    ,
    document.getElementById('root')
)