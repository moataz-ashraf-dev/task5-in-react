import { useState } from "react";
import { Link, NavLink } from "react-router";
import { Menu, X, ShoppingBag } from "lucide-react";

const links = [
  { to: "/", label: "Home" },
  { to: "/products", label: "Products" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/80 bg-white/90 backdrop-blur-xl">
      <nav className="site-container flex min-h-[72px] items-center justify-between gap-5">
        <Link
          to="/"
          onClick={() => setOpen(false)}
          className="flex items-center gap-2.5 text-xl font-black tracking-tight text-slate-900"
        >
          <span className="grid h-10 w-10 place-items-center rounded-2xl bg-sky-600 text-white">
            <ShoppingBag size={20} />
          </span>
          Eraa<span className="text-sky-600">Soft</span>
        </Link>
        <div className="hidden items-center gap-1 md:flex">
          {links.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              end={link.to === "/"}
              className={({ isActive }) =>
                `rounded-xl px-4 py-2 text-sm font-semibold transition ${isActive ? "bg-sky-50 text-sky-700" : "text-slate-600 hover:bg-slate-100 hover:text-slate-950"}`
              }
            >
              {link.label}
            </NavLink>
          ))}
        </div>
        <Link
          to="/products"
          className="hidden rounded-full bg-slate-900 px-5 py-2.5 text-sm font-bold text-white transition hover:bg-sky-700 sm:inline-flex"
        >
          Explore store <span className="ml-2">↗</span>
        </Link>
        <button
          type="button"
          aria-label={open ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={open}
          onClick={() => setOpen(!open)}
          className="grid h-11 w-11 place-items-center rounded-xl border border-slate-200 text-slate-800 md:hidden"
        >
          {open ? <X size={21} /> : <Menu size={21} />}
        </button>
      </nav>
      {open && (
        <div className="border-t border-slate-100 bg-white px-4 py-3 md:hidden">
          <div className="site-container flex flex-col gap-1">
            {links.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                end={link.to === "/"}
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  `rounded-xl px-4 py-3 font-semibold ${isActive ? "bg-sky-50 text-sky-700" : "text-slate-700 hover:bg-slate-50"}`
                }
              >
                {link.label}
              </NavLink>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
