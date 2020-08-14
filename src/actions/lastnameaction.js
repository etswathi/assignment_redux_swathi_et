export const lastNameChange = (lastname) => {
    console.log("you clicked on" + lastname);
  
    return {
      type: "LASTNAME_CHANGE",
      payload: lastname,
  
    };
   
  };
  //this whole fn is an action creator