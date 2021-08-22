import { Provider } from 'react-redux';

import AppRouter from './routers/AppRouter';
import { store } from './core/store/store';

export default function App() {
  return (
    <Provider store={store}>
      <AppRouter />
    </Provider>
  );
}
