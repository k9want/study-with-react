/* eslint-disable */
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
import LikeArticle from './pages/LikeArticle'
import UserInfo from './pages/UserInfo'
import EditArticle from './pages/EditArticle'

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
          path="/articles/:articleId"
          element={<DetailArticle loginModal={loginModal} />}
        ></Route>
        <Route
          path="/articles/:articleId/edit"
          element={<EditArticle loginModal={loginModal} />}
        ></Route>
        <Route
          path="/signup"
          element={<SignUp loginModal={loginModal} />}
        ></Route>
        <Route
          path="/user/article"
          element={<UserArticle loginModal={loginModal} />}
        ></Route>
        {/* <Route
          path="/user/likes"
          element={<LikeArticle loginModal={loginModal} />}
        ></Route> */}
        <Route
          path="/user/info"
          element={<UserInfo loginModal={loginModal} />}
        ></Route>
        <Route
          path="/*"
          element={
            <div className="container">해당 페이지를 찾을 수 없습니다.</div>
          }
        ></Route>
      </Routes>
    </div>
  )
}

export default App
