import {
  Box,
  Modal,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import React, { useEffect } from "react";
import DailySpinBonusTypeTable from "../Table/DailySpinBonusTypeTable/DailySpinBonusTypeTable";
import api from "../../Api";
import { useDispatch, useSelector } from "react-redux";
import { setDailyBonusCount } from "../../Redux/features/DailyBonusCount/dailyBonusCountSlice";
import EditDailySpinCount from "../Model/EditDailySpinCount";
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
const DailySpinBonusConfig = () => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const dailyBonusCount = useSelector((state) => state.dailyBonusCount.data);
  const dispatch = useDispatch();
  console.log(dailyBonusCount);
  useEffect(() => {
    api.getBonusCount().then((response) => {
      dispatch(setDailyBonusCount(response.data.data[0]));
    });
  }, []);

  return (
    <>
      <Box
        sx={{
          "& > :not(style)": {
            m: 1,
            width: "98%",
            height: "auto",
            padding: 3,
          },
          zIndex: "0",
        }}
      >
        <Paper
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <TableContainer sx={{}}>
            <Typography variant="h6" fontWeight="fontWeightBold">
              Daily Spin Division
            </Typography>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell>Daily Spin Division</TableCell>
                  <TableCell align="right">Action</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                <TableRow
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {dailyBonusCount.count}
                  </TableCell>
                  <TableCell
                    component="th"
                    scope="row"
                    sx={{ color: "blue" }}
                    align="right"
                  >
                    <Typography sx={{ cursor: "pointer" }} onClick={handleOpen}>
                      edit
                    </Typography>
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
            <Modal
              open={open}
              onClose={handleClose}
              aria-labelledby="modal-modal-title"
              aria-describedby="modal-modal-description"
            >
              <Box sx={modelStyle}>
                <EditDailySpinCount />
              </Box>
            </Modal>
          </TableContainer>
        </Paper>

        <Paper
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <DailySpinBonusTypeTable />
        </Paper>
      </Box>
    </>
  );
};

export default DailySpinBonusConfig;
