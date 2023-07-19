import React from 'react'
import { ChakraProvider } from '@chakra-ui/react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'

import { extendTheme } from '@chakra-ui/react'
import '@fontsource/mulish'
const theme = extendTheme({
  fonts: {
    heading: `'Mulish', sans-serif`,
    body: `'Mulish', sans-serif`,
  },
})



ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <App />
    </ChakraProvider>
  </React.StrictMode>,
)
