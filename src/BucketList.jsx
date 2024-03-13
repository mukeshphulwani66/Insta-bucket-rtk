import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { removeFromBucket } from './store/actions'

function BucketList() {
    const mybuckets = useSelector(store=>store.myBucket)
    const dispatch = useDispatch()
  return (
    <div className='box'>
        <h3>My Bucket - </h3>
        <hr/>
        {mybuckets.length == 0 && <h6>No Items in bucket</h6>}
        <ul>
            {mybuckets.map(item=>{
                return <li key={item.id}>
                    <span onClick={()=>dispatch(removeFromBucket({id:item.id}))}>-</span>
                    {item.name} x {item.quantity}
                    </li>
            })}
        </ul>
    </div>
  )
}

export default BucketList