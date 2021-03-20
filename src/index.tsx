import { StrictMode } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
import reportWebVitals from './reportWebVitals';
import { configureForage } from './utilities/forage';
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './App';

configureForage();
const queryClient = new QueryClient();

ReactDOM.render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools initialIsOpen={false} />
      <App />
    </QueryClientProvider>
  </StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
