import React from 'react';
import { createRoot } from 'react-dom/client';
import { Annotorious } from '@annotorious/react';
import { App } from './App';

import './index.css';

const root = createRoot(document.getElementById('app') as Element);
root.render(
  <React.StrictMode>
    <Annotorious>
      <App />
    </Annotorious>
  </React.StrictMode>
);