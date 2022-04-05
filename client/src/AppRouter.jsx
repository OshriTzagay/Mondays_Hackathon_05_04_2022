import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Components/Pages/Home/Home-component";
import Login from "./Components/Pages/Login/Login-component";
import Profile from "./Components/Pages/Profile/Profile-component";
import Post from "./Components/Pages/Post/Post-component";
import NavBar from "./Components/Features/Navbar/Navbar-component";
import Footer from "./Components/Features/Footer/Footer-component";

export const AppRouter = () => {
  return (
    <div className="App">
      <BrowserRouter>
      <NavBar />
        <div className="main-content">
          <Routes>
            <Route exact path="/" element={<Login />}></Route>
            <Route exact path="/home" element={<Home />}></Route>
            <Route exact path="/posts" element={<Post />}></Route>
            <Route exact path="/profile" element={<Profile />}></Route>
          </Routes>
        </div>


      </BrowserRouter>

      <Footer />
    </div>
  );
};