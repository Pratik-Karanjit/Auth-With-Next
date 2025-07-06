"use client";

import api from "@/app/lib/axios";
import React, { useState, useEffect } from "react";

const SearchComponent = () => {
  const [searchData, setSearchData] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  // Debounce search function
  // useEffect(() => {
  //   const delayedSearch = setTimeout(() => {
  //     if (searchData.trim() !== "") {
  //       handleSearch(searchData);
  //     } else {
  //       setSearchResults([]);
  //       setError("");
  //     }
  //   }, 500); // 500ms delay

  //   return () => clearTimeout(delayedSearch);
  // }, [searchData]);

  const handleSearch = async (query) => {
    setLoading(true);
    setError("");

    try {
      const response = await api.get(`/api/users/search?query=${query}`);
      console.log("response", response);
      setSearchResults(response.data.result || []); // Adjust based on your API response structure
    } catch (error) {
      console.error("Error searching for user:", error);
      setError("An error occurred while searching. Please try again.");
      setSearchResults([]);
    } finally {
      setLoading(false);
    }
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    if (searchData.trim() !== "") {
      handleSearch(searchData);
    }
  };

  return (
    <div className="max-w-2xl mx-auto">
      <form
        onSubmit={onSubmit}
        className="flex items-center justify-center mt-10"
      >
        <input
          type="text"
          value={searchData}
          onChange={(e) => setSearchData(e.target.value)}
          placeholder="Search by name or email"
          className="border border-gray-300 rounded-l px-4 py-2 w-80"
        />
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded-r hover:bg-blue-600"
        >
          Search
        </button>
      </form>

      {/* Loading indicator */}
      {loading && (
        <div className="text-center mt-4">
          <p className="text-gray-600">Searching...</p>
        </div>
      )}

      {/* Error message */}
      {error && (
        <div className="mt-4 p-4 bg-red-100 border border-red-400 text-red-700 rounded">
          {error}
        </div>
      )}

      {/* Search results */}
      {searchResults.length > 0 && (
        <div className="mt-6">
          <h3 className="text-lg font-semibold mb-4">
            Search Results ({searchResults.length})
          </h3>
          <div className="space-y-3">
            {searchResults.map((user, index) => (
              <div
                key={user.id || index}
                className="p-4 border border-gray-200 rounded-lg hover:bg-gray-50"
              >
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="font-medium">{user.name}</h4>
                    <p className="text-gray-600">{user.email}</p>
                    {user.role && (
                      <p className="text-sm text-gray-500">{user.role}</p>
                    )}
                  </div>
                  {/* Add any action buttons here if needed */}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* No results message */}
      {!loading &&
        searchData.trim() !== "" &&
        searchResults.length === 0 &&
        !error && (
          <div className="mt-6 text-center text-gray-600">
            <p>No users found matching "{searchData}"</p>
          </div>
        )}
    </div>
  );
};

export default SearchComponent;
