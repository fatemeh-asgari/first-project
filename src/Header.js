import {Link} from 'react-router-dom';

import "./Header.css"

const Header = () => {

  return(
    <header className="header">
      <h1>Cart</h1>
      <nav>
        <ul>
          <li>
            <Link className='nav-item' to='/cart'>My Cart</Link>
          </li>
        </ul>
      </nav>
    </header>
  )

};

export default Header;