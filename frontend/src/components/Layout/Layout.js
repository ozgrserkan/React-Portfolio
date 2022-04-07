import { Outlet } from 'react-router-dom'
import Sidebar from '../Sidebar/Sidebar'
import './Layout.scss'

const Layout = () => {
  return (
    <div className="App">
      <Sidebar />
      <div className="page">
        <span className="tags top-tags">body</span>
        <Outlet />
        <span className="tags bottom-tags">
          body
          <br />
          <span className="bottom-tag-html">html</span>
        </span>
      </div>
    </div>
  )
}

export default Layout
