import { services } from "./lib/services";
import { ServiceCard } from "../components/ServiceCard";

export default function Page() {
  return (
    <main className="space-y-10">
      <section className="space-y-4 text-center">
        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-brand-dark">
          Tan Son Nhat (SGN) Fast-Track Intelligence
        </p>
        <h1 className="text-3xl font-bold text-slate-900 sm:text-4xl">
          Who to trust for queue-cutting concierge at Ho Chi Minh City airport
        </h1>
        <p className="mx-auto max-w-3xl text-base text-slate-600 sm:text-lg">
          We compared leading meet-and-greet teams that operate inside Tan Son Nhat International Airport,
          pulling published tariffs and external review scores so you can pick the right level of support for
          your arrival, departure, or tight connection.
        </p>
      </section>

      <section className="grid gap-6 sm:grid-cols-2">
        <div className="card">
          <h2 className="text-lg font-semibold text-slate-900">Snapshot</h2>
          <ul className="mt-3 space-y-2 text-sm text-slate-700">
            <li>
              <span className="font-semibold text-brand-dark">$30–$72</span> covers most expedited arrival
              options; premium CIP packages run up to <span className="font-semibold">$285</span> per traveller via{" "}
              <a
                href="https://r.jina.ai/https://www.vietnam-visa.com/arrival-assistance/"
                target="_blank"
                rel="noreferrer"
              >
                Vietnam-visa.com
              </a>
              .
            </li>
            <li>
              Independent Trustpilot scores stay in the <span className="font-semibold">3.8–4.0 / 5</span> band,
              with travellers routinely citing time savings and responsive WhatsApp support.
            </li>
            <li>
              <a
                href="https://r.jina.ai/https://www.vietnamairportassistance.com/ho-chi-minh-airport/"
                target="_blank"
                rel="noreferrer"
              >
                Vietnam Airport Assistance
              </a>{" "}
              highlights Daily Telegraph coverage of guests skipping <span className="font-semibold">2-hour queues</span>{" "}
              for roughly <span className="font-semibold">$46</span>, backing up the real-world impact of fast-track
              escorts.
            </li>
          </ul>
        </div>
        <div className="card">
          <h2 className="text-lg font-semibold text-slate-900">How to choose</h2>
          <ul className="mt-3 space-y-2 text-sm text-slate-700">
            <li>
              Need visa-on-arrival stamping done for you? Pick Vietnam Fast Track for bundled stamping support.
            </li>
            <li>
              Travelling with family or tight layovers? Vietnam Airport Assistance specialises in transfer hand-holding.
            </li>
            <li>
              Looking for bespoke VIP touches and nationwide cover? Vietnam Fast Track Service (VFS) scales from budget to
              elite.
            </li>
          </ul>
        </div>
      </section>

      <section className="space-y-6">
        {services.map((service) => (
          <ServiceCard key={service.name} service={service} />
        ))}
      </section>

      <footer className="rounded-2xl border border-dashed border-brand-dark bg-brand-light/40 p-6 text-sm text-slate-600">
        <h2 className="text-lg font-semibold text-brand-dark">Research notes</h2>
        <p className="mt-2">
          Pricing and review data were captured in November 2025 from provider rate cards and public Trustpilot pages via
          the read-only <code>r.jina.ai</code> proxy. Always confirm availability, inclusions, and visa requirements
          directly with your chosen operator before booking.
        </p>
      </footer>
    </main>
  );
}
