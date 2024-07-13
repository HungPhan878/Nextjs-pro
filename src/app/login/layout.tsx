"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";

// Chuyển trang ở trong nextjs
// + Dùng thẻ link : hiện liên kết bên dưới và nhấn chuột phải
//   chuyển trang được.
// + Dùng useRouter (hook chỉ được dùng trong client Component)
//   nên phải cho 'use client vào'
// + Dùng redirect để chuyển trang tự động được dùng cả trong client C
//   và server C(không dùng được trong handleEvent)
// + đối với các component tái sử dùng lại thì không đặt tên
//   file page.tsx nha mà tên chính nó Button.tsx

export default function LoginLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const router = useRouter();

  const handleRedirectHome = () => {
    router.push("/");
  };

  return (
    <div>
      <header>Header</header>
      <main>{children}</main>
      <footer>Footer</footer>
      <Link href="/">Home</Link>
      <button onClick={handleRedirectHome}>Chuyển về home page</button>
    </div>
  );
}
