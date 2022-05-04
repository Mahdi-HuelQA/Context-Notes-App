import React from 'react'
import { Route, BrowserRouter as Router } from 'react-router-dom';
import { Information } from '../Information/Information';

export const Nav = () => {
  return (
    <Router>
      <div className=' container'>
        <div>
          <nav>
            <ul>
              <li>
                {' '}
                <link to='/info'>info</link>
              </li>
            </ul>
          </nav>
        </div>
       
      </div>
      <Route path='/info' exact component={Information} />
    </Router>
  );
};

export default Nav;


// for react router setup 
