import React, { useEffect } from "react";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import DailySpinBonusTable from "../Table/DailySpinBonusTable/DailySpinBonusTable.component";
import { useDispatch } from "react-redux";
import api from "../../Api";
import { setDailyBonus } from "../../Redux/features/DailySpinBonus/dailySpinBonusSlice";
import { setDailyBonusCount } from "../../Redux/features/DailyBonusCount/dailyBonusCountSlice";
import { setDailyBonusType } from "../../Redux/features/DailyBonusType/dailyBonusTypeSlice";

const DailySpinBonus = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    api.getAllDaySpinBonus().then((response) => {
      dispatch(setDailyBonus(response.data));
    });
    api.getBonusCount().then((response) => {
      dispatch(setDailyBonusCount(response.data.data[0]));
    });
    api.getAllBonusType().then((response) => {
      dispatch(setDailyBonusType(response.data));
    });
  }, []);

  return (
    <>
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
          }}
        >
          <DailySpinBonusTable />
        </Paper>
      </Box>
    </>
  );
};

export default DailySpinBonus;
