import React from 'react';

import Oscillator from './Oscillator';
import Filter from './Filter';

interface StackProps {
    name: string,
    oscillators: any,
    sounds: any
}

export default class Stack extends React.Component<StackProps> {
    constructor(props: any) {
        super(props);
    }
    render() {
        return (
            <div draggable={true}>
                <div className="p-1 bg-blue-800 rounded relative z-30">
                    {/* Stack Title */}
                    <span className="flex flex-row justify-between align-center">
                        <h2 className="text-gray-500">{this.props.name}</h2>
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