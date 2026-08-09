import { cn } from "@/lib/utils";

/**
 * Math Ch11–style tutorial prose (font-expl + Part/claim/Tip spacing).
 * No KaTeX — English T/F explanations are plain language.
 */
export function ExplanationProse({
  text,
  className,
}: {
  text: string;
  className?: string;
}) {
  const paragraphs = text
    .split(/\n\n+/)
    .map((p) => p.trim())
    .filter(Boolean);

  type Chunk =
    | { kind: "part"; title: string }
    | { kind: "claim"; text: string }
    | { kind: "note"; body: string }
    | { kind: "close"; text: string }
    | { kind: "para"; text: string };

  const chunks: Chunk[] = [];
  for (const p of paragraphs) {
    const partOnly = p.match(/^\*\*([^*]+)\*\*\s*$/);
    if (partOnly && /^(Part\b|Answer\b|Overview\b|Setup\b)/i.test(partOnly[1].trim())) {
      chunks.push({ kind: "part", title: partOnly[1].replace(/[.!:]+$/, "") });
      continue;
    }
    if (/^\*\*[A-E]\)/.test(p)) {
      chunks.push({ kind: "claim", text: p });
      continue;
    }
    const tip = p.match(/^\*\*(Tip|Trap|Note)\.?\*\*\s*([\s\S]*)$/i);
    if (tip) {
      chunks.push({ kind: "note", body: `${tip[1]}: ${tip[2]}` });
      continue;
    }
    const tipPlain = p.match(/^(Tip|Trap|Note):\s*([\s\S]*)$/i);
    if (tipPlain) {
      chunks.push({ kind: "note", body: `${tipPlain[1]}: ${tipPlain[2]}` });
      continue;
    }
    // Natural verdict lead-in (not bare true/false)
    if (
      /^(so|therefore|hence|thus|overall)\b/i.test(p) &&
      /\b(true|false|holds|correct|incorrect|right|wrong)\b/i.test(p)
    ) {
      chunks.push({ kind: "close", text: p });
      continue;
    }
    chunks.push({ kind: "para", text: p });
  }

  return (
    <div
      className={cn(
        "font-expl text-[15px] leading-[1.6] text-[#1f1f1f] sm:text-[15.5px]",
        className,
      )}
    >
      {chunks.map((chunk, idx) => {
        if (chunk.kind === "part") {
          return (
            <h4
              key={idx}
              className="mb-3 mt-9 text-[16.5px] font-bold leading-snug tracking-tight text-[#111] first:mt-0 sm:text-[17.5px]"
            >
              {chunk.title}
            </h4>
          );
        }
        if (chunk.kind === "claim") {
          return (
            <p
              key={idx}
              className="mb-3 mt-10 text-[15.5px] font-bold leading-snug text-[#111] first:mt-0 sm:text-[16.5px]"
            >
              <InlineMarks text={chunk.text} />
            </p>
          );
        }
        if (chunk.kind === "note") {
          const [label, ...rest] = chunk.body.split(":");
          return (
            <aside
              key={idx}
              className="my-6 border-l-[3px] border-[#c4c4c4] py-1.5 pl-4 text-[14.5px] font-semibold italic leading-[1.6] text-[#2a2a2a]"
            >
              <span className="font-bold not-italic">{label}: </span>
              <InlineMarks text={rest.join(":").trim()} />
            </aside>
          );
        }
        if (chunk.kind === "close") {
          return (
            <p key={idx} className="mb-4 mt-3 font-semibold leading-[1.6] text-[#111]">
              <InlineMarks text={chunk.text} />
            </p>
          );
        }
        return (
          <p key={idx} className="mb-4 mt-0 leading-[1.6]">
            <InlineMarks text={chunk.text} />
          </p>
        );
      })}
    </div>
  );
}

function InlineMarks({ text }: { text: string }) {
  const parts: { kind: "text" | "bold" | "italic"; value: string }[] = [];
  const re = /(\*\*[^*]+?\*\*|\*[^*\n]+?\*)/g;
  let last = 0;
  let m: RegExpExecArray | null;
  while ((m = re.exec(text))) {
    if (m.index > last) parts.push({ kind: "text", value: text.slice(last, m.index) });
    const raw = m[0];
    if (raw.startsWith("**")) parts.push({ kind: "bold", value: raw.slice(2, -2) });
    else parts.push({ kind: "italic", value: raw.slice(1, -1) });
    last = m.index + raw.length;
  }
  if (last < text.length) parts.push({ kind: "text", value: text.slice(last) });
  if (parts.length === 0) parts.push({ kind: "text", value: text });

  return (
    <span>
      {parts.map((p, i) =>
        p.kind === "bold" ? (
          <strong key={i} className="font-bold text-[#111]">
            {p.value}
          </strong>
        ) : p.kind === "italic" ? (
          <em key={i}>{p.value}</em>
        ) : (
          <span key={i}>{p.value}</span>
        ),
      )}
    </span>
  );
}
