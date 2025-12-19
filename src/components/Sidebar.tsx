"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Sidebar() {
  const pathname = usePathname();

  const isActive = pathname.startsWith("/dashboard/students");

  return (
    <aside className="w-64 bg-white border-r">
      <div className="p-6 font-bold text-lg">
        Teacher Dashboard
      </div>

      <nav className="px-4 space-y-1">
        <Link
          href="/dashboard/students"
          className={`block p-2 rounded ${
            isActive
              ? "bg-gray-200 font-semibold"
              : "hover:bg-gray-100"
          }`}
        >
          Students
        </Link>
      </nav>
    </aside>
  );
}
