import React from 'react';

interface AdsrProps {
    attack?: number,
    sustain?: number,
    decay?: number,
    release?: number
}

export default class ADSR extends React.Component<AdsrProps> {
    componentDidMount() {
        const canvas: any = this.refs.canvas;
        const ctx = canvas.getContext("2d");

        ctx.fillStyle = "darkslategrey";
        ctx.fillRect(0, 0, 230, 80)
    }

    render() {
        return (
            <div className="bg-gray-600 rounded">
                <canvas ref="canvas" width={200} height={80} className="w-full rounded" />

                <div>
                    <input type="range" name="" id="" />
                </div>
            </div>
        )
    }
}