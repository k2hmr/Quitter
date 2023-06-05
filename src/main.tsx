import ErrorBoundary from '@/ErrorBoundary.tsx'
import { ChakraProvider } from '@chakra-ui/provider'
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ErrorBoundary>
      <ChakraProvider>
        <App />
      </ChakraProvider>
    </ErrorBoundary>
  </React.StrictMode>,
)
