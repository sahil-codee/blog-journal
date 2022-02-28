import React from 'react'
import Data from '../Data'
import Posts from './Posts'

function Blogs() {
    console.log(Data)
  return (
    <div className="card-info">
        { Data.map( data => {
            return (
                <Posts 
                // key={data.id}
                data={data}
                />
            )
        })}
    </div>
  )
}

export default Blogs