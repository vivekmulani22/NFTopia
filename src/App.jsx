import React from 'react'
import Home from './Campont/Home'
import { Route, Routes } from 'react-router-dom'
import Explor from './Campont/Explor'
import Creators from './Campont/Creators'
import Blog from './Campont/Blog'
import Contact from './Campont/Contact'
// import Pages from './Campont/Pages'
import Creator from '../src/Pages/Creator'
import Art from '../src/Pages/Art'
import Error from '../src/Pages/Error'
import Faqs from '../src/Pages/Faqs'
import Login from '../src/Pages/Login'
import Register from '../src/Pages/Register'
import Terms from '../src/Pages/Terms'

const App = () => {
  return (
    <div className=" w-full h-screen">
      <Routes>
      <Route path='/' element = {<Home/>}/>
      <Route path='/Explor' element = {<Explor/>}/>
      <Route path='/Creators' element = {<Creators/>}/>
      {/* <Route path='/Pages' element = {<Pages/>}/> */}
      <Route path='/Blog' element = {<Blog/>} />
      <Route path='/Contact' element = {<Contact/>} />
      <Route path='/Creator' element = {<Creator/>}/>
      <Route path='/Art' element = {<Art/>}/>
      <Route path='/Error' element = {<Error/>}/>
      <Route path='/Faqs' element = {<Faqs/>}/>
      <Route path='/Login' element = {<Login/>}/>
      <Route path='/Register' element = {<Register/>}/>
      <Route path='/Terms' element = {<Terms/>}/>

      </Routes>
    </div>
  )
}

export default App
