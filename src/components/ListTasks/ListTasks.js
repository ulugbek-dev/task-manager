import React, { useState } from 'react';
import { ListTasksStyled } from './styled';
import { FontAwesomeIcon as Icon } from '@fortawesome/react-fontawesome';
import { faPen, faTrash } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import EditTask from '../EditTask/EditTask';

function ListTasks ({ tasks }) {
    const api = process.env.REACT_APP_API_URL;
    const dispatch = useDispatch();

    // Loading status
    const [loading, setLoading] = useState([true, null]);

    // Get tasks & TOKEN from store
    const token = useSelector(state => state.auth.token.token);
    // Setting TOKEN in request Header
    const config = {
        headers: { Authorization: `Bearer ${token}` }
    };

    // Delete task
    const handleDelete = id => {
        setLoading([true, id]);
        axios.delete(`${api}/tasks/${id}`, config)
            .then(res => {
                setLoading([false, id]);
                dispatch({ type: 'DELETE_TASK', payload: id });
            })
            .catch(err => {
                console.error(err);
                setLoading([false, id]);
            });
    }

    // Complete / incomplete task
    const handleComplete = (id, name, completed) => {
        setLoading([true, id]);
        axios.put(`${api}/tasks/${id}`, { 
            "name": name,
            "completed": !completed
         }, config)
            .then(res => {
                setLoading([false, id]);
                dispatch({ type: 'COMPLETE_TASK', payload: id });
            })
            .catch(err => {
                console.error(err);
                setLoading([false, id]);
            });
    }

    // Modal state
    const [modal, setModal] = useState([false, null]);

    // Close Modal handler
    const handleModalClose = () => setModal(false);

    return (
        <ListTasksStyled>
        {tasks.map((t, i) => (
            <li key={i} className={loading[0] && loading[1] === t._id ? 'loading' : ''}>
                <span>
                    <input type="checkbox" checked={t.completed} onChange={() => handleComplete(t._id, t.name, t.completed)} />
                    <label className={t.completed ? 'completed' : ''}>{t.name}</label>
                </span>
                <span>
                    <Icon icon={faPen} onClick={() => setModal([true, t._id])} />
                    <Icon icon={faTrash} onClick={() => handleDelete(t._id)} />
                </span>
                {modal[0] && modal[1] === t._id && <EditTask handleModalClose={handleModalClose} id={t._id} name={t.name} />  }          
            </li>
        ))}
        </ListTasksStyled>
    );
}

export default ListTasks;