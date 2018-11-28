import React, { Component, Fragment } from "react";
import FooterContainer from "./FooterContainer";
import HeaderContainer from "./HeaderContainer";

//
export default class Layout extends Component {
  render() {
    return (
      <Fragment>
        <HeaderContainer />
        <main className="main">{this.props.children}</main>
        <FooterContainer />
      </Fragment>
    );
  }
}
