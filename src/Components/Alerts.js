import React from 'react'

export default function Alerts(props) {

    const captlize=(word)=>
    {
              let lower=word.toLowerCase();
           return  lower= lower.charAt(0).toUpperCase() + lower.slice(1);
    }
  return (
   
   props.alert &&<div className= {`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert" mx-3>
  <strong>{captlize(props.alert.type)}</strong> : {props.alert.msg}

</div>
  
  )
}
