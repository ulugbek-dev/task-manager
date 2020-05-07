import React, { useState } from 'react';
import { AddTaskStyled } from './styled';
import { Input } from '../../elements/Input';
import { Button } from '../../elements/Button';
import { Headline } from '../../elements/Headline';

function AddTask ({ handleModalClose }) {
    const [task, setTask] = useState('');

    // Add new task handler
    const handleAddTask = () => {

    }

    return (
        <AddTaskStyled onClick={handleModalClose}>
            <div className="content" onClick={e => e.stopPropagation()}>
                <Headline>+ New Task</Headline>
                <Input 
                    placeholder="Task Name" 
                    value={task}
                    onChange={e => setTask(e.target.value)}
                />
                <Button fullWidth onClick={() => handleAddTask}>+ New Task</Button>
            </div>
        </AddTaskStyled>
    );
}

export default AddTask;