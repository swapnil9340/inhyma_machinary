// components/SeoHead.js
import Head from "next/head";

const SeoHead = ({ title, description, image, url, keywords }) => {
  const defaultTitle = "Inhyma | Innovating the Future with Smart Solutions";
  const defaultDescription =
    "Welcome to Inhyma – your destination for cutting-edge technology, innovative products, and transformative ideas. Discover how we can power your future.";
  const defaultImage =
    "https://res.cloudinary.com/dfw6t8scb/image/upload/v1750506720/hn7stb3ezmc523uni6k4ijai6_s1p5qk.png";
  const defaultKeywords = "Inhyma, smart solutions, industrial automation, machinery, innovation, AI technology, engineering products, future tech";

  const canonicalUrl = url || `https://www.inhyma.com/`;

  return (
    <Head>
      {/* Primary Meta Tags */}
      <title>{title || defaultTitle}</title>
      <meta name="description" content={description || defaultDescription} />
      <meta name="keywords" content={keywords || defaultKeywords} />
      <link rel="canonical" href={canonicalUrl} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:title" content={title || defaultTitle} />
      <meta property="og:description" content={description || defaultDescription} />
      <meta property="og:image" content={image || defaultImage} />
      <meta property="og:url" content={canonicalUrl} />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title || defaultTitle} />
      <meta name="twitter:description" content={description || defaultDescription} />
      <meta name="twitter:image" content={image || defaultImage} />
    </Head>
  );
};

export default SeoHead;
