import {
    Box,
    Typography,
    Card,
    CardContent,
    Button,
    IconButton,
} from "@mui/material";
import {  useRef } from "react";
import Image from "next/image";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import { useRouter } from "next/router";

const ProductCard = ({allProducts}) => {
    const scrollRef = useRef(null);
    const router = useRouter()

    const scroll = (direction) => {
        const container = scrollRef.current;
        if (container) {
            const amount = 220;
            container.scrollBy({
                left: direction === "left" ? -amount : amount,
                behavior: "smooth",
            });
        }
    };


    const handleNavigate = (item)=>{
      router.push(`/product_description/${item._id}`)
    }


   
   
    return (
        <Box sx={{ backgroundColor: "#E7F4FF", py: 6 }}>
            <Typography variant="h5" fontWeight={600} textAlign="center">
                <Box component="span" sx={{ borderLeft: "4px solid #f44336", pl: 1 }}>
                Top Performing Machines
                </Box>
            </Typography>

            <Box sx={{ position: "relative", mt: 5, px: 4 }}>
                {/* Scroll Buttons */}
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

                {/* Scrollable Product Cards */}
                <Box
                    ref={scrollRef}
                    sx={{
                        display: "flex",
                        gap: 2,
                        overflowX: "auto",
                        scrollBehavior: "smooth",
                        "&::-webkit-scrollbar": { display: "none" },
                        scrollbarWidth: "none",
                        pb: 1,
                    }}
                >
                    {allProducts.slice(0 ,10).map((item, i) => (
                     <Box  key={i}sx={{ display: "flex" }}>
                     <Card
                       key={i}
                       elevation={0}
                       sx={{
                         flex: "0 0 auto",
                         width: 260,
                         backgroundColor: "#fff",
                         borderRadius: 2,
                         boxShadow: "0px 4px 12px rgba(0,0,0,0.05)",
                         textAlign: "center",
                         display: "flex",
                         flexDirection: "column",
                         justifyContent: "space-between",
                       }}
                     >
                       <Box sx={{ display: "flex", justifyContent: "center", pt: 2 }}>
                         <Image
                           src={item?.images?.[0]?.url}
                           alt={item.name}
                           width={180}
                           height={140}
                           style={{ objectFit: "contain" }}
                         />
                       </Box>
                   
                       <CardContent sx={{ flexGrow: 1, display: "flex", flexDirection: "column" }}>
                         <Typography
                           variant="h6"
                           fontWeight={500}
                           sx={{ color: "#0C4DA2", fontSize: "16px", mb: 1 }}
                         >
                           {item?.name}
                         </Typography>
                         <Typography
                           variant="body2"
                           sx={{ color: "#555", fontSize: "12px", mb: 2 }}
                         >
                           An efficient and reliable shrink-wrapping solution designed for
                           securing products with a tight, professional shrink film finish.
                         </Typography>
                   
                         
                         <Box sx={{ mt: "auto" }}>
                           <Button
                             variant="contained"
                             fullWidth
                             sx={{ backgroundColor: "#0C4DA2", textTransform: "none", fontSize: "14px" }}
                             onClick={()=>handleNavigate(item)}
                           >
                             View Product
                           </Button>
                         </Box>
                       </CardContent>
                     </Card>
                   </Box>
                   
                    ))}
                </Box>
            </Box>
        </Box>
    );
};

export default ProductCard;
