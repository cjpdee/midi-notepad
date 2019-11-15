import { omit } from 'lodash';

interface Actions {
    type: string,
    payload?: any
}

export const stacksReducer = (state: any = {}, action: Actions) => {
    switch (action.type) {
        case "CREATE_OSCILLATOR":
            console.log(state)
            const newId: number = Object.keys(state[action.payload.stack].oscillators).length + 1; // TODO: Make id function
            return {
                ...state,
                [action.payload.stack]: {
                    ...state[action.payload.stack],
                    oscillators: { ...state[action.payload.stack].oscillators, [newId]: action.payload.oscillator }
                },

            }
        case "UPDATE_OSCILLATOR":
            return {
                ...state,
                stacks: {
                    ...state.stacks,
                    stackId: {
                        oscillators: { ...state.stacks[action.payload.stack].oscillators, [action.payload.id]: action.payload.oscillator }
                    },
                },

            }
        case "DELETE_OSCILLATOR":
            return {
                ...state,
                oscillators: omit(state.oscillators, action.payload.id)
            }
        default: return state;
    }
}