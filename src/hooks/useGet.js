import { useEffect, useState } from 'react';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { useBearer } from './useBearer';

export function useGet (path, type) {
    const api = process.env.REACT_APP_API_URL;
    const dispatch = useDispatch();

    // Loading status
    const [loading, setLoading] = useState(true);

    // Get user TOKEN
    const config = useBearer();

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