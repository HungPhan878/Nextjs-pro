import Link from "next/link";
import React from "react";

// Routing in Next
// + Khi khai báo một folder thì khai báo page.tsx sẽ có một
//   route liên kết tới folder đấy
//   ex: login>page.tsx => routing /login
// + Khi khai báo một layout con trong layout root thì
//   khai bao trong folder (là một page) là cần có file layout.tsx
// + Chúng ta nhóm các folder là với nhau trong folder có (name folder)
//   ngoặc tròn bên ngoài.
//   ex: (page) > login + register 
//   thì sẽ dùng chính tên folder login làm route được
//   là /login chứ không thì sẽ /page/login nha   

export default function layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      <header>Header</header>
      <main>{children}</main>
      <footer>Footer</footer>
      <Link href="/">Home</Link>
    </div>
  );
}
