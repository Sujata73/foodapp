import React,{useState,useEffect} from 'react';
import './App.css';
import Header from './Components/Header';
import Recipe from './Components/Recipe';
import   axios  from 'axios';
import Footer from './Components/Footer';

function App() {
  const [search, setsearch] = useState("chiken");
  const [recipe,setRecipe]= useState([])
  
  useEffect(()=>{
  axios.get(' http://localhost:4000/foods')
.then(response=>{
   
  setRecipe(response.data)
});
 

  },[])
  
  console.log(recipe);  
 
 
  const onInputChange=(e)=>{
   setsearch(e.target.value);
  }
  return (
    <div className="App">
   
  
   <Header search={search} onInputChange={onInputChange}/>
   <div className='container'>
   <Recipe recipe={recipe}/>
   <Footer/>
   </div>
 
    </div>
  );
}

export default App;
