import { Helmet } from "react-helmet-async";

type Props = {
  title: string;
  description: string;
  keywords?: string;
  canonical?: string;
};

export default function SEOHead({
  title,
  description,
  keywords,
  canonical,
}: Props) {
  return (
    <Helmet>
      <title>{title}</title>

      <meta name="description" content={description} />
      {keywords && <meta name="keywords" content={keywords} />}

      {canonical && <link rel="canonical" href={canonical} />}
    </Helmet>
  );
}