import React from "react";
import {
  Box,
  Typography,
  Button,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";

const industryInfo = [
  {
    heading: "Countries",
    detail: "India, China, Hong Kong, Kenya, Uganda, Rwanda",
  },
  {
    heading: "Warehouses",
    detail: "Mumbai (Thane – Wagle Estate), Chennai (Puzhal – Ambattur Road)",
  },
  {
    heading: "Industries Served",
    detail: "Food, Pharma, Cosmetics, FMCG, E-commerce, Logistics, Chemicals",
  },
];

export default function ServingIndustries() {
  return (
    <Box sx={{ display: "grid", placeItems: "center" }}>
      <Box sx={{ px: {xs:2 ,md:4}, py: 6, width: "90%" }}>
        <Typography variant="p" sx={{ color: "#243E60", fontSize: {xs:"20px" , md:"20px"} }}>
          Serving Industries Worldwide
        </Typography>
        <Typography
          variant="subtitle1"
          sx={{ color: "#243E60", fontSize: {xs:"16px" , md:"16px"}  }}
          gutterBottom
        >
          We proudly serve clients across:
        </Typography>

        <Box
          sx={{
            "& li::marker": {
              color: "#1955A6",
            },
          }}
        >
          {industryInfo.map((item) => {
            return (
              <Typography
                component={"li"}
                sx={{ fontSize: {xs:"20px" ,md:"20px"}, color: "#606872" }}
              >
                <span style={{ color: "#1955A6" }}>{item.heading}:</span>{" "}
                {item.detail}
              </Typography>
            );
          })}
        </Box>

        <Button variant="contained" sx={{ mt: 3 }}>
          View Industries We Serve
        </Button>
      </Box>
    </Box>
  );
}
