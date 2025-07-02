import React from "react";

export default function Login() {
  return (
    <>
      <div>
        <form>
          <input type="email" placeholder="Email" className="border p-2 m-2" />
          <input
            type="password"
            placeholder="Password"
            className="border p-2 m-2"
          />
        </form>
      </div>
    </>
  );
}
