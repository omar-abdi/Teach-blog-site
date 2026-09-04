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
setFormData({
   title :"",
    category: "",
    content: "",
    image : null

})
}

///naviagate(`/blogs/${data._id}`)
  return (
    <div className='min-h-screen flex-1 bg-[#f5f7f2] p-4 sm:p-8'>
  <div className='mx-auto max-w-4xl'>
  <div className='mb-8 space-y-2'>
    <p className='text-xs font-bold uppercase tracking-[0.28em] text-[#138a78]'>Creator studio</p>
    <h1 className='text-3xl font-black tracking-tight text-[#17221f] sm:text-4xl'>Create a new post</h1>
    <p className='text-[#687871]'>Share something useful with your community.</p>
  </div>
  {/* fromka inputs */}
  <form className='space-y-6 rounded-3xl border border-[#dfe7df] bg-white p-5 shadow-[0_18px_50px_rgba(23,34,31,0.07)] sm:p-8'  onSubmit={handleSubmit} > 
    <div className='space-y-2' >
      {/* input title */}
<label  className='block text-sm font-bold text-[#17221f]' htmlFor='Title'>Title</label>
<input  name='title' value={formData.title} onChange={handdleFormChange}    type="text"   placeholder='Enter the title of your post' className='w-full rounded-xl border border-[#d8e0d8] bg-[#f8faf7] px-4 py-3 text-[#17221f] outline-none transition placeholder:text-[#9aa9a2] focus:border-[#138a78] focus:bg-white focus:ring-4 focus:ring-[#d8eee8]' />
    </div>
    <div className='space-y-2' >
      {/* category input */}
<label  className='block text-sm font-bold text-[#17221f]' htmlFor='category'>Category</label>
<input type="text"  name='category' value={formData.category} onChange={handdleFormChange}   placeholder='e.g. Technology, Design, Education' className='w-full rounded-xl border border-[#d8e0d8] bg-[#f8faf7] px-4 py-3 text-[#17221f] outline-none transition placeholder:text-[#9aa9a2] focus:border-[#138a78] focus:bg-white focus:ring-4 focus:ring-[#d8eee8]' />
    </div>
    <div className='space-y-2' >
      {/* image input */}
<label  className='block text-sm font-bold text-[#17221f]' htmlFor='category'>Cover image</label>
<div className='w-fit overflow-hidden rounded-2xl border border-dashed border-[#b9d8d0] bg-[#f8faf7] p-2'>
  <input type="file"   onChange={handdleFIleChange} className='hidden' id='file' ref={inputRefImage} accept='image/*' />
  <img src= {image ? image : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYWJgwzbZmDbken0mXjc4idbPF-3HRilVQvw&s'} onClick={()=>inputRefImage.current.click()}  alt="Choose a cover" className='h-36 w-52 cursor-pointer rounded-xl object-cover transition hover:opacity-80'  />
</div>
    </div>
    <div className='space-y-2' >
      {/* content input */}
<label  className='block text-sm font-bold text-[#17221f]' htmlFor='category'>Content</label>
<ReactQuill  name='content'  onChange={(value)=>
  setFormData((prev)=>({...prev , content: value}))} 
    value={formData.content}   placeholder='Write your story...' className='quill-modern mb-12'

  />
    </div>
    <button  type='submit'       className='w-full rounded-xl bg-[#17221f] px-6 py-3.5 font-bold text-white shadow-lg shadow-[#17221f]/15 transition hover:bg-[#138a78] md:w-1/2'>Publish post</button>
  </form>
  </div>
    </div>
  )
}

export default CreatePost
