import { Box, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";

const countries = [
    { name: "India", icon: "/Vector (2).png" },
    { name: "China", icon: "/Vector (3).png" },
    { name: "Hong Kong", icon: "/Vector (4).png" },
    { name: "UAE", icon: "/Vector 9.png" },
    { name: "Kenya", icon: "/Vector 10.png" },
    { name: "Uganda", icon: "/image.png" },
    { name: "Rwanda", icon: "/Vector 11.png" },
];

const GlobalPresenceSection = () => {
    return (
        <section style={{ background: "#E7F4FF", padding: "60px 20px" }}>
            <div style={{ maxWidth: "1200px", margin: "0 auto", textAlign: "center" }}>
                <Typography component={'h2'}  sx={{ fontSize : {xs:"1.2rem" , md:"1.6rem"}, fontWeight: 'bold'  }}>
                    <span style={{ borderLeft: "4px solid #f44336", paddingLeft: "12px" }}>
                        A Global Brand with Local Access
                    </span>
                </Typography>

                <Box sx={{ marginTop: "40px", display: {xs:"block",md:"flex"}, gap: "32%" }}>
                    <div style={{ fontSize: "18px", fontWeight: "500", color: "#555", display: "flex", alignItems: "center", justifyContent: "center", gap: "10px", marginBottom: "20px" }}>
                        <Image height={30} width={30} src="/serving.png" alt="serving icon" style={{ width: "30px", height: "30px" }} />

                        <span style={{ fontSize: "20px", fontWeight: "500" }}> Serving</span>
                    </div>

                    <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "20px" }}>
                        {countries.map((country, index) => (
                            <div key={index} style={{ textAlign: "center", gap: "10px", display: "grid" }}>
                                <div style={{ fontSize: "14px", fontWeight: "500", color: "#333", background: "white" }}>{country.name}</div>

                                <Image
                                    src={country.icon}
                                    width={48}
                                    height={48}
                                    style={{
                                        width: "48px",
                                        height: "48px",
                                        margin: "0 auto 8px",

                                        backgroundSize: "contain",
                                        backgroundRepeat: "no-repeat",
                                        backgroundPosition: "center",
                                    }}
                                    alt="country icon"
                                ></Image>
                            </div>
                        ))}
                    </div>
                </Box>

                <Box sx={{ marginTop: "20px", display: {xs:"block",md:"flex"}, gap: "21%" }}>
                    <div style={{ fontSize: "18px", fontWeight: "500", color: "#555", display: "flex", alignItems: "center", justifyContent: "center", gap: "10px", marginBottom: "20px" }}>
                    <Image height={30} width={30} src="/Group 229.png" alt="serving icon" style={{ width: "30px", height: "30px" }} />

                        <span style={{ fontSize: "20px", fontWeight: "500" }}> Offices & Warehouses</span>
                    </div>

                    <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "20px" }}>
                        {countries.map((country, index) => (
                            <div key={index} style={{ textAlign: "center", gap: "10px", display: "flex" }}>
                                <svg width="18" height="18" viewBox="0 0 32 42" fill="none" xmlns="http://www.w3.org/2000/svg">

                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M15.9719 11.8125C13.8182 11.8125 12.0727 13.5752 12.0727 15.75C12.0727 17.9248 13.8182 19.6875 15.9719 19.6875C18.1255 19.6875 19.8711 17.9248 19.8711 15.75C19.8711 13.5752 18.1255 11.8125 15.9719 11.8125ZM15.9719 22.3125C12.3833 22.3125 9.47318 19.3751 9.47318 15.75C9.47318 12.1249 12.3833 9.1875 15.9719 9.1875C19.5605 9.1875 22.4706 12.1249 22.4706 15.75C22.4706 19.3751 19.5605 22.3125 15.9719 22.3125ZM15.9719 0C7.3585 0 0.375 7.05206 0.375 15.75C0.375 22.3361 13.3789 42.0144 15.9719 42C18.5246 42.0144 31.5688 22.2469 31.5688 15.75C31.5688 7.05206 24.5852 0 15.9719 0Z" fill="#1955A6" />
                                </svg>
                                <div style={{ fontSize: "14px", fontWeight: "500", color: "#333" }}>{country.name}</div>
                            </div>
                        ))}
                    </div>
                </Box>
            </div>

        </section>
    );
};

export default GlobalPresenceSection;
