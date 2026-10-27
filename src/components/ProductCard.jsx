import { Link } from "react-router";
import { ArrowUpRight, Star } from "lucide-react";
import SafeImage from "./SafeImage";

export default function ProductCard({ product }) {
  return (
    <Link
      to={`/products/single-product/${product.id}`}
      className="group flex h-full flex-col overflow-hidden rounded-3xl border border-slate-200 bg-white transition duration-300 hover:-translate-y-1 hover:border-sky-200 hover:shadow-xl hover:shadow-slate-200/60"
    >
      <div className="relative overflow-hidden bg-slate-100">
        <SafeImage
          src={product.image}
          alt={product.title}
          className="h-52 w-full object-cover transition duration-500 group-hover:scale-105 sm:h-56"
        />
        <span className="absolute left-3 top-3 rounded-full bg-white/90 px-3 py-1 text-xs font-bold text-slate-700 backdrop-blur">
          {product.category}
        </span>
        <span className="absolute right-3 top-3 grid h-9 w-9 place-items-center rounded-full bg-white text-slate-700 shadow-sm transition group-hover:bg-sky-600 group-hover:text-white">
          <ArrowUpRight size={17} />
        </span>
      </div>
      <div className="flex flex-1 flex-col p-5">
        <div className="flex items-center gap-1 text-amber-500">
          <Star size={14} fill="currentColor" />
          <span className="text-xs font-bold text-slate-500">
            {product.rating ?? "4.8"}
          </span>
        </div>
        <h3 className="mt-2 line-clamp-2 text-lg font-bold leading-snug text-slate-900">
          {product.title}
        </h3>
        <p className="mt-2 line-clamp-2 text-sm leading-6 text-slate-500">
          {product.description}
        </p>
        <div className="mt-auto flex items-center justify-between gap-3 pt-5">
          <span className="text-xl font-black text-slate-900">
            ${Number(product.price).toFixed(2)}
          </span>
          <span className="text-sm font-bold text-sky-700">View details</span>
        </div>
      </div>
    </Link>
  );
}
