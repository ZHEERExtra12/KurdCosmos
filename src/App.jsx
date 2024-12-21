import React, { useState } from 'react'
import Nav from './components/nav';
import Swiper from './components/Swiper'
import Register from './components/register';
import Login from './components/Login';



function App() {
  const [login, setLogin] = useState("");

  return (
    <>
     <Nav updateLogin={setLogin}/>
      
     {
        login == "login" &&(<Login updateLogin={setLogin} />)
      }

      {
        login == "reg" &&(<Register updateLogin={setLogin}/>)
      }
      <Swiper />

     
      




    </>
  );
}

export default App;
