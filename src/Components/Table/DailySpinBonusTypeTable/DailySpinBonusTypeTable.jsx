import {
  Box,
  Modal,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import React from "react";
import data from "./DailySpinBonusTypeTableData";
import EditDailySpinBonusType from "../../Model/EditDailySpinBonusType";

const modelStyle = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "40%",
  maxHeight: "70vh",
  bgcolor: "background.paper",
  borderRadius: "10px",
  boxShadow: 24,
  p: 4,
  outline: "none",
};

const DailySpinBonusTypeTable = () => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
      <TableContainer sx={{}}>
        <Typography variant="h6" fontWeight="fontWeightBold">
          Daily Spin Bonus Type
        </Typography>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell align="left">Type Icon</TableCell>
              <TableCell align="left">Type</TableCell>
              <TableCell align="left">Title</TableCell>
              <TableCell align="left">Description</TableCell>
              <TableCell align="left">Deduct TDS</TableCell>
              <TableCell align="right">Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map((obj) => (
              <TableRow
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell>
                  <Box
                    component="img"
                    sx={{
                      height: 50,
                      width: 50,
                      maxHeight: { xs: 233, md: 167 },
                      maxWidth: { xs: 350, md: 250 },
                    }}
                    alt="The house from the offer."
                    src={obj.typeIcon}
                  />
                </TableCell>
                <TableCell align="left">{obj.type}</TableCell>
                <TableCell align="left">{obj.title}</TableCell>
                <TableCell
                  align="left"
                  sx={{
                    textOverflow: "ellipsis",
                    whiteSpace: "nowrap",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      alignItems: "end",
                      maxWidth: "150PX",
                    }}
                  >
                    <Typography
                      noWrap
                      overflowWrap="break-word"
                      sx={{ textOverflow: "ellipsis" }}
                    >
                      {obj.description}
                    </Typography>
                    <span style={{ color: "blue" }}>more</span>
                  </div>
                </TableCell>
                <TableCell align="left">{obj.deductTDS}</TableCell>
                <TableCell align="right">
                  <span
                    style={{ color: "blue", cursor: "pointer" }}
                    onClick={handleOpen}
                  >
                    edit
                  </span>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={modelStyle}>
          <EditDailySpinBonusType/>
        </Box>
      </Modal>
    </>
  );
};

export default DailySpinBonusTypeTable;
