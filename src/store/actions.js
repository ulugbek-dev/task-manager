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
                auth: null,
                searchText: ''
            }
        case 'TASKS':
            return {
                ...state,
                tasks: payload.tasks
            }
        case 'DASHBOARD':
            return {
                ...state,
                dashboard: payload
            }
        case 'ADD_TASK':
            return {
                ...state,
                tasks: [
                    ...state.tasks,
                    payload
                ]
            }
        case 'DELETE_TASK':
            return {
                ...state,
                tasks: state.tasks.filter(t => t._id !== payload)
            }
        case 'COMPLETE_TASK':
            return {
                ...state,
                tasks: state.tasks.map(t => t._id === payload 
                    ? { ...t, completed: !t.completed } 
                    : t)
            }
        case 'EDIT_TASK':
            return {
                ...state,
                tasks: state.tasks.map(t => t._id === payload.id
                    ? { ...t, name: payload.task } 
                    : t)
            }
        case 'SEARCH':
            return {
                ...state,
                searchText: payload
            }
        default:
            return state;
    }

}