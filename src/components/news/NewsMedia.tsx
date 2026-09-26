type NewsMediaProps = {
  kind: "image";
  src: string;
  alt: string;
  caption: string;
};

export function NewsMedia({ src, alt, caption }: NewsMediaProps) {
  return (
    <figure className="my-8 overflow-hidden rounded-lg border border-border bg-card">
      <div className="bg-[var(--paper)]">
        <img src={src} alt={alt} className="max-h-[420px] w-full object-cover object-top" loading="lazy" />
      </div>
      <figcaption className="border-t border-border px-4 py-3 text-sm leading-relaxed text-muted-foreground sm:px-6">
        {caption}
      </figcaption>
    </figure>
  );
}
