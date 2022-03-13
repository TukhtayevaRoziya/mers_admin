import { Login } from "./component/login/Login";

import { Route, Routes } from "react-router-dom";
import { SignIn } from "./component/signIn/SignIn";
import "./App.css";

const App = () => {
  return (
    <div className="App">
      <Routes>
        <Route path="/signIn" element={<SignIn />} />
        <Route path="/" element={<Login />} />
      </Routes>
    </div>
  );
};

export default App;
