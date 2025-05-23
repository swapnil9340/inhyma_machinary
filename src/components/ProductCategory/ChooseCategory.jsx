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

const ChooseCategory = ({selectedCategory ,setSelectedCategory ,allCategories}) => {
  console.log("selectedCategory" ,selectedCategory)

  const handleSelect = (status , category)=>{
    console.log("status" ,status)
        setSelectedCategory((prev)=>{
          return {
             ...prev ,
             [category] : status
          }
        })
  }
  return (
    <Box  sx={{height :{xs:"fit-content" ,md:"50vh"} }}>
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
            <Box sx={{height : "80%" ,overflowY : "scroll"}}>
            {allCategories.map((cat, i) => {
            //  console.log("selectedCategory.includes(cat?.name)" ,selectedCategory.includes(cat?.name))
           return    <FormControlLabel
                key={i}
                control={<Checkbox checked={selectedCategory[cat?.name] === true} />}
                label={cat?.name}
                onChange={(e)=> handleSelect(e.target.checked ,cat?.name)}
                sx={{ display: "block", color: "#2157a4", mb: 1 }}
              />
            })}
            </Box>
          </Box>
      </Grid>
    </Box>
  );
};

export default ChooseCategory;
