import { RouterConfig } from './router/RouterConfig'
import { UserContextProvider } from './provider/UserContextProvider'

function App() {
  return (
    <UserContextProvider>
      <RouterConfig />
    </UserContextProvider>
  )
}

export default App
