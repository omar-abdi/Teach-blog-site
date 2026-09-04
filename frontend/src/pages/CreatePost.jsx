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
    <div className='min-h-screen flex-1 bg-slate-950 p-4 sm:p-8 relative overflow-hidden font-sans text-slate-100'>
      
      {/* Visual Ambient Glows */}
      <div className="absolute top-1/4 left-1/3 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-indigo-600/10 rounded-full blur-3xl pointer-events-none" />

      {/* ReactQuill Dark Theme Custom Styles */}
      <style>{`
        .ql-toolbar.ql-snow {
          border-color: #334155 !important;
          background-color: rgba(30, 41, 59, 0.6) !important;
          border-top-left-radius: 0.75rem !important;
          border-top-right-radius: 0.75rem !important;
        }
        .ql-container.ql-snow {
          border-color: #334155 !important;
          background-color: rgba(15, 23, 42, 0.4) !important;
          border-bottom-left-radius: 0.75rem !important;
          border-bottom-right-radius: 0.75rem !important;
          color: #f8fafc !important;
          min-height: 200px !important;
        }
        .ql-stroke {
          stroke: #94a3b8 !important;
        }
        .ql-fill {
          fill: #94a3b8 !important;
        }
        .ql-picker {
          color: #94a3b8 !important;
        }
        .ql-editor.ql-blank::before {
          color: #64748b !important;
        }
      `}</style>

      <div className='mx-auto max-w-4xl relative z-10'>
        <div className='mb-8 space-y-2'>
          <p className='text-xs font-bold uppercase tracking-[0.28em] bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent'>
            Creator studio
          </p>
          <h1 className='text-3xl font-black tracking-tight text-white sm:text-4xl'>
            Create a new post
          </h1>
          <p className='text-slate-400'>
            Share something useful with your community.
          </p>
        </div>

        {/* Form Container */}
        <form className='space-y-6 rounded-3xl border border-slate-800 bg-slate-900/80 p-5 shadow-2xl shadow-black/60 backdrop-blur-xl sm:p-8' onSubmit={handleSubmit}> 
          
          {/* Title Input */}
          <div className='space-y-2'>
            <label className='block text-sm font-bold text-slate-200' htmlFor='Title'>Title</label>
            <input 
              name='title' 
              value={formData.title} 
              onChange={handdleFormChange}    
              type="text"   
              placeholder='Enter the title of your post' 
              className='w-full rounded-xl border border-slate-700/70 bg-slate-800/60 px-4 py-3 text-slate-100 outline-none transition placeholder:text-slate-500 focus:border-blue-500 focus:bg-slate-800/90 focus:ring-2 focus:ring-blue-500/20' 
            />
          </div>

          {/* Category Input */}
          <div className='space-y-2'>
            <label className='block text-sm font-bold text-slate-200' htmlFor='category'>Category</label>
            <input 
              type="text"  
              name='category' 
              value={formData.category} 
              onChange={handdleFormChange}   
              placeholder='e.g. Technology, Design, Education' 
              className='w-full rounded-xl border border-slate-700/70 bg-slate-800/60 px-4 py-3 text-slate-100 outline-none transition placeholder:text-slate-500 focus:border-blue-500 focus:bg-slate-800/90 focus:ring-2 focus:ring-blue-500/20' 
            />
          </div>

          {/* Image Input */}
          <div className='space-y-2'>
            <label className='block text-sm font-bold text-slate-200' htmlFor='category'>Cover image</label>
            <div className='w-fit overflow-hidden rounded-2xl border border-dashed border-slate-700 bg-slate-800/40 p-2 transition hover:border-blue-500/50'>
              <input type="file" onChange={handdleFIleChange} className='hidden' id='file' ref={inputRefImage} accept='image/*' />
              <img 
                src={image ? image : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYWJgwzbZmDbken0mXjc4idbPF-3HRilVQvw&s'} 
                onClick={()=>inputRefImage.current.click()}  
                alt="Choose a cover" 
                className='h-36 w-52 cursor-pointer rounded-xl object-cover transition hover:opacity-80 hover:scale-[1.02]'  
              />
            </div>
          </div>

          {/* Content Input */}
          <div className='space-y-2'>
            <label className='block text-sm font-bold text-slate-200' htmlFor='category'>Content</label>
            <ReactQuill 
              name='content'  
              onChange={(value)=>
                setFormData((prev)=>({...prev , content: value}))} 
              value={formData.content}   
              placeholder='Write your story...' 
              className='quill-modern mb-12'
            />
          </div>

          {/* Submit Button */}
          <button 
            type='submit'       
            className='w-full rounded-xl bg-gradient-to-r from-blue-500 to-indigo-600 px-6 py-3.5 font-bold text-white shadow-lg shadow-blue-500/25 transition duration-200 hover:from-blue-600 hover:to-indigo-700 active:scale-[0.98] md:w-1/2'
          >
            Publish post
          </button>
        </form>
      </div>
    </div>
  )
}

export default CreatePost