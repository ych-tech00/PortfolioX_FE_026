import React from "react";
import { AppBar, Toolbar, Typography, Button } from "@mui/material";

export default function Navbar() {
  return (
    <AppBar position="sticky" elevation={0} color="transparent">
      <Toolbar sx={{ justifyContent: "space-between" }}>
        <Typography variant="h6" color="primary">
          MyPortfolio
        </Typography>
        <div>
          {["About", "Projects", "Contact"].map((item) => (
            <Button key={item} color="primary" href={`#${item.toLowerCase()}`}>
              {item}
            </Button>
          ))}
        </div>
      </Toolbar>
    </AppBar>
  );
}
