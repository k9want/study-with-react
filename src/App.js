import { Route, Routes } from 'react-router-dom'
import { useState } from 'react'

import './App.css'
import Header from './components/header/Header'
import DetailArticle from './pages/DetailArticle'
import Index from './pages/Index'
import PostArticle from './pages/PostArticle'
import SignUp from './pages/SignUp'
import UserArticle from './pages/UserArticle'

function App() {
  const [loginModal, setLoginModal] = useState(false)

  return (
    <div className="App">
      <Header setLoginModal={setLoginModal} loginModal={loginModal} />
      <Routes>
        <Route path="/" element={<Index loginModal={loginModal} />}></Route>
        <Route
          path="/post"
          element={<PostArticle loginModal={loginModal} />}
        ></Route>
        <Route
          path="/detail"
          element={<DetailArticle loginModal={loginModal} />}
        ></Route>
        <Route
          path="/signup"
          element={<SignUp loginModal={loginModal} />}
        ></Route>
        <Route
          path="/userarticle"
          element={<UserArticle loginModal={loginModal} />}
        ></Route>
      </Routes>
    </div>
  )
}

export default App
