import { NavLink } from 'react-router-dom';
import { menuItems } from './sidebar-data';

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

