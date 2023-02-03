import React from 'react'

const Navbar = ({brand, bgColor, color}) => {
  return (
    <nav className={`navbar navbar-expand-sm navbar-${color} shadow bg-${bgColor}`}>
      <div className="container">
        <a className="navbar-brand" href="#">{brand}</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavId">
            <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="collapsibleNavId">
            <ul className="navbar-nav ms-auto mt-2 mt-lg-0">
                <li className="nav-item">
                    <a className="nav-link active" href="#">Home</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">About</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">Projects</a>
                </li>
                
                <li className="nav-item">
                    <a className="nav-link" href="#">Contact Us</a>
                </li>
            </ul>
        </div>
    </div>
</nav>
  )
}

export default Navbar