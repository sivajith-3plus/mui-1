import {
  Box,
  Button,
  List,
  ListItem,
  Modal,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TablePagination,
  TableRow,
  Typography,
} from "@mui/material";
import React from "react";
import data from "./AdminUsersData";
import AdminUsersModel from "../../Model/AdminUsers/adminUsers.model";

const modelStyle = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 800,
  borderRadius: 3,
  bgcolor: "white",
  boxShadow: 24,
  p: 4,
};

const AdminUsersTable = () => {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);

  const [open, setOpen] = React.useState(false);
  const [isAdd, setIsAdd] = React.useState(false);

  const handleOpen = () => setOpen(true)
  const handleAdd = () => {
    setOpen(true);
    setIsAdd(true);
  };
  const handleClose = () => {
    setOpen(false);
    setIsAdd(false);
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const emptyRows =
    rowsPerPage - Math.min(rowsPerPage, data.length - page * rowsPerPage);

  return (
    <>
      <Box sx={{ width: "100%" }}>
        <TableContainer sx={{ width: "100%" }}>
          <Box sx={{ width: "100%" }}>
            <Button
              sx={{ float: "right" }}
              variant="contained"
              onClick={handleAdd}
            >
              + Add Admin
            </Button>
          </Box>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell align="left">Admin Refe ID</TableCell>
                <TableCell align="left">Full Name</TableCell>
                <TableCell align="left">Email</TableCell>
                <TableCell align="left">Phone Number</TableCell>
                <TableCell align="left">Acces Role Category</TableCell>
                <TableCell align="left">Status</TableCell>
                <TableCell align="left">Action</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {data
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((row) => (
                  <TableRow
                    key={row.adminRoleID}
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
                    <TableCell align="left">{row.adminRoleID}</TableCell>
                    <TableCell align="left">{row.fullName}</TableCell>
                    <TableCell align="left">{row.email}</TableCell>
                    <TableCell align="left">{row.phoneNumber}</TableCell>
                    <TableCell align="left">
                      <List sx={{ listStyleType: "disc", pl: 2 }}>
                        {row.accesRoleCategory.map((access) => (
                          <ListItem sx={{ display: "list-item" }}>
                            <>
                              {access.viewer && access.name + " viewer"},
                              {access.editor && access.name + " editor"}
                            </>
                          </ListItem>
                        ))}
                      </List>
                    </TableCell>
                    <TableCell align="left" sx={{ color: "red" }}>
                      {row.status ? "Activate" : "Deactivate"}
                    </TableCell>
                    <TableCell
                      align="left"
                      sx={{ color: "blue", cursor: "pointer" }}
                    >
                      <Typography>
                        <Box sx={{ float: "left" }} onClick={handleOpen}>Edit | </Box>
                        <Box sx={{ float: "left", marginLeft: 1 }}>
                          Delete |
                        </Box>
                        <Box sx={{ float: "left", marginLeft: 1 }}>
                          {row.status ? "Activate" : "Deactivate"}
                        </Box>
                      </Typography>
                    </TableCell>
                  </TableRow>
                ))}
              {emptyRows > 0 && (
                <TableRow style={{ height: 53 * emptyRows }}>
                  <TableCell colSpan={6} />
                </TableRow>
              )}
            </TableBody>
          </Table>
          <TablePagination
            rowsPerPageOptions={[5, 10, 25]}
            component="div"
            count={data.length}
            rowsPerPage={rowsPerPage}
            page={page}
            onPageChange={handleChangePage}
            onRowsPerPageChange={handleChangeRowsPerPage}
          />
        </TableContainer>
      </Box>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={modelStyle}>
          <AdminUsersModel handleClose={handleClose} isAdd={isAdd}/>
        </Box>
      </Modal>
    </>
  );
};

export default AdminUsersTable;
