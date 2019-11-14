import React from 'react';

import ModProp from './ModProperty';
import Oscillator from './Oscillator';
import Filter from './Filter';

interface StackProps { }

export default class Stack extends React.Component<StackProps> {
    render() {
        return (
            <div>
                <div className="p-1 bg-blue-800 rounded relative z-30">
                    {/* Stack Title */}
                    <span className="flex flex-row justify-between align-center">
                        <h2 className="text-gray-500">Stack stackName</h2>
                        <span className="text-gray-500">edit</span>
                    </span>
                    {/* Oscillators List */}
                    <div className="flex flex-col">
                        {/* Oscillator Component */}
                        <Oscillator />
                    </div>
                </div>
                {/* Stack Filters */}
                <div className="flex flex-col">
                    <Filter />
                </div>
                {/* Stack FX */}
                <div className="flex flex-col"></div>
            </div>
        )
    }
}