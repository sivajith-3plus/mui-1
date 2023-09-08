import {
  Autocomplete,
  Box,
  MenuItem,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import React from "react";

const EditDailySpinWheel = () => {
  return (
    <>
      <Box sx={{ color: "black" }}>
        <Typography align="center" variant="h6">
          Edit Daily Spin Bonus
        </Typography>
        <p>Day *</p>
        <Select
          sx={{ width: "100%" }}
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value="Day 1"
          label="day"
          disabled
        >
          <MenuItem value="Day 1">Day 1</MenuItem>
        </Select>
        <p>Spin Title*</p>
        <TextField
          hiddenLabel
          id="outlined-basic"
          sx={{ width: "100%" }}
          variant="outlined"
          inputProps={{ maxLength: 20 }}
        />
        <p>Spin Description</p>
        <TextField
          hiddenLabel
          id="outlined-basic"
          sx={{ width: "100%" }}
          variant="outlined"
          inputProps={{ maxLength: 20 }}
        />
        <Typography variant="h6">
          <span style={{ borderBottom: "2px solid #000", marginTop: 15 }}>
            Spin Bonus Type
          </span>
        </Typography>
        <Box sx={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px" }}>
          <div>
            <Typography
              variant="body1"
              style={{ fontWeight: "bold", marginTop: 8 }}
            >
              Divsion 1*
            </Typography>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value="Bonus Cash"
              label="day"
            >
              <MenuItem value="Bonus Cash">Bonus Cash</MenuItem>
            </Select>
          </div>
          <div>
            <Typography
              variant="body1"
              style={{ fontWeight: "bold", marginTop: 8 }}
            >
              Divsion 1*
            </Typography>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value="Bonus Cash"
              label="day"
            >
              <MenuItem value="Bonus Cash">Bonus Cash</MenuItem>
            </Select>
          </div>
          <div>
            <Typography
              variant="body1"
              style={{ fontWeight: "bold", marginTop: 8 }}
            >
              Divsion 1*
            </Typography>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value="Bonus Cash"
              label="day"
            >
              <MenuItem value="Bonus Cash">Bonus Cash</MenuItem>
            </Select>
          </div>
        </Box>
      </Box>
    </>
  );
};

export default EditDailySpinWheel;
