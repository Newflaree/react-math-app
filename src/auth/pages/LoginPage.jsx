import { AuthLayout } from '../layout';

export const LoginPage = () => {
  return (
    <AuthLayout title='Login'>
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
            Recuérdame
          </label>
        </div>

        <div className='buttons'>
          <button
            type='button'
            className='btn normal'
          >
            Iniciar sesión
          </button>
        </div>

        <p className='register-btn'>
          <a>
            ¿No tienes una cuenta?
          </a>
        </p>
      </form>
    </AuthLayout>
  )
}
