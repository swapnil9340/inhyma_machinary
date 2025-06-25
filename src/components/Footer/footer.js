import {
  Box,
  Typography,
  Grid,
  Stack,
  IconButton,
  useMediaQuery,
  useTheme,
  Divider,
} from "@mui/material";
import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import YouTubeIcon from '@mui/icons-material/YouTube';
import Image from "next/image";
import Link from "next/link";
import XIcon from '@mui/icons-material/X';
const Footer = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  // Data for better maintainability
  const companyInfo = {
    logo: "/INHYMA_FINAL_LOGO_C2C 1 (1).png",
    description:
      "Leading provider of innovative and reliable packaging machinery solutions for diverse industries worldwide, empowering businesses with efficiency and quality.",
    socialLinks: [
      { icon: <FacebookIcon />, url: "https://www.facebook.com/profile.php?id=61574955902850", label: "Facebook" },
      { icon: <InstagramIcon />, url: "https://www.instagram.com/inhyma.solutions/", label: "Instagram" },
      { icon: <YouTubeIcon />, url: "https://www.youtube.com/@Inhymasolutions", label: "YouTube" },
      { icon: <XIcon />, url: "https://x.com/inhymasolutions", label: "" },
    ],
  };

  const productCategories = [
    {
      title: "Our Links",
      items: [
        { name: "Home", url: "/" },
        { name: "Product", url: "/product" },
        { name: "Blogs", url: "/blog" },
        { name: "Contact Us", url: "/contact-us" },
        { name: "About us", url: "/about" },
      ],
    },
    // {
    //     title: "Filling Solutions",
    //     items: [
    //         { name: "Liquid Filling Machines", url: "#" },
    //         { name: "Capping Machines", url: "#" },
    //         { name: "Labeling Machines", url: "#" },
    //         { name: "Printing Machines", url: "#" },
    //     ],
    // },
    // {
    //     title: "Packaging Solutions",
    //     items: [
    //         { name: "Strapping Machines", url: "#" },
    //         { name: "Stretch Wrappers", url: "#" },
    //         { name: "Vertical Packaging", url: "#" },
    //         { name: "Flow Wrap Machines", url: "#" },
    //     ],
    // },
  ];

  const contactInfo = [
    {
      icon: <EmailIcon fontSize="small" />,
      text: "inhymasolutionsdm@gmail.com",
      url: "mailto:inhymasolutionsdm@gmail.com",
    },
    {
      icon: <PhoneIcon fontSize="small" />,
      text: "+91 83558 96311",
      url: "tel:+918355896311",
    },
    {
      icon: <LocationOnIcon fontSize="small" />,
      text: "Office No.42, Lodha Supremus, Wagle Estate, Thane West - 400064",
      url: "https://maps.google.com",
    },
  ];

  return (
    // <Box component="footer" sx={{ bgcolor: "background.paper", pt: 3 }}>
    //     <Box sx={{ px: { xs: 1, sm: 3, lg: 2 }, maxWidth: 1400, mx: "auto" }}>
    //         <Grid container spacing={6}>
    //             {/* Company Info */}
    //             <Grid item xs={12} md={4}>
    //                 <Box sx={{ display: "flex", flexDirection: "column", gap: 1 , width:"350px" }}>
    //                     <Image
    //                         src={companyInfo.logo}
    //                         alt="INHYMA Solutions LLP"
    //                         width={100}
    //                         height={100}
    //                         priority
    //                         // style={{ height: "auto", width: "auto" }}
    //                     />
    //                     <Typography variant="body2" color="text.secondary">
    //                         {companyInfo.description}
    //                     </Typography>
    //                     <Stack direction="row" spacing={1}>
    //                         {companyInfo.socialLinks.map((social, index) => (
    //                             <IconButton
    //                                 key={index}
    //                                 component={Link}
    //                                 href={social.url}
    //                                 aria-label={social.label}
    //                                 sx={{
    //                                     color: "primary.main",
    //                                     bgcolor: "primary.lighter",
    //                                     "&:hover": { bgcolor: "primary.light" },
    //                                 }}
    //                             >
    //                                 {social.icon}
    //                             </IconButton>
    //                         ))}
    //                     </Stack>
    //                 </Box>
    //             </Grid>

    //             {/* Product Categories */}
    //             <Grid item xs={12} md={5}>
    //                 <Typography variant="h6" fontWeight={600} gutterBottom>
    //                     Our Solutions
    //                 </Typography>
    //                 <Grid container spacing={4}>
    //                     {productCategories.map((category, index) => (
    //                         <Grid item xs={6} sm={4} key={index}>
    //                             <Typography variant="subtitle2" fontWeight={600} mb={1}>
    //                                 {category.title}
    //                             </Typography>
    //                             <Stack spacing={1}>
    //                                 {category.items.map((item, itemIndex) => (
    //                                     <Link
    //                                         key={itemIndex}
    //                                         href={item.url}
    //                                         color="text.secondary"
    //                                         variant="body2"
    //                                         underline="hover"
    //                                         sx={{
    //                                             transition: "color 0.2s",
    //                                             "&:hover": { color: "primary.main" },
    //                                         }}
    //                                     >
    //                                         {item.name}
    //                                     </Link>
    //                                 ))}
    //                             </Stack>
    //                         </Grid>
    //                     ))}
    //                 </Grid>
    //             </Grid>

    //             {/* Contact Info */}
    //             <Grid item xs={12} md={3}>
    //                 <Typography variant="h6" fontWeight={600} gutterBottom>
    //                     Contact Us
    //                 </Typography>
    //                 <Stack spacing={2}>
    //                     {contactInfo.map((contact, index) => (
    //                         <Stack
    //                             key={index}
    //                             direction="row"
    //                             spacing={1.5}
    //                             alignItems="flex-start"
    //                         >
    //                             <Box
    //                                 sx={{
    //                                     color: "primary.main",
    //                                     mt: "2px",
    //                                     minWidth: 24,
    //                                     display: "flex",
    //                                     justifyContent: "center",
    //                                 }}
    //                             >
    //                                 {contact.icon}
    //                             </Box>
    //                             <Link
    //                                 href={contact.url}
    //                                 color="text.secondary"
    //                                 variant="body2"
    //                                 underline="hover"
    //                                 sx={{
    //                                     transition: "color 0.2s",
    //                                     "&:hover": { color: "primary.main" },
    //                                 }}
    //                             >
    //                                 {contact.text}
    //                             </Link>
    //                         </Stack>
    //                     ))}
    //                 </Stack>
    //             </Grid>
    //         </Grid>

    //         {/* <Divider sx={{ my: 6 }} /> */}
    //     </Box>

    //     {/* Copyright */}
    //     <Box sx={{ bgcolor: "primary.dark", py: 1 , mt:"20px" }}>
    //         <Typography
    //             variant="body2"
    //             color="primary.contrastText"
    //             textAlign="center"
    //         >
    //             © {new Date().getFullYear()} INHYMA Solutions LLP. All rights reserved.
    //         </Typography>
    //     </Box>
    // </Box>
    <Box component="footer" sx={{ bgcolor: "#E7F4FF", pt: 4 }}>
      <Box sx={{ px: { xs: 2, sm: 4, md: 8 }, mx: "auto" }}>
        <Grid container spacing={4}>
          {/* Company Info */}
          <Grid item size={{ xs: 12, sm: 12, md: 6 }}>
            <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
              <Link href={"/"}>
                <Image
                  src={companyInfo.logo}
                  alt="INHYMA Solutions LLP"
                  width={120}
                  height={120}
                  priority
                />
              </Link>
              <Box paddingRight={{ xs: 0, sm: 4 }}>
                <Typography variant="body2" color="text.secondary">
                  {companyInfo.description}
                </Typography>
              </Box>

              <Stack direction="row" spacing={1}>
                {companyInfo.socialLinks.map((social, index) => (
                  <IconButton
                    key={index}
                    component={Link}
                    href={social.url}
                    aria-label={social.label}
                    sx={{
                      color: "primary.main",
                      bgcolor: "primary.lighter",
                      "&:hover": { bgcolor: "primary.light" },
                    }}
                  >
                    {social.icon}
                  </IconButton>
                ))}
              </Stack>
            </Box>
          </Grid>

          {/* Product Categories */}
          <Grid item size={{ xs: 12, sm: 12, md: 2 }}>
            <Grid container spacing={2}>
              {productCategories.map((category, index) => (
                <Grid item xs={12} sm={6} key={index} sx={{ width: "200px" }}>
                  <Typography variant="subtitle2" fontWeight={600} mb={1}>
                    {category.title}
                  </Typography>
                  <Stack spacing={1}>
                    {category.items.map((item, itemIndex) => (
                      <Link
                        key={itemIndex}
                        href={item.url}
                        color="text.secondary"
                        variant="body2"
                        underline="hover"
                        sx={{
                          transition: "color 0.2s",
                          "&:hover": { color: "primary.main" },
                        }}
                      >
                        {item.name}
                      </Link>
                    ))}
                  </Stack>
                </Grid>
              ))}
            </Grid>
          </Grid>

          {/* Contact Info */}
          <Grid item size={{ xs: 12, sm: 12, md: 2 }}>
            <Typography variant="p" fontWeight={600} gutterBottom>
              Contact Us
            </Typography>
            <Stack spacing={1} marginTop={2}>
              {contactInfo.map((contact, index) => (
                <Stack
                  key={index}
                  direction="row"
                  spacing={1.5}
                  alignItems="flex-start"
                >
                  <Box
                    sx={{
                      color: "primary.main",
                      mt: "2px",
                      minWidth: 24,
                      display: "flex",
                      justifyContent: "center",
                    }}
                  >
                    {contact.icon}
                  </Box>
                  <Link
                    href={contact.url}
                    color="text.secondary"
                    variant="body2"
                    underline="hover"
                    sx={{
                      transition: "color 0.2s",
                      "&:hover": { color: "primary.main" },
                    }}
                  >
                    {contact.text}
                  </Link>
                </Stack>
              ))}
            </Stack>
          </Grid>
        </Grid>
      </Box>

      {/* Copyright */}
      <Box sx={{ bgcolor: "primary.dark", py: 1.5, mt: 4 }}>
        <Typography
          variant="body2"
          color="primary.contrastText"
          textAlign="center"
        >
          © {new Date().getFullYear()} INHYMA Solutions LLP. All rights
          reserved.
        </Typography>
        <Typography
          variant="body2"
          color="primary.contrastText"
          textAlign="center"
        >
          {/* <Link style={{color:"#FFFF"}} href="https://vyomedge.com/" variant="body2" underline="hover">
            Developed by Vyomedge
          </Link> */}
        </Typography>
      </Box>
    </Box>
  );
};

export default Footer;
