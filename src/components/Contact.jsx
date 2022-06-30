import React from 'react'
import { Link } from 'react-router-dom';
const Contact = () => {
  return (
      <>
          <Link to="/">Home</Link>
      <nav id="navbar-example3" className="navbar navbar-light bg-light flex-column align-items-stretch p-3">
    <a className="navbar-brand" href="/karan">Navbar</a>
  <nav className="nav nav-pills flex-column">
    <a className="nav-link" href="#item-1">Item 1</a>
    <nav className="nav nav-pills flex-column">
      <a className="nav-link ms-3 my-1" href="#item-1-1">Item 1-1</a>
      <a className="nav-link ms-3 my-1" href="#item-1-2">Item 1-2</a>
    </nav>
    <a className="nav-link" href="#item-2">Item 2</a>
    <a className="nav-link" href="#item-3">Item 3</a>
    <nav className="nav nav-pills flex-column">
      <a className="nav-link ms-3 my-1" href="#item-3-1">Item 3-1</a>
      <a className="nav-link ms-3 my-1" href="#item-3-2">Item 3-2</a>
    </nav>
  </nav>
</nav>

<div data-bs-spy="scroll" data-bs-target="#navbar-example3" data-bs-offset="0" tabindex="0">
  <h4 id="item-1">Item 1</h4>
  <p>...</p>
  <h5 id="item-1-1">Item 1-1</h5>
  <p>...</p>
  <h5 id="item-1-2">Item 1-2</h5>
  <p>...</p>
  <h4 id="item-2">Item 2</h4>
  <p>...</p>
  <h4 id="item-3">Item 3</h4>
  <p>...</p>
  <h5 id="item-3-1">Item 3-1</h5>
  <p>...</p>
  <h5 id="item-3-2">Item 3-2</h5>
  <p>...</p>
</div>    
    </>
  )
}

export default Contact