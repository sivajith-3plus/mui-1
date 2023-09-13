import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Badge from "@mui/material/Badge";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import NotificationsIcon from "@mui/icons-material/Notifications";
import { useLocation } from "react-router-dom";

export default function NavBar() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [title, setTitle] = React.useState("Admin");
  const location = useLocation();

  const isMenuOpen = Boolean(anchorEl);

  React.useEffect(() => {
    const pathname = location.pathname;
    let newTitle = "Admin"; // Default title

    if (pathname === "/daily-spin-bonus") {
      newTitle = "Daily Spin Bonus";
    } else if (pathname === "/admin-users") {
      newTitle = "Admin Users";
    }

    setTitle(newTitle);
  }, [location.pathname]);

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const menuId = "primary-search-account-menu";
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      id={menuId}
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem onClick={handleMenuClose}>Logout</MenuItem>
    </Menu>
  );

  return (
    <Box
      sx={{
        flexGrow: 1,
        position: "fixed",
        width: "calc(100% - 300px)",
        justifyContent: "end",
        right: 0,
        zIndex: 1,
      }}
    >
      <AppBar position="static" sx={{ bgcolor: "#1e1e1e" }}>
        <Toolbar>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ display: { xs: "none", sm: "block" } }}
          >
            {title}
          </Typography>

          <Box sx={{ flexGrow: 1 }} />
          <Box
            sx={{ display: { xs: "none", md: "flex" }, alignItems: "center" }}
          >
            <Typography style={{ textAlign: "right" }}>
              <Typography>ADMIN USER</Typography>
              <Typography>sivajith.3plusgames@gmail.com</Typography>
            </Typography>
            <IconButton
              size="large"
              edge="end"
              aria-label="account of current user"
              aria-controls={menuId}
              aria-haspopup="true"
              onClick={handleProfileMenuOpen}
              color="inherit"
            >
              <img
                src="https://p9xfw.3plusgames.com/static/media/profile_pic.171d096f60fe69cc9589.png"
                alt="User Avatar"
                style={{ borderRadius: "50%", width: "40px", height: "40px" }}
              />
            </IconButton>
            <IconButton
              size="large"
              aria-label="show 17 new notifications"
              color="inherit"
            >
              <Badge badgeContent={17} color="error">
                <NotificationsIcon />
              </Badge>
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
      {renderMenu}
    </Box>
  );
}
