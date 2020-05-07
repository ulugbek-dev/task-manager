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
        default:
            return state;
    }

}