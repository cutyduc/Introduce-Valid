"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";

interface NavigationItem {
  href: string;
  label: string;
}

interface NavigationCustomProps {
  item: NavigationItem;
}

export default function NaviagationCustom({ item }: NavigationCustomProps) {
  const pathname = usePathname();
  return (
    <Link
      key={item.href}
      href={item.href}
      className={`text-gray-700 p-2  rounded-md  hover:bg-gray-300 transition font-bold ${
        pathname === item.href ? "bg-gray-200 " : ""
      }`}
    >
      {item.label}
    </Link>
  );
}
