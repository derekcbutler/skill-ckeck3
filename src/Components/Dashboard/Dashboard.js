import React from "react";
import { connect } from "react-redux";
import { logout } from "../../ducks/reducer";
import { withRouter, Redirect } from "react-router-dom";
import "./Dashboard.css";

class Dashboard extends React.Component {
  render() {
    console.log(this.props.ducks.user.loggedIn);
    if (!this.props.ducks.user.loggedIn) {
      return <Redirect to="/" />;
    }
    return (
      <div className='dash-background'>
        <div className="dash-menu">
          <input />
          <button>search</button>
          <button>Reset</button>
          My Posts
          <input type="checkbox" />
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    ducks: state
  };
};

export default connect(
  mapStateToProps,
  { logout }
)(Dashboard);
