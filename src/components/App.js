import React from "react";

import FirstName from "../containers/FirstName";
import LastName from "../containers/LastName";
import Score from "../containers/Score";
import Combined from "../containers/combined";

class App extends React.Component {
  render() {
    return (
      <div>
        <h2>Userlist:</h2>
        <FirstName></FirstName>
        <LastName></LastName>
        <Score></Score>
        <Combined></Combined>
      </div>
    );
  }
}

export default App;
