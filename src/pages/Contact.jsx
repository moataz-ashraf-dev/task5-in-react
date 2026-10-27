import { useState } from "react";
import { Mail, MapPin, MessageCircle, Send, CheckCircle2 } from "lucide-react";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const update = (e) => setForm({ ...form, [e.target.name]: e.target.value });
  const submit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };
  return (
    <main className="section-space min-h-[70vh]">
      <div className="site-container">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-bold uppercase tracking-[.18em] text-sky-700">
            Get in touch
          </span>
          <h1 className="mt-3 text-4xl font-black tracking-tight sm:text-5xl">
            We're happy to help.
          </h1>
          <p className="mt-4 leading-7 text-slate-500">
            Have a question about a product or need more information? Send us a
            message.
          </p>
        </div>
        <div className="mx-auto mt-10 grid max-w-5xl gap-6 lg:grid-cols-[.8fr_1.2fr]">
          <aside className="rounded-3xl bg-slate-950 p-7 text-white sm:p-9">
            <h2 className="text-2xl font-black">Contact details</h2>
            <p className="mt-3 leading-7 text-slate-300">
              Tell us what you need and we'll help you find the right next step.
            </p>
            <div className="mt-8 space-y-5">
              {[
                { icon: Mail, label: "Email", value: "hello@eraasoft.example" },
                {
                  icon: MessageCircle,
                  label: "Support",
                  value: "Product questions & general help",
                },
                {
                  icon: MapPin,
                  label: "Online store",
                  value: "Here for you, wherever you are",
                },
              ].map(({ icon: Icon, label, value }) => (
                <div key={label} className="flex gap-4">
                  <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-white/10 text-sky-300">
                    <Icon size={20} />
                  </span>
                  <div>
                    <p className="text-sm font-bold">{label}</p>
                    <p className="mt-1 break-words text-sm text-slate-300">
                      {value}
                    </p>
                  </div>
                </div>
              ))}
            </div>
            <p className="mt-8 rounded-2xl border border-white/10 bg-white/5 p-4 text-xs leading-5 text-slate-400">
              Note: this is a front-end demo contact form. Connect an email
              service or backend to receive real submissions.
            </p>
          </aside>
          <form
            onSubmit={submit}
            className="rounded-3xl border border-slate-200 bg-white p-6 sm:p-9"
          >
            {submitted ? (
              <div className="flex min-h-80 flex-col items-center justify-center text-center">
                <span className="grid h-14 w-14 place-items-center rounded-full bg-emerald-50 text-emerald-600">
                  <CheckCircle2 size={28} />
                </span>
                <h2 className="mt-4 text-2xl font-black">Message ready!</h2>
                <p className="mt-2 max-w-sm text-sm leading-6 text-slate-500">
                  The form works in this demo, but messages are not sent to a
                  server yet.
                </p>
                <button
                  type="button"
                  onClick={() => {
                    setSubmitted(false);
                    setForm({ name: "", email: "", message: "" });
                  }}
                  className="mt-6 font-bold text-sky-700"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <>
                <h2 className="text-xl font-black">Send a message</h2>
                <div className="mt-6 grid gap-5 sm:grid-cols-2">
                  <label className="text-sm font-bold text-slate-700">
                    Your name
                    <input
                      required
                      name="name"
                      value={form.name}
                      onChange={update}
                      placeholder="Jane Smith"
                      className="mt-2 w-full rounded-xl border border-slate-200 px-4 py-3 font-normal outline-none transition focus:border-sky-500 focus:ring-4 focus:ring-sky-100"
                    />
                  </label>
                  <label className="text-sm font-bold text-slate-700">
                    Email address
                    <input
                      required
                      type="email"
                      name="email"
                      value={form.email}
                      onChange={update}
                      placeholder="you@example.com"
                      className="mt-2 w-full rounded-xl border border-slate-200 px-4 py-3 font-normal outline-none transition focus:border-sky-500 focus:ring-4 focus:ring-sky-100"
                    />
                  </label>
                </div>
                <label className="mt-5 block text-sm font-bold text-slate-700">
                  Your message
                  <textarea
                    required
                    name="message"
                    value={form.message}
                    onChange={update}
                    rows="5"
                    placeholder="How can we help?"
                    className="mt-2 w-full resize-y rounded-xl border border-slate-200 px-4 py-3 font-normal outline-none transition focus:border-sky-500 focus:ring-4 focus:ring-sky-100"
                  />
                </label>
                <button className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-sky-600 px-6 py-3.5 font-bold text-white transition hover:bg-sky-700 sm:w-auto">
                  Submit message <Send size={17} />
                </button>
              </>
            )}
          </form>
        </div>
      </div>
    </main>
  );
}
