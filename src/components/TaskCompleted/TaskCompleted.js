import React from 'react';
import { TaskCompletedStyled } from './styled';
import { Headline } from '../../elements/Headline';

function TaskCompleted ({ completed, total }) {
    return (
        <TaskCompletedStyled>
            <Headline>Tasks Completed</Headline>
            <p className="completed">{completed}<span>/ {total}</span></p>
        </TaskCompletedStyled>
    );
}

export default TaskCompleted;