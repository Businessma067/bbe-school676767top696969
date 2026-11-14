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
        <img
          src={src}
          alt={alt}
          className="mx-auto max-h-[560px] w-full object-contain object-top"
          loading="lazy"
          decoding="async"
          fetchPriority="low"
        />
      </div>
      <figcaption className="border-t border-border px-4 py-3 text-sm leading-relaxed text-muted-foreground sm:px-6">
        {caption}
      </figcaption>
    </figure>
  );
}
