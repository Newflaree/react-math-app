import { NavLink } from 'react-router-dom';
// Test Data
// TODO: Remove this when connected to the server
import { menuItems } from '../../../data/provisional-data';

export const SidebarNavbar = ({ onToggler }) => {
  return (
    <ul className="nav">
      {
        menuItems.map( item => (
          <li key={ item.title }>
            <NavLink
              onClick={ onToggler }
              className={ ({ isActive }) => `${ isActive ? 'active' : '' }` }
              to={ item.url }
            >
              <i className={ item.icon }></i> { item.title }
            </NavLink>
          </li>
        ))
      }
    </ul>
  )
}

