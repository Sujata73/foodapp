import React from 'react'


const Recipe = props => {
  const { recipe } = props
  return (
    <div className='row'>
      {
        recipe.map(item =>
          <div key={item.id} className='card'>
            <img src={item.image} />
            <div className='card-body'>
              <h4>{item.name}</h4>
              <h4>{item.price}</h4>
              <h6>{item.recipes}</h6>
              <button>Learn More</button>
            </div>
          </div>
        )


      }
    </div>


  )
}

export default Recipe