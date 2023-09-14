import {
  Box,
  Checkbox,
  ListItemText,
  MenuItem,
  OutlinedInput,
  Select,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import data from "./adminaccessRole";

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

const AdminUsersModel = ({ handleClose, isAdd }) => {
  const dataTitles = data.map((obj) => obj.title);
  // State variables
  const [roleData, setRoleData] = useState(data);
  const [fullName, setFullName] = useState("");
  const [selectedRolesLabel, setSelectedRolesLabel] = useState([]);
  const [selectedRoles, setSelectedRoles] = useState([]);

  const isAllSelected = selectedRolesLabel.length === data.length;
  const isAllEdited = data.length === selectedRoles.reduce((acc,val)=>val['editor']?acc+1:acc,0)

  useEffect(() => {
    const rolesObj = selectedRolesLabel.map((role) => ({
      name: role,
    }));
    setSelectedRoles(rolesObj)
  }, [selectedRolesLabel]);

  // Handle full name change
  const handleFullNameChange = (event) => {
    const inputValue = event.target.value;
    setFullName(inputValue);
  };

  const handleRoleChange = (obj) => {
    const value = obj.title;
    if (value == "All Modules") {
      if (
        selectedRolesLabel &&
        selectedRolesLabel.length >= dataTitles.length
      ) {
        setSelectedRolesLabel([]);
      } else {
        setSelectedRolesLabel(dataTitles);
      }
    } else if (selectedRolesLabel.includes(value)) {
      setSelectedRolesLabel(selectedRolesLabel.filter((val) => val !== value));
    } else {
      setSelectedRolesLabel([...selectedRolesLabel, value]);
    }
  };

  const handleEditor = (value) => {
    console.log(selectedRoles.reduce((acc,val)=>val['editor']?acc+1:acc,0));
    console.log(isAllEdited);
    if (value == "All Modules") {
      const editorCount = selectedRoles.reduce((acc, val) => val.editor ? acc + 1 : acc, 0);
      if (editorCount === data.length || isAllEdited) {
        console.log('same');
        setSelectedRoles([]);
        setSelectedRolesLabel([]);
      } else {
        const updatedRoles = selectedRoles.map((obj) => ({ ...obj, editor: true }));
        setSelectedRoles(updatedRoles);
        if(!isAllSelected) handleRoleChange({ title: "All Modules" })

      }
    }
    console.log(selectedRoles);
  };
  

  return (
    <Box
      sx={{
        width: "100%",
        display: "flex",
        flexDirection: "column",
        gap: 2,
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
      <Stack direction="row" sx={{ width: "100%" }} spacing={3}>
        <Stack sx={{ width: "100%" }}>
          <Typography>Enter Email *</Typography>
          <TextField inputProps={{ maxLength: 40 }} />
        </Stack>
        <Stack sx={{ width: "100%" }}>
          <Typography>Enter Phone Number</Typography>
          <TextField inputProps={{ maxLength: 40 }} sx={{ width: "100%" }} />
        </Stack>
      </Stack>
      <Typography>Select Access Role *</Typography>
      <Select
        labelId="demo-multiple-checkbox-label"
        id="demo-multiple-checkbox"
        multiple
        value={selectedRolesLabel}
        input={<OutlinedInput label="Tag" />}
        renderValue={(selected) => selected.join(", ")}
        MenuProps={MenuProps}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <MenuItem
            key="all"
            value="All Modules"
            onClick={() => handleRoleChange({ title: "All Modules" })}
          >
            <Checkbox checked={isAllSelected} />
            <ListItemText primary="All Modules" />
          </MenuItem>
          <Box sx={{ display: "flex", alignItems: "center", mr: 2 }}>
            <Checkbox onChange={() => handleEditor("All Modules")} />
            <ListItemText primary="Editor" />
            <Checkbox checked={isAllSelected} />
            <ListItemText primary="Viewer" />
          </Box>
        </Box>
        {roleData.map((obj, i) => (
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <MenuItem
              key={i}
              value={obj.title}
              onClick={() => handleRoleChange(obj)}
            >
              <Checkbox checked={selectedRolesLabel.indexOf(obj.title) > -1} />
              <ListItemText primary={obj.title} />
            </MenuItem>
            <Box sx={{ display: "flex", alignItems: "center", mr: 2 }}>
              <Checkbox onChange={() => handleEditor(obj.title)} />
              <ListItemText primary="Editor" />
              <Checkbox checked={selectedRolesLabel.indexOf(obj.title) > -1} />
              <ListItemText primary="Viewer" />
            </Box>
          </Box>
        ))}
      </Select>
    </Box>
  );
};

export default AdminUsersModel;
