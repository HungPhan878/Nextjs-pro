import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex justify-center items-center text-red-500">
      <Link href="/login">Login</Link>
    </main>
  );
}
