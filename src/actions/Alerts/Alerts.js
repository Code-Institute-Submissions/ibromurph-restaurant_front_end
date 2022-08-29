import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import toast from "react-hot-toast";

class Alerts extends Component {
  static propTypes = {
    error: PropTypes.object.isRequired,
    message: PropTypes.object.isRequired,
  };

  componentDidUpdate(prevProps) {
    const { error, message } = this.props;
    if (error !== prevProps.error) {
      if (error.msg.name) toast.error(`Name:${error.msg.name.join()}`);
      if (error.msg.email) toast.error(`Email:${error.msg.email.join()}`);
      if (error.msg.message) toast.error(`Message:${error.msg.message}`);
      if (error.msg.non_field_error) toast.error(error.msg.non_field_error);
      if (error.msg.Error) toast.error(error.msg.Error.join());
      if (error.msg.username) toast.error(error.msg.username.join());
      if (error.msg.detail) toast.error(error.msg.detail);
    }
    if (message !== prevProps.message) {
      // console.log(message,"xx")
      // if (message) toast.error(`Message:${message}`);
      if (message.deleteLead) toast.error(message.deleteLead);
      if (message.addLead) toast.success(message.addLead);
      if (message.LeadUpdate) toast.success(message.LeadUpdate);
      if (message.passwordNotMatch) toast.error(message.passwordNotMatch);
    }
  }

  render() {
    return <Fragment />;
  }
}

const mapStateToProps = (state) => ({
  error: state.errors,
  message: state.message,
});
export default connect(mapStateToProps)(Alerts);
