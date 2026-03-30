import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    currentUser : null,
    status : "idel" ,
    error : null
}

export const userSlice = createSlice({

    name : "user",
    initialState,
    reducers:{

    },
    extraReducers: (builder)=>{

    }


})


export default userSlice.reducer