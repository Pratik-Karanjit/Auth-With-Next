"use client";

import api from "@/app/lib/axios";
import React, { useState, useEffect } from "react";

export default function FetchProfile({ data }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState("");

  // Initialize form data when profile data is received
  useEffect(() => {
    if (data?.result) {
      setFormData({
        name: data.result.userName || "",
        email: data.result.email || "",
      });
    }
  }, [data]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setMessage("");

    try {
      const response = await api.patch("/api/users/updateProfile", {
        userName: formData.name,
        email: formData.email,
      });

      setMessage("Profile updated successfully!");
    } catch (error) {
      console.error("Error updating profile:", error);
    } finally {
      setIsLoading(false);
    }
  };

  console.log("profile data", data);

  if (data?.error) {
    return (
      <div className="flex items-center justify-center pt-20">
        <div className="text-red-500">
          <h2>Error loading profile:</h2>
          <p>{data.error}</p>
        </div>
      </div>
    );
  }

  return (
    <div className="flex items-center justify-center pt-20">
      <form
        onSubmit={handleSubmit}
        className="flex border-gray-200 border-2 rounded-lg p-4 flex-col gap-4 w-96"
      >
        <h2 className="text-xl font-bold text-center mb-4">Edit Profile</h2>

        <div className="flex flex-row gap-5 items-center justify-between">
          <label htmlFor="name">User Name</label>
          <input
            id="name"
            className="border-gray-200 border-2 rounded-lg p-2 outline-none focus:border-blue-500"
            type="text"
            name="name"
            placeholder="Enter your user name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>

        <div className="flex flex-row gap-5 items-center justify-between">
          <label htmlFor="email">Email</label>
          <input
            id="email"
            className="border-gray-200 border-2 rounded-lg p-2 outline-none focus:border-blue-500"
            type="email"
            name="email"
            placeholder="Enter your email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>

        <button
          type="submit"
          disabled={isLoading}
          className={`mt-4 p-2 rounded-lg text-white font-semibold ${
            isLoading
              ? "bg-gray-400 cursor-not-allowed"
              : "bg-blue-500 hover:bg-blue-600"
          }`}
        >
          {isLoading ? "Updating..." : "Update Profile"}
        </button>

        {message && (
          <div
            className={`text-center p-2 rounded ${
              message.includes("success")
                ? "text-green-600 bg-green-50"
                : "text-red-600 bg-red-50"
            }`}
          >
            {message}
          </div>
        )}
      </form>
    </div>
  );
}
