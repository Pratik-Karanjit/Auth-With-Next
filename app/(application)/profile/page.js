//Used Fetch API and called cookies here itself using SSR.

import { BACKEND_URL } from "@/app/lib/config";
import FetchProfile from "@/components/FetchProfile";
import React from "react";
const { cookies } = await import("next/headers");

export const fetchProfile = async () => {
  try {
    const cookieStore = await cookies();
    const authToken = cookieStore.get("authToken");

    const response = await fetch(`${BACKEND_URL}/api/users/getProfile`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        // Fix: Use authToken.value and properly format the cookie string
        ...(authToken && { Cookie: `authToken=${authToken.value}` }),
      },
    });

    const data = await response.json();
    return data;
  } catch (error) {
    console.log("error", error);
  }
};

export default async function ProfilePage() {
  const profileData = await fetchProfile();

  return (
    <div>
      <FetchProfile data={profileData} />
    </div>
  );
}
