import React, { useState } from 'react';
import { EmptyTasksStyled } from './styled';
import { Button } from '../../elements/Button';
import { Headline } from '../../elements/Headline';
import AddTask from '../AddTask/AddTask';

function EmptyTasks () {
    // Modal state
    const [modal, setModal] = useState(false);

    // Close Modal handler
    const handleModalClose = () => setModal(false);

    return (
        <EmptyTasksStyled>
            <Headline>You have no task.</Headline>
            <Button onClick={() => setModal(true)}>+ New Task</Button>

            {modal && <AddTask handleModalClose={handleModalClose} />  }          
        </EmptyTasksStyled>
    );
}

export default EmptyTasks;