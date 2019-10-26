import React from "react";
import axios from "axios";
import { connect } from "react-redux";
import { updateUser, login } from "../../ducks/reducer";

class Auth extends React.Component {
  constructor() {
    super();
    this.state = {
      username: "",
      password: ""
    };
    this.register = this.register.bind(this);
    this.login = this.login.bind(this);
  }
  componentDidMount() {}

  handleInput = e => {
    const { name, value } = e.target;
    this.setState({
      [name]: value
    });
  };

  //finish the push on this endpoint!!!
  register() {
    console.log("hit:", this.state);
    // const { username, password } = this.state;
    axios
      .post("/auth/register", {
        username: this.state.username,
        password: this.state.password
      })
      .then(res => {
        this.props.updateUser(res.data);
        this.props.history.push("/dashboard");
        this.props.login()
        this.setState({
          username: "",
          password: ""
        });
      })
      .catch(err => console.log(err));
  }

  login() {
    console.log('login:', this.state)
    // const { username, password } = this.state;
    axios
      .post("/auth/login", {
        username: this.state.username,
        password: this.state.password
      })
      .then(res => {
        this.props.updateUser(res.data);
        this.props.history.push("/dashboard");
        this.setState({ username: "", password: "" });
        this.props.login()
      })
      .catch(err => console.log(err))
  }

  render() {
    //   const { username, password } = this.state
    // const { user } = this.props
    console.table(this.props);
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
        <button onClick={this.login}>Login</button>
        <button onClick={this.register}>Register</button>
      </div>
    );
  }
}

const mapStateToProps = reduxState => {
  const { user } = reduxState;
  return {
    user
  };
};
const mapDispatchToProps = {
  updateUser,
  login
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Auth);
//turn off Nav on auth page
// export default Auth;
