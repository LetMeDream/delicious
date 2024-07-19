/* import React from 'react'; */
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { ErrorBoundary } from "react-error-boundary";
require('./index.css');


const root = ReactDOM.createRoot(document.getElementById('root'));

function fallbackRender({ error, resetErrorBoundary }) {
  // Call resetErrorBoundary() to reset the error boundary and retry the render.

  return (
    <div role="alert">
      <p>Something went wrong:</p>
      <pre style={{ color: "red" }}>{error.message}</pre>
      <button onClick={resetErrorBoundary}>wut</button>
    </div>
  );
}

root.render(
  //<React.StrictMode>
    <BrowserRouter>
      <ErrorBoundary fallbackRender={fallbackRender}>
        <App />
      </ErrorBoundary>
    </BrowserRouter>

  //</React.StrictMode>
);

