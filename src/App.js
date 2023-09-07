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

function App() {
  return (
    <>
      <Box sx={{ display: "flex" }}>
        <SideNav />
        <Box sx={{ width: 1 }}>
          <NavBar />
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
