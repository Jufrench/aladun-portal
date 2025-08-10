import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { MantineProvider } from '@mantine/core'
import { BrowserRouter } from 'react-router'
import { Notifications } from '@mantine/notifications'

import App from './App.tsx'

import './index.css'
import '@mantine/core/styles.css';
import '@mantine/notifications/styles.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <MantineProvider defaultColorScheme="dark">
      <Notifications position="top-center" zIndex={1000} />
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </MantineProvider>
  </StrictMode>,
)
