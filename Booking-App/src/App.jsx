import { RouterProvider } from 'react-router-dom';
import { router } from '@/router';
import { Toaster } from 'react-hot-toast';
import ErrorBoundary from './components/ErrorBoundary';

const App = () => {
  return (
    <>
      <ErrorBoundary>
        <RouterProvider router={router} />
        <Toaster position="top-right" toastOptions={{ duration: 4000 }} />
      </ErrorBoundary>
    </>
  );
};

export default App;
