import { Box, TextField, MenuItem, InputBase, IconButton } from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
const SearchBar = () => {
    return (
        <Box
            component="form"
            sx={{
                display: 'flex',
                alignItems: 'center',
                width:  "50%",
                height: 40,
                backgroundColor: '#fff',
                borderRadius: 1,
                overflow: 'hidden',
                boxShadow: 1,
                border: '1px solid #ccc',
            }}
        >
            {/* Dropdown */}
            <TextField
                select
                size="small"
                defaultValue="all"
                variant="outlined"
                sx={{
                    minWidth: 150,
                    '& .MuiOutlinedInput-input': {
                        fontFamily: "Inter",
                        fontSize: "14px",
                        fontWeight: "400",
                        padding: '10px',
                        color:"#606872"
                    },
                    '& .MuiOutlinedInput-notchedOutline': {
                        // border: 'none',
                        borderColor:"#606872"
                    },
                }}
                SelectProps={{
                    IconComponent: KeyboardArrowDownIcon,
                }}
            >
                <MenuItem
                    sx={{
                        fontFamily: "Inter",
                        fontSize: "14px",
                        fontWeight: "400",
                    }}
                    value="all"
                >
                    All Categories
                </MenuItem>
                <MenuItem
                    sx={{
                        fontFamily: "Inter",
                        fontSize: "14px",
                        fontWeight: "400",
                    }}
                    value="electronics"
                >
                    Electronics
                </MenuItem>
                <MenuItem
                    sx={{
                        fontFamily: "Inter",
                        fontSize: "14px",
                        fontWeight: "400",
                    }}
                    value="fashion"
                >
                    Fashion
                </MenuItem>
            </TextField>

            {/* Input */}
            <InputBase
                sx={{
                    ml: 2, flex: 1, fontFamily: "Inter",
                    fontSize: "14px",
                    fontWeight: "400",
                }}
                placeholder="Search Products..."
                inputProps={{ 'aria-label': 'search products' }}
            />

            {/* Button */}
            <IconButton
                type="submit"
                sx={{
                    backgroundColor: '#0d47a1',
                    borderRadius: 0,
                    width: 48,
                    height: '100%',
                    color: '#fff',
                    '&:hover': {
                        backgroundColor: '#08306b',
                    },
                }}
                aria-label="search"
            >
                <SearchIcon />
            </IconButton>
        </Box>
    );
};

export default SearchBar;
