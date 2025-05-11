import {
  Box,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Container,
} from "@mui/material";

export default function ApplicationsTable() {
  return (
    <Box sx={{ py: 6 }}>
      <Container maxWidth="xl" >
      <Typography
        variant="h5"
        align="center"
        sx={{ color: "#4a5b73", fontWeight: "bold", mb: 4 }}
      >
        Applications Across Multiple Sectors
      </Typography>

      <TableContainer
        component={Paper}
        elevation={0}
        sx={{ boxShadow: "none" }}
      >
        <Table border={2}>
          <TableHead>
            <TableRow sx={{ backgroundColor: "#1955A6" }}>
              <TableCell
                sx={{
                  color: "white",
                  borderRight: "1px solid white",
                  fontSize:{xs:"20px" ,md:"24px"}
                }}
              >
                Sector
              </TableCell>
              <TableCell sx={{ color: "white", fontSize:{xs:"20px" ,md:"24px"} ,borderRight: "1px solid white",  }}>
                Use Case
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {[
              {
                sector: "Food & Beverage",
                useCase: "Meat, Poultry, Seafood, Ready Meals",
              },
              {
                sector: "Pharmaceutical",
                useCase: "Sterile Medical Devices & Kits",
              },
              {
                sector: "Electronics",
                useCase: "Moisture-Sensitive Components",
              },
              {
                sector: "Chemicals",
                useCase: "Leak-Proof Containment Of Powders Or Granules",
              },
            ].map((row, index) => (
              <TableRow key={index}>
                <TableCell
                  sx={{
                    border: "1px solid #1955A6",
                    fontWeight :"bold",
                    color:"#606872",
                    fontSize:{xs:"16" ,md:"20px"}
                  }}
                >
                  {row.sector}
                </TableCell>
                <TableCell
                  sx={{
                    border: "1px solid #1955A6",
                    color :"#606872",
                    fontSize:{xs:"16" ,md:"20px"}
                  }}
                >
                  {row.useCase}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      </Container>
    </Box>
  );
}
