import { configureStore } from "@reduxjs/toolkit";
import categoriesSlice from "./categoriesSlice";

import userSlice from "./userSlice";

const store = configureStore({
    reducer:{
        userState : userSlice,
        categoriesState : categoriesSlice
    }
})

export default store