import { Label } from "@mui/icons-material";
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

const ChooseCategory = ({ selectedCategory, setSelectedCategory, allCategories ,loading }) => {
  console.log("selectedCategory", selectedCategory)

  const handleSelect = (status, category) => {
    console.log("status", status)
    setSelectedCategory((prev) => {
      return {
        ...prev,
        [category]: status
      }
    })
  }
  return (
    <Box sx={{ height: "fit-content", bgcolor: "#EBF4FF" }}>
      <Grid container spacing={3} sx={{ height: "500px" }} >
        {/* Sidebar */}
        <Box sx={{ p: 2, bgcolor: "#EBF4FF", borderRadius: 2, width: "100%", height: "100%" }}>
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
              background: "#fff",
              padding: "5px 10px",
              "& input::placeholder": {
                color: "#C3C3C3",
                opacity: 1
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
          <Box sx={{ height: "80%", overflowY: "auto" }}>
            {
              !loading  ? (
                allCategories.map((cat, i) => {
             
              return <Box sx={{ display: "flex", alignItems: "flex-start" }} >
                <Checkbox
                  checked={selectedCategory[cat?.name] === true}
                  sx={{ paddingTop: 0 }}
                  onChange={(e) => handleSelect(e.target.checked, cat?.name)} />
                <Typography component={'span'} sx={{ fontSize: "14px", color: "#2157a4" }}>{cat?.name}</Typography>
              </Box>
                }
              )) : (
                   <Typography component={'span'} sx={{ fontSize: "14px", color: "#2157a4" }}>Loading...</Typography>
              )
            }
          </Box>
        </Box>
      </Grid>
    </Box>
  );
};

export default ChooseCategory;
