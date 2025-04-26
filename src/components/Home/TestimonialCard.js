import {
    Box,
    Typography,
    IconButton,
    useTheme,
    useMediaQuery,
    Avatar,
} from "@mui/material";
import { useState, useRef } from "react";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";

const TestimonialCard = () => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

    const scrollRef = useRef(null);

    const scroll = (direction) => {
        const container = scrollRef.current;
        if (container) {
            const amount = isMobile ? 260 : 320;
            container.scrollBy({
                left: direction === "left" ? -amount : amount,
                behavior: "smooth",
            });
        }
    };

    return (
        <Box sx={{ py: 6 }}>
            <Typography variant="h5" fontWeight={600} textAlign="center">
                <Box component="span" sx={{ borderLeft: "4px solid #f44336", pl: 1 }}>
                    Testimonials
                </Box>
            </Typography>

            <Box sx={{ position: "relative", mt: 6, px: 4 }}>
                {/* Scroll Arrows */}
                <IconButton
                    onClick={() => scroll("left")}
                    sx={{
                        position: "absolute",
                        top: "50%",
                        left: 0,
                        transform: "translateY(-50%)",
                        bgcolor: "#fff",
                        boxShadow: 1,
                        zIndex: 2,
                        "&:hover": { bgcolor: "#f5f5f5" },
                    }}
                >
                    <ChevronLeftIcon />
                </IconButton>

                <IconButton
                    onClick={() => scroll("right")}
                    sx={{
                        position: "absolute",
                        top: "50%",
                        right: 0,
                        transform: "translateY(-50%)",
                        bgcolor: "#fff",
                        boxShadow: 1,
                        zIndex: 2,
                        "&:hover": { bgcolor: "#f5f5f5" },
                    }}
                >
                    <ChevronRightIcon />
                </IconButton>

                {/* Scrollable Testimonials */}
                <Box
                    ref={scrollRef}
                    sx={{
                        display: "flex",
                        gap: 3,
                        overflowX: "auto",
                        scrollBehavior: "smooth",
                        "&::-webkit-scrollbar": { display: "none" },
                        scrollbarWidth: "none",
                        py: 2,
                    }}
                >
                    {[...Array(6)].map((_, idx) => (
                        <Box
                        elevation={10}
                            key={idx}
                            sx={{
                                minWidth: 320,
                                maxWidth: 340,
                                bgcolor: "#fff",
                                borderRadius: 2,
                                boxShadow: "0 4px 12px rgba(0,0,0,0.05)",
                                p: 3,
                                position: "relative",
                            }}
                        >
                            {/* Quote Icon Circle */}
                            <Box
                           
                                sx={{
                                    position: "absolute",
                                    top: -14,
                                    left: 20,
                                    width: 40,
                                    height: 40,
                                    bgcolor: "#0C4DA2",
                                    color: "#fff",
                                    borderRadius: "50%",
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    fontSize: 24,
                                    fontWeight: "bold",
                                }}
                            >
                                “
                            </Box>

                            {/* Stars */}
                            <Box sx={{ mt: 3, mb: 1 }}>
                                {Array.from({ length: 5 }).map((_, i) => (
                                    <Typography
                                        key={i}
                                        component="span"
                                        sx={{ color: "#FF6B6B", fontSize: 20 }}
                                    >
                                        ★
                                    </Typography>
                                ))}
                            </Box>

                            {/* Testimonial Text */}
                            <Typography
                                variant="body2"
                                color="text.secondary"
                                sx={{ lineHeight: 1.6, mb: 3 }}
                            >
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            </Typography>

                            {/* Profile */}
                            <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
                                <Avatar
                                    src="/images/user-avatar.jpg"
                                    alt="Justus Menke"
                                    sx={{ width: 40, height: 40 }}
                                />
                                <Box>
                                    <Typography
                                        variant="subtitle2"
                                        fontWeight={600}
                                        color="text.primary"
                                    >
                                        Justus Menke
                                    </Typography>
                                    <Typography
                                        variant="caption"
                                        color="text.secondary"
                                    >
                                        CEO Eronaman
                                    </Typography>
                                </Box>
                            </Box>
                        </Box>
                    ))}
                </Box>
            </Box>
        </Box>
    );
};

export default TestimonialCard;
