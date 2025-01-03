import { createSlice } from "@reduxjs/toolkit";
const jobSlice = createSlice({
    name:"job",
    initialState:{
        allJobs:[],
        allAdminJobs:[],
        searchJobByText:"",
        searchedQuery:"",
    },
    reducers:{
        setAllJobs:(state,action)=>{
            state.allJobs=action.payload;
        },
        setSingle:(state,action) =>{
            state.singleJob = action.payload;
        }
        ,
        setallAdminJobs:(state,action) =>{
            state.allAdminJobs = action.payload;
            
        },
        setsearchJobByText:(state,action) =>{
            state.searchJobByText = action.payload;
            
        },
        setSearchedQuery:(state,action) => {
            state.searchedQuery = action.payload;
        }
    }
});
export const {setAllJobs,setSingle,setallAdminJobs,setsearchJobByText,setSearchedQuery} = jobSlice.actions;
export default jobSlice.reducer;