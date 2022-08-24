import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
// Store
import { store } from './store';
// Router
import { AppRouter } from './router';

export const MathApp = () => {
  return (
    <Provider store={ store }>
      <BrowserRouter>
        <AppRouter />
      </BrowserRouter>
    </Provider>
  )
}
