import { createSlice   , createAsyncThunk } from "@reduxjs/toolkit"
import { isRejectedWithValue } from "@reduxjs/toolkit" 
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css'; //
import axios from "axios"

export const Login = createAsyncThunk("user/login" , async(userInfo , {rejectWithValue})=>{
    const response = await axios.post("api/users/login" , userInfo)
   const data = response.data
   if(data.error){
      return rejectWithValue(data.error || "Login is failed")
   }
   return data
    


})
export const Register = createAsyncThunk("user/signup" , async(userInfo, {rejectWithValue})=>{
    const res = await axios.post("api/users/signup" , userInfo)
 const data =  res.data
   if(data.error){
      return rejectWithValue(data.error || "Registration is failed")
   }
   return data
    
})
const getInitialState = ()=>{
    if(typeof window !== "undefined"){
        const storedUser = localStorage.getItem("user")
        return{
            currentUser :storedUser?JSON.parse(storedUser):null,
               status : "idel" ,
                error : null
        }
    }return{
         currentUser : null,
    status : "idel" ,
    error : null
    }
}



export const userSlice = createSlice({

    name : "user",
    initialState: getInitialState(),
    reducers:{

    },
    extraReducers: (builder)=>{
        builder.addCase(Login.pending , (state)=>{
            state.status= "loading",
            state.error = null

        }).addCase(Login.fulfilled , (state , action)=>{
            state.status = "success",
            state.currentUser= action.payload
            localStorage.setItem("user" , JSON.stringify(action.payload))
                localStorage.setItem("token" , JSON.stringify(action.payload))
        }).addCase(Login.rejected , (state , action)=>{
            state.status = "failed",
            state.error = action.error.message
        }).addCase(Register.pending , (state)=>{
            state.status= "loading",
            state.error = null

        }).addCase(Register.fulfilled , (state , action)=>{
            state.status = "success",
            state.currentUser= action.payload
            localStorage.setItem("user" , JSON.stringify(action.payload))
            localStorage.setItem("token" , JSON.stringify(action.payload))
        }).addCase(Register.rejected , (state , action)=>{
            state.status = "failed",
            state.error = action.error.message
        })

    }


})


export default userSlice.reducer