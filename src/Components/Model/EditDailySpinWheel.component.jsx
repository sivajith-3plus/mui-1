import {
  Box,
  Button,
  MenuItem,
  Select,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import api from "../../Api";
import { setDailyBonus } from "../../Redux/features/DailySpinBonus/dailySpinBonusSlice";

const EditDailySpinWheel = ({ dayToEdit, handleClose }) => {
  const updatedDayToEdit = { ...dayToEdit };
  const dispatch = useDispatch();

  const dailyBonusCount = useSelector((state) => state.dailyBonusCount.data);
  const dailyBonusType = useSelector((state) => state.dailyBonusType.data);

  // const [dayName, setDayName] = useState(dayToEdit.dayName);
  const [title, setTitle] = useState(dayToEdit.title);
  const [description, setDescription] = useState(dayToEdit.description);
  const [divisions, setDivisions] = useState(dayToEdit.division);

  useEffect(() => {
    const modifiedDivisions = divisions.map((division, i) => ({
      ...division,
      id: i,
    }));
    setDivisions(modifiedDivisions);
  }, [divisions]);

  const handleTypeChange = (e, i) => {
    setDivisions((prevDivisions) => {
      const updatedDivisions = [...prevDivisions];
      const isSelected = updatedDivisions.some((div) => div.id === i);

      if (!isSelected) {
        updatedDivisions.push({ id: i, divisionName: e.target.value });
      } else {
        updatedDivisions.forEach((div) => {
          if (div.id === i) {
            div.divisionName = e.target.value;
            if (e.target.value == "Hard Luck") {
              div.cash = null;
              div.referalBooster = null;
              div.dedcutTds = "No";
            }
          }
        });
      }
      return updatedDivisions;
    });
    console.log(divisions);
  };

  const handleCashChange = (e, i) => {
    setDivisions((prevDivisions) => {
      const updatedDivisions = [...prevDivisions];
      const isSelected = updatedDivisions.some((div) => div.id === i);

      if (!isSelected) {
        updatedDivisions.push({
          id: i,
          cash: parseFloat(e.target.value),
          dedcutTds: "Yo",
        });
      } else {
        updatedDivisions.forEach((div) => {
          if (div.id === i) {
            div.cash = parseFloat(e.target.value);
            div.dedcutTds = "Yes";
          }
        });
      }
      return updatedDivisions;
    });
    console.log(divisions);
  };
  const handleReferalChange = (e, i) => {
    setDivisions((prevDivisions) => {
      const updatedDivisions = [...prevDivisions];
      const isSelected = updatedDivisions.some((div) => div.id === i);

      if (!isSelected) {
        updatedDivisions.push({
          id: i,
          referalBooster: parseFloat(e.target.value),
          cash: null,
          dedcutTds: "No",
        });
      } else {
        updatedDivisions.forEach((div) => {
          if (div.id === i) {
            div.referalBooster = parseFloat(e.target.value);
            div.cash = null;
            div.dedcutTds = "No";
          }
        });
      }
      return updatedDivisions;
    });
    console.log(divisions);
  };
  const handleTimeChange = (e, i) => {
    setDivisions((prevDivisions) => {
      const updatedDivisions = [...prevDivisions];
      const isSelected = updatedDivisions.some((div) => div.id === i);

      if (!isSelected) {
        updatedDivisions.push({
          id: i,
          time: parseFloat(e.target.value),
          cash: null,
          dedcutTds: "No",
        });
      } else {
        updatedDivisions.forEach((div) => {
          if (div.id === i) {
            div.time = parseFloat(e.target.value);
            div.cash = null;
            div.dedcutTds = "No";
          }
        });
      }
      return updatedDivisions;
    });
    console.log(divisions);
  };

  const handleSubmit = () => {
    const newDivisions = divisions.map(({ id, ...rest }) => rest);

    updatedDayToEdit.division = newDivisions;

    api.updateDaySpinBonus(dayToEdit._id, updatedDayToEdit);
    api.getAllDaySpinBonus().then((response) => {
      dispatch(setDailyBonus(response.data));
    });

    console.log(updatedDayToEdit);
    handleClose();
  };

  const divReps = [];
  for (let i = 1; i <= dailyBonusCount.count; i++) {
    divReps.push(i);
  }

  useEffect(() => {
    if (divisions.length < divReps.length) {
      const newDivisions = [...divisions];
  
      for (let i = divisions.length; i < divReps.length; i++) {
        newDivisions.push({
          divisionName: 'Hard Luck',
          cash: null,
          referalBooster: null,
          dedcutTds: null,
          _id: null,
        });
      }
  
      console.log('hi', newDivisions);
  
      setDivisions(newDivisions);
    }
  }, []);
  

  return (
    <>
      <Box style={{ color: "black", overflowY: "scroll", height: "600px" }}>
        <Typography align="center" variant="h6">
          Edit Daily Spin Bonus
        </Typography>
        <Typography>Day *</Typography>
        <Select
          sx={{ width: "100%" }}
          labelId="day-label"
          id="day-select"
          value={dayToEdit.dayName}
          label="day"
          disabled
        >
          <MenuItem value={dayToEdit.dayName}>{dayToEdit.dayName}</MenuItem>
        </Select>
        <Typography>Spin Title*</Typography>
        <TextField
          hiddenLabel
          id="title-input"
          sx={{ width: "100%" }}
          variant="outlined"
          inputProps={{ maxLength: 20 }}
          value={title}
        />
        <Typography>Spin Description</Typography>
        <TextField
          hiddenLabel
          id="description-input"
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
            <Stack key={i}>
              <Stack direction="row" sx={{ width: "100%" }} spacing={2}>
                <Box sx={{ width: "100%" }}>
                  <Typography
                    variant="body1"
                    style={{ fontWeight: "bold", marginTop: 8 }}
                  >
                    Division {divCount}*
                  </Typography>
                  <Select
                    sx={{ width: "100%" }}
                    labelId={`division-label-${i}`}
                    id={`division-select-${i}`}
                    label="day"
                    value={divisions[i].divisionName || ''}
                    onChange={(e) => {
                      handleTypeChange(e, i);
                    }}
                  >
                    {dailyBonusType.map((type, index) => (
                      <MenuItem key={index} value={type.type}>
                        {type.type}
                      </MenuItem>
                    ))}
                  </Select>
                </Box>
                {divisions[i] &&
                  divisions[i].divisionName != "Referal Booster" &&
                  divisions[i].divisionName != "Hard Luck" && (
                    <Box sx={{ width: "100%" }}>
                      <Typography variant="body1" style={{ marginTop: 8 }}>
                        {divisions[i].divisionName == "Winning Cash"
                          ? "Winning"
                          : "Deposit"}{" "}
                        Cash Prize
                      </Typography>
                      <TextField
                        hiddenLabel
                        id={`winning-cash-input-${i}`}
                        sx={{ width: "100%" }}
                        variant="outlined"
                        inputProps={{ maxLength: 100 }}
                        // value={divisions[i].cash}
                        onChange={(e) => handleCashChange(e, i)}
                      />
                    </Box>
                  )}
              </Stack>
              {divisions[i] &&
                divisions[i].divisionName == "Referal Booster" && (
                  <Stack direction="row" sx={{ width: "100%" }} spacing={2}>
                    <Box sx={{ width: "100%" }}>
                      <Typography
                        variant="body1"
                        style={{ fontWeight: "Regular", marginTop: 8 }}
                      >
                        Referral Boosters (ex 2x, 3x)
                      </Typography>
                      <Select
                        sx={{ width: "100%" }}
                        labelId={`referral-label-${i}`}
                        id={`referral-select-${i}`}
                        label="day"
                        value={divisions[i].referalBooster || ''}
                        onChange={(e) => handleReferalChange(e, i)}
                      >
                        <MenuItem value="undefined" hidden></MenuItem>
                        <MenuItem value="2">2x</MenuItem>
                        <MenuItem value="3">3x</MenuItem>
                        <MenuItem value="4">4x</MenuItem>
                        <MenuItem value="8">8x</MenuItem>
                      </Select>
                    </Box>
                    <Box sx={{ width: "100%" }}>
                      <Typography
                        variant="body1"
                        style={{ fontWeight: "Regular", marginTop: 8 }}
                      >
                        Expires at *
                      </Typography>
                      <Select
                        sx={{ width: "100%" }}
                        labelId={`expires-label-${i}`}
                        id={`expires-select-${i}`}
                        label="day"
                        value={divisions[i].time || ''}
                        onChange={(e) => handleTimeChange(e, i)}
                      >
                        <MenuItem value="undefined" hidden></MenuItem>
                        <MenuItem value="2">2 hour</MenuItem>
                        <MenuItem value="4">4 hour</MenuItem>
                        <MenuItem value="8">8 hour</MenuItem>
                        <MenuItem value="16">16 hour</MenuItem>
                      </Select>
                    </Box>
                  </Stack>
                )}
            </Stack>
          );
        })}
        <Box
          sx={{
            width: "100%",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            marginTop: "20px",
          }}
        >
          <Button variant="contained" onClick={handleSubmit}>
            Submit
          </Button>
        </Box>
      </Box>
    </>
  );
};

export default EditDailySpinWheel;
