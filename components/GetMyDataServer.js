// "use client";
// import api from "@/app/lib/axios";
// import { useEffect, useState } from "react";

// export const GetMyData = () => {
//   const [data, setData] = useState(null);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await api.get("/api/users/getData");
//         setData(response.data);
//       } catch (error) {
//         console.error("Error fetching data:", error);
//       }
//     };
//     fetchData();
//   }, []);

//   return (
//     <div>
//       <h1>Data from API:</h1>
//       <pre>{JSON.stringify(data, null, 2)}</pre>
//     </div>
//   );
// };

// components/GetDataServer.js (Server Component)
export const GetMyDataServer = ({ data }) => {
  console.log("data", data.result.user.id);
  console.log("after stringify", JSON.stringify(data));
  if (data.error) {
    return (
      <div>
        <h1>Error:</h1>
        <p>{data.error}</p>
      </div>
    );
  }

  return (
    <div>
      <h1>Data from API (Server-Side):</h1>
      <pre>{JSON.stringify(data, null, 2)}</pre>
      <h1>{data.result.id}</h1>
    </div>
  );
};
