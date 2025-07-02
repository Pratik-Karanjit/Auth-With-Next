import React from "react";

export default function Register() {
  return (
    <div>
      <form>
        <input type="text" placeholder="Username" className="border p-2 m-2" />
        <input type="email" placeholder="Email" className="border p-2 m-2" />
        <input
          type="password"
          placeholder="Password"
          className="border p-2 m-2"
        />
        <button type="submit" className="bg-blue-500 text-white p-2 m-2">
          Register
        </button>
      </form>
    </div>
  );
}
