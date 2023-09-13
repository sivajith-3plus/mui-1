import { Box, Stack, TextField, Typography } from "@mui/material";
import React, { useState } from "react";

const AdminUsers = ({ handleClose, isAdd }) => {
  const [fullName, setFullName] = useState("");

  const handleFullNameChange = (event) => {
    const inputValue = event.target.value;
    setFullName(inputValue);
  };

  return (
    <Box
      sx={{
        width: "100%",
        display: "flex",
        flexDirection: "column",
        gap:2
      }}
    >
      <Typography
        variant="h5"
        sx={{ fontWeight: "medium", width: "100%", textAlign: "center" }}
      >
        {isAdd ? "Add" : "Update"} Admin
      </Typography>
      <Typography>Enter Full Name *</Typography>
      <TextField
        inputProps={{ maxLength: 40 }}
        value={fullName}
        onChange={handleFullNameChange}
        helperText={`${fullName.length}/${40}`}
      />
      <Stack direction="row"sx={{ width: "100%" }} spacing={3}>
        <Stack sx={{ width: "100%" }}>
          <Typography>Enter Email *</Typography>
          <TextField inputProps={{ maxLength: 40 }}  />
        </Stack>
        <Stack sx={{ width: "100%" }}>
          <Typography>Enter Phone Number</Typography>
          <TextField inputProps={{ maxLength: 40 }} sx={{ width: "100%" }} />
        </Stack>
      </Stack>
      <Typography>Select Access Role *</Typography>
    </Box>
  );
};

export default AdminUsers;
