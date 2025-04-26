import {
    Box,
    Typography,
    Grid,
    Stack,
    IconButton,
    useMediaQuery,
    useTheme,
    Link,
    Divider,
} from "@mui/material";
import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import Image from "next/image";

const Footer = () => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down("md"));

    // Data for better maintainability
    const companyInfo = {
        logo: "/INHYMA_FINAL_LOGO_C2C 1 (1).png",
        description: "Leading provider of packaging machinery solutions for industries worldwide.",
        socialLinks: [
            { icon: <FacebookIcon />, url: "#", label: "Facebook" },
            { icon: <InstagramIcon />, url: "#", label: "Instagram" },
            { icon: <LinkedInIcon />, url: "#", label: "LinkedIn" },
        ],
    };

    const productCategories = [
        {
            title: "Sealing Solutions",
            items: [
                { name: "Vacuum Sealing Machines", url: "#" },
                { name: "Induction Sealers", url: "#" },
                { name: "L Sealers & Tunnels", url: "#" },
                { name: "Carton Sealers", url: "#" },
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
        {
            title: "Packaging Solutions",
            items: [
                { name: "Strapping Machines", url: "#" },
                { name: "Stretch Wrappers", url: "#" },
                { name: "Vertical Packaging", url: "#" },
                { name: "Flow Wrap Machines", url: "#" },
            ],
        },
    ];

    const contactInfo = [
        {
            icon: <EmailIcon fontSize="small" />,
            text: "inhymasolutionsdm@gmail.com",
            url: "mailto:inhymasolutionsdm@gmail.com",
        },
        {
            icon: <PhoneIcon fontSize="small" />,
            text: "+91 808-1007",
            url: "tel:+918081007",
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
        <Box component="footer" sx={{ bgcolor: "#E7F4FF", pt: 4, pb: 2 }}>
  <Box sx={{ px: { xs: 2, sm: 4, md: 8 }, mx: "auto" }}>
    <Grid container spacing={6}>
      
      {/* Company Info */}
      <Grid item xs={12} md={4}>
        <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
          <Image
            src={companyInfo.logo}
            alt="INHYMA Solutions LLP"
            width={120}
            height={120}
            priority
          />
          <Typography variant="body2" color="text.secondary">
            {companyInfo.description}
          </Typography>
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
      <Grid item xs={12} md={4}>
        <Typography variant="h6" fontWeight={600} gutterBottom>
          Our Solutions
        </Typography>
        <Grid container spacing={2}>
          {productCategories.map((category, index) => (
            <Grid item xs={12} sm={6} key={index}>
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
      <Grid item xs={12} md={4}>
        <Typography variant="h6" fontWeight={600} gutterBottom>
          Contact Us
        </Typography>
        <Stack spacing={2}>
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
      © {new Date().getFullYear()} INHYMA Solutions LLP. All rights reserved.
    </Typography>
  </Box>
</Box>
    );
};

export default Footer;