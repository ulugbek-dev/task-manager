export const initialState = {
    auth: sessionStorage.getItem('task-manager')
        ? JSON.parse(sessionStorage.getItem('task-manager'))
        : null,
    tasks: [],
    dashboard: null,
    searchText: ''
};