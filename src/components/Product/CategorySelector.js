import React, { useState } from 'react';
import { Box, Typography, TextField, InputAdornment, Checkbox, Paper } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import { motion } from 'framer-motion';

const categories = [
  'Food & Beverage', 'Pharmaceuticals', 'Cosmetics', 'Logistics & E-commerce',
  'General Industrial', 'Electronics', 'Textile', 'Retail', 'Automotive', 'Medical Devices'
];

const CategorySelector = () => {
  const [selected, setSelected] = useState([]);
  const [search, setSearch] = useState('');

  const toggleCategory = (cat) => {
    setSelected((prev) =>
      prev.includes(cat) ? prev.filter((c) => c !== cat) : [...prev, cat]
    );
  };

  const filteredCategories = categories.filter((cat) =>
    cat.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <Box sx={{ py: 5, px: 6, mt: 4, textAlign: 'center', bgcolor: '#f8fbff' }}>
      <Typography variant="h4" fontWeight={700} color="#0d47a1" gutterBottom>
        Select Your Product Category
      </Typography>

      <Box sx={{ maxWidth: 620, mx: 'auto', mb: 3 }}>
        <TextField
          fullWidth
          variant="outlined"
          placeholder="Search Products"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon color="primary" />
              </InputAdornment>
            ),
          }}
          sx={{
            bgcolor: 'white',
            borderRadius: 2,
            '& .MuiOutlinedInput-root': {
              border: '2px solid #1976d2',
              paddingRight: 1,
            },
          }}
        />
      </Box>

      <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 2, justifyContent: 'center' }}>
        {filteredCategories.map((cat) => (
          <motion.div
            key={cat}
            whileHover={{ scale: 1.05, boxShadow: '0px 10px 20px rgba(0,0,0,0.1)' }}
            whileTap={{ scale: 0.95 }}
          >
            <Paper
              elevation={selected.includes(cat) ? 6 : 2}
              sx={{
                display: 'flex',
                alignItems: 'center',
                borderRadius: 2,
                px: 2,
                py: 1,
                cursor: 'pointer',
                border: selected.includes(cat) ? '2px solid #0d5db6' : '1px solid #c4c4c4',
                bgcolor: selected.includes(cat) ? '#e3f2fd' : '#fff',
                transition: '0.3s',
                minWidth: 180,
                '&:hover': { boxShadow: '0 0 10px rgba(0,0,0,0.15)' },
              }}
              onClick={() => toggleCategory(cat)}
            >
              <Checkbox checked={selected.includes(cat)} sx={{ color: '#1976d2', p: 0.5 }} />
              <Typography variant="body1" sx={{ ml: 1, fontWeight: 500 }}>
                {cat}
              </Typography>
            </Paper>
          </motion.div>
        ))}
      </Box>
    </Box>
  );
};

export default CategorySelector;
