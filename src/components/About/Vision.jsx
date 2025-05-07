import { Box, Container, Grid, Typography } from "@mui/material";
import img1 from "../../../public/About_3.png";
import Image from "next/image";


const cardDetails = [
    {
        img: img1,
        title: 'Our Vision',
        description: `To become a global leader in packaging and automation by continuously evolving with cutting-edge technology, outstanding service, and industry expertise.`
    },
    {
        img: img1,
        title: 'Our Mission',
        description: `To deliver high-quality, innovative, and cost-effective packaging and material handling solutions that empower businesses to optimize operations and scale efficiently.`
    }
]

export const Vision = () => {
    return (
        <>
            <Box sx={{ display: "flex", justifyContent: "center" }}>
                <Grid container spacing={{xs:5 ,md:10}} marginTop={10} sx={{ width: "90%" }}>

                    {
                        cardDetails.map((card) => {
                            return (
                                <Grid item size={{ xs: 12 ,md:6 }} sx={{ background: "#E7F4FF" }}>
                                    <Box
                                        sx={{
                                            display: "flex",
                                            alignItems: "center",
                                            justifyContent: "center",
                                            padding: {xs:"20px" ,md:"40px"},
                                            gap: "20px",
                                        }}
                                    >
                                        <Image src={card.img} />
                                        <Box>
                                            <Typography
                                                variant="h2"
                                                sx={{ color: "#243E60", fontSize: {xs:"32px" ,md:"48px"} ,marginBottom : {xs:"10px" ,md:"20px"} }}
                                            >
                                                {card.title}
                                            </Typography>
                                            <Typography sx={{ fontSize: "16px" , color : "#000000" ,textAlign :"justify" ,lineHeight :{xs:"20px" ,md:"26px"} }}>
                                                {card.description}
                                            </Typography>
                                        </Box>
                                    </Box>
                                </Grid>
                            )
                        })
                    }

                </Grid>
            </Box>
        </>
    );
};
