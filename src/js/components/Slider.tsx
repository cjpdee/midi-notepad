import React from 'react';

interface SliderProps {
    label: string,
    value: any
}

export default class Slider extends React.Component<SliderProps> {
    render() {
        return (
            <label className="flex flex-col items-center h-full">
                <input type="range" className="flex-1 h-1 w-1 slider-vertical" />
                {this.props.label.slice(0, 3)}
            </label>
        )
    }
}