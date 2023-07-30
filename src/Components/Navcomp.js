import React from 'react'
import propTypes from 'prop-types'

export default function Navcomp(props) {

  return (
    <div  >
     <nav className={`navbar navbar-expand-lg  navbar-${props.mode} bg-${props.mode}`}>
     
     
  <div className="container-fluid">
    <a className="navbar-brand" href="/">{props.title}</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNavDropdown">
      <ul className="navbar-nav">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="/">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/">Features</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/">Pricing</a>
        </li>
        <li className="nav-item dropdown" >
          <a className="nav-link dropdown-toggle" href="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Dropdown link
          </a>
          <ul className="dropdown-menu">
            <li><a className="dropdown-item" href="/">Action</a></li>
            <li><a className="dropdown-item" href="/">Another action</a></li>
            <li><a className="dropdown-item" href="/">Something else here</a></li>
          </ul>
        
        </li>
      </ul>
    </div>
  </div>
  <div className={`pe-2  mx-auto form-check form-switch text-${props.mode==='light'?'dark':'light'}`}>
  <input className="form-check-input" onClick={props.switchto} type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
  <label className="form-check-label" htmlFor="flexSwitchCheckDefault">DarkMode</label>
</div>
</nav>
    </div>
    
  )
}
 Navcomp.propTypes={
   title: propTypes.string
 }
 Navcomp.defaultProps={
  title:"Jasbir"
 }
