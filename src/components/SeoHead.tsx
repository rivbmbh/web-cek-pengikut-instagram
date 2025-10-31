import { Helmet } from "react-helmet-async";

interface SeoProps {
  title: string;
  description: string;
  url?: string;
  image?: string;
}

export function SeoHead({
  title,
  description,
  url = "https://instacik.vercel.app",
  image = "https://instacik.vercel.app/og_image.png",
}: SeoProps) {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={url} />

      {/* Open Graph */}
      <meta property="og:type" content="website" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={image} />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
    </Helmet>
  );
}
