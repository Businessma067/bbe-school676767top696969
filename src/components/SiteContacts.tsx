const WHATSAPP = "4915731177377";

/** Public contact line: WhatsApp and the school inbox. */
export function SiteContacts({ className = "" }: { className?: string }) {
  return (
    <div className={className}>
      <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
        Find us
      </p>
      <ul className="mt-3 space-y-2 text-sm">
        <li>
          <a
            href={`https://wa.me/${WHATSAPP}`}
            className="text-foreground hover:underline"
            target="_blank"
            rel="noreferrer"
          >
            WhatsApp +49 157 31177377
          </a>
        </li>
        <li>
          <a href="mailto:info@bbe-school.com" className="text-foreground hover:underline">
            info@bbe-school.com
          </a>
        </li>
      </ul>
    </div>
  );
}
