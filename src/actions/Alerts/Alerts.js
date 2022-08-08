// import React, { Component, Fragment } from "react";
// import { withAlert } from "react-alert";
// import { connect } from "react-redux";
// import PropTypes from "prop-types";
//
// export class Alerts extends Component {
//   static propTypes = {
//     error: PropTypes.object.isRequired,
//     message: PropTypes.object.isRequired,
//   };
//
//   componentDidUpdate(prevProps) {
//     const { error, alert, message } = this.props;
//     if (error !== prevProps.error) {
//       if (error.msg.name) alert.error(`Name:${error.msg.name.join()}`);
//       if (error.msg.email) alert.error(`Email:${error.msg.email.join()}`);
//       if (error.msg.message) alert.error(`Message:${error.msg.message}`);
//       if (error.msg.non_field_error) alert.error(error.msg.non_field_error);
//       if (error.msg.Error) alert.error(error.msg.Error.join());
//       if (error.msg.username) alert.error(error.msg.username.join());
//       if (error.msg.detail) alert.error(error.msg.detail);
//     }
//     if (message !== prevProps.message) {
//       if (message.deleteLead) alert.success(message.deleteLead);
//       if (message.addLead) alert.success(message.addLead);
//       if (message.LeadUpdate) alert.success(message.LeadUpdate);
//       if (message.passwordNotMatch) alert.error(message.passwordNotMatch);
//     }
//   }
//
//   render() {
//     return <Fragment />;
//   }
// }
//
// const mapStateToProps = (state) => ({
//   error: state.errors,
//   message: state.message,
// });
// export default connect(mapStateToProps)(withAlert()(Alerts));
