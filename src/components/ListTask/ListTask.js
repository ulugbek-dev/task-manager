import React from 'react';
import { ListTaskStyled } from './styled';
import { FontAwesomeIcon as Icon } from '@fortawesome/react-fontawesome'
import { faPen, faTrash } from '@fortawesome/free-solid-svg-icons'

function ListTask ({ name, completed }) {
    return (
        <ListTaskStyled>
            <input type="checkbox" checked={completed} />
            {name}
            <Icon icon={faPen} />
            <Icon icon={faTrash} />
        </ListTaskStyled>
    );
}

export default ListTask;