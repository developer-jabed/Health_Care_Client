/* eslint-disable @typescript-eslint/no-explicit-any */
"use server";

import { serverFetch } from "@/lib/server-fetch";

/**
 * FETCH DASHBOARD META DATA
 * API: GET /meta
 */
export async function fetchDashboardMetaData() {
  try {
    const response = await serverFetch.get("/metadata", {
      headers: { "Content-Type": "application/json" },
    });

    const result = await response.json();
    return result;
  } catch (error: any) {
    console.error("Fetch Dashboard MetaData Error:", error);
    return {
      success: false,
      message:
        process.env.NODE_ENV === "development"
          ? error.message
          : "Failed to fetch dashboard metadata",
    };
  }
}
