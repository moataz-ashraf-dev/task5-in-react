import { Link, useLocation } from "react-router";
import { ArrowLeft, Compass } from "lucide-react";

export default function NotFound() {
  const location = useLocation();
  return (
    <main className="grid min-h-[70vh] place-items-center px-5 py-16">
      <div className="max-w-xl text-center">
        <div className="mx-auto grid h-20 w-20 place-items-center rounded-3xl bg-sky-100 text-sky-700">
          <Compass size={34} />
        </div>
        <p className="mt-7 text-sm font-black uppercase tracking-[.2em] text-sky-700">
          Error 404
        </p>
        <h1 className="mt-3 text-4xl font-black tracking-tight sm:text-6xl">
          Page not found
        </h1>
        <p className="mt-4 leading-7 text-slate-500">
          We couldn't find{" "}
          <code className="rounded bg-slate-100 px-2 py-1 text-sm">
            {location.pathname}
          </code>
          . It may have moved or the address may be incorrect.
        </p>
        <Link
          to="/"
          className="mt-8 inline-flex items-center gap-2 rounded-full bg-slate-900 px-6 py-3 font-bold text-white transition hover:bg-sky-700"
        >
          <ArrowLeft size={17} /> Back to home
        </Link>
      </div>
    </main>
  );
}
