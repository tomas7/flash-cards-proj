import Link from "next/link";
import { SignOut } from "./components/auth-components";

export default function Nav() {
  return (
    <nav className="relative bg-gray-800">
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="relative flex h-16 items-center justify-between">
          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden"></div>
          <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
            <div className="hidden sm:ml-6 sm:block">
              <div className="flex space-x-4">
                <Link
                  href="/"
                  aria-current="page"
                  className="rounded-md bg-gray-900 px-3 py-2 text-sm font-medium text-white"
                >
                  Home
                </Link>
                <Link
                  href="/admin"
                  className="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-white/5 hover:text-white"
                >
                  Admin
                </Link>
              </div>
            </div>
          </div>
          <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
            <Link
              href="#"
              className="block px-4 py-2 text-sm text-gray-700 focus:bg-gray-100 focus:outline-hidden"
            >
              Your profile
            </Link>
            <Link
              href="#"
              className="block px-4 py-2 text-sm text-gray-700 focus:bg-gray-100 focus:outline-hidden"
            >
              Settings
            </Link>
              <SignOut/>
          </div>
        </div>
      </div>
    </nav>
  );
}
