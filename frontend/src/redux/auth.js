import { createSlice } from "@reduxjs/toolkit";


const authSlice = createSlice({
    name:"auth",
    initialState:{
        loading:false,
        user:null
    },
    reducers:{
        //action
        SetLoading:(state,action) =>{
            state.loading = action.payload;
        },
        setUser:(state,action)=>{
            state.user = action.payload;
        }
    }
});
export const {SetLoading,setUser} = authSlice.actions;
export default authSlice.reducer;
