import {
  Box,
  Button,
  FormControlLabel,
  MenuItem,
  Radio,
  RadioGroup,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import api from "../../Api";

const AddDailySpinBonusType = ({handleClose}) => {
  const [iconUrl, setIconUrl] = useState("");
  const [type, setType] = useState("");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [deductTds, setDeductTds] = useState();
  const [error,setError] = useState()

  const handleSubmit = () => {
    if(!iconUrl || !type || !title || !description || !deductTds){
      setError('Enter all elements')
    }else{
      setError(null)
      const data = {
        typeIcon:iconUrl,
        type:type,
        title:title,
        description:description,
        deductTds:deductTds
      }
      api.addBonusType(data)
      handleClose()
    }
  }

  return (
    <>
      <Box sx={{ color: "black", height: "auto"}}>
        <Typography align="center" variant="h6">
          ADD Daily Spin Bonus
        </Typography>
        <Typography>Type *</Typography>
        <TextField
          hiddenLabel
          id="outlined-basic"
          sx={{ width: "100%" }}
          variant="outlined"
          inputProps={{ maxLength: 20 }}
          onChange={(e) => setType(e.target.value)}
        />
        <Typography>Title*</Typography>
        <TextField
          hiddenLabel
          id="outlined-basic"
          sx={{ width: "100%" }}
          variant="outlined"
          inputProps={{ maxLength: 20 }}
          onChange={(e) => setTitle(e.target.value)}
        />
        <Typography>Description*</Typography>
        <TextField
          hiddenLabel
          id="outlined-basic"
          sx={{ width: "100%" }}
          variant="outlined"
          inputProps={{ maxLength: 100 }}
          onChange={(e) => setDescription(e.target.value)}
        />
        <Typography>Image url*</Typography>
        <TextField
          hiddenLabel
          id="outlined-basic"
          sx={{ width: "100%" }}
          variant="outlined"
          onChange={(e) => setIconUrl(e.target.value)}
        />
        <Typography>Is Deduct TDS?*</Typography>
        <RadioGroup
          row
          aria-labelledby="demo-row-radio-buttons-group-label"
          name="row-radio-buttons-group"
          onClick={(e) => {
            setDeductTds(e.target.value);
          }}
        >
          <FormControlLabel value="yes" control={<Radio />} label="Yes" />
          <FormControlLabel value="No" control={<Radio />} label="No" />
        </RadioGroup>
        <Box sx={{ width: "100%",display:'flex',flexDirection:'column', alignItems:'center'}}>
          <Button variant="contained" onClick={handleSubmit}>Submit</Button>
          {error && <Typography sx={{color:'red'}}>{error}</Typography>}
        </Box>
      </Box>
    </>
  );
};

export default AddDailySpinBonusType;
