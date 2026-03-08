import React from "react";
import { Box, Typography } from "@mui/material";

export default function Footer() {
  return (
    <Box sx={{ textAlign: "center", py: 3 }}>
      <Typography color="white">© {new Date().getFullYear()} YC </Typography>
    </Box>
  );
}