import { RouterProvider } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import ErrorBoundary from '@/components/ErrorBoundary';
import { Provider } from 'react-redux';
import { store } from '@/redux/store';
import { router } from '@/router';

const App = () => {
  return (
    <Provider store={store}>
      <ErrorBoundary>
        <RouterProvider router={router} />
        <Toaster
          position="top-right"
          toastOptions={{
            duration: 4000,
            style: {
              background: '#333',
              color: '#fff',
            },
          }}
        />
      </ErrorBoundary>
    </Provider>
  );
};

export default App;
