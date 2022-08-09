export const SidebarCopyright = () => {
  const currentYear = new Date().getFullYear();

  return (
    <div className='copyright-text'>
      &copy; { currentYear } Newflare Projects
    </div>
  )
}
