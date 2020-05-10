import React from 'react';
import { useSelector } from 'react-redux';

export function useBearer() {
    // Get tasks & TOKEN from store
    const token = useSelector(state => state.auth.token.token);

    return {
        headers: { Authorization: `Bearer ${token}` }
    };
}