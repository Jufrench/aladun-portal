import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createTheme, MantineProvider, type MantineColorsTuple } from '@mantine/core'
import { BrowserRouter } from 'react-router'
import { Notifications } from '@mantine/notifications'

import App from './App.tsx'

import './index.css'
import '@mantine/core/styles.css';
import '@mantine/notifications/styles.css';

const ivory: MantineColorsTuple = [
  '#f8f3e6', // root color index 0
  '#f3eddf',
  '#e7daba',
  '#dbc590',
  '#d0b46d',
  '#caa957',
  '#c7a34a',
  '#b08e3b',
  '#9c7e32',
  '#876c26'
];

const blood: MantineColorsTuple = [
  '#ffecec',
  '#f8d9d9',
  '#e9b2b2',
  '#db8888',
  '#d06564',
  '#c94e4e',
  '#bf3939', // root color index 6
  '#b03334',
  '#9e2b2d',
  '#8b2124'
];

const gold: MantineColorsTuple = [
  '#fff5e1',
  '#ffe9ce',
  '#f9d1a0',
  '#f5b86e',
  '#f2aa52', // root color index 4
  '#ef9528',
  '#ee8e18',
  '#d47b09',
  '#bd6c01',
  '#a55c00'
];

const leaf: MantineColorsTuple = [
  '#eefaee',
  '#dff0df',
  '#bedfbd',
  '#9acd99',
  '#7cbe7a',
  '#69b466',
  '#5eb05b',
  '#4d9a4b',
  '#448c42', // root color index 8
  '#357734'
];

const theme = createTheme({
  colors: {
    ivory,
    blood,
    gold,
    leaf
  }
});

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <MantineProvider defaultColorScheme="dark" theme={theme}>
      <Notifications position="top-center" zIndex={1000} />
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </MantineProvider>
  </StrictMode>,
)
