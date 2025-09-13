"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import NaviagationCustom from "./Navigation";

const navItems = [
  { label: "DUCK", href: "/" },
  { label: "TUAN ANH", href: "/1" },
  { label: "NAM", href: "/2" },
  { label: "DUY", href: "/3" },
];

export default function Header() {
  return (
    <header className="bg-white shadow-xl sticky top-0 z-50 w-100vw h-[60px] flex items-center justify-between px-6">
      <div className="">
        {/* Logo */}
        <Link href="/" className="text-2xl font-bold text-blue-600">
          <Image
            src="/valid/images/ValidNoBG2.png"
            width={50}
            height={0}
            alt="Picture of the author"
          />
        </Link>
      </div>
      {/* Navigation */}
      <div>
        <nav className="flex gap-6">
          {navItems.map((item) => (
            <NaviagationCustom key={item.href} item={item} />
          ))}
        </nav>
      </div>
      {/* Auth Button */}
      <div>
        <Link href="/login">login</Link>
      </div>
    </header>
  );
}
