import { StrictMode } from 'react';
import * as ReactDOM from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom'; // Import Router

import App from './app/App';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

root.render(
    <StrictMode>
        <Router>   {/* Wrap your App in a Router */}
            <App />
        </Router>
    </StrictMode>
);
