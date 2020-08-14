export default function (state = null, action) {
    //right now it has only one action but  normaly many so switch v use here
    console.log(state);
  
    switch (action.type) {
      case "SCORE_CHANGE":
        return action.payload;
  
      default:
        break;
    }
    console.log(state)
    return state;
    
  }
  