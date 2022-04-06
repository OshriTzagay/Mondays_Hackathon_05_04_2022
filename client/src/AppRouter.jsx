import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Components/Pages/Home/Home-component";
import Login from "./Components/Pages/Login/Login-component";
import Profile from "./Components/Pages/Profile/Profile-component";
import IdeasByCategory from "./Components/Pages/Ideas/IdeasByCategory-Component";
import Ideas from "./Components/Pages/Ideas/Ideas-component";
import NavBar from "./Components/Features/NavBar/Navbar-component";
import Footer from "./Components/Features/Footer/Footer-component";
import NotFound from "./Components/Pages/NotFound/NotFound-component";
import AdminTable from "./Components/Features/AdminTable/AdminTable-component";
import AdminDecorate from "./Components/Features/AdminDecorate/AdminDecorate-component";
import AdminDetails from "./Components/Features/AdminDetails/AdminDetails-component";
import { UsersContext } from "./Context/User/User-context";
import { useContext } from "react";
import Admin from "./Components/Pages/Admin/Admin-component";
import AdminTab from "./Components/Features/AdminTab/AdminTab-component";

export const AppRouter = () => {
  const { isLoggedIn, setIsLoggedIn } = useContext(UsersContext);
  return (
    <div className="App">
      <BrowserRouter>
    
      {isLoggedIn &&  <NavBar />}
        <div className="main-content">
          <Routes>
            <Route exact path="/" element={isLoggedIn?<Home />:<Login/>}></Route>
            <Route exact path="/home" element={<Home />}> </Route>
            <Route exact path="/ideas" element={<Ideas />}>
            <Route exact path=":prodact" element={<IdeasByCategory />}></Route>
            </Route>
            <Route exact path="/admin" element={<Admin />}>
            <Route exact path=":AdminTab" element={<AdminTab/>}/>
            </Route>
            <Route exact path="/profile/:id" element={<Profile />}></Route>
              <Route exact path="*" element={<NotFound />}></Route>


          </Routes>
        </div>
    <Footer />
      </BrowserRouter>
  

    </div>
  );
};
