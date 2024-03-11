import { createSlice } from "@reduxjs/toolkit";
import { fetchUsers } from "../thunks/fetchUsers";
import { addUser } from "../thunks/addUser";
import { deleteUser } from "../thunks/deleteUser";

const usersSlices=createSlice({
    name:"users",
    //our big state object is bottom
    initialState:{
        data:[],
        isLoading: false,
        error:null
    },
    extraReducers(builder){
        builder.addCase(fetchUsers.pending,(state,action)=>{
            //update our state object
            //to show that we are uploading
            state.isLoading=true;
        });
        builder.addCase(fetchUsers.fulfilled,(state,action)=>{
            state.isLoading=false;
            state.data=action.payload; 
        });
        builder.addCase(fetchUsers.rejected ,(state,action)=>{
            state.isLoading=false;
            state.error=action.error; 
        });
        //theese casess are for add User
        builder.addCase(addUser.pending,(state,action)=>{
            state.isLoading=true;
        });
        builder.addCase(addUser.fulfilled,(state,action)=>{
            state.isLoading=false;
            state.data.push(action.payload);
        });
        builder.addCase(addUser.rejected,(state,action)=>{
            state.isLoading=false;
            state.error=action.error;
        });
        //these cases for deleting an User
        builder.addCase(deleteUser.pending,(state,action)=>{
            state.isLoading=true;
        })
        builder.addCase(deleteUser.fulfilled,(state,action)=>{
            state.isLoading=false;
           state.data=state.data.filter((user)=>{
            return user.id!==action.payload.id
           })
        })
        builder.addCase(deleteUser.rejected,(state,action)=>{
            state.isLoading=false;
            state.error=action.error
        })
    }
})
export const usersReducer =usersSlices.reducer;