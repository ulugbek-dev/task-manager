import React, { useState } from 'react';
import { AddTaskStyled } from './styled';
import { Input } from '../../elements/Input';
import { Button } from '../../elements/Button';
import { Headline } from '../../elements/Headline';
import axios from 'axios';
import { useSelector, useDispatch } from 'react-redux';

function AddTask ({ handleModalClose }) {
    const api = process.env.REACT_APP_API_URL;
    const dispatch = useDispatch();

    const [task, setTask] = useState('');
    const [validate, setValidate] = useState(false);

    // Add loading status
    const [loading, setLoading] = useState(false);

    // Get tasks & TOKEN from store
    const token = useSelector(state => state.auth.token.token);
    // Setting TOKEN in request Header
    const config = {
        headers: { Authorization: `Bearer ${token}` }
    };

    // Add new task Button handler
    const handleAddTask = e => { 
        e.preventDefault();
        setValidate(true);

        if(task !== '')
            setLoading(true);
            axios.post(`${api}/tasks`, {"name": task}, config)
                .then(res => {
                    dispatch({ type: 'ADD_TASK', payload: res.data })
                    setLoading(false);
                    handleModalClose();
                })
                .catch(err => {
                    console.error(err)
                })
    }


    return (
        <AddTaskStyled onClick={handleModalClose}>
            <div className="content" onClick={e => e.stopPropagation()}>
                <Headline>+ New Task</Headline>
                <form>
                    <Input 
                        placeholder="Task Name" 
                        value={task}
                        onChange={e => setTask(e.target.value)}
                        style={validate && task === '' ? {border: `1px solid red`} : {}}
                    />
                    <Button 
                        fullWidth
                        loading={loading}
                        disabled={loading}
                        onClick={e => handleAddTask(e)}
                    >+ New Task</Button>
                </form>
            </div>
        </AddTaskStyled>
    );
}

export default AddTask;