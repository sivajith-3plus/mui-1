import { Box, Paper } from "@mui/material";
import React, { useEffect } from "react";
import AdminUsersTable from "../../Components/Table/AdminUsersTable/AdminUsersTable";
import api from "../../Api";
import { useDispatch } from "react-redux";
import { setAdminUsers } from "../../Redux/features/AdminUsers/adminUsersSlice";
import { setAdminRoles } from "../../Redux/features/AdminUsers/adminRolesSlice";

const AdminUsers = () => {
  const dispatch = useDispatch()
  useEffect(()=>{
    api.getAllAdminUsers().then((response)=>{
      dispatch(setAdminUsers(response.data))
    })
    api.getAdminUserRoles().then((response)=>{
      dispatch(setAdminRoles(response.data))
    })
  },[dispatch])
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
