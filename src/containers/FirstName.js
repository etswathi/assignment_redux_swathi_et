import React from 'react';
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import {firstNameChange} from '../actions/firstnameaction'
class FirstName extends React.Component {
    state = {  }
    render() { 
        return ( <div>

            <label>First Name</label>
            <input type="text" onChange={(e)=>this.props.firstNameChange(e.target.value)}></input>
        </div> );
    }
}
// function mapStatesToProps(store) {
//   return { users: state.users };
// }


function matchDispatchToProps(dispatch) {
    console.log(dispatch)
    console.log("matchdispatch")
  return bindActionCreators({
      
    firstNameChange:firstNameChange,//matching action defined in actioncreator with props of the comp
  },dispatch);
}
 
export default connect(null,matchDispatchToProps)(FirstName)