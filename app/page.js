import { GetMyDataServer } from "@/components/GetMyDataServer";
import { cookies } from "next/headers";
import { BACKEND_URL } from "./lib/config";
import api from "./lib/axios";

async function fetchUserData() {
  try {
    const response = await api.get("/api/users/getData");
    return response.data;
  } catch (error) {
    console.error("Error fetching user data:", error);
    return { error: error.response?.data?.message || error.message };
  }
}

export default async function Home() {
  const userData = await fetchUserData();

  return (
    <>
      <GetMyDataServer data={userData} />
    </>
  );
}
