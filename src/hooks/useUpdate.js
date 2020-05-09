import { useEffect, useState } from 'react';
import axios from 'axios';
import { useSelector, useDispatch } from 'react-redux';

export function useUpdate () {
    const api = process.env.REACT_APP_API_URL;
    const dispatch = useDispatch();

    // Loading status
    const [loading, setLoading] = useState(true);

    // Get tasks & TOKEN from store
    const tasks = useSelector(state => state.tasks)
    
    // Setting TOKEN in request Header
    const token = useSelector(state => state.auth.token.token)
    const config = {
        headers: { Authorization: `Bearer ${token}` }
    };

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