import { useEffect, useState } from 'react';
import axios from 'axios';
import { useSelector, useDispatch } from 'react-redux';

export function useGet (path, type) {
    const api = process.env.REACT_APP_API_URL;
    const dispatch = useDispatch();

    // Loading status
    const [loading, setLoading] = useState(true);

    // Get tasks & TOKEN from store
    const token = useSelector(state => state.auth.token.token)

    // Setting TOKEN in request Header
    const config = {
        headers: { Authorization: `Bearer ${token}` }
    };

    // Fetch tasks from API
    useEffect(() => {
        function fetchApi() {
            axios.get(`${api}${path}`, config)
                .then(res => {
                    dispatch({ type: type, payload: res.data });
                    setLoading(false);
                })
                .catch(err => {
                    console.error(err)
                    setLoading(false);
                })
        }

        fetchApi();
    }, [])

    return loading;
}