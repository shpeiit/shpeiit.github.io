import { useEffect, useRef } from "react";
import { Outlet, Meta, Links, Scripts, useLocation } from "react-router";
import Topbar from "./assets/Topbar";
import Footer from "./assets/Footer";
import { useEvents } from "./useEvents";
import "./index.css";
import { BASE_URL } from "./seo";

export default function Root() {
  const topbarHeight = 4; // em
  const events = useEvents();

  const location = useLocation();
  const canonicalUrl = `${BASE_URL}${location.pathname}`;
  const contentWrapperRef = useRef(null);

  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": `${BASE_URL}#organization`,
        name: "SHPE IIT",
        url: BASE_URL,
        logo: `${BASE_URL}/favicon.png`,
        description: "The Society of Hispanic Professional Engineers chapter at Illinois Institute of Technology.",
      },
      {
        "@type": "WebSite",
        "@id": `${BASE_URL}#website`,
        url: BASE_URL,
        name: "SHPE IIT",
        publisher: {
          "@id": `${BASE_URL}#organization`,
        },
      },
    ],
  };

  useEffect(() => {
    contentWrapperRef.current?.scrollTo({ top: 0, behavior: "instant" });
  }, [location.pathname]);

  return (
    <html>
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" type="image/png" href="/favicon.png" />

        <meta name="google-site-verification" content="uV7IM7FWs69I2NHnIPjNkXrmJ86ytYAlk56j4lULGVw" />
        <meta name="author" content="SHPE IIT" />
        <meta property="og:site_name" content="SHPE IIT" />
        <link rel="canonical" href={canonicalUrl} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
        <Meta />
        <Links />
      </head>
      <body>
        <Topbar height={topbarHeight} />
        <div className="contentWrapper" ref={contentWrapperRef} style={{ "--topbar-height": `${topbarHeight}em` }}>
          <Outlet context={{ events }} />
          <div className="spacer" />
          <Footer />
        </div>
        <Scripts />
      </body>
    </html>
  );
}