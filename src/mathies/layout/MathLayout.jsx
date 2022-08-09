import { Sidebar } from '../components/Sidebar';

export const MathLayout = ({ children }) => {
  return (
    <div className="main-container">
      <Sidebar /> 

      <div className='main-content animate__animated animate__fadeIn'>
        { children }
      </div>
    </div>
  )
}
