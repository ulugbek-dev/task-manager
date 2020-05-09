import React from 'react';
import { SearchStyled } from './styled';
import { Input } from '../../elements/Input';
import { FontAwesomeIcon as Icon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { useSelector, useDispatch } from 'react-redux';

function Search() {
    const dispatch = useDispatch();
    const searchText = useSelector(state => state.searchText);

    return (
        <SearchStyled>
            <Icon icon={faSearch} />
            <Input 
                placeholder="Search by task name"
                value={searchText} 
                onChange={e => dispatch({ type: 'SEARCH', payload: e.target.value })}
            />
        </SearchStyled>
    );
}

export default Search;