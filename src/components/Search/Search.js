import React from 'react';
import { SearchStyled } from './styled';
import { Input } from '../../elements/Input';
import { FontAwesomeIcon as Icon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'

function Search() {
    return (
        <SearchStyled>
            <Icon icon={faSearch} />
            <Input placeholder="Search by task name" />
        </SearchStyled>
    );
}

export default Search;