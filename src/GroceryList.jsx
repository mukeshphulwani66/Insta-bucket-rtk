import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { reset ,addGrocery,addToBucket, fetchGroceries, addNewGrocery} from './store/actions'
import { nanoid } from '@reduxjs/toolkit'
import { useAddNewGroceryMutation, useFetchGroceriesQuery } from './services/groceryService'

function GroceryList() {
    // const {isLoading,data,error} = useSelector(store=>store.groceries)
    const {isLoading,isFetching,data,isError,error} = useFetchGroceriesQuery()
    const [addNextGrocery,result] = useAddNewGroceryMutation()

    const dispatch = useDispatch()
    const [text,setText] = useState("")
    const handleSubmit = (e)=>{
       e.preventDefault()
      //  dispatch(addGrocery(text))
      //  dispatch(addNewGrocery({id:nanoid(),name:text}))
      addNextGrocery({id:nanoid(),name:text})
      setText("")
    }


  return (
    <div className='box'>
        <div className='heading'>
            <h3>Groceries- </h3> 
            <button onClick={()=>dispatch(reset())}>Reset</button>
        </div>
        <hr/>
        {isFetching &&  <h6>loading</h6>}
        {isError &&  <h6>{error}</h6>}
        {data && !isFetching && data.length == 0 && <h6>No Items</h6>}
        <ul>
            {data && !isFetching  && data.map(item=>{
                return <li key={item.id}>
                    <span onClick={()=>dispatch(addToBucket(item))}>+</span>
                    {item.name}
                    </li>
            })}
        </ul>
       <form onSubmit={handleSubmit}>
        <input
         type='text'
         value={text}
         onChange={e=>setText(e.target.value)}
         required
        />
        <button type='submit'>Add Grocery</button>
       </form>
        
    </div>
  )
}

export default GroceryList