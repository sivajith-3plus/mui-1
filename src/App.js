import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import SideNav from "./Components/SideNav/SideNav";
import NavBar from "./Components/NavBar/NavBar";
import { Box } from "@mui/material";

function App() {
  return (
    <>
      <Box sx={{ display: "flex" }}>
        <SideNav />
        <Box sx={{ width: 1 }}>
          <NavBar />
          HIIIII
        </Box>
      </Box>
    </>
  );
}

export default App;
