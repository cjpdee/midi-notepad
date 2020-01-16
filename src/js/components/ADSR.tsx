import React from "react";

import Slider from "./Slider";

export function initAdsr(): AdsrProps {
    return {
        attack: 0,
        sustain: 0,
        decay: 0,
        release: 0
    };
}

interface AdsrProps {
    [index: string]: number;
    attack: number;
    sustain: number;
    decay: number;
    release: number;
}

export class ADSR extends React.Component<AdsrProps> {
    componentDidMount() {
        const canvas: any = this.refs.canvas;
        const ctx = canvas.getContext("2d");

        ctx.fillStyle = "darkslategrey";
        ctx.fillRect(0, 0, 230, 80);
    }

    render() {
        return (
            <div className="bg-gray-600 rounded">
                <canvas
                    ref="canvas"
                    width={200}
                    height={80}
                    className="w-full rounded"
                />

                <div className="flex justify-around pt-2 h-16">
                    {Object.keys(this.props).map((key, index) => {
                        return (
                            <Slider
                                key={index}
                                label={key}
                                value={this.props[key]}
                            />
                        );
                    })}
                </div>
            </div>
        );
    }
}
