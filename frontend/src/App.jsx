import React from 'react'
import Navbar from './Components/Navbar'
import{Routes , Route, Navigate} from "react-router-dom"
import Home from './pages/Home'
import Blogs from './pages/Blogs'
import Contact from './pages/Contact'
import Blogpost from './pages/Blogpost'
import Singin from './pages/Singin'
import Dashbrod from './pages/Dashbrod'
import Signup from './pages/Signup'
import PostList from './pages/PostList'
import Editpost from './pages/Editpost'

function App() {
  const currentUser = true
  return (
    <div>
    



    <Navbar/>
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='blogs' element={<Blogs/>} />
      <Route path='/contact' element={<Contact/>} />
      <Route path='/blogs/:id' element={<Blogpost/>} />
      <Route path='/login' element={currentUser ? <Navigate to ="/dash" /> : <Singin/>} />
      <Route path='/signup' element={currentUser ? <Navigate to ="/dash" /> : <Signup/>} />


        <Route path='/dash' element={currentUser ? <Dashbrod/>: <Navigate to = "login"/>} >
        <Route    index element={<Navigate  to = "posts"  replace/>}  />
        <Route  path='posts'   element={<PostList/>}  />
        <Route  path='Editpost/:id'   element={<Editpost/>}  />
        </Route>
    </Routes>

    </div>
  )
}

export default App
