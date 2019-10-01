import React, { Component } from "react";
import { Route, Redirect } from "react-router-dom";
export class RouteGuard extends Component {
  render() {
    const { component: Component, ...otherProps } = this.props;
    return (
      <Route
        {...otherProps}
        render={props =>
          auth.isLogin ? (
            <Component {...props}></Component>
          ) : (
            <Redirect
              to={{
                pathname: "/login",
                state: { from: props.location.pathname }
              }}
            ></Redirect>
          )
        }
      ></Route>
    );
  }
}

//here you can write request to backend and change login State
const auth = {
  isLogin: false,
  login(callback) {
    this.isLogin = true;
    setTimeout(callback, 1000);
  }
};

export class Login extends Component {
  state = {
    isLogin: false
  };
  login = () => {
    auth.login(() => {
      this.setState({
        isLogin: true
      });
    });
  };
  render() {
    const from =
      (this.props.location.state && this.props.location.state.from) || "/";
    if (this.state.isLogin) {
      return <Redirect to={from}></Redirect>;
    }
    return (
      <div>
        <p>Please Login Fist!</p>
        <button onClick={this.login}>Login</button>
      </div>
    );
  }
}
