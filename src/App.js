import logo from './logo.svg';
import './App.css';
import React, { useEffect, useState } from 'react';
const axios = require('axios')

function App() {
  let [user,setuser] = useState([])

  useEffect(()=>{

    axios.get('https://rickandmortyapi.com/api/character')
      .then(function (res) {
       // handle success
       console.log(res.data.results);
       setuser(res.data.results);
    })
    .catch(function (error) {
      // handle error
      console.log(error);
    })
   

  },[])
  return (
    <div className="App">
      
        {
          user.map((item,i)=>{
            return(
              <div key={i}>

                 <img src={item.image}></img> 
                 <div>{item.name}</div>
                 <div>{item.status}</div>
                 <div>{item.gender}</div>
                 <div>{item.location.name}</div>

              </div>
            )
          })
        }

    </div>
  );
}

export default App;
