import React from "react";
import { withRouter, Link } from "react-router-dom";
// import axios from 'axios';
import { connect } from "react-redux";
import { logout } from "../../ducks/reducer";
import "./Nav.css";
{/* <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link> */}

const Nav = props => {
  // const handleHome = () => {
  //     axios.get('/').then(res => {

  //     })
  // }

  console.log("props", props);

  return (
    <div  >
      {props.location.pathname === "/" ? null : (
        <div className='nav-bar' > 
          <div>
            <Link to="/dashboard">
              <button className='nav-button'>Home</button>
            </Link>
            <br></br>
            <Link to="/post">
              <button className='nav-button'>New Post</button>
            </Link>
          </div>

          <button className='nav-button' onClick={props.logout}>Logout</button>
        </div>
      )}
    </div>
  );
};

const mapStateToProps = state => {
  return {
    ducks: state
  };
};

export default withRouter(
  connect(
    mapStateToProps,
    { logout }
  )(Nav)
);
