import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  root: {
    width: 260,
    backgroundColor: "#1e1e1e",
    height: "100vh",
    color: "white",
    overflow: "hidden",
  },
  image: {
    maxWidth: "100%",
    paddingTop: 12,
  },
  listItem: {
    paddingLeft: 2,
  },
  listItemIcon: {
    color: "green",
  },
  accordion: {
    backgroundColor: "#1e1e1e",
    color: "white",
    width: "90%",
    boxShadow: "none",
  }
});

export default useStyles;
