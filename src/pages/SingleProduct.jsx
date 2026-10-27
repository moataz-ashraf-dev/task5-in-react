import { useContext } from "react";
import { Link, useParams } from "react-router";
import { ArrowLeft, CheckCircle2, Star } from "lucide-react";
import { globalStore } from "../stores/MainStore";
import SafeImage from "../components/SafeImage";
import NotFound from "./NotFound";

export default function SingleProduct() {
  const { productId } = useParams();
  const { products } = useContext(globalStore);
  const product = products.find((item) => String(item.id) === productId);
  if (!product) return <NotFound />;
  return (
    <main className="section-space min-h-[70vh]">
      <div className="site-container">
        <Link
          to="/products"
          className="mb-7 inline-flex items-center gap-2 text-sm font-bold text-slate-500 transition hover:text-sky-700"
        >
          <ArrowLeft size={17} /> Back to products
        </Link>
        <div className="grid items-start gap-8 lg:grid-cols-2 lg:gap-12">
          <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white p-3">
            <SafeImage
              src={product.image}
              alt={product.title}
              className="max-h-135 min-h-75 w-full rounded-2xl object-cover sm:min-h-[420px]"
            />
          </div>
          <div className="rounded-3xl border border-slate-200 bg-white p-6 sm:p-9">
            <span className="rounded-full bg-sky-50 px-3 py-1.5 text-xs font-bold text-sky-800">
              {product.category}
            </span>
            <h1 className="mt-5 text-3xl font-black leading-tight tracking-tight sm:text-4xl">
              {product.title}
            </h1>
            <div className="mt-4 flex items-center gap-2 text-amber-500">
              <Star size={17} fill="currentColor" />
              <span className="text-sm font-bold text-slate-600">
                {product.rating ?? "4.8"} rating
              </span>
            </div>
            <p className="mt-6 text-base leading-7 text-slate-600">
              {product.description}
            </p>
            <p className="mt-7 text-3xl font-black text-slate-900">
              ${Number(product.price).toFixed(2)}
            </p>
            <div className="mt-7 space-y-3 border-y border-slate-100 py-5 text-sm text-slate-600">
              <p className="flex items-center gap-2">
                <CheckCircle2 size={17} className="text-emerald-600" /> Product
                details clearly listed
              </p>
              <p className="flex items-center gap-2">
                <CheckCircle2 size={17} className="text-emerald-600" />{" "}
                {product.stock ?? "In stock"} available
              </p>
            </div>
            <Link
              to="/contact"
              className="mt-7 inline-flex w-full items-center justify-center rounded-full bg-sky-600 px-6 py-3.5 font-bold text-white transition hover:bg-sky-700"
            >
              Ask about this product
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
