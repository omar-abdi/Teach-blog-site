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
import { useSelector } from 'react-redux'
import CreatePost from './pages/CreatePost'
import Profile from './pages/Profile'
import Users from './pages/Users'

function App() {

  const currentUser = useSelector((state)=> state.currentUser)
  return (
    <div className='min-h-screen bg-[#f5f7f2] font-sans text-[#17221f]'>
    



    <Navbar/>
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='blogs' element={<Blogs/>} />
      <Route path='/contact' element={<Contact/>} />
      <Route path='/blogs/:id' element={<Blogpost/>} />
      <Route path='/login' element={currentUser ? <Navigate to ="/dash" /> : <Singin/>} />
      <Route path='/signup' element={currentUser ? <Navigate to ="/login" /> : <Signup/>} />


        <Route path='/dash' element={currentUser ? <Dashbrod/>: <Navigate to = "login"/>} >
        <Route    index element={<Navigate  to = "posts"  replace/>}  />
        <Route  path='posts'   element={<PostList/>}  />
        <Route  path='create post'   element={<CreatePost/>}  />
        <Route  path='editpost/:id'   element={<Editpost/>}  />
        <Route  path='profile'   element={<Profile/>}  />
        <Route  path='users'   element={<Users/>}  />
        </Route>
    </Routes>

    </div>
  )
}

export default App
