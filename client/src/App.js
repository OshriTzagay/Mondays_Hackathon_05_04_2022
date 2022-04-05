import React from "react";
import "./App.css";
import { AppRouter } from "./AppRouter";
import { UsersContextProvider } from "./Context/User/User-context";

function App() {
  return (
    <div className="Global-App">
      <UsersContextProvider>
        <AppRouter />
      </UsersContextProvider>
    </div>
  );
}

export default App;
