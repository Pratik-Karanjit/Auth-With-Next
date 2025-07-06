import { GetMyDataServer } from "@/components/GetMyDataServer";
import { cookies } from "next/headers";
import { BACKEND_URL } from "./lib/config";
import api from "./lib/axios";
import FadeIn from "@/components/FadeIn";

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

      <div className="space-y-10 p-10">
        {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((i) => (
          <FadeIn key={i} duration={200}>
            <div className="bg-blue-600 text-white p-10 rounded-xl shadow-md">
              Fade in on scroll — Box {i}
            </div>
          </FadeIn>
        ))}
      </div>
    </>
  );
}
