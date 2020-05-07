import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

export function useAuthChecker() {
    const auth = useSelector(state => state.auth);
    const [log, setLog] = useState(false);

    useEffect(() => {
        if(auth) {
            sessionStorage.setItem('task-manager', JSON.stringify(auth));
            setLog(true);
        }
        else {
            sessionStorage.removeItem('task-manager');
            setLog(false);
        }
    }, [auth]);

    return log;
}