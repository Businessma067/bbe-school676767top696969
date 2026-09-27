import { useEffect, useRef } from "react";

type NewsImageMedia = {
  kind: "image";
  src: string;
  alt: string;
  caption: string;
};

type NewsVideoMedia = {
  kind: "video";
  src: string;
  poster: string;
  alt: string;
  caption: string;
};

type NewsMediaProps = NewsImageMedia | NewsVideoMedia;

export function NewsMedia(props: NewsMediaProps) {
  const { caption } = props;
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const stageRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (props.kind !== "video") return;
    const video = videoRef.current;
    const stage = stageRef.current;
    if (!video || !stage) return;

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduceMotion) {
      video.pause();
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting && (entry.intersectionRatio ?? 0) >= 0.35) {
          void video.play().catch(() => {});
        } else {
          video.pause();
        }
      },
      { threshold: [0, 0.35, 0.7] },
    );
    observer.observe(stage);
    return () => observer.disconnect();
  }, [props.kind, props.kind === "video" ? props.src : ""]);

  return (
    <figure className="my-8 overflow-hidden rounded-lg border border-border bg-card">
      {props.kind === "image" ? (
        <div className="bg-[var(--paper)]">
          <img
            src={props.src}
            alt={props.alt}
            className="max-h-[420px] w-full object-cover object-top"
            loading="lazy"
          />
        </div>
      ) : (
        <div ref={stageRef} className="bg-muted">
          <div className="relative aspect-video w-full overflow-hidden">
            <video
              ref={videoRef}
              className="absolute inset-0 h-full w-full object-cover"
              src={props.src}
              poster={props.poster}
              muted
              loop
              playsInline
              preload="metadata"
              aria-label={props.alt}
            />
          </div>
        </div>
      )}
      <figcaption className="border-t border-border px-4 py-3 text-sm leading-relaxed text-muted-foreground sm:px-6">
        {caption}
      </figcaption>
    </figure>
  );
}
