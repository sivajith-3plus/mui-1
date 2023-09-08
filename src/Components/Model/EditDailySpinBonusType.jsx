import { Box, FormControlLabel, MenuItem, Radio, RadioGroup, Select, TextField, Typography } from "@mui/material";
import React from "react";

const EditDailySpinBonusType = () => {
  return (
    <>
      <Box sx={{ color: "black" }}>
        <Typography align="center" variant="h6">
          Update Daily Spin Bonus
        </Typography>
        <p>Type *</p>
        <Select
          sx={{ width: "100%" }}
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value="Day 1"
          label="day"
        >
          <MenuItem value="Day 1">Deposit Cash</MenuItem>
        </Select>
        <p>Title*</p>
        <TextField
          hiddenLabel
          id="outlined-basic"
          sx={{ width: "100%" }}
          variant="outlined"
          inputProps={{ maxLength: 20 }}
        />
        <p>Description*</p>
        <TextField
          hiddenLabel
          id="outlined-basic"
          sx={{ width: "100%" }}
          variant="outlined"
          inputProps={{ maxLength: 100 }}
        />
        <p>Image url*</p>
        <TextField
          hiddenLabel
          id="outlined-basic"
          sx={{ width: "100%" }}
          variant="outlined"
          inputProps={{ maxLength: 100 }}
        />
        <p>Is Deduct TDS?*</p>
        <RadioGroup
        row
        aria-labelledby="demo-row-radio-buttons-group-label"
        name="row-radio-buttons-group"
      >
        <FormControlLabel value="yes" control={<Radio />} label="Yes" />
        <FormControlLabel value="No" control={<Radio />} label="No" />

      </RadioGroup>
      </Box>
    </>
  );
};

export default EditDailySpinBonusType;
