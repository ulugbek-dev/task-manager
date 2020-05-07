import React from 'react';
import { ListTasksStyled } from './styled';
import { FontAwesomeIcon as Icon } from '@fortawesome/react-fontawesome'
import { faPen, faTrash } from '@fortawesome/free-solid-svg-icons'

function ListTasks ({ tasks }) {
    return (
        <ListTasksStyled>
        {tasks.map((t, i) => (
            <li key={i}>
                <span>
                    <input type="checkbox" checked={t.completed} />
                    {t.name}
                </span>
                <span>
                    <Icon icon={faPen} />
                    <Icon icon={faTrash} />
                </span>
            </li>
        ))}
        </ListTasksStyled>
    );
}

export default ListTasks;