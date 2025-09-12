import React from "react";
import Link from "next/link";
import { useState } from "react";
import Image from 'next/image';
import batman from '@/assets/Batman.jpg';

export default function Login() {
  return (
    <div className="min-h-screen w-full flex items-stretch justify-center bg-gray-100">
        <div className="flex justify-stretch items-stretch">
          <Image src={batman} alt="Batman" width={800} height={140} />
        </div>
      <div className="bg-white p-8 w-full flex-1">
      
        <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>
        <form>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
              Username
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="username"
              type="text"
              placeholder="Username"
            />
          </div>
          
          <div className="mb-6">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
              Password
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
              id="password"
              type="password"
              placeholder="Password"
            />
          </div>
          <div className="flex items-center justify-between">
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="button"
            >
              login
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
