import Link from "next/link";
import React from "react";

export default function Navbar() {
  return (
    <div>
      <ul className="flex w-[80%] m-auto justify-between">
        <Link href={"/"}>Home</Link>
        <Link href={"/dashboard"}>Dashboard</Link>
        <Link href={"/login"}>Login</Link>
        <Link href={"/register"}>Register</Link>
      </ul>
    </div>
  );
}
