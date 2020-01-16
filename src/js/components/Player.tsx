import React from 'react';

interface PlayerProps {
    props: {
        isPlaying: boolean,

    }
}

export default class Player extends React.Component {
    constructor(props: any) {
        super(props);
    }

    render() {
        return (
            <div className="flex" >
                <button className="p-1">#</button>
                <button className="p-1">II</button>
                <button className="p-1">|></button>
            </div >
        )
    }
}