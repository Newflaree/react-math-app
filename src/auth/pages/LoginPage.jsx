import {useEffect} from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import { useAuthStore, useForm } from '../../hooks';
// Layout
import { AuthLayout } from '../layout';

const loginFormFields = {
  loginEmail: 'test6@test.com',
  loginPassword: '12456'
}

export const LoginPage = () => {
  const { startLogin, errorMessage } = useAuthStore();
  const { loginEmail, loginPassword, onInputChange: onLoginInputChange } = useForm( loginFormFields );

  const loginSubmit = ( event ) => {
    event.preventDefault();

    startLogin({ email: loginEmail, password: loginPassword })
  }

  useEffect( () => {
    if ( errorMessage !== undefined ) {
      Swal.fire( 'Authentication Error', errorMessage, 'error' );
    }
  }, [ errorMessage ] );

  const navigate = useNavigate();

  const onRegister = () => {
    navigate( '/auth/register' );
  }

  return (
    <AuthLayout title='Bienvenido'>
      <form onSubmit={ loginSubmit }>
        <div className='form-group'>
          <input 
            type='email'
            placeholder='Correo electrónico'
            className='form-control'
            name='loginEmail'
            value={ loginEmail }
            onChange={ onLoginInputChange }
          />
        </div>

        <div className='form-group'>
          <input 
            type='password'
            placeholder='Contraseña'
            className='form-control'
            name='loginPassword'
            value={ loginPassword }
            onChange={ onLoginInputChange }
          />
        </div>

        <div className='form-group'>
          <label>
            <input type='checkbox' />
            &nbsp;Recuérdame
          </label>
        </div>

        <div className='buttons'>
            <button
              type='submit'
              className='btn normal'
              value='login'
            >
              Iniciar sesión
            </button>
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
