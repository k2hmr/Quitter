import NavBar from '@/components/layout/organisms/NavBar'
import LoginPage from '@/components/pages/LoginPage'
import { MyPage } from '@/components/pages/MyPage'
import { NotFoundPage } from '@/components/pages/NotFoundPage'
import SignupPage from '@/components/pages/SignupPage'
import { Route, Routes } from 'react-router'
import { BrowserRouter } from 'react-router-dom'
import { RouterAuthenticatedCheck } from './RouterAuthenticateConfig'
import PostTemplatesListPage from '@/components/pages/PostTemplatesListPage'

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
                component={<PostTemplatesListPage />}
                redirect={'/login'}
              />
            }
          />
          <Route
            path="mypage"
            element={
              <RouterAuthenticatedCheck
                component={<MyPage />}
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
