// pages/api/sitemap.js
import connectDB from "@/backend/config/db";
import Product from "@/backend/models/Product";

export default async function handler(req, res) {
  await connectDB();

  const baseUrl = "https://www.inhyma.com"; // Replace with your domain

  // Static navbar links
  const navItems = [
    { label: "Home", href: "/", priority: 1.0 },
    { label: "Product", href: "/product", priority: 0.9 },
    { label: "About Us", href: "/about", priority: 0.8 },
    { label: "Contact Us", href: "/contact-us", priority: 0.8 },
    { label: "Blogs", href: "/blog", priority: 0.7 },
  ];

  try {
    const products = await Product.find({}, "_id updatedAt");

    const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">

  ${navItems
    .map(
      (item) => `
  <url>
    <loc>${baseUrl}${item.href}</loc>
    <changefreq>weekly</changefreq>
    <priority>${item.priority}</priority>
  </url>`
    )
    .join("")}

  ${products
    .map(
      (product) => `
  <url>
    <loc>${baseUrl}/product-details/${product._id}</loc>
    <lastmod>${product.updatedAt.toISOString()}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.7</priority>
  </url>`
    )
    .join("")}

</urlset>`;

    res.setHeader("Content-Type", "application/xml");
    res.write(sitemap);
    res.end();
  } catch (error) {
    console.error("Sitemap generation error:", error);
    res.status(500).json({ error: "Sitemap generation failed" });
  }
}
