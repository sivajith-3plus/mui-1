import {
  Box,
  Button,
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
import SimpleReactValidator from "simple-react-validator";
import api from "../../../Api";
import { useSelector } from "react-redux";

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
  const data=useSelector((state)=>state.adminRoles.data)

  const validator = new SimpleReactValidator();
  const dataTitles = data.map((obj) => obj.name);
  // State variables
  const [roleData, setRoleData] = useState(data);
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState();
  const [formTouched, setFormTouched] = useState(false);

  const [selectedRolesLabel, setSelectedRolesLabel] = useState([]);
  const [selectedRoles, setSelectedRoles] = useState([{}]);
  const [editedRoles, setEditedRoles] = useState([]);

  const [error, setError] = useState();
  const [fullNameError, setFullNameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [phoneNumberError, setPhoneNumberError] = useState();


  const isAllSelected = selectedRolesLabel.length === data.length;
  const isAllEdited =
    data.length ===
    selectedRoles.reduce((acc, val) => (val["editor"] ? acc + 1 : acc), 0);

  // Handle full name change
  const handleFullNameChange = (event) => {
    setFormTouched(true);
    setError()
    const inputValue = event.target.value;
    validator.showMessageFor("fullName");
    setFullNameError(
      validator.message("fullName", inputValue, "required|min:5|max:40")
    );
    setFullName(inputValue);
  };

  const handleEmailChange = (event) => {
    setError()
    setFormTouched(true);
    const inputValue = event.target.value;
    validator.showMessageFor("email");
    setEmailError(validator.message("email", inputValue, "required|email"));
    setEmail(inputValue);
  };

  const handleNumberChange = (event) => {
    setError()
    setFormTouched(true);
    const inputValue = event.target.value;
    validator.showMessageFor("phoneNumber");
    setPhoneNumberError(
      validator.message("phoneNumber", inputValue, "numeric")
    );
    setPhoneNumber(inputValue);
  };

  const handleRoleChange = (obj) => {
    console.log(validator);
    const value = obj.name;
    if (value == "All Modules") {
      if (
        selectedRolesLabel &&
        selectedRolesLabel.length >= dataTitles.length
      ) {
        setSelectedRolesLabel([]);
        setSelectedRoles([{}]);
      } else {
        setSelectedRolesLabel(dataTitles);
        const updatedRoles = data.map((obj) => ({ ...obj, name: obj.name }));
        setSelectedRoles(updatedRoles);
        console.log("87", updatedRoles);
      }
    } else if (selectedRolesLabel.includes(value)) {
      setSelectedRolesLabel(selectedRolesLabel.filter((val) => val !== value));
      setSelectedRoles(selectedRoles.filter((item) => item.name !== value));
      console.log(selectedRoles);
    } else {
      setSelectedRolesLabel([...selectedRolesLabel, value]);
      setSelectedRoles([...selectedRoles, { ...obj, name: value }]);
      console.log(selectedRoles);
    }
  };

  const handleEditor = (value) => {
    if (value == "All Modules") {
      const editorCount = selectedRoles.reduce(
        (acc, val) => (val.editor ? acc + 1 : acc),
        0
      );
      if (editorCount === data.length || isAllEdited) {
        const updatedRoles = selectedRoles.map((obj) => ({
          ...obj,
          editor: false,
        }));
        console.log("same", updatedRoles);
        setSelectedRoles(updatedRoles);
        setEditedRoles([]);
      } else {
        if (!isAllSelected) handleRoleChange({ name: "All Modules" });
        const updatedRoles = data.map((obj) => ({
          ...obj,
          name: obj.name,
          editor: true,
        }));
        setSelectedRoles(updatedRoles);
        setEditedRoles(dataTitles);
        console.log("81", updatedRoles);
      }
    } else {
      if (editedRoles.includes(value)) {
        setEditedRoles(editedRoles.filter((val) => val !== value));
      } else {
        setEditedRoles([...editedRoles, value]);
      }
      if (selectedRolesLabel.includes(value)) {
        const updatedRoles = selectedRoles.map((obj) => {
          if (obj.name == value) {
            obj.editor = !obj.editor;
          }
          return obj;
        });
        console.log(updatedRoles);
      } else {
        handleRoleChange({ name: value });
        const updatedRoles = selectedRoles.map((obj) => {
          if (obj.name == value) {
            obj.editor = !obj.editor;
          }
          return obj;
        });
        console.log(updatedRoles);
      }
    }
  };



  const handleSubmit = () => {
    console.log("editors", editedRoles);
    console.log(editedRoles.length,data.length);
    if (validator.allValid() && formTouched) {
      console.log(fullName, email, phoneNumber, selectedRoles);
      const adminRoleID = generateRandomAdminID();
      console.log(adminRoleID);
      let filteredRoles = selectedRoles.filter(
        (role) => Object.keys(role).length > 0
      );
      if (editedRoles.length === data.length) {
        filteredRoles = { name: "All Modules", editor: true };
      } else if (selectedRolesLabel.length === data.length) {
        filteredRoles = { name: "All Modules" };
      }
      const payLoad = {
        fullName:fullName,
        adminRoleID:adminRoleID,
        email:email,
        phoneNumber:phoneNumber?phoneNumber:'',
        accesRoleCategory:filteredRoles
      }
      api.addAdminUsers(payLoad).then((response)=>{
        console.log(response.data)
      }).catch((err)=>{
        setError(err)
      })
      handleClose()
    } else {
      setError("enter all data");
    }
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
        name="fullName"
        value={fullName}
        onChange={handleFullNameChange}
        helperText={fullNameError}
      />
      <Stack direction="row" sx={{ width: "100%" }} spacing={3}>
        <Stack sx={{ width: "100%" }}>
          <Typography>Enter Email *</Typography>
          <TextField
            inputProps={{ maxLength: 40 }}
            onChange={handleEmailChange}
            name="email"
            value={email}
            helperText={emailError}
          />
        </Stack>
        <Stack sx={{ width: "100%" }}>
          <Typography>Enter Phone Number</Typography>
          <TextField
            inputProps={{ maxLength: 12 }}
            sx={{ width: "100%" }}
            onChange={handleNumberChange}
            value={phoneNumber}
            helperText={phoneNumberError}
            name="phoneNumber"
          />
        </Stack>
      </Stack>
      <Typography>Select Access Role *</Typography>
      <Select
        labelId="demo-multiple-checkbox-label"
        id="demo-multiple-checkbox"
        multiple
        required
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
            onClick={() => handleRoleChange({ name: "All Modules" })}
          >
            <Checkbox checked={isAllSelected} />
            <ListItemText primary="All Modules" />
          </MenuItem>
          <Box sx={{ display: "flex", alignItems: "center", mr: 2 }}>
            <Checkbox
              onChange={() => handleEditor("All Modules")}
              checked={isAllEdited}
            />
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
              value={obj.name}
              onClick={() => handleRoleChange(obj)}
            >
              <Checkbox checked={selectedRolesLabel.indexOf(obj.name) > -1} />
              <ListItemText primary={obj.name} />
            </MenuItem>
            <Box sx={{ display: "flex", alignItems: "center", mr: 2 }}>
              <Checkbox
                onChange={() => handleEditor(obj.name)}
                checked={editedRoles.indexOf(obj.name) > -1}
              />
              <ListItemText primary="Editor" />
              <Checkbox checked={selectedRolesLabel.indexOf(obj.name) > -1} />
              <ListItemText primary="Viewer" />
            </Box>
          </Box>
        ))}
      </Select>
      <Box
        sx={{
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Button variant="contained" onClick={handleSubmit}>
          Submit
        </Button>
        {error && <Typography sx={{ color: "red" }}>{error}</Typography>}
      </Box>
    </Box>
  );
};

function generateRandomAdminID() {
  const prefix = "ARID";
  const min = 14311;
  const max = 99999;

  const randomNum = Math.floor(Math.random() * (max - min + 1)) + min;

  const paddedNum = String(randomNum).padStart(5, "0");

  const adminID = `${prefix}${paddedNum}`;

  return adminID;
}

export default AdminUsersModel;
