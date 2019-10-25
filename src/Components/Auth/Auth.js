import React from "react";
import axios from "axios";
// import { connect } from "react-redux";
import { updateUser } from "../../ducks/reducer";

class Auth extends React.Component {
  constructor() {
    super();
    this.state = {
      username: "",
      password: ""
    };
    this.register = this.register.bind(this);
    // this.login = this.login.bind(this);
  }
  componentDidMount() {}


  handleInput = e => {
      this.setState({
          [e.target.username]: e.target.value
      })
  }

//finish the push on this endpoint!!!
  register() {
    // console.log(this.state);
    const { username, password } = this.state;
    axios
      .post("/auth/register", { username: this.state.username, password: this.state.password })
      .then(res => {
        this.props.updateUser(res.data)
        this.props.history.push('/')//RIGHT HERE////////////////////////////////
      })
      .catch(err => console.log(err));
  }

  render() {
    //   const { username, password } = this.state
    //   const { user } = this.props
    // console.log(this.register);
    return (
      <div>
        <input
          value={this.state.username}
          name="username"
          onChange={e => this.handleInput(e)}
        />
        <input
          value={this.state.password}
          name="password"
          onChange={e => this.handleInput(e)}
        />
        <button>Login</button>
        <button onClick={this.register}>Register</button>
      </div>
    );
  }
}

// mapStateToProps = reduxState => {
//   const { user } = reduxState;
//   return {
//     user
//   };
// };
// const mapDispatchToProps = {
//   updateUser
// };

// export default connect(
//   mapStateToProps,
//   mapDispatchToProps
// )(Auth);
//turn off Nav on auth page
export default Auth;
