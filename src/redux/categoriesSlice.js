import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    categories: []
}

export const categoriesSlice = createSlice({
    name:"categoriesSlice",
    initialState,
    reducers:{
        setCategories:(state, action) =>{
            state.categories = action.payload
        }
    }
})

export default categoriesSlice.reducer
export const {
    setCategories
} = categoriesSlice.actions