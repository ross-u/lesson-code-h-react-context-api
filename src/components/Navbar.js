import { NavLink } from "react-router-dom";

import { useContext } from 'react';
import { ThemeContext } from './../context/theme.context';

function Navbar() {
  const {theme, toggleTheme} = useContext(ThemeContext);

  return (
    <nav className={"Navbar " + theme}>
      <div>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/projects">Projects</NavLink>

        {/* or with active link styles */}
        {/* <NavLink to="/" className={({isActive}) => isActive && 'selected'}>Home</NavLink> */}
        {/* <NavLink to="/projects" className={({isActive}) => isActive && 'selected'}>Projects</NavLink> */}
      </div>

      <button className="theme-btn" onClick={toggleTheme}>
        {theme === 'light' ? 'dark 🌜' : 'light 🟡'}
      </button>
    </nav>
  );
}

export default Navbar;
