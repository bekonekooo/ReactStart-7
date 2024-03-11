import { createAsyncThunk } from "@reduxjs/toolkit";


const deleteUser =createAsyncThunk("users/remove",async(user)=>{

return user;
})
export {deleteUser};