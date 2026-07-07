export const dynamic = "force-static";

import { profilePictureOptimized } from "@/lib/constants";
import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: `${process.env.NEXT_PUBLIC_WEBSITE_URL}`,
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 1,
    },
    {
      url: `${process.env.NEXT_PUBLIC_WEBSITE_URL}/about`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
      images: [
        `${process.env.NEXT_PUBLIC_WEBSITE_URL}${profilePictureOptimized}`,
      ],
    },
    {
      url: `${process.env.NEXT_PUBLIC_WEBSITE_URL}/cv`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `${process.env.NEXT_PUBLIC_WEBSITE_URL}/publications`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.5,
    },
  ];
}
