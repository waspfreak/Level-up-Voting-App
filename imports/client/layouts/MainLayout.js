import React from 'react';
import { LoginButtons } from 'meteor/okgrow:accounts-ui-react';
import { Link } from 'react-router';

const MainLayout = ({children}) => {
  return (
    <div className='main-layout'>
      <header>
        <nav>
          <ul>
            <li><Link to='/'>Home</Link></li>
            <li><Link to='/about'>About</Link></li>
            <div className=""><LoginButtons/></div>
          </ul>
        </nav>
        <div className="row">
          <h1>Level up Voting</h1>
        </div>
      </header>
      {children}
    </div>
  )
}
export default MainLayout;
