import React, { useState } from 'react';
import { EditTaskStyled } from './styled';
import { Input } from '../../elements/Input';
import { Button } from '../../elements/Button';
import { Headline } from '../../elements/Headline';
import axios from 'axios';
import { useSelector, useDispatch } from 'react-redux';

function EditTask ({ handleModalClose, id, name }) {
    const api = process.env.REACT_APP_API_URL;
    const dispatch = useDispatch();

    const [task, setTask] = useState(name);
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
            axios.put(`${api}/tasks/${id}`, {"name": task}, config)
                .then(res => {
                    dispatch({ type: 'EDIT_TASK', payload: { id, task } })
                    setLoading(false);
                    handleModalClose();
                })
                .catch(err => {
                    console.error(err)
                })
    }


    return (
        <EditTaskStyled onClick={handleModalClose}>
            <div className="content" onClick={e => e.stopPropagation()}>
                <Headline>Edit Task</Headline>
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
                    >Save</Button>
                </form>
            </div>
        </EditTaskStyled>
    );
}

export default EditTask;