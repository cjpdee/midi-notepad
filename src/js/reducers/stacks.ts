import { omit } from "lodash";
import { store } from "../store/store";

interface Actions {
    type: string;
    payload?: any;
    stack?: string;
}

export const stacksReducer = (state: any = {}, action: Actions) => {
    switch (action.type) {
        case "CREATE_OSCILLATOR":
            console.log(state);

            return {
                ...state,
                [action.stack]: {
                    ...state[action.stack],
                    oscillators: {
                        ...state[action.stack].oscillators,
                        [action.payload.oscId]: { ...action.payload }
                    }
                }
            };
        case "UPDATE_OSCILLATOR":
            console.log(action.payload);
            console.log("this", action.payload.stackId);
            return {
                ...state,
                [action.payload.stackId]: {
                    oscillators: {
                        ...state[action.payload.stackId].oscillators,
                        [action.payload.oscId]: action.payload
                    }
                }
            };
        case "DELETE_OSCILLATOR":
            return {
                ...state,
                oscillators: omit(state.oscillators, action.payload.id)
            };

        // case "ADD_MODULATOR":
        //     // find the target by id
        //     // add the init modulator to it
        //     return{}
        default:
            return state;
    }
};
