import React from 'react'
import { useRef , useState } from 'react'
import "react-quill-new/dist/quill.snow.css"
import ReactQuill from 'react-quill-new'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
function CreatePost() {
  const naviagate= useNavigate()
  const [image , setImage] = useState(null)
  const [formData , setFormData] = useState({
    title :"",
    category: "",
    content: "",
    image : ""
  })

  const handdleFormChange = (e)=>{
    setFormData({
      ...formData,
      [e.target.name] : e.target.value
    })
  }
  const inputRefImage = useRef()
  const handdleFIleChange = (e)=>{
    const file = e.target.files[0]
    if(file){
      const reader = new FileReader()
      reader.onload  = ()=>{
        setImage(reader.result)
        setFormData((prev)=>({
       ...prev,
       image: reader.result
        }))
      }
     reader.readAsDataURL(file)
    }
  }
const handleSubmit = async(e)=>{
   e.preventDefault()
  try {
    const res  = await axios.post("/api/posts/create" , formData)
    setFormData(res.data)
  } catch (error) {
    console.log(error.message)
    
  }
}

///naviagate(`/blogs/${data._id}`)
  return (
    <div className='p-4 flex-1 max-w-4xl mx-auto'>
  <div className='space-y-2 mb-4 '>
    <h1 className='text-2xl text-slate-800 font-bold'>Your Posts</h1>
    <p>Share post with your friends</p>
  </div>
  {/* fromka inputs */}
  <form className='space-y-6'  onSubmit={handleSubmit} > 
    <div className='space-y-2' >
      {/* input title */}
<label  className='block text-sm font-medium text-gray-800' htmlFor='Title'>Titel:</label>
<input  name='title' value={formData.title} onChange={handdleFormChange}    type="text"   placeholder='Enter Title Your post' className='w-full rounded-lg px-4 py-2 text-slate-700 border border-slate-300' />
    </div>
    <div className='space-y-2' >
      {/* category input */}
<label  className='block text-sm font-medium text-gray-800' htmlFor='category'>Categroy:</label>
<input type="text"  name='category' value={formData.category} onChange={handdleFormChange}   placeholder='Category post' className='w-full rounded-lg px-4 py-2 text-slate-700 border border-slate-300' />
    </div>
    <div className='space-y-2' >
      {/* image input */}
<label  className='block text-sm font-medium text-gray-800' htmlFor='category'>image:</label>
<div>
  <input type="file"   onChange={handdleFIleChange} className='hidden' id='file' ref={inputRefImage} accept='image/*' />
  <img src= {image ? image : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYWJgwzbZmDbken0mXjc4idbPF-3HRilVQvw&s'} onClick={()=>inputRefImage.current.click()}  alt="" className='h-[100px] '  />
</div>
    </div>
    <div className='space-y-2' >
      {/* content input */}
<label  className='block text-sm font-medium text-gray-800' htmlFor='category'>Content :</label>
<ReactQuill  name='content' onChange={(content)=> setFormData({...formData , content})}    placeholder='Your post Content' className='mb-12'/>
    </div>
    <button  type='submit'       className='w-full md:w-1/2 bg-gray-700 shadow-lg rounded-lg px-6 py-3 text-white hover:bg-gray-900'>Post </button>
  </form>
    </div>
  )
}

export default CreatePost
