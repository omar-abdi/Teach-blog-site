import { createSlice   , createAsyncThunk, isRejectedWithValue } from "@reduxjs/toolkit"


export const Login = createAsyncThunk("user/login" , async(userInfo , {rejectWithValue})=>{
    const response = await fetch("api/users/login" ,{
        method :"POST",
      headers: {
    "Content-Type": "application/json"
},
body: JSON.stringify(userInfo)

    })
   const data = await res.json()
    if(!response.ok || data.error){
           return rejectWithValue(data.error || "login is failed")
    }
    return data


})
export const Register = createAsyncThunk("user/signup" , async(userInfo, {rejectWithValue})=>{
    const res = await fetch("api/users/signup" ,{
        method :"POST",
      headers: {
    "Content-Type": "application/json"
},

body: JSON.stringify(userInfo)
    })
const data = await res.json()
    if(!res.ok || data.error){
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
        }).addCase(Register.rejected , (state , action)=>{
            state.status = "failed",
            state.error = action.error.message
        })

    }


})


export default userSlice.reducer