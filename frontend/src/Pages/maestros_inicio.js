import React from "react";

import { withRouter } from "react-router-dom";

import Maestros_inicio from "../Components/Maestros_inicio";

class maestros_inicio extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <>
        <Maestros_inicio />
      </>
    );
  }
}

export default withRouter(maestros_inicio);
