import { configureStore } from "@reduxjs/toolkit";
import { usersReducer } from "./slices/userSlices";

    export const store =configureStore({
        reducer:{
            users:usersReducer,
        },
    })

    //find everting that  "./thunks/fetchUsers" exports and export them as well
    export * from "./thunks/fetchUsers";
    export * from "./thunks/addUser"
    export * from "./thunks/deleteUser"