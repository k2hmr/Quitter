import { Route, Routes } from 'react-router'
import { BrowserRouter } from 'react-router-dom'

export const RouterConfig = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<>テスト</>}>
          <Route index element={<>テスト</>} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
