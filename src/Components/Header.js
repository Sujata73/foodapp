import React from 'react'


const Header = (props) => {
  return (
    <div>
    <div className='hello'>
        <h1 className='hy'><span className="material-icons brandicons">
local_dining
</span>
       Food Recipe</h1>
       <div className='Search'>
       <span className="material-icons searchicons">
search
</span>
   <input type ="text" placeholder='search your recipe here'value={props.search} onChange={props.onInputChange}/>
   <button type="submit">submit</button> 
     
    </div> 
    </div>
    
    </div>
    
  )
}

export default Header