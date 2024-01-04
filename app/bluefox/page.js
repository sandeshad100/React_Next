
"use client"
import React, { useState } from "react";
import axios from "axios";

const Register = () => {
  const handleSubmit = async (event) => {
    event.preventDefault();

    const data = new FormData(event.currentTarget);
    
    const formData = {
      name: data.get("name"),
      email:data.get("email"),
      password: data.get("password"),
    };

    // Send data to the API
    try {
      // Make a POST request to your API endpoint
      const response = await axios.post(
        "https://63ac2d1834c46cd7ae79a588.mockapi.io/register",
        formData
      );

      // Handle the response as needed
      console.log("API response:", response.data);
    } catch (error) {
      // Handle errors, e.g., display an error message to the user
      console.error("Error making POST request:", error.message);
    }
  };

  // Call the handleSubmit function when the form is submitted
  // Example: <form onSubmit={handleSubmit}>

  return (
    <div className="w-full max-w-xs">

        <p className="text-4xl">Register </p>
      <form
        className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
        onSubmit={handleSubmit}
      >
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="name"
          >
            Name
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="name"
            type="text"
            placeholder="Name"
            name="name"
            // value={name}
            // onChange={(e)=>setName(e.target.value)}
          />
        </div>

        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="name"
          >
            Email
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="name"
            type="email"
            placeholder="Name"
            name="email"
            // value={name}
            // onChange={(e)=>setName(e.target.value)}
          />
        </div>

        <div className="mb-6">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="password"
          >
            Password
          </label>
          <input
            className="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
            id="password"
            type="password"
            placeholder="******************"
            name="password"
          />
        </div>
        <div className="flex items-center justify-between">
          <button
            className="bg-blue-500 w-full hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
          >
            Register
          </button>
        </div>
      </form>
    </div>
  );
};

export default Register;
