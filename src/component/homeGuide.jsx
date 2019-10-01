import React, { Component } from "react";
import { RouteGuard, Login } from "./login.jsx";
import { BrowserRouter, Link, Route, Switch } from "react-router-dom";

function GuideBar() {
  return (
    <div>
      <ul>
        <li>
          <Link to="/classes">My Courses</Link>
        </li>
        <li>
          <Link to="/mine">My Account</Link>
        </li>
        <li>
          <Link to="/mineaaaa">Not Found</Link>
        </li>
      </ul>

      <Switch>
        <Route path="/classes" component={Classes}></Route>
        <Route path="/login" component={Login}></Route>
        <RouteGuard path="/mine" component={Mine}></RouteGuard>
        <Route path="/detail/:course" component={Detail}></Route>
        <Route component={Notfound}></Route>
      </Switch>
    </div>
  );
}

//Course Detail
function Detail({ match, location, history }) {
  console.log(match, location, history);
  console.log(location, "location");
  return (
    <div>
      This is Course: {match.params.course}
      <button
        onClick={() => history.push({ pathname: "/", state: { foo: "bar" } })}
      >
        Go back to HomePage
      </button>
    </div>
  );
}

//Course
function Classes() {
  return (
    <div>
      <ul>
        <li>
          <Link to="/detail/java script">java script</Link>
        </li>
        <li>
          <Link to="/detail/react">react</Link>
        </li>
        <li>
          <Link to="/detail/redux">redux</Link>
        </li>
      </ul>
    </div>
  );
}
//My Account Information
function Mine() {
  return (
    <div>
      <h2>My Account Info</h2>
      <ul>
        <li>
          <div>My Account Number</div> <div>xxxx@gmail.com</div>
        </li>
        <li>
          <div>My Password</div> <div>123456</div>
        </li>
      </ul>
    </div>
  );
}
//Page not Found
function Notfound() {
  return <div>HTTP404 not found</div>;
}

export default function RouterSample() {
  return (
    <div>
      <BrowserRouter>
        <GuideBar />
      </BrowserRouter>
    </div>
  );
}
