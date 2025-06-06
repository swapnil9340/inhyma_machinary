import { Box, Typography, Grid, Card } from "@mui/material";
import Image from "next/image";

const industries = [
    {
        title: "Food & Beverage",
        icon: <svg width="70" height="69" viewBox="0 0 70 69" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M64.1338 25.6407C64.1338 25.6407 63.4049 40.3961 50.4055 39.1867C50.3448 39.1867 48.8869 26.8501 64.1338 25.6407ZM53.7465 44.8712C55.5081 43.2384 57.7556 42.2103 60.3677 42.2103C65.5917 42.2103 69.8438 46.383 69.8438 51.5837C69.8438 51.7651 69.8438 51.8861 69.8438 52.128C69.7224 54.1841 69.0542 56.7239 67.5355 59.8081C67.5355 59.8081 64.8628 64.8273 62.7975 67.1858L62.6152 67.3672C61.6433 68.3348 60.1247 69 58.6061 69C56.6622 69 55.0221 68.0929 53.9287 66.5811C52.8353 68.0324 51.1952 69 49.2514 69C47.672 69 46.2749 68.3348 45.1815 67.3672L44.9992 67.1858C42.8732 64.8878 40.2612 59.8081 40.2612 59.8081C38.7425 56.6635 38.0743 54.1841 37.9529 52.128H37.8314C37.8314 51.9465 37.8314 51.8256 37.8314 51.5837C37.8314 46.383 42.0228 42.2103 47.3075 42.2103C49.6766 42.1499 52.0456 43.1779 53.7465 44.8712ZM11.2859 0H22.7667V4.23313H11.2859V0ZM3.08537 30.5995C3.08537 31.9904 5.0292 33.5022 6.54782 31.7485L10.7392 26.2454C10.9214 26.0035 11.2252 25.4592 11.2252 24.915V11.7318C11.2252 8.10342 7.76271 11.0666 6.48707 12.397L3.57133 16.0859C3.08537 16.6906 3.08537 16.9325 3.08537 17.2954V30.5995ZM0.412598 17.1139C0.412598 16.3278 0.655576 15.6021 1.08079 14.9974L6.24409 8.52673C7.70197 6.71253 9.34208 6.95443 9.34208 6.95443H22.5844C30.785 7.68011 30.785 15.5416 30.785 15.5416V66.0973C30.785 67.4277 29.6916 68.5162 28.3552 68.5162H2.90313C1.56675 68.5162 0.473341 67.4277 0.473341 66.0973L0.412598 17.1139Z" fill="#3C8FFF" />
        </svg>
        ,
    },
    {
        title: "Pharmaceuticals",
        icon: <svg width="49" height="67" viewBox="0 0 49 67" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M9.95395 19.1429L0.293945 28.7143V67H48.5939V28.7143L38.9339 19.1429L9.95395 19.1429ZM19.6139 28.7143H29.2739V38.2857H38.9339V47.8571H29.2739V57.4286H19.6139V47.8571H9.95395V38.2857H19.6139V28.7143ZM9.95395 0V14.3571H38.9339V0H9.95395Z" fill="#3C8FFF" />
        </svg>
        ,
    },
    {
        title: "Logistics & E-Commerce",
        icon: <svg width="86" height="64" viewBox="0 0 86 64" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M74.3008 9V43.6025H0.918945V55.7103H8.01558C7.77257 56.3731 7.63967 57.0891 7.63967 57.8358C7.63967 61.2348 10.3902 64 13.771 64C17.1519 64 19.9024 61.2348 19.9024 57.8358C19.9024 57.0891 19.7695 56.3731 19.5265 55.7103H60.7146C60.4716 56.3731 60.3387 57.0891 60.3387 57.8358C60.3387 61.2348 63.0892 64 66.4701 64C69.8511 64 72.6016 61.2348 72.6016 57.8358C72.6016 57.0891 72.4687 56.3731 72.2257 55.7103H79.3223V14.0482H85.4439V9H74.3008Z" fill="#3C8FFF"/>
        <path d="M28.5474 22V27.8703H23.6027V22H15.0063V39H37.1438V22H28.5474Z" fill="#3C8FFF"/>
        <path d="M56.3314 22V27.8703H51.162V22H42.1748V39H65.3186V22H56.3314Z" fill="#3C8FFF"/>
        <path d="M42.6348 0V5.87051H37.6902V0H29.0938V17H37.6902H42.6348H51.2313V0H42.6348Z" fill="#3C8FFF"/>
        </svg>
        
    },
    // Add more if needed
];

const IndustriesServed = () => {
    return (
        <Box sx={{ py: 2 }}>
            <Box maxWidth="lg" mx="auto" px={2} sx={{ display: "flex", justifyContent: "space-between" ,alignItems :"center" }}>
                <Typography
                    variant="h5"
                    fontWeight={600}
                    sx={{ mb: {xs:4 , md : 0}, display: "flex", alignItems: "center"  }}
                >
                    <Box
                        component="span"
                        sx={{ borderLeft: "4px solid #f44336", pl: 2, width: "13rem" , fontSize : {xs:"1.2rem" , md:"1.6rem"}, fontWeight: 'bold' }}
                    >
                        Serving 6+ Key Industries
                    </Box>
                </Typography>

                <Grid container spacing={3} sx={{ width: "75%" }}>
                    {industries.map((industry, index) => (
                        <Grid item size={{xs:12 , md:4}} key={index}>
                            <Card
                                elevation={0}
                                sx={{
                                    border: "1px solid #E0E0E0",
                                    borderRadius: 2,
                                    textAlign: "center",
                                    height:"100%",
                                    display:"grid",
                                    alignItems:"center",
                                    py: 2,
                                    px: 2,
                                    backgroundColor: "#fff",
                                    transition: "all 0.3s ease",
                                    "&:hover": {
                                        boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.1)",
                                        transform: "translateY(-4px)",
                                    },
                                    "& svg" : {
                                        height : {xs:"35px" ,md:"60px"}
                                    }
                                }}
                            >
                                <Box sx={{ display: "flex", justifyContent: "center" }}>
                                    {industry.icon}
                                    {/* <Image
                                        src={industry.icon}
                                        alt={industry.title}
                                        width={60}
                                        height={60}
                                    /> */}
                                </Box>
                                <Typography
                                    variant="subtitle1"
                                    fontWeight={600}
                                    sx={{ color: "#0C4DA2" }}
                                >
                                    {industry.title}
                                </Typography>
                            </Card>
                        </Grid>
                    ))}
                </Grid>
            </Box>
        </Box>
    );
};

export default IndustriesServed;
