import React from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "./components/HomePage";
export const UserNameContext = React.createContext("Senthil");

function App() {
  return (
    <UserNameContext.Provider value="Senthil new">
      <HomePage />
    </UserNameContext.Provider>
  );
}

export default App;
