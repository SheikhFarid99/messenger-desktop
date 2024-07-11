import { HashRouter, Routes, Route } from 'react-router-dom'
import Layout from './page/layout/Layout'
import Messenger from './page/Messenger'
import Login from './page/Login'
import Register from './page/Register'

const App = () => {

  return (
    <HashRouter>
      <Routes >
        <Route path='/' element={<Layout />} >
          <Route path='' element={<Messenger />} />
        </Route>
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
      </Routes>
    </HashRouter>
  )
}

export default App

