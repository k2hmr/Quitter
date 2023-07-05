import { Link } from 'react-router-dom'
import { Div } from '../layout/atom/Div'

const PostTemplatesListPage = () => {
  return (
    <Div>
      ログイン後のページ<Link to={'/mypage'}>button</Link>
    </Div>
  )
}

export default PostTemplatesListPage
