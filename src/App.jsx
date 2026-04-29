import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './Home'
import Header from './Header'
import BackgroundColor from './BackgroundColor'

function App() {


  return (
    <>
    <Header/>
   <Routes>
    <Route path='/' element = {<Home/>}/>
     <Route path='BackGround' element = {<BackgroundColor/>}/>
   </Routes>
    </>
  )
}

export default App
