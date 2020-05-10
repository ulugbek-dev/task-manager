import React, { useState } from 'react';
import { AddTaskStyled } from './styled';
import { useDispatch } from 'react-redux';
import axios from 'axios';
import { useBearer } from '../../hooks/useBearer';
import { Input } from '../../elements/Input';
import { Button } from '../../elements/Button';
import { Headline } from '../../elements/Headline';

function AddTask ({ handleModalClose }) {
    // Get use Bearer/Token
    const config = useBearer();
    
    const api = process.env.REACT_APP_API_URL;
    const dispatch = useDispatch();

    // Task input text & validation status
    const [task, setTask] = useState('');
    const [validate, setValidate] = useState(false);

    // Add button loading status
    const [loading, setLoading] = useState(false);

    // Add new task Button handler
    const handleAddTask = e => { 
        e.preventDefault();
        setValidate(true);

        if(task !== '')
            setLoading(true);
            axios.post(`${api}/tasks`, {"name": task}, config)
                .then(res => {
                    dispatch({ type: 'ADD_TASK', payload: res.data.task })
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
                        loading={loading ? 1 : 0}
                        disabled={loading}
                        onClick={e => handleAddTask(e)}
                    >+ New Task</Button>
                </form>
            </div>
        </AddTaskStyled>
    );
}

export default AddTask;