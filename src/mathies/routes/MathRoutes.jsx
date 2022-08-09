import { Navigate, Route, Routes } from 'react-router-dom';
// Pages
import {
  MathPage,
  PracticePage,
  ProfilePage,
  SettingsPage
} from '../pages';

export const MathRoutes = () => {
  return (
    <Routes>
      <Route path='/' element={ <MathPage /> } />
      <Route path='practice' element={ <PracticePage /> } />
      <Route path='profile' element={ <ProfilePage /> } />
      <Route path='settings' element={ <SettingsPage /> } />

      <Route path='/*' element={ <Navigate to='/' /> } />
    </Routes>
  )
}
