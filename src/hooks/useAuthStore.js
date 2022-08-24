import { useDispatch, useSelector } from 'react-redux';
import { mathApi } from '../api';
import {
  clearErrorMessage,
  onChecking,
  onLogin,
  onLogout
} from '../store/auth';

export const useAuthStore = () => {
  const { status, user, errorMessage } = useSelector( state => state.auth );
  const dispatch = useDispatch();

  const startLogin = async ({ email, password }) => {
    dispatch( onChecking() );
    
    try {
      const { data } = await mathApi.post( '/auth/login', { email, password } );
      localStorage.setItem( 'token', data.token );
      localStorage.setItem( 'token-init-date', new Date().getTime() );
      dispatch( onLogin({ name: data.name, uid: data.user.uid }) )

    } catch ( err ) {
      dispatch( onLogout( err.response.data?.msg || '--' ) );
      setTimeout( () => {
        dispatch( clearErrorMessage() );
      }, 10 );
    }
  }

  const startRegister = async ({ email, name, password }) => {
    dispatch( onChecking() );

    try {
      const { data } = await mathApi.post( '/auth/register', { email, name, password } );
      console.log( data );
    } catch ( err ) {
      console.log( err );
    }
  }

  const checkAuthToken = async () => {
    const token = localStorage.getItem( 'token' );
    if ( !token ) return dispatch( onLogout() );

    try {
      const { data } = await mathApi.get( 'auth/renew' );
      localStorage.setItem( 'token', data.token );
      localStorage.setItem( 'token-init-date', new Date().getTime() );
      dispatch( onLogin({ name: data.name, uid: data.user.uid }) )

    } catch ( err ) {
      localStorage.clear();
      dispatch( onLogout() );
    }
  }

  return {
    // Props
    errorMessage,
    status,
    user,

    // Methods
    checkAuthToken,
    startLogin,
    startRegister
  }
}
