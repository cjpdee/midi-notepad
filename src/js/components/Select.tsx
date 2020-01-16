import React from 'react';

interface SelectProps {
    label: string,
    options: string[];
}

export default class Select extends React.Component<SelectProps> {
    constructor(props: SelectProps) {
        super(props);
    }
    render() {
        return (
            <label className="flex flex-row justify-between align-center mb-1 last:mb-0"><span className="px-1">{this.props.label}</span>
                <select className="capitalize" name={this.props.label}>
                    {this.props.options.map((option, index) => {
                        return <option key={index} value={option}>{option}</option>
                    })}
                </select>
            </label>
        )
    }
}