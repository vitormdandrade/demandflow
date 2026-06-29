"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import { pushDataLayer } from "@/lib/gtm";

// Pushes a `page_view` event whenever the client-side route changes. The GTM
// container fires its own pageview on the initial load, so this fills the gap
// for SPA navigations between pages.
export default function GtmPageView() {
  const pathname = usePathname();

  useEffect(() => {
    pushDataLayer({ event: "page_view", page_path: pathname });
  }, [pathname]);

  return null;
}
