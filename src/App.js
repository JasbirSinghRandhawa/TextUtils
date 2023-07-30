import './App.css';
import Navcomp from './Components/Navcomp';
import Textform from './Components/Textform';
import Alerts from './Components/Alerts';

import { useState } from 'react';

function App() {

  const [ mode,setmode]=useState('light');

  const [alert,setalert]=useState(null);

    const showalert=( message,type)=>
   {
       setalert({
        msg:message,
        type:type

       })
       setTimeout(() => {
        setalert(null)
       }, 1000);
   }


 const switchto =()=>
 {
      if(mode==='light')
      {
         setmode('dark');
         document.body.style.backgroundColor='black';
         showalert("dark  mode is Enabled","success");
 
      }
      else
      {
        setmode('light')
        document.body.style.backgroundColor='white';
       showalert("dark  mode is disabled","success");
      }
 }

 
   
  

  return (
    <>
  
     <Navcomp title=" TextUtils" mode={mode} switchto={switchto}/> 
     <Alerts alert={alert}/>
    <div className="container">
     
    <Textform  mode={mode} heading="Lets Start to Write Text!"  showalert={showalert} />
    </div>
    
    </>
  )
}

export default App;
