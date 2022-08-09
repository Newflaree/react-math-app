import {Link} from "react-router-dom"

export const SidebarLogo = ({ title = '', className = '', onToggler }) => {
  return (
    <div 
      className={ `logo ${ className }` }
      onClick={ onToggler }
    >
      <Link to='/'>
        { title }
      </Link>
    </div>
  )
}

