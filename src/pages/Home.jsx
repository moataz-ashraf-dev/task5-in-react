import { Link } from "react-router";
import {
  ArrowRight,
  ShieldCheck,
  Truck,
  Headphones,
  Sparkles,
} from "lucide-react";
import { useContext } from "react";
import { globalStore } from "../stores/MainStore";
import ProductCard from "../components/ProductCard";
import SafeImage from "../components/SafeImage";

export default function Home() {
  const { products } = useContext(globalStore);
  const featured = products.slice(0, 4);
  return (
    <main>
      <section className="relative overflow-hidden bg-slate-950 text-white">
        <div className="absolute inset-0 soft-grid opacity-10" />
        <div className="site-container relative grid items-center gap-10 py-14 sm:py-20 lg:grid-cols-[1.05fr_.95fr] lg:py-24">
          <div className="max-w-2xl">
            <span className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-2 text-xs font-bold uppercase tracking-[.16em] text-sky-200">
              <Sparkles size={14} /> Everyday essentials, thoughtfully picked
            </span>
            <h1 className="text-4xl font-black leading-[1.08] tracking-tight sm:text-5xl lg:text-7xl">
              Good finds.
              <br />
              <span className="text-sky-400">Better living.</span>
            </h1>
            <p className="mt-6 max-w-xl text-base leading-7 text-slate-300 sm:text-lg">
              Discover useful, well-designed products that make your everyday
              routine a little easier.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                to="/products"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-sky-500 px-7 py-3.5 font-bold text-white transition hover:bg-sky-400"
              >
                Browse products <ArrowRight size={18} />
              </Link>
              <Link
                to="/about"
                className="inline-flex items-center justify-center rounded-full border border-white/20 px-7 py-3.5 font-bold text-white transition hover:bg-white/10"
              >
                Our story
              </Link>
            </div>
            <div className="mt-10 flex flex-wrap gap-x-6 gap-y-3 text-sm text-slate-300">
              <span>✓ Carefully selected</span>
              <span>✓ Simple shopping</span>
              <span>✓ Everyday value</span>
            </div>
          </div>
          <div className="relative mx-auto w-full max-w-xl">
            <div className="absolute -inset-4 rounded-4xl bg-sky-500/20 blur-3xl" />
            <div className="relative overflow-hidden rounded-[1.75rem] border border-white/10 bg-white/5 p-3 shadow-2xl">
              <SafeImage
                src="/hero.png"
                alt="EraaSoft featured product display"
                className="h-75 w-full rounded-[1.25rem] object-cover sm:h-97.5"
              />
              <div className="absolute bottom-7 left-7 right-7 flex items-center justify-between rounded-2xl border border-white/20 bg-slate-950/75 p-4 backdrop-blur-md">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider text-sky-300">
                    The daily edit
                  </p>
                  <p className="mt-1 font-bold">
                    Small upgrades, big difference
                  </p>
                </div>
                <span className="grid h-10 w-10 place-items-center rounded-full bg-sky-500">
                  <ArrowRight size={19} />
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="border-b border-slate-200 bg-white">
        <div className="site-container grid gap-5 py-7 sm:grid-cols-3">
          {[
            {
              icon: ShieldCheck,
              title: "Selected with care",
              desc: "Useful products for daily life.",
            },
            {
              icon: Truck,
              title: "Straightforward shopping",
              desc: "Clear details before you choose.",
            },
            {
              icon: Headphones,
              title: "Here to help",
              desc: "Questions? Get in touch with us.",
            },
          ].map(({ icon: Icon, title, desc }) => (
            <div key={title} className="flex items-center gap-4">
              <span className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-sky-50 text-sky-700">
                <Icon size={22} />
              </span>
              <div>
                <h2 className="font-bold">{title}</h2>
                <p className="mt-1 text-sm text-slate-500">{desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
      <section className="section-space">
        <div className="site-container">
          <div className="mb-8 flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
            <div>
              <p className="text-sm font-bold uppercase tracking-[.18em] text-sky-700">
                Handpicked for you
              </p>
              <h2 className="mt-2 text-3xl font-black tracking-tight sm:text-4xl">
                Featured products
              </h2>
              <p className="mt-2 text-slate-500">
                A few customer favourites to get you started.
              </p>
            </div>
            <Link
              to="/products"
              className="inline-flex items-center gap-2 self-start font-bold text-sky-700 hover:text-sky-900 sm:self-auto"
            >
              View all products <ArrowRight size={17} />
            </Link>
          </div>
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {featured.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>
      <section className="pb-16">
        <div className="site-container">
          <div className="flex flex-col items-start justify-between gap-5 rounded-3xl bg-sky-600 p-7 text-white sm:flex-row sm:items-center sm:p-10">
            <div>
              <h2 className="text-2xl font-black sm:text-3xl">
                Have something in mind?
              </h2>
              <p className="mt-2 max-w-xl text-sky-100">
                Explore the collection or reach out if you need a hand.
              </p>
            </div>
            <Link
              to="/contact"
              className="inline-flex shrink-0 items-center gap-2 rounded-full bg-white px-6 py-3 font-bold text-sky-800 transition hover:bg-sky-50"
            >
              Contact us <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
