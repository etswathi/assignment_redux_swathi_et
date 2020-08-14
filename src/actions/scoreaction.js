export const scoreChange = (score) => {
    console.log("you clicked on" + score);
  
    return {
      type: "SCORE_CHANGE",
      payload: score,
  
    };
   
  };
  //this whole fn is an action creator