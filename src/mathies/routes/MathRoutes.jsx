import { Navigate, Route, Routes } from 'react-router-dom';
// Pages
import { MathPage } from '../pages';

export const MathRoutes = () => {
  return (
    <Routes>
      <Route path='/' element={ <MathPage /> } />
      <Route path='/*' element={ <Navigate to='/' /> } />
    </Routes>
  )
}
