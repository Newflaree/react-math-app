import { AuthLayout } from '../layout';

export const RegisterPage = () => {
  return (
    <AuthLayout title='Crea una cuenta'>
      <form>
        <div className='form-group'>
          <input 
            type='text'
            placeholder='Nombre de usuario'
            className='form-control'
          />
        </div>

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
          <input 
            type='password'
            placeholder='Repita su contraseña'
            className='form-control'
          />
        </div>

        <div className='form-group'>
          <label>
            <input type='checkbox' />
            Acepto los términos y condiciones
          </label>
        </div>

        <div className='buttons'>
          <button
            type='button'
            className='btn normal'
          >
            Crear cuenta
          </button>
        </div>

        <p className='register-btn'>
          <a>
            ¿Ya tienes una cuenta?
          </a>
        </p>
      </form>
    </AuthLayout>
  )
}

