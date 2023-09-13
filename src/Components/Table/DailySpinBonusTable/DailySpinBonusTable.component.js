import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
// import data from "./dailyBonusData";
import { Box, List, ListItem, Modal } from "@mui/material";
import EditDailySpinWheel from "../../Model/EditDailySpinWheel.component";
import { useDispatch, useSelector } from "react-redux";
import { setDailyBonus } from "../../../Redux/features/DailySpinBonus/dailySpinBonusSlice";
import api from "../../../Api";

const modelStyle = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "60%",
  maxHeight: "70vh",
  bgcolor: "background.paper",
  borderRadius: "10px",
  boxShadow: 24,
  p: 4,
  outline: "none",
};

export default function DailySpinBonusTable() {
  const [open, setOpen] = React.useState(false);
  const [dayToEdit, setDayToEdit] = React.useState();
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const dispatch = useDispatch();

  const dailyBonusData = useSelector((state) => state.dailySpinBonus.data);

  React.useEffect(() => {
    api.getAllDaySpinBonus().then((response) => {
      dispatch(setDailyBonus(response.data));
    });
  }, [open, dispatch]);

  console.log("bonus data", dailyBonusData);

  return (
    <TableContainer sx={{}}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Day Name</TableCell>
            <TableCell align="left">Title</TableCell>
            <TableCell align="left">Description</TableCell>
            <TableCell align="left">Division</TableCell>
            <TableCell align="right">Action</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {dailyBonusData.map((obj, i) => (
            <TableRow
              key={i}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {obj.dayName}
              </TableCell>
              <TableCell align="left">{obj.title}</TableCell>
              <TableCell align="left">{obj.description}</TableCell>
              <TableCell align="left">
                <List sx={{ listStyleType: "disc", pl: 4 }}>
                  {obj.division.map((div, j) => (
                    <ListItem key={j} sx={{ display: "list-item" }}>
                      Division {j + 1} {div.divisionName}
                      {div.cash
                        ? ":" + div.cash + "rs"
                        : div.referalBooster
                        ? ":" + div.referalBooster + "x"
                        : ""}
                      {" "}
                      {div.divisionName !== "Hard Luck" && div.divisionName !== "" && (
                        <>, Deduct TDS: {div.dedcutTds}</>
                      )}
                    </ListItem>
                  ))}
                </List>
              </TableCell>
              <TableCell
                align="right"
                sx={{ color: "blue", cursor: "pointer" }}
                onClick={() => {
                  handleOpen();
                  setDayToEdit(obj);
                }}
              >
                Edit
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={modelStyle}>
          <EditDailySpinWheel dayToEdit={dayToEdit} handleClose={handleClose} />
        </Box>
      </Modal>
    </TableContainer>
  );
}
