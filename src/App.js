import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import SideNav from "./Components/SideNav/SideNav";
import NavBar from "./Components/NavBar/NavBar";
import { Box } from "@mui/material";
import { Route, Routes } from "react-router-dom";
import Home from "./Components/Home/Home";
import DailyBonus from "./Components/DailyBonus/DailyBonus.page";
import axios from "axios";

// axios settings
axios.defaults.baseURL = "http://localhost:5000";
axios.defaults.params = {};

function App() {
  return (
    <>
      <Box sx={{ display: "flex" }}>
        <SideNav />
        <NavBar />
        <Box sx={{ width: 1, position:"absolute", top: 64, right: 0,  width:'calc(100% - 300px)',zIndex:0}}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/daily-spin-bonus" element={<DailyBonus />} />
          </Routes>
        </Box>
      </Box>
    </>
  );
}

export default App;
