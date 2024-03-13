import { createSlice } from "@reduxjs/toolkit";
import { reset } from "./actions";



export const bucketSlice = createSlice({
    name:"bucket",
    initialState:[],
    reducers:{
        addToBucket(state,action){
        const bucketItem = state.find(item=>item.id == action.payload.id)
        if(bucketItem){
            bucketItem.quantity += 1
        }else{
            state.push({...action.payload,quantity:1}) 
        }
          
        },
        removeFromBucket(state,action){
            const existingItemIndex = state.findIndex(item=>item.id == action.payload.id)
            if(existingItemIndex != -1){
                const existingItem = state[existingItemIndex]
                if(existingItem.quantity == 1){
                    state.splice(existingItemIndex,1)
                }else{
                    existingItem.quantity -=1
                }
            }
        }
    },
    extraReducers(builder){
        builder.addCase(reset.toString(),(state,action)=>{
           return []
        })
   }
}) 


export const bucketReducer = bucketSlice.reducer