import React from 'react'

function Posts(props) {
    console.log(props)
  return (
    <div className='card'>
      <img className='card-img' src={props.data.imageUrl} alt="image" />
        <img className='card-path' src={'/images/path.png'} alt="" />
        <p className='card-location'>{props.data.location}</p>
        <a className='card-link' href={props.data.googleMapsUrl}>view on Google maps</a>
        <h2 className='card-title'>{props.data.title}</h2>
        <p className="card-date">{props.data.startDate} - {props.data.endDate}</p>
        <p className='card-description'>{props.data.description}</p>
        {/* <hr></hr> */}
    </div>
  )
}

export default Posts