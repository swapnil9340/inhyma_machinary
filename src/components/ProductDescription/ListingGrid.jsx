import { Grid, Typography, Container, Box, TableContainer, Table, TableBody, TableCell, TableRow } from "@mui/material";
import Image from "next/image";
import vacuumMachine from "../../../public/vacuumMachine.png"

export default function ListingGrid({details}) {


    const specificationString = details?.specification || "";

  const parsedSpecs = specificationString
    .trim()
    .split("\n")
    .map((line) => {
      const [key, ...rest] = line.split("\t");
      return { key: key.trim(), value: rest.join(" ").trim() };
    });

  return (
     <Container maxWidth="xl" sx={{ py: 5 }}>
          {/* Section Title */}
          <Typography
            variant="h5"
            fontWeight="bold"
            textAlign="center"
            sx={{ color: "#5a6b7a", mb: 4 ,fontSize : {xs:"25px" ,md:"35px"} }}
          >
            Product Listing Grid
          </Typography>
    
          {/* Headers */}
          <Grid container spacing={0} mb={2} sx={{ background: "#2157a4", p: 1 }}>
            <Grid item size={{ xs: 12, md: 6 }} >
              <Typography
                variant="subtitle1"
                fontWeight="bold"
                color="white"
                textAlign="center"
              >
                VACUUM MACHINE
              </Typography>
            </Grid>
            <Grid item size={{ xs: 12, md: 6 }} sx={{display : {xs:'none' ,md:"block"}}} >
              <Typography
                variant="subtitle1"
                fontWeight="bold"
                color="white"
                textAlign="center"
              >
                Specifications
              </Typography>
            </Grid>
          </Grid>
    
          {/* Content */}
          <Grid container spacing={4} sx={{ placeItems: "center" }}>
            {/* Left Side: Image + Description */}
            <Grid item size={{ xs: 12, md: 6 }} sx={{ placeItems: "center" }}>
              <Box mb={2} sx={{ width:"50%" , height:"100%" }}>
                <Image
                  src={details.images[0].url}
                  alt="Household Vacuum Sealer"
                  width={100}
                  height={100}
                  quality={100}
                  style={{ width: "100%", height: "100%" }}
                />
           
              </Box>
            </Grid>
    
             <Grid item xs={12} md={6}>
          <Box
            sx={{
              height: { xs: "auto", md: "500px" },
              overflowY: "auto",
              border: "1px solid #ccc",
              p: 2,
            }}
          >
            <TableContainer>
              <Table size="small">
                <TableBody>
                  {parsedSpecs.map((spec, index) => (
                    <TableRow key={index}>

                      <TableCell sx={{ fontWeight: "bold", width: "40%" }}>
                        {spec.key}
                      </TableCell>
                      <TableCell>{spec.value}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </Box>
        </Grid>
          </Grid>
        </Container>
  );
}


// import {
//   Grid,
//   Typography,
//   Container,
//   Box,
//   Table,
//   TableBody,
//   TableCell,
//   TableRow,
//   TableContainer,
//   Paper,
// } from "@mui/material";
// import Image from "next/image";

// export default function ListingGrid({ details }) {
//   if (!details) return null;

//   const imageUrl = details?.images?.[0]?.url || "/placeholder.png";
//   const specificationString = details?.specification || "";

//   const parsedSpecs = specificationString
//     .trim()
//     .split("\n")
//     .map((line) => {
//       const [key, ...rest] = line.split("\t");
//       return { key: key.trim(), value: rest.join(" ").trim() };
//     });

//   return (
//     <Container maxWidth="xl" sx={{ py: 5 }}>
//       {/* Section Title */}
//       <Typography
//         variant="h5"
//         fontWeight="bold"
//         textAlign="center"
//         sx={{ color: "#5a6b7a", mb: 4, fontSize: { xs: "25px", md: "35px" } }}
//       >
//         Product Listing Grid
//       </Typography>

//       {/* Headers */}
//       <Grid container spacing={0} mb={2} sx={{ background: "#2157a4", p: 1 }}>
//         <Grid item xs={12} md={6}>
//           <Typography
//             variant="subtitle1"
//             fontWeight="bold"
//             color="white"
//             textAlign="center"
//           >
//             VACUUM MACHINE
//           </Typography>
//         </Grid>
//         <Grid item xs={12} md={6} sx={{ display: { xs: "none", md: "block" } }}>
//           <Typography
//             variant="subtitle1"
//             fontWeight="bold"
//             color="white"
//             textAlign="center"
//           >
//             Specifications
//           </Typography>
//         </Grid>
//       </Grid>

//       {/* Content */}
//       <Grid container spacing={4} alignItems="stretch">
//         {/* Left: Image */}
//         <Grid item xs={12} md={6}>
//           <Box
//             sx={{
//               height: { xs: "auto", md: "500px" },
//               display: "flex",
//               alignItems: "center",
//               justifyContent: "center",
//               border: "1px solid #ccc",
//               p: 2,
//             }}
//           >
//             <Image
//               src={imageUrl}
//               alt="Vacuum Machine"
//               width={400}
//               height={300}
//               quality={100}
//               style={{ width: "100%", height: "auto", objectFit: "contain" }}
//             />
//           </Box>
//         </Grid>

//         {/* Right: Scrollable Table */}
//         <Grid item xs={12} md={6}>
//           <Box
//             sx={{
//               height: { xs: "auto", md: "500px" },
//               overflowY: "auto",
//               border: "1px solid #ccc",
//               p: 2,
//             }}
//           >
//             <TableContainer>
//               <Table size="small">
//                 <TableBody>
//                   {parsedSpecs.map((spec, index) => (
//                     <TableRow key={index}>
//                       <TableCell sx={{ fontWeight: "bold", width: "40%" }}>
//                         {spec.key}
//                       </TableCell>
//                       <TableCell>{spec.value}</TableCell>
//                     </TableRow>
//                   ))}
//                 </TableBody>
//               </Table>
//             </TableContainer>
//           </Box>
//         </Grid>
//       </Grid>
//     </Container>
//   );
// }
