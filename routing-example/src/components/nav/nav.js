import {  NavLink } from "react-router-dom";     // <== IMPORT
import '../../App.css';

function Navbar() {
  return (
    <nav className="navbar">
      <ul>
        <NavLink to="/about-us" className={({ isActive }) => isActive ? "selected" : "not-selected"}>About Us</NavLink>
        <NavLink to="/projects" className={({ isActive }) => isActive ? "selected" : "not-selected"}>Projects</NavLink>
       
        <NavLink to="/our-clients" className={({ isActive }) => isActive ? "selected" : "not-selected"}> About Us</NavLink>  
      </ul>
    </nav>
  );
}
 
export default Navbar;