import { Box, Typography, Card, CardContent, IconButton } from "@mui/material";
import { useRef, useState } from "react";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";

const categories = [
    { label: "Vacuum Machine", value: "vacuum", icon: "/Group.png" },
    { label: "Sealing Machine", value: "sealing", icon: "/Group.png" },
    { label: "Induction Sealing Machine", value: "induction", icon: "/Group.png" },
    { label: "Box Taper", value: "box", icon: "/Group.png" },
    { label: "Cartoner", value: "cartoner", icon: "/Group.png" },
    { label: "Pouch Filler", value: "pouch", icon: "/Group.png" },
];

export default function CategoryCarousel() {
    const [selected, setSelected] = useState("induction");
    const scrollRef = useRef(null);

    const scroll = (direction) => {
        const scrollContainer = scrollRef.current;
        const scrollAmount = 220; // depends on card width
        if (scrollContainer) {
            scrollContainer.scrollBy({
                left: direction === "left" ? scrollAmount : -scrollAmount,
                behavior: "smooth",
            });
        }
    };

    return (
        <Box>
            <Typography variant="h5" fontWeight={600} textAlign="center" >
                <Box component="span" sx={{ borderLeft: "4px solid #f44336", pl: 1 }}>
                    Product Categories
                </Box>
            </Typography>
            <Box sx={{ position: "relative", px: 2, py: 4 }}>
                <IconButton
                    onClick={() => scroll("left")}
                    sx={{
                        position: "absolute",
                        top: "50%",
                        left: 0,
                        transform: "translateY(-50%)",
                        zIndex: 1,
                        bgcolor: "#fff",
                        boxShadow: 2,
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
                        zIndex: 1,
                        bgcolor: "#fff",
                        boxShadow: 2,
                    }}
                >
                    <ChevronRightIcon />
                </IconButton>

                {/* Scrollable Cards */}
                <Box
                    ref={scrollRef}
                    sx={{
                        display: "flex",
                        overflowX: "auto",
                        gap: 2,
                        px: 4,
                        scrollbarWidth: "none",
                        "&::-webkit-scrollbar": { display: "none" },
                    }}
                >
                    {categories.map((cat) => (
                        <Card
                        elevation={0}
                            key={cat.value}
                            onClick={() => setSelected(cat.value)}
                            sx={{
                                minWidth: 200,
                                flexShrink: 0,
                                cursor: "pointer",
                                textAlign: "center",
                                //   bgcolor: selected === cat.value && "#216ACC" : " #E7F4FF",
                                //   boxShadow: selected === cat.value ? 4 : 1,
                                transition: "0.3s",
                            }}
                        >
                            <CardContent sx={{ bgcolor: selected === cat.value ? "#216ACC" : " #E7F4FF", color: selected === cat.value && "white", display: 'flex', alignItems: 'center', gap: "20px", paddingBottom: '10px !important' }}>
                                <img src={cat.icon} alt={cat.label} height={50} width={50} style={{ width: "50px", height: "50px" }} />
                                <Typography fontWeight={500} fontSize={"14px"}>{cat.label}</Typography>
                            </CardContent>
                        </Card>
                    ))}
                </Box>
            </Box>
        </Box>
    );
}
