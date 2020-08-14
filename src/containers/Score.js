import React from 'react';
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import {scoreChange} from '../actions/scoreaction'
class Score extends React.Component {
    state = {  }
    render() { 
        return ( <div>

            <label>Score</label>
            <input type="number" onChange={(e)=>this.props.scoreChange(e.target.value)}></input>
        </div> );
    }
}



function matchDispatchToProps(dispatch) {
    console.log(dispatch)
    console.log("matchdispatch")
  return bindActionCreators({
      
    scoreChange:scoreChange,//matching action defined in actioncreator with props of the comp
  },dispatch);
}
 
export default connect(null,matchDispatchToProps)(Score);