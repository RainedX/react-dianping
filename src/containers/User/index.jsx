import React, { Component } from 'react';
import UserMain from './containers/UserMain';
import UserHeader from './components/UserHeader';
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { actions as loginActions } from "../../redux/modules/login";

class User extends Component {
  handleBack = () => {
    this.props.history.push("/")
  }

  handleLogout = () => {
    this.props.loginActions.logout();
  };

  render() {
    return (
      <div>
        <UserHeader
          onBack={this.handleBack}
          onLogout={this.handleLogout}
        />
        <UserMain />
      </div>
    );
  }
}

const mapStateToProps = (state, props) => {
  return {}
}

const mapDispatchToProps = dispatch => {
  return {
    loginActions: bindActionCreators(loginActions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(User);
