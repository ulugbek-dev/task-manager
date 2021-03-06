import React, { useState, useEffect } from 'react';
import { ListTasksStyled } from './styled';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import { FontAwesomeIcon as Icon } from '@fortawesome/react-fontawesome';
import { faPen, faTrash } from '@fortawesome/free-solid-svg-icons';
import EditTask from '../EditTask/EditTask';
import { useBearer } from '../../hooks/useBearer';

function ListTasks ({ tasks }) {
    const api = process.env.REACT_APP_API_URL;
    const dispatch = useDispatch();

    // Get search text from store
    const searchText = useSelector(state => state.searchText);
    const [taskList, setTaskList] = useState(tasks);

    // Update Task list depending on search text
    useEffect(() => {
        if(searchText !== '')
            setTaskList(() => tasks.filter(t => t.name.toLowerCase().includes(searchText.toLowerCase())));
        else
            setTaskList(tasks);
    }, [searchText, tasks]);

    // Tasks Loading status
    const [loading, setLoading] = useState([true, null]);

    // Modal state & close modal handler
    const [modal, setModal] = useState([false, null]);
    const handleModalClose = () => setModal(false);

    // Get user bearer
    const config = useBearer();

    // Delete task request
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

    // Complete / incomplete task request
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

    return (
        <ListTasksStyled>
            {taskList.map((t, i) => (
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