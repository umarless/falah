import "../assets/App.css"

export const Home = () => {
  return ( 
<div>
<nav>
  <div className="navbar">
    <div className="logo-container">
      {/* <img className="img1-logo" src="/log.png" alt="Logo" /> */}
      <img className="img2-logo" src="/new-logo.png"  />
    </div>
    <div className="nav-list">
      <li><a href="#">Home</a></li>
      <li><a href="#">About</a></li>
      <li><a href="#">Services</a></li>
      <li><a href="#">Contact</a></li>
    </div>
  </div>
</nav>

<div className="container1">
  <div className="container1-left">
  <h1>Manage your orders,<br></br> stock and production</h1>
  <p>GST compliant inventory software
  for manufacturers and wholesalers</p>
  <div>
  <button className="container1-btn1">Try Now For Free</button>
  <button className="container1-btn2">Schedule a Demo</button>
  </div>
   {/* <a href="">Schedule a Demo </a>  */}
  </div>
  <div className="container1-right">
    <img src="/laptop2.png" alt="laptop" />
  </div>
</div>

</div>
  )
}
