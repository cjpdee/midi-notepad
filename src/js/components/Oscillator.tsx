/**
 * Mono/polyphonic - stop previous osc when new note starts
 * ^ conditional in the player or scheduler
 */

import React from 'react';

import Select from './Select';
import ModProp from './ModProperty';
import Filter from './Filter';

export default class Oscillator extends React.Component {
    render() {
        return (
            <div draggable={true}>
                <div className="w-full bg-gray-200 rounded p-1 mb-1 last:mb-0 relative z-50">
                    {/* Select Component */}
                    <Select />
                    {/* ModProp Component */}
                    <ModProp />
                </div>
                {/* Osc Filters List */}
                <div className="flex flex-col">
                    {/* Filter Component */}
                    <Filter />
                </div>
            </div>
        )
    }
}