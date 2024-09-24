import * as React from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './components/App.jsx';

const root = createRoot(document.body);
root.render(<App/>);