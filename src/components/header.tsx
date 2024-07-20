import Link from "next/link";
import React from "react";
import { ModeToggle } from "./ui/mode-toggle";

export default function Header() {
  return (
    <header>
      <ul>
        <li>
          <Link href="/login">Đăng Nhập</Link>
        </li>
        <li>
          <Link href="/register">Đăng Ký</Link>
        </li>
      </ul>
      <ModeToggle />
    </header>
  );
}
