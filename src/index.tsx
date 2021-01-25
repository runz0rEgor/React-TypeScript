import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';


export function startApp(): void {
  ReactDOM.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>,
    document.getElementById('root')
  );
}
startApp()
