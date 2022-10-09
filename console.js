import './App.css';
import React, { useEffect, useState} from 'react'

// import HeadersComponent from './Components/HeadersComponents/HeadersComponent';

function App() {
  // return (
  //   // <h1>App works well</h1>
  //   // <HeadersComponent/>
  //   // <AboutUs/>
  //   // <Portfolio/>
  //   // <Contact/>
  //   // <Footer/>
  // );
  const [data,setData] = useState([])
  useEffect (()=>{
    fetch ("https://api.publicapis.org/entries").then((result)=>{
      result.json().then((resp)=>{
        setData(resp)
      })
    })
  },[])
  console.warn(data)
  return (
    <div className="App">
      <h1>Get API</h1>
      <table border="1">
        <tr>
          <td>API</td>
          <td>Description</td>
          <td>Auth</td>
          <td>HTTPS</td>
          <td>Cors</td>
          <td>Link</td>
          <td>Category</td>
        </tr>
        {
          data.map((item)=>
          <tr>
          <td>{item.API}</td>
          <td>{item.Description}</td>
          <td>{item.Auth}</td>
          <td>{item.HTTPS}</td>
          <td>{item.Cors}</td>
          <td>{item.Link}</td>
          <td>{item.Category}</td>
        </tr>
          )
        }
      </table>
    </div>
  );
}

export default App;
