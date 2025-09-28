"use client";

import dynamic from "next/dynamic";
import { useEffect, useState } from "react";

const NextStudio = dynamic(
  () => import("next-sanity/studio").then((mod) => mod.NextStudio),
  {
    ssr: false,
    loading: () => (
      <div className="min-h-screen bg-gray-900 text-white p-8 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-white mx-auto mb-4"></div>
          <p>Loading Sanity Studio...</p>
        </div>
      </div>
    ),
  }
);

export default function StudioPage() {
  const [config, setConfig] = useState(null);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
    // Dynamically import the config
    import("../../../../sanity.config").then((configModule) => {
      setConfig(configModule.default);
    });
  }, []);

  if (!isClient || !config) {
    return (
      <div className="min-h-screen bg-gray-900 text-white p-8 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-white mx-auto mb-4"></div>
          <p>Loading Sanity Studio...</p>
        </div>
      </div>
    );
  }

  return <NextStudio config={config} />;
}
