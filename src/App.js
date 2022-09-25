import { Route, Routes } from 'react-router-dom'
import './App.css'
import Header from './components/header/Header'
import DetailArticle from './pages/DetailArticle'
import Index from './pages/Index'
import PostArticle from './pages/PostArticle'

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Index />}></Route>
        <Route path="/post" element={<PostArticle />}></Route>
        <Route path="/detail" element={<DetailArticle />}></Route>
      </Routes>
    </div>
  )
}

export default App
