import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import { createTheme, ThemeProvider } from '@mui/material';
// Create a Material-UI theme with the "Encode Sans Condensed" font
const theme = createTheme({
  typography: {
    fontFamily: [
      'Encode Sans Condensed',
      'sans-serif',
    ].join(','),
  },
});


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <ThemeProvider theme={theme}>
    <App />
    </ThemeProvider>
  </React.StrictMode>,
)
