import { Navigate, Route, Routes } from 'react-router-dom';
// Routes
import { AuthRoutes } from '../auth/routes';
import { MathRoutes } from '../mathies/routes';

export const AppRouter = () => {
  return (
    <Routes>
      <Route path='/auth/*' element={ <AuthRoutes /> } />
      <Route path='/*' element={ <MathRoutes /> } />
    </Routes>
  )
}
