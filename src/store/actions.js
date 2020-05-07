import { initialState } from './reducer';

export default function state( state = initialState, { type, payload } ) {
    
    switch(type) {
        case 'AUTH':
            return {
                ...state,
                auth: payload
            }
        case 'LOGOUT':
            return {
                ...state,
                auth: null
            }
        case 'TASKS':
            return {
                ...state,
                tasks: payload.tasks
            }
        case 'ADD_TASK':
            return {
                ...state,
                tasks: [
                    ...state.tasks,
                    payload
                ]
            }
        default:
            return state;
    }

}