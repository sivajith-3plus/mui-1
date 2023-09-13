import { Box, Paper } from "@mui/material";
import React from "react";
import AdminUsersTable from "../../Components/Table/AdminUsersTable/AdminUsersTable";

const AdminUsers = () => {
  return (
    <>
      <Box sx={{ width: "100%", p: 3 }}>
        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            "& > :not(style)": {
              m: 1,
              width: "98%",
              height: "auto",
              padding: 3,
            },
            zIndex: 1,
          }}
          z
        >
          <Paper
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width:'100%'
            }}
          >
            <AdminUsersTable />
          </Paper>
        </Box>
      </Box>
    </>
  );
};

export default AdminUsers;
