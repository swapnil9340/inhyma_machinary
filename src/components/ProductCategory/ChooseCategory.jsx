import {
  Box,
  Checkbox,
  FormControlLabel,
  Grid,
  Input,
  TextField,
  Typography,
} from "@mui/material";
import { GoSearch } from "react-icons/go";

const ChooseCategory = () => {
  const categories = [
    "Food & Beverage",
    "Pharmaceuticals",
    "Cosmetics",
    "Logistics & E-commerce",
    "General Industrial",
  ];
  return (
    <Box  sx={{height :{xs:"fit-content" ,md:"50vmin"} ,maxHeight : {xs:"50dvh" ,md:"50vmin"}}}>
      <Grid container spacing={3}  sx={{height :"100%"}} >
        {/* Sidebar */}
          <Box sx={{ p: 2, bgcolor: "#EBF4FF", borderRadius: 2 ,width :"100%" ,height :"100%" }}>
            <Typography variant="h6" gutterBottom sx={{ color: "#53657D" }}>
              Choose A Product Category
            </Typography>
            <Input
              placeholder="Search Products"
              size="small"
              fullWidth
              disableUnderline
              sx={{
                mb: 2,
                background : "#fff",
                padding :"5px 10px",
                "& input::placeholder": {
                  color: "#C3C3C3",
                  opacity : 1
                },
              }}
              startAdornment={
                <GoSearch
                  size={20}
                  color="#C3C3C3"
                  style={{ marginRight: "10px" }}
                />
              }
            />
            {categories.map((cat, i) => (
              <FormControlLabel
                key={i}
                control={<Checkbox defaultChecked={i === 1} />}
                label={cat}
                sx={{ display: "block", color: "#2157a4", mb: 1 }}
              />
            ))}
          </Box>
      </Grid>
    </Box>
  );
};

export default ChooseCategory;
