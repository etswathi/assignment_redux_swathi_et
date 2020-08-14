import React from "react";
import { connect } from "react-redux";
class Combined extends React.Component {
  state = {};
  render() {
    return (
      <div>
        {this.props.firstName}
        {this.props.lastName}
        @
        {this.props.score}
      </div>
    );
  }
}
function mapStatesToProps(store) {
  console.log(store);
  return {
    firstName: store.firstName,
    lastName: store.lastName,
    score: store.score,
  };
}

export default connect(mapStatesToProps)(Combined);
