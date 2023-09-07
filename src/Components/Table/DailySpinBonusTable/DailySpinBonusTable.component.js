import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import data from "./dailyBonusData";
import { Box, List, ListItem, Modal, Typography } from "@mui/material";

const modelStyle = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '60%',
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

export default function DailySpinBonusTable() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <TableContainer sx={{ height:'77vh'}}>
      <Table sx={{ minWidth: 650, }} aria-label="simple table">
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
          {data.map((obj, i) => (
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
                  {obj.divisions.map((division, j) => (
                    <ListItem key={j} sx={{ display: "list-item" }}>
                      {division.id} bonus cash : {division["bonus cash"]},
                      Deduct TDS: {division["deduct tds"]}
                    </ListItem>
                  ))}
                </List>
              </TableCell>
              <TableCell
                align="right"
                sx={{ color: "blue", cursor: "pointer" }}
                onClick={handleOpen}
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
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Text in a modal
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
          </Typography>
        </Box>
      </Modal>

    </TableContainer>
  );
}
