import Link from "next/link";

export default function Navbar() {
  return (
    <div className="navbar bg-base-100 px-6">
      {/* Left: Brand */}
      <div className="navbar-start">
        <Link href="/" className="btn btn-ghost text-2xl md:text-3xl font-semibold">
          KKhamwiset
        </Link>
      </div>

      {/* Right: Menu */}
      <div className="navbar-end">
        {/* Mobile Menu */}
        <div className="dropdown dropdown-end lg:hidden">
          <label tabIndex={0} className="btn btn-ghost">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu dropdown-content mt-3 z-1 p-3 shadow bg-base-100 rounded-box w-48 text-lg"
          >
            <li><Link href="/">Home</Link></li>
            <li><Link href="#about">About</Link></li>
            <li><Link href="#contact">Contact</Link></li>
          </ul>
        </div>

        {/* Desktop Menu */}
        <ul className="menu menu-horizontal gap-6 hidden lg:flex text-lg">
          <li><Link href="/">Home</Link></li>
          <li><Link href="#about">About</Link></li>
          <li><Link href="#contact">Contact</Link></li>
        </ul>
      </div>
    </div>
  );
}
