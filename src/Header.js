import "./Header.css"

const Header = () => {
  const showCartHandler = () => {

  }

  return(
    <header className="header">
      <h1>Cart</h1>
      <nav>
        <ul>
          <li>
            <button onClick={showCartHandler}>My Cart</button>
          </li>
        </ul>
      </nav>
    </header>
  )

};

export default Header;