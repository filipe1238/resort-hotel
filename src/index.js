import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import App from './App';
import { RoomProvider } from './context';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <RoomProvider>
    <React.StrictMode>
      <Router>
        <App />
      </Router>
    </React.StrictMode>
  </RoomProvider>
);

