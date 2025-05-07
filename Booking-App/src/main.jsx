import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from '@/App.jsx';
import '@/index.css';
import { Provider } from 'react-redux';
import { store, history } from './store';
import { HistoryRouter as Router } from 'redux-first-history/rr6';

createRoot(document.getElementById('root')).render(<App />);
 <React.StrictMode>
   <Provider store={store}>
     <Router history={history}>
       <App />
     </Router>
   </Provider>
 </React.StrictMode>;