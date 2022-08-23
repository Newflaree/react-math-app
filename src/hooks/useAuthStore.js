import { useDispatch, useSelector } from 'react-redux';
import { mathApi } from '../api';
import { onChecking } from '../store';

export const useAuthStore = () => {
  const { status, user, errorMessage } = useSelector( state => state.auth );
  const dispatch = useDispatch();

  const startLogin = async ({ email, password }) => {
    dispatch( onChecking() );
    
    try {
      const { data } = await mathApi.post( '/auth/login', { email, password } );
      console.log( data );

    } catch ( err ) {
      console.log( data );

    }
  }

  const startRegister = async ({ email, name, password }) => {
    dispatch( onChecking() );

    try {
      const { data } = await mathApi.post( '/auth/register', { email, name, password } );
      console.log( data );

    } catch ( err ) {
      console.log( data );

    }
  }

  return {
    // Props
    // Methods
    startLogin,
    startRegister
  }
}
