import React from "react";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import DailySpinBonusTable from "../Table/DailySpinBonusTable/DailySpinBonusTable.component";

const DailySpinBonus = () => {
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
            padding:3
          },
        }}
      >
        <Paper
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <DailySpinBonusTable/>
        </Paper>
      </Box>
    </>
  );
};

export default DailySpinBonus;
