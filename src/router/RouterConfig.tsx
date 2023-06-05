import TopBar from '@/components/layout/templates/TopBar'
import { Route, Routes } from 'react-router'
import { BrowserRouter } from 'react-router-dom'

export const RouterConfig = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<TopBar />}>
          <Route index element={<>テスト</>} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
