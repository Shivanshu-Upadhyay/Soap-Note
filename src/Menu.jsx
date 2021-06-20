import React from 'react';
import {NavLink} from 'react-router-dom';

const Menu = () => {
return(
<>
<div className='menu '>
<NavLink exact activeClassName="active" to='/'>Subjective</NavLink>
<NavLink to='/objective'>Objective</NavLink>
<NavLink to='/assessment'>Assessment</NavLink>
<NavLink to='/plan'>Plan</NavLink>
</div>
</>
)
};

export default Menu;