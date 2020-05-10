import React from 'react';
import { NavbarStyled } from './styled';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Wrapper } from '../../elements/Wrapper';

function Navbar() {
  const dispatch = useDispatch();

  // Get Api endpoint from env
  const api_url = process.env.REACT_APP_API_URL;

  // Get user details from the store
  const user = useSelector(state => state.auth);

  return (
    <NavbarStyled>
      <Wrapper navbar>
        <div>
          <div 
              className="profile-image"
              style={{backgroundImage: `url(${api_url}${user.image})`}}
          ></div>
          <p>{user.token.name}</p>
        </div>
        
        <Link to="/login" onClick={() => dispatch({ type: 'LOGOUT' })}>Logout</Link>
      </Wrapper>
    </NavbarStyled>
  );
}

export default Navbar;