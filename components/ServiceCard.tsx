import { Service } from "../app/lib/services";

export function ServiceCard({ service }: { service: Service }) {
  const headingId = `${service.name
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "")}-heading`;

  return (
    <article className="card" aria-labelledby={headingId}>
      <header className="mb-4">
        <div className="flex flex-wrap items-center justify-between gap-2">
          <h2 id={headingId} className="text-xl font-semibold text-slate-900">
            {service.name}
          </h2>
          <a
            href={service.website}
            target="_blank"
            rel="noopener noreferrer"
            className="badge"
          >
            Visit site ↗
          </a>
        </div>
        <p className="mt-2 text-sm text-slate-600">
          Operated by <span className="font-semibold text-slate-700">{service.company}</span>
        </p>
        <p className="mt-3 text-slate-700">{service.description}</p>
      </header>

      <section className="mb-5">
        <h3 className="text-sm font-semibold uppercase tracking-wide text-slate-500">
          Key inclusions
        </h3>
        <ul className="mt-2 space-y-1 text-sm text-slate-700">
          {service.offerings.map((item) => (
            <li key={item} className="flex gap-2">
              <span aria-hidden className="text-brand-dark">•</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </section>

      <section className="mb-5">
        <h3 className="text-sm font-semibold uppercase tracking-wide text-slate-500">
          Pricing at SGN
        </h3>
        <div className="mt-2 overflow-hidden rounded-xl border border-slate-200">
          <table className="w-full table-auto text-left text-sm">
            <thead className="bg-slate-100 text-xs uppercase tracking-wide text-slate-600">
              <tr>
                <th scope="col">Package</th>
                <th scope="col">What you get</th>
                <th scope="col">Quoted price</th>
              </tr>
            </thead>
            <tbody>
              {service.pricing.map((item) => (
                <tr key={item.label} className="align-top">
                  <th scope="row" className="font-semibold text-slate-800">
                    {item.label}
                  </th>
                  <td className="text-slate-700">
                    <p>{item.details}</p>
                    {item.conditions && (
                      <p className="mt-1 text-xs text-slate-500">{item.conditions}</p>
                    )}
                    <div className="mt-2 text-xs text-slate-500">
                      {item.citations.map((citation) => (
                        <p key={citation.url}>
                          Source: <a href={citation.url} target="_blank" rel="noreferrer">{citation.title}</a>
                          {citation.note ? ` – ${citation.note}` : ""}
                        </p>
                      ))}
                    </div>
                  </td>
                  <td className="font-semibold text-slate-900">{item.price}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section>
        <h3 className="text-sm font-semibold uppercase tracking-wide text-slate-500">
          Reputation snapshot
        </h3>
        <div className="mt-2 flex flex-wrap items-baseline gap-3 text-sm">
          <div className="flex items-baseline gap-1 font-semibold text-slate-900">
            <span className="text-2xl">{service.reviews.rating.toFixed(1)}</span>
            <span className="text-xs text-slate-500">/ {service.reviews.scale}</span>
          </div>
          <span className="text-slate-600">
            Based on {service.reviews.reviewCount} recent Trustpilot reviews
          </span>
        </div>
        <p className="mt-2 text-sm text-slate-700">{service.reviews.summary}</p>
        <ul className="mt-2 space-y-1 text-xs text-slate-500">
          {service.reviews.citations.map((citation) => (
            <li key={citation.url}>
              Source: <a href={citation.url} target="_blank" rel="noreferrer">{citation.title}</a>
            </li>
          ))}
        </ul>
      </section>
    </article>
  );
}
