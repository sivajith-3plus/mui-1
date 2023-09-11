import {
  Autocomplete,
  Box,
  MenuItem,
  Select,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import { useSelector } from "react-redux";

const EditDailySpinWheel = ({ dayToEdit }) => {
  const dailyBonusCount = useSelector((state) => state.dailyBonusCount.data);
  const dailyBonusType = useSelector((state) => state.dailyBonusType.data);

  const [dayName, setDayName] = useState(dayToEdit.dayName);
  const [title, setTitle] = useState(dayToEdit.title);
  const [description, setDEscription] = useState(dayToEdit.description);
  const [divisions, setDivisions] = useState(dayToEdit.division);

  console.log("div", divisions);
  const divReps = [];
  for (let i = 1; i <= dailyBonusCount.count; i++) {
    divReps.push(i);
  }

  return (
    <>
      <Box style={{ color: "black", overflowY: "scroll", height: "600px" }}>
        <Typography align="center" variant="h6">
          Edit Daily Spin Bonus
        </Typography>
        <Typography>Day *</Typography>
        <Select
          sx={{ width: "100%" }}
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={dayToEdit.dayName}
          label="day"
          disabled
        >
          <MenuItem value={dayToEdit.dayName}>{dayToEdit.dayName}</MenuItem>
        </Select>
        <Typography>Spin Title*</Typography>
        <TextField
          hiddenLabel
          id="outlined-basic"
          sx={{ width: "100%" }}
          variant="outlined"
          inputProps={{ maxLength: 20 }}
          value={title}
        />
        <Typography>Spin Description</Typography>
        <TextField
          hiddenLabel
          id="outlined-basic"
          sx={{ width: "100%" }}
          variant="outlined"
          inputProps={{ maxLength: 20 }}
          value={description}
        />
        <Typography variant="h6">
          <span style={{ borderBottom: "2px solid #000", marginTop: 15 }}>
            Spin Bonus Type
          </span>
        </Typography>
        {divReps?.map((divCount, i) => {
          return (
            <Stack>
              <Stack direction="row" sx={{ width: "100%" }} spacing={2}>
                <Box sx={{ width: "100%" }}>
                  <Typography
                    variant="body1"
                    style={{ fontWeight: "bold", marginTop: 8 }}
                  >
                    Divsion {divCount}*
                  </Typography>
                  <Select
                    sx={{ width: "100%" }}
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    label="day"
                  >
                    {dailyBonusType.map((type) => (
                      <MenuItem value={type.title}>{type.title}</MenuItem>
                    ))}
                  </Select>
                </Box>
                <Box sx={{ width: "100%" }}>
                  <Typography variant="body1" style={{ marginTop: 8 }}>
                    Winning Cash Prize
                  </Typography>
                  <TextField
                    hiddenLabel
                    id="outlined-basic"
                    sx={{ width: "100%" }}
                    variant="outlined"
                    inputProps={{ maxLength: 100 }}
                  />
                </Box>
              </Stack>
            </Stack>
          );
        })}
      </Box>
    </>
  );
};

export default EditDailySpinWheel;
