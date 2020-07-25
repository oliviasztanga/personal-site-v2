import React from 'react'
import ReactDOM from 'react-dom'
import { ThemeProvider, createMuiTheme } from '@material-ui/core'
import App from './App'

const theme = createMuiTheme({
  palette: {
    secondary: {
      main: '#e3abce'
    }
  },
})

ReactDOM.render(
  <React.StrictMode>
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
)