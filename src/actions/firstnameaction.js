export const firstNameChange = (firstname) => {
  console.log("you clicked on" + firstname);

  return {
    type: "FIRSTNAME_CHANGE",
    payload: firstname,

  };
 
};
//this whole fn is an action creator