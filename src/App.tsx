import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { UserContextProvider } from './provider/UserContextProvider'
import { RouterConfig } from './router/RouterConfig'

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
    },
    mutations: {
      retry: false,
    },
  },
})

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <UserContextProvider>
        <RouterConfig />
      </UserContextProvider>
    </QueryClientProvider>
  )
}

export default App
