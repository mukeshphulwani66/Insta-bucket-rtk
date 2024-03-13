import { useState } from 'react'
import './App.css'
import GroceryList from './GroceryList'
import BucketList from './BucketList'

function App() {

  return (
    <>
     <h1>Insta Bucket</h1>
     <div className='box-container'>
       <GroceryList />
       <BucketList />
     </div>
    </>
  )
}

export default App
