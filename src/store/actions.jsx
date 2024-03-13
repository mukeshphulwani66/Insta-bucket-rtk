import { createAction, createAsyncThunk } from "@reduxjs/toolkit";
import { bucketSlice } from "./bucketSlice";
import { grocerySlice } from "./grocerySlice";


export const reset = createAction("app/reset")

export const {addToBucket,removeFromBucket} = bucketSlice.actions

export const { addGrocery,initializeState } = grocerySlice.actions

// export function fetchGroceries(){
//     return async function(dispatch){
//      const res =  await fetch("http://localhost:5000/groceries")
//      const result = await res.json()
//      dispatch(initializeState(result))
//     }
// }

export const fetchGroceries = createAsyncThunk(
    "grocery/fetchgrocery",
    async ()=>{
     const res =  await fetch("http://localhost:5000/groceries")
     const result = await res.json()
     return result
    }
)


// async ()=>{
//     return async function(dispatch){
//      const res =  await fetch("http://localhost:5000/groceries")
//      const result = await res.json()
//      dispatch(initializeState(result))
//     }
// }

export function addNewGrocery(groceryObj){
    return async function(dispatch){
     const res =  await fetch("http://localhost:5000/groceries",{
        method:"POST",
        headers:{
            "Content-Type":"application/json"
        },
        body:JSON.stringify(groceryObj)
     })
     const result = await res.json()
     dispatch(addGrocery(result))
    }
}
