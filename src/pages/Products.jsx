import { useContext, useMemo, useState } from "react";
import { Search, SlidersHorizontal } from "lucide-react";
import { globalStore } from "../stores/MainStore";
import ProductCard from "../components/ProductCard";

export default function Products() {
  const { products } = useContext(globalStore);
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("All");
  const categories = ["All", ...new Set(products.map((p) => p.category))];
  const filtered = useMemo(
    () =>
      products.filter(
        (p) =>
          (category === "All" || p.category === category) &&
          `${p.title} ${p.description} ${p.category}`
            .toLowerCase()
            .includes(query.toLowerCase().trim()),
      ),
    [products, query, category],
  );
  return (
    <main className="section-space min-h-[70vh]">
      <div className="site-container">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-bold uppercase tracking-[.18em] text-sky-700">
            The collection
          </span>
          <h1 className="mt-3 text-4xl font-black tracking-tight sm:text-5xl">
            Explore our products
          </h1>
          <p className="mt-4 leading-7 text-slate-500">
            Find your next everyday favourite from our curated collection.
          </p>
        </div>
        <div className="mt-9 flex flex-col gap-3 sm:flex-row">
          <label className="relative flex-1">
            <Search
              className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
              size={19}
            />
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search products..."
              className="w-full rounded-2xl border border-slate-200 bg-white py-3.5 pl-12 pr-4 outline-none transition focus:border-sky-500 focus:ring-4 focus:ring-sky-100"
            />
          </label>
          <label className="relative sm:w-64">
            <SlidersHorizontal
              className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
              size={18}
            />
            <select
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="w-full appearance-none rounded-2xl border border-slate-200 bg-white py-3.5 pl-11 pr-4 text-slate-700 outline-none focus:border-sky-500 focus:ring-4 focus:ring-sky-100"
            >
              {categories.map((c) => (
                <option key={c}>{c}</option>
              ))}
            </select>
          </label>
        </div>
        <div className="mb-5 mt-6 flex items-center justify-between text-sm text-slate-500">
          <span>
            {filtered.length} {filtered.length === 1 ? "product" : "products"}{" "}
            found
          </span>
          {(query || category !== "All") && (
            <button
              onClick={() => {
                setQuery("");
                setCategory("All");
              }}
              className="font-bold text-sky-700 hover:text-sky-900"
            >
              Clear filters
            </button>
          )}
        </div>
        {filtered.length ? (
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {filtered.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        ) : (
          <div className="rounded-3xl border border-dashed border-slate-300 bg-white px-5 py-16 text-center">
            <h2 className="text-xl font-bold">No products found</h2>
            <p className="mt-2 text-slate-500">
              Try another search or category.
            </p>
          </div>
        )}
      </div>
    </main>
  );
}
