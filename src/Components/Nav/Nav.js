import React from "react";
import { withRouter, Link } from "react-router-dom";
// import axios from 'axios';

const Nav = () => {

    // const handleHome = () => {
    //     axios.get('/').then(res => {

    //     })
    // }

  return (
    <div>
      <Link to='/dashboard'><button>Home</button></Link>
      <Link to='/post'><button>New Post</button></Link>
      <Link to='/'><button>Logout</button></Link>
    </div>
  );
}
export default withRouter(Nav);
