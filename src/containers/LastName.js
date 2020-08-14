import React from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { lastNameChange } from "../actions/lastnameaction";
class LastName extends React.Component {
  state = {};
  render() {
    return (
      <div>
        <label>Last Name</label>
        <input
          type="text"
          onChange={(e) => this.props.lastNameChange(e.target.value)}
        ></input>
      </div>
    );
  }
}

function matchDispatchToProps(dispatch) {
  console.log(dispatch);
  console.log("matchdispatch");
  return bindActionCreators(
    {
      lastNameChange: lastNameChange, //matching action defined in actioncreator with props of the comp
    },
    dispatch
  );
}

export default connect(null, matchDispatchToProps)(LastName);
