import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const fetchUsers = createAsyncThunk("users/fetch",async()=>{
    const response = await axios.get("http://localhost:3005/users");

    await pause(2500);

  return response.data
});
const pause = async(duration)=>{
    return new Promise((resolve)=>{
        setTimeout(resolve,duration)
    })
}
 export {fetchUsers};