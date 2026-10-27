import { Heart, Leaf, Target, Users } from "lucide-react";
import { Link } from "react-router";

export default function About() {
  const values = [
    {
      icon: Heart,
      title: "Care in the details",
      text: "We focus on useful products with thoughtful design and everyday practicality.",
    },
    {
      icon: Target,
      title: "Keep it simple",
      text: "Clear information and an easy-to-browse collection help you choose with confidence.",
    },
    {
      icon: Users,
      title: "People come first",
      text: "We want every visit to feel friendly, straightforward, and helpful.",
    },
    {
      icon: Leaf,
      title: "Buy with intention",
      text: "A considered collection makes it easier to focus on what you actually need.",
    },
  ];
  return (
    <main>
      <section className="bg-slate-950 py-16 text-white sm:py-24">
        <div className="site-container max-w-4xl text-center">
          <span className="text-sm font-bold uppercase tracking-[.2em] text-sky-300">
            A little about us
          </span>
          <h1 className="mt-4 text-4xl font-black tracking-tight sm:text-6xl">
            Good products should make life{" "}
            <span className="text-sky-400">simpler.</span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-slate-300 sm:text-lg">
            EraaSoft Store is a simple place to discover practical everyday
            essentials. We believe shopping should be clear, convenient, and
            centred around products that are genuinely useful.
          </p>
        </div>
      </section>
      <section className="section-space">
        <div className="site-container">
          <div className="grid gap-10 lg:grid-cols-[.8fr_1.2fr] lg:items-center">
            <div>
              <p className="text-sm font-bold uppercase tracking-[.18em] text-sky-700">
                What matters to us
              </p>
              <h2 className="mt-3 text-3xl font-black sm:text-4xl">
                Thoughtful choices, without the fuss.
              </h2>
              <p className="mt-5 leading-7 text-slate-600">
                From the first product photo to the details on each page, the
                goal is to help you find what you're looking for without getting
                overwhelmed.
              </p>
              <Link
                to="/products"
                className="mt-7 inline-flex rounded-full bg-slate-900 px-6 py-3 font-bold text-white transition hover:bg-sky-700"
              >
                Explore the collection ↗
              </Link>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              {values.map(({ icon: Icon, title, text }) => (
                <article
                  key={title}
                  className="rounded-3xl border border-slate-200 bg-white p-6 transition hover:-translate-y-1 hover:shadow-lg"
                >
                  <span className="grid h-12 w-12 place-items-center rounded-2xl bg-sky-50 text-sky-700">
                    <Icon size={22} />
                  </span>
                  <h3 className="mt-4 text-lg font-bold">{title}</h3>
                  <p className="mt-2 text-sm leading-6 text-slate-500">
                    {text}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
