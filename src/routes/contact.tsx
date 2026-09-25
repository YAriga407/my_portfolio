import { useState, type FormEvent } from "react";
import Header from "@/components/Header";

export default function ContactPage() {
  const [status, setStatus] = useState<"idle" | "sending" | "done">("idle");
  const [feedback, setFeedback] = useState<string | null>(null);
  const [ok, setOk] = useState(false);

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const formData = new FormData(form);
    setStatus("sending");
    setFeedback(null);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: String(formData.get("name") ?? ""),
          email: String(formData.get("email") ?? ""),
          message: String(formData.get("message") ?? ""),
        }),
      });

      const result = await response.json();

      if (response.ok && result.ok !== false) {
        setOk(true);
        setFeedback(result.message || "Message sent successfully!");
        form.reset();
      } else {
        setOk(false);
        setFeedback(result.message || "Please check your details and try again.");
      }
    } catch {
      setOk(false);
      setFeedback("Please check your details and try again.");
    } finally {
      setStatus("done");
    }
  }

  const fieldClass =
    "w-full rounded-2xl bg-white/70 px-4 py-3 text-sm outline-none ring-1 ring-black/10 transition focus:ring-2 focus:ring-[#000052]/40";

  return (
    <div
      className="relative min-h-screen overflow-hidden"
      style={{ background: "linear-gradient(to bottom, #fed7bf, #facdb1)", color: "#000000" }}
    >
      <Header />

      <main className="relative mx-auto max-w-6xl px-6 pb-24">
        <section className="pt-8">
          <p className="text-xs font-medium uppercase tracking-[0.28em]" style={{ color: "#FFFFFF" }}>
            Contact
          </p>
          <h1 className="mt-3 max-w-[24ch] text-balance font-display text-4xl leading-tight sm:text-5xl">
            Let&apos;s talk
          </h1>
          <p className="mt-6 max-w-[52ch] text-pretty text-base leading-relaxed">
            Questions, opportunities, or just a hello — send a message below and it comes straight
            to my inbox.
          </p>
        </section>

        <section className="mt-12 grid gap-10 md:grid-cols-12">
          <div className="md:col-span-5">
            <div
              className="rounded-[28px] p-8 ring-1 ring-black/10"
              style={{ background: "linear-gradient(to bottom right, #c9b8a3, #b8a68f)" }}
            >
              <h2 className="font-display text-2xl">Reach me directly</h2>
              <dl className="mt-6 space-y-4 text-sm">
                <div>
                  <dt className="uppercase tracking-[0.2em] text-xs" style={{ color: "#FFFFFF" }}>
                    Email
                  </dt>
                  <dd className="mt-1">
                    <a className="underline underline-offset-4" href="mailto:yumaariga00@gmail.com">
                      yumaariga00@gmail.com
                    </a>
                  </dd>
                </div>
                <div>
                  <dt className="uppercase tracking-[0.2em] text-xs" style={{ color: "#FFFFFF" }}>
                    Phone
                  </dt>
                  <dd className="mt-1">
                    <a className="underline underline-offset-4" href="tel:+15137162423">
                      513-716-2423
                    </a>
                  </dd>
                </div>
                <div>
                  <dt className="uppercase tracking-[0.2em] text-xs" style={{ color: "#FFFFFF" }}>
                    LinkedIn
                  </dt>
                  <dd className="mt-1">
                    <a
                      className="underline underline-offset-4"
                      href="https://www.linkedin.com/in/yumaariga"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      /in/yumaariga
                    </a>
                  </dd>
                </div>
              </dl>
            </div>
          </div>

          <form onSubmit={onSubmit} className="md:col-span-7 space-y-5">
            <div className="grid gap-5 sm:grid-cols-2">
              <label className="block text-sm">
                <span className="mb-2 block font-medium">Your name</span>
                <input name="name" required maxLength={100} className={fieldClass} placeholder="Jane Doe" />
              </label>
              <label className="block text-sm">
                <span className="mb-2 block font-medium">Your email</span>
                <input
                  name="email"
                  type="email"
                  required
                  maxLength={255}
                  className={fieldClass}
                  placeholder="jane@example.com"
                />
              </label>
            </div>
            <label className="block text-sm">
              <span className="mb-2 block font-medium">Message</span>
              <textarea
                name="message"
                required
                maxLength={2000}
                rows={7}
                className={fieldClass}
                placeholder="Tell me a little about what you have in mind…"
              />
            </label>

            <div className="flex flex-wrap items-center gap-4">
              <button
                type="submit"
                disabled={status === "sending"}
                className="inline-flex items-center gap-2 rounded-full px-6 py-3.5 text-sm font-medium ring-1 ring-black/10 transition-opacity hover:opacity-90 disabled:opacity-60"
                style={{ backgroundColor: "#000052", color: "#ffffff" }}
              >
                {status === "sending" ? "Sending…" : "Send message"}
              </button>
              {feedback ? (
                <p className="text-sm" style={{ color: ok ? "#0b4a2f" : "#6b1111" }}>
                  {feedback}
                </p>
              ) : null}
            </div>
          </form>
        </section>
      </main>
    </div>
  );
}
