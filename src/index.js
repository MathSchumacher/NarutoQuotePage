import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { GlobalStyle } from './GlobalStyle';
/*ReactDOM.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
    document.getElementById('root')
);*/

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <GlobalStyle />
    <App />
  </React.StrictMode>
);

reportWebVitals();

/*const App = () => {
  return <h1>Hello, React!</h1>;
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);*/
