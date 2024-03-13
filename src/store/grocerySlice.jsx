import { createSlice, nanoid } from "@reduxjs/toolkit";
import { fetchGroceries, reset } from "./actions";


const initialState = {
    isLoading:false,
    data:[],
    error:null
}

export const grocerySlice = createSlice({
    name:"grocery",
    initialState,
    reducers:{
        addGrocery(state,action){
            // state.push({
            //     id:nanoid(),
            //     name:action.payload
            // })
            state.push(action.payload)
        },
        initializeState(state,action){
          return action.payload
        }
    },
    extraReducers(builder){
         builder.addCase(reset.toString(),(state,action)=>{
            return initialState
         })
         .addCase(fetchGroceries.pending,(state,action)=>{
            state.isLoading = true
         })
         .addCase(fetchGroceries.fulfilled,(state,action)=>{
            state.isLoading = false
            state.data = action.payload
            state.error = null
         })
         .addCase(fetchGroceries.rejected,(state,action)=>{
            state.isLoading = false
            state.error = action.error.message
         })
    }
})



export const groceryReducer = grocerySlice.reducer



//{type:"grocery/addGrocery",payload:"ornge"} 