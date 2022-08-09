import {
  SidebarCopyright,
  SidebarLogo,
  SidebarNavbar,
  SidebarTogglerBtn
} from './';

export const Sidebar = () => {
  const onToggler = () => {
    const nav = document.querySelector( 'aside' );
    const navTog = document.querySelector( '.nav-toggler' )

    navTog?.classList.toggle( 'open' );
    nav?.classList.toggle( 'open' );
  }

  return (
    <aside>
      <SidebarLogo title='MA - 01' onToggler={ onToggler } />
      <SidebarTogglerBtn onToggler={ onToggler } />
      <SidebarNavbar onToggler={ onToggler } />
      <SidebarCopyright />
    </aside>
  )
}
