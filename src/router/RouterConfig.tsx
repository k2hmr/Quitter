import NavBar from '@/components/layout/organisms/NavBar'
import LoginPage from '@/components/pages/LoginPage'
import { NotFoundPage } from '@/components/pages/NotFoundPage'
import { Route, Routes } from 'react-router'
import { BrowserRouter } from 'react-router-dom'
import { RouterAuthenticatedCheck } from './RouterAuthenticateConfig'

export const RouterConfig = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<NavBar />}>
          <Route index element={<>トップページ</>} />
          <Route
            path="test"
            element={
              <RouterAuthenticatedCheck
                component={<>ログイン後のページ</>}
                redirect="/login"
              />
            }
          />
          <Route path="/login" element={<LoginPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
