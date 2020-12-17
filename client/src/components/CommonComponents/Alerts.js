import React, { Component, Fragment } from "react";
import { withAlert } from "react-alert";

export class Alerts extends Component {
   componentDidUpdate(prevProps) {
      const { type, alert, message } = this.props;
      if (type === "success") {
         alert.success(message);
      } else if (type === "error") {
         alert.error(message);
      }
   }

   render() {
      return <Fragment />;
   }
}

export default withAlert()(Alerts);
