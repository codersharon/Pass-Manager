import React, { useState } from "react";

export default function Addpassword () {
  const [account, setAccount] = useState("pass");
  const [password, setPassword] = useState("pass");

  const handleSubmit = (e) => {
    e.preventDefault();
    const passwords = JSON.parse(localStorage.getItem("passwords")) || [];
    passwords.push({ account, password });
    localStorage.setItem("passwords", JSON.stringify(passwords));
    setAccount("");
    setPassword("");
    // Add any additional actions upon successful submission, like a confirmation message
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <form className="bg-white p-6 rounded shadow-md" onSubmit={handleSubmit}>
        <div className="mb-4">
          <label
            htmlFor="account"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            Account
          </label>
          <input
            type="text"
            id="account"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            value={account}
            onChange={(e) => setAccount(e.target.value)}
            required
          />
        </div>
        <div className="mb-6">
          <label
            htmlFor="password"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            Password
          </label>
          <input
            type="password"
            id="password"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <div className="flex items-center justify-between">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
          >
            Add Password
          </button>
        </div>
      </form>
    </div>
  );
};
