import { Route, Routes } from 'react-router-dom'
import { useEffect, useState } from 'react'

import './App.css'
import Header from './components/header/Header'
import DetailArticle from './pages/DetailArticle'
import Index from './pages/Index'
import PostArticle from './pages/PostArticle'
import SignUp from './pages/SignUp'
import UserArticle from './pages/UserArticle'
import axios from 'axios'
import { url } from './config/url'

function App() {
  const [loginModal, setLoginModal] = useState(false)
  const [nickname, setNickname] = useState('')

  useEffect(() => {
    const accessToken = JSON.parse(localStorage.getItem('jwt'))
    const userId = JSON.parse(localStorage.getItem('userId'))
    if (!accessToken || !userId) return
    axios
      .get(`${url}/userId/${userId}`, {
        headers: {
          'x-access-token': accessToken,
        },
      })
      .then((res) => {
        console.log(userId)
        console.log(res)
        setNickname(res.data.result.nickname)
      })
  }, [])

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
