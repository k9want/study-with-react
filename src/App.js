import { Route, Routes } from 'react-router-dom'
import './App.css'
import Header from './components/header/Header'
import Index from './pages/Index'

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Index />}></Route>
      </Routes>
    </div>
  )
}

export default App
