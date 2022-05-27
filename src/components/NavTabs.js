import React from 'react';
import {Link} from "react-router-dom"

// TODO: Add a comment explaining how we are able to extract the key value pairs from props

function NavTabs() {
  return (
    <ul className="nav nav-tabs">
      <li className="nav-item">
        <Link to="/">Home</Link>
      </li>
      <li className="nav-item">
      <Link to="/about">About</Link>
      </li>
      <li className="nav-item">
      <Link to="/blog">Blog</Link>
      </li>
      <li className="nav-item">
      <Link to="/contact">Contact</Link>
      </li>
    </ul>
  );
}

export default NavTabs;
