export function secondsPerBeat(bpm: number = 130): number {
    //TODO: set actual bpm
    return 60 / bpm;
}

export function secondsPerBar(): number {
    return secondsPerBeat() * 4; // TODO: set actual time signature
}

export function barsToSeconds(bars: number): number {
    return secondsPerBar() * bars;
}

export function percentToSeconds(
    percentage: number,
    fullWidth: number
): number {
    return;
}

export function pixelsToPercentage(pixels: number, fullWidth: number) {
    return (pixels / fullWidth) * 100;
}
