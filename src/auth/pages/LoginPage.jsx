import { Link, useNavigate } from 'react-router-dom';
// Layout
import { AuthLayout } from '../layout';

export const LoginPage = () => {
  const navigate = useNavigate();

  const onRegister = () => {
    navigate( '/auth/register' );
  }

  return (
    <AuthLayout title='Bienvenido'>
      <form>
        <div className='form-group'>
          <input 
            type='email'
            placeholder='Correo electrónico'
            className='form-control'
          />
        </div>

        <div className='form-group'>
          <input 
            type='password'
            placeholder='Contraseña'
            className='form-control'
          />
        </div>

        <div className='form-group'>
          <label>
            <input type='checkbox' />
            &nbsp;Recuérdame
          </label>
        </div>

        <div className='buttons'>
          <Link to='/' className='text-white'>
            <button
              type='button'
              className='btn normal'
            >
              Iniciar sesión
            </button>
          </Link>
        </div>

        <p className='register-btn'>
          <a onClick={ onRegister }>
            ¿No tienes una cuenta?
          </a>
        </p>
      </form>
    </AuthLayout>
  )
}
