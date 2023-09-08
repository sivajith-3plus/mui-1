import { Box, Button, TextField, Typography } from "@mui/material";
import React, { useState } from "react";

const EditDailySpinCount = () => {
  const [value, setValue] = useState("");
  const [error, setError] = useState(false);

  const handleChange = (event) => {
    const inputValue = event.target.value;
    // Check if the input is a valid number between 4 and 10
    const isValid =
      /^\d+$/.test(inputValue) && inputValue >= 4 && inputValue <= 10;
    setValue(inputValue);
    setError(!isValid);
  };
  return (
    <div>
      <Box sx={{ color: "black", width:'100%'}}>
        <Typography align="center" variant="h6">
          Update Daily Spin Bonus
        </Typography>
        <p>Division Count *</p>
        <div>

        <TextField
          label="Enter a number between 4 and 10"
          variant="outlined"
          error={error}
          helperText={error ? "Invalid number" : ""}
          value={value}
          onChange={handleChange}
          sx={{width:'60%',marginBottom:4}}
          />
          </div>
        <Button
          variant="contained"
          color="primary"
          disabled={error}
          onClick={() => alert(`You entered: ${value}`)}
        >
          Submit
        </Button>
      </Box>
    </div>
  );
};

export default EditDailySpinCount;
