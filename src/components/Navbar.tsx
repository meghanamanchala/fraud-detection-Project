"use client";

import { useSession, signOut } from "next-auth/react";
import Link from "next/link";
import { useState, useEffect } from "react";

export default function Navbar() {
  const { data: session } = useSession();
  const isAdmin = session?.user?.role === "admin";
  const [greeting, setGreeting] = useState("");

  useEffect(() => {
    const hour = new Date().getHours();
    if (hour < 12) {
      setGreeting("Good Morning");
    } else if (hour < 18) {
      setGreeting("Good Afternoon");
    } else {
      setGreeting("Good Evening");
    }
  }, []);

  return (
    <nav className="bg-blue-950 p-4 text-white flex justify-between items-center shadow-lg border-b border-blue-700 fixed top-0 w-full z-50">
      <h1 className="text-2xl font-bold tracking-wide hover:text-blue-300 transition">
        Fraud Detection
      </h1>
      <div className="flex gap-4 items-center">
        {session ? (
          <>
            <Link href="/dashboard" className="px-4 py-2 rounded-lg bg-blue-800 hover:bg-blue-700 transition">
              Dashboard
            </Link>
            {isAdmin ? (
              <span className="text-yellow-400 text-lg font-semibold">{greeting}, Admin</span>
            ) : null}
            <button
              onClick={() => signOut()}
              className="px-4 py-2 rounded-lg bg-red-600 hover:bg-red-500 transition"
            >
              Logout
            </button>
          </>
        ) : (
          <>
            <Link href="/login" className="px-4 py-2 rounded-lg bg-green-600 hover:bg-green-500 transition">
              Login
            </Link>
            <Link href="/signup" className="px-4 py-2 rounded-lg bg-gray-500 hover:bg-gray-400 transition">
              Sign Up
            </Link>
          </>
        )}
      </div>
    </nav>
  );
}
