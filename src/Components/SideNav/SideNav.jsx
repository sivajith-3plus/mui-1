import {
  Box,
  Button,
  Divider,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Stack,
} from "@mui/material";
import React from "react";
import imgSrc from "./img";
import sideNavItems from "./SideNavItems";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import useStyles from "./SideNavStyles";
import { useNavigate } from "react-router-dom";

const SideNav = () => {
  const navigate = useNavigate();
  const handleRoute = (props) => {
    navigate(props.route);
  };
  const classes = useStyles();
  return (
    <>
      <Stack
        sx={{
          width: 300,
          bgcolor: "#1e1e1e",
          height: "100svh",
          color: "white",
          overflow: "hidden"
        }}
      >
        <img
          src={imgSrc}
          alt="Your Image"
          style={{ maxWidth: "100%", paddingTop: 12 }}
        />
        <List sx={{ paddingLeft: 2 }}>
          {sideNavItems.map((item, index) => {
            return (
              <ListItem key={index} disablePadding>
                <ListItemIcon sx={{ color: "white" }}>{item.icon}</ListItemIcon>
                <Accordion
                  sx={{
                    bgcolor: "#1e1e1e",
                    color: "white",
                    width: "90%",
                    boxShadow: "none",
                  }}
                >
                  <AccordionSummary
                    expandIcon={
                      item.children && (
                        <ExpandMoreIcon sx={{ color: "white" }} />
                      )
                    }
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                  >
                    <Typography>{item.name}</Typography>
                  </AccordionSummary>
                  {item.children && (
                    <AccordionDetails>
                      {item.children?.map((itemChild, childIndex) => (
                        <ListItemButton
                          key={childIndex}
                          onClick={() => handleRoute(itemChild)}
                        >
                          {itemChild.name}
                        </ListItemButton>
                      ))}
                    </AccordionDetails>
                  )}
                </Accordion>
              </ListItem>
            );
          })}
        </List>
        {/* <Button
            variant=""
            sx={{
              color: "white",
              borderColor: "white",
              margin: "16px",
              width: "90%",
            }}
          >
            Logout
          </Button> */}
      </Stack>
    </>
  );
};

export default SideNav;
