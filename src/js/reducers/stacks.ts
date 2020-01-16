import { omit } from 'lodash';
import { store } from '../store/store';
// import generateId

interface Actions {
    type: string,
    payload?: any,
    stack?: string
}

export const stacksReducer = (state: any = {}, action: Actions) => {
    switch (action.type) {
        case "CREATE_OSCILLATOR":
            const newId: number = Object.keys(state[action.stack].oscillators).length + 1; // TODO: Make id function

            return {
                ...state,
                [action.stack]: {
                    ...state[action.stack],
                    oscillators: {
                        ...state[action.stack].oscillators,
                        [newId]: { ...action.payload }
                    }
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

        // case "ADD_MODULATOR":
        //     // find the target by id
        //     // add the init modulator to it
        //     return{}
        default: return state;
    }
}