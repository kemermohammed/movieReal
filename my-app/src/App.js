import { useState ,useEffect} from "react";
import './index.css'


export default function App() {

  const [dat,setDat] = useState([])
  const key = "5371f0fd"
  
 useEffect(function(){
  async function Fet(){
  const res = await fetch(`http://www.omdbapi.com/?apikey=${key}&s=interstellar`)
  const data = await res.json()
  setDat(data.Search)
  console.log(data.Search)
  }
  Fet()},[])
  return (
    <>
      <nav className="nav-bar">
        <div className="logo">
          <span role="img">🍿</span>
          <h1>usePopcorn</h1>
        </div>
        <input
          className="search"
          type="text"
          placeholder="Search movies..."
          
        />
        <p>movies found</p>

      </nav>
      <div>
      
        {dat.map(d =><div className="ik">
        
        <div><img src={d.Poster} width={100}/></div>
        <div><h1>{d.Title}</h1>
        <h3>{d.Year}</h3></div>
        </div> )}
      </div>
      


      </>

        
  );
}
