// biz-web-app/components/Navbar.jsx
"use client";

import Link from "next/link";
import { ThemeToggle } from "./ThemeToggle";
import useAuthStore from "@/store/useAuthStore";
import UserMenu from "./UserMenu";

export default function NavBar() {
  const { user, company } = useAuthStore();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-gray-50 dark:bg-black shadow-md">
      <div className="mx-auto max-w-7xl px-4">
        {/* Desktop view */}
        <div className="hidden md:flex items-center justify-between h-16">
          <div>
            <Link href="/" className="">
              <img
                src="/logo.png"
                alt="Bizbuddy title and logo"
                width={130}
                height={40}
              />
            </Link>
          </div>
          <div>
            {company && (
              <Link
                href="/dashboard"
                className="text-lg font-semibold hover:underline"
              >
                {company.name}
              </Link>
            )}
          </div>
          <div className="flex items-center space-x-4">
            <ThemeToggle />
            {!user ? (
              <>
                <Link
                  href="/"
                  className="px-1 py-1 transition-colors hover:text-orange-500"
                >
                  Home
                </Link>
                <Link
                  href="/"
                  className="px-1 py-1 transition-colors hover:text-orange-500"
                >
                  Pricing
                </Link>
                <Link
                  href="/"
                  className="px-1 py-1 transition-colors hover:text-orange-500"
                >
                  FAQ
                </Link>
                <Link
                  href="/"
                  className="px-1 py-1 transition-colors hover:text-orange-500"
                >
                  Contact Us
                </Link>
                <Link
                  href="/sign-in"
                  className="px-5 py-1 rounded-full border-2 border-orange-500 hover:border-orange-600 transition-colors font-medium"
                >
                  Log in
                </Link>
                <Link
                  href="/sign-up"
                  className="px-5 py-1 rounded-full font-medium bg-orange-500 hover:bg-orange-600 transition-colors text-white border-2 border-orange-500 hover:border-orange-600"
                >
                  Sign up
                </Link>
              </>
            ) : (
              <UserMenu />
            )}
          </div>
        </div>

        {/* Mobile view */}
        <div className="md:hidden">
          <div className="flex items-center justify-between h-16">
            <div>
              <Link href="/" className="">
                <img
                  src="/logo.png"
                  alt="Bizbuddy title and logo"
                  width={100}
                  height={25}
                />
              </Link>
            </div>
            <div className="flex items-center space-x-2">
              <ThemeToggle />
              {!user ? (
                <>
                  <Link
                    href="/sign-in"
                    className="px-2 py-1 text-sm text-nowrap rounded-full border-2 border-orange-500 hover:border-orange-600 transition-colors"
                  >
                    Log in
                  </Link>
                  <Link
                    href="/sign-up"
                    className="px-2 py-1 text-sm text-nowrap rounded-full  bg-orange-500 hover:bg-orange-600 transition-colors text-black border-2 border-orange-500 hover:border-orange-600"
                  >
                    Sign up
                  </Link>
                </>
              ) : (
                <UserMenu />
              )}
            </div>
          </div>
          {company && (
            <div className="text-center py-2">
              <Link
                href="/dashboard"
                className="text-lg font-semibold hover:underline"
              >
                {company.name}
              </Link>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}
