import React, { useState } from "react";
import { Link } from "react-router-dom";

const AccountList = [
  // Replace with your actual account data
  { id: 1, website: "Google", username: "sharon0022@gmail.com" },
  { id: 2, website: "Microsoft", username: "sharon5645@outlook.in" },
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
    <div className="min-h-screen dark:bg-black dark:text-dark-primary bg-light-primary text-black p-8">
      <div className="max-w-4xl mx-auto">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-bold">Password Manager</h1>
          <a href="/addpasswordform" reference="noreferrer">
            <button className="dark:bg-dark-primary dark:text-white bg-white text-light-primary font-bold py-2 px-4 rounded">Add New</button>
          </a>
        </div>
        <div className="p-6">
          <div className="mb-4">
            <input
              type="search"
              className="w-full p-2 border dark:bg-dark-primary rounded-lg"
              placeholder="Search accounts..."
              value={searchTerm}
              onChange={handleSearch}
            />
          </div>
          <ul className="my-4">
            {filteredAccounts.map((account) => (
              <li
                key={account.id}
                className="pb-4 pt-2 px-2 flex justify-between items-center bg-light-secondary dark:bg-dark-secondary my-2 rounded"
              >
                <div className="">
                  <h2 className="text-lg font-semibold text-white">
                    {account.website}
                  </h2>
                  <p className="text-gray-200">{account.username}</p>
                </div>
                <button className="p-1 rounded dark:bg-dark-tertiary bg-light-tertiary text-white">
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
