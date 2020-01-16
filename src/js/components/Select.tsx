import React from "react";

interface SelectProps {
    label: string;
    options: string[];
    onUpdate: Function;
    parentProps: object;
}

export default class Select extends React.Component<SelectProps> {
    constructor(props: SelectProps) {
        super(props);
        console.log("select props", props);
    }

    render() {
        return (
            <label className="flex flex-row justify-between align-center mb-1 last:mb-0">
                <span className="px-1">{this.props.label}</span>
                <select
                    className="capitalize"
                    name={this.props.label}
                    onChange={() => {
                        this.props.onUpdate(this.props.parentProps);
                    }}
                >
                    {this.props.options.map((option, index) => {
                        return (
                            <option key={index} value={option}>
                                {option}
                            </option>
                        );
                    })}
                </select>
            </label>
        );
    }
}
