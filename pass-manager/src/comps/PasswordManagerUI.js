import React, { useState } from "react";
import { Link } from "react-router-dom";

const AccountList = [
  // Replace with your actual account data
  { id: 1, name: "Account 1", username: "user1" },
  { id: 2, name: "Account 2", username: "user2" },
  // ... other accounts
];

const PasswordManagerUI = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredAccounts, setFilteredAccounts] = useState(AccountList);

  const handleSearch = (event) => {
    const value = event.target.value;
    setSearchTerm(value);
    const filtered = AccountList.filter(
      (account) =>
        account.name.toLowerCase().includes(value.toLowerCase()) ||
        account.username.toLowerCase().includes(value.toLowerCase())
    );
    setFilteredAccounts(filtered);
  };

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-4xl mx-auto">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-bold text-gray-700">Password Manager</h1>
          <a href="/addpasswordform" reference='noreferrer'>
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
              Add New
            </button>
          </a>
        </div>
        <div className="bg-white shadow rounded-lg p-6">
          <div className="mb-4">
            <input
              type="search"
              className="w-full p-2 border border-gray-300 rounded-lg"
              placeholder="Search accounts..."
              value={searchTerm}
              onChange={handleSearch}
            />
          </div>
          <ul className="divide-y divide-gray-200">
            {filteredAccounts.map((account) => (
              <li
                key={account.id}
                className="py-4 flex justify-between items-center"
              >
                <div>
                  <h2 className="text-lg font-semibold text-gray-800">
                    {account.name}
                  </h2>
                  <p className="text-gray-600">{account.username}</p>
                </div>
                <button className="text-blue-600 hover:text-blue-800">
                  View
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default PasswordManagerUI;
