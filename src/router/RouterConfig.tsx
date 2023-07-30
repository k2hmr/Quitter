import NavBar from '@/components/layout/organisms/NavBar'
import ActiveThemesPage from '@/components/pages/ActiveThemesPage'
import LoginPage from '@/components/pages/LoginPage'
import { MyPage } from '@/components/pages/MyPage'
import NewThemePage from '@/components/pages/NewThemePage'
import { NotFoundPage } from '@/components/pages/NotFoundPage'
import SignupPage from '@/components/pages/SignupPage'
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
            path="mypage"
            element={
              <RouterAuthenticatedCheck
                component={<MyPage />}
                redirect={'/login'}
              />
            }
          />
          <Route
            path="themes"
            element={
              <RouterAuthenticatedCheck
                component={<ActiveThemesPage />}
                redirect={'/login'}
              />
            }
          />
          <Route
            path="new-theme"
            element={
              <RouterAuthenticatedCheck
                component={<NewThemePage />}
                redirect={'/login'}
              />
            }
          />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignupPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
