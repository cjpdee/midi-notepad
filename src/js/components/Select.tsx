import React from 'react';

export default class Select extends React.Component {
    render() {
        return (
            <label className="flex flex-row justify-between align-center">Prop.name
                                        <select name="prop.name.toLowerCase()">
                    <option value="prop.option.toLowercase()">Prop.option</option>
                </select>
            </label>
        )
    }
}