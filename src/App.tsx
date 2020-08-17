import React, { useState } from 'react';
import Main from "./Main";
import Login from "./Login";

function App() {
  const [isUserOnline] = useState(false);

  const displayPage = isUserOnline ? <Main /> : <Login />;

  return (
    <div>
      {displayPage}
    </div>

  );
}

export default App;
