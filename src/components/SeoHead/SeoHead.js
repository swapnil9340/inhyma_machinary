// components/SeoHead.js
import Head from "next/head";
import { useRouter } from "next/router";
const SeoHead = ({ title, description, image, url }) => {
     const router = useRouter();
  const defaultTitle = "Default Website Title";
  const defaultDescription = "This is the default description of the website.";
  const defaultImage = "/default-og-image.jpg"; // Place a fallback image in /public
  const canonicalUrl = url || `${baseUrl}${router.asPath.split("?")[0]}`;
  return (
    <Head>
      {/* Primary Meta Tags */}
      <title>{title || defaultTitle}</title>
      <meta name="description" content={description || defaultDescription} />
      <link rel="canonical" href={canonicalUrl} />
      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:title" content={title || defaultTitle} />
      <meta
        property="og:description"
        content={description || defaultDescription}
      />
      <meta property="og:image" content={image || defaultImage} />
      <meta property="og:url" content={canonicalUrl} />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title || defaultTitle} />
      <meta
        name="twitter:description"
        content={description || defaultDescription}
      />
      <meta name="twitter:image" content={image || defaultImage} />
    </Head>
  );
};

export default SeoHead;
