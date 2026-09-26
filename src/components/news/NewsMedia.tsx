type NewsMediaProps = {
  kind: "image" | "video";
  src: string;
  poster?: string;
  alt: string;
  caption: string;
};

export function NewsMedia({ kind, src, poster, alt, caption }: NewsMediaProps) {
  return (
    <figure className="my-8 overflow-hidden rounded-lg border border-border bg-card">
      <div className="bg-[var(--paper)]">
        {kind === "video" ? (
          <video
            className="aspect-video w-full object-cover"
            controls
            playsInline
            preload="metadata"
            poster={poster}
            aria-label={alt}
          >
            <source src={src} type="video/mp4" />
          </video>
        ) : (
          <img src={src} alt={alt} className="max-h-[420px] w-full object-cover object-top" loading="lazy" />
        )}
      </div>
      <figcaption className="border-t border-border px-4 py-3 text-sm leading-relaxed text-muted-foreground sm:px-6">
        {caption}
      </figcaption>
    </figure>
  );
}
