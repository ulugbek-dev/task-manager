import { useEffect, useState } from 'react';
import axios from 'axios';
import { useSelector, useDispatch } from 'react-redux';
import { useBearer } from './useBearer';

export function useUpdate () {
    const api = process.env.REACT_APP_API_URL;
    const dispatch = useDispatch();

    // Loading status
    const [loading, setLoading] = useState(true);

    // Get tasks & TOKEN from store
    const tasks = useSelector(state => state.tasks)
    
    // Get user TOKEN
    const config = useBearer();

    // Fetch tasks from API
    useEffect(() => {
        function fetchApi() {
            axios.get(`${api}/dashboard`, config)
                .then(res => {
                    dispatch({ type: 'DASHBOARD', payload: res.data })
                    setLoading(false);
                })
                .catch(err => {
                    console.error(err)
                    setLoading(false);
                })
        }

        fetchApi();
    }, [tasks])

    return loading;
}