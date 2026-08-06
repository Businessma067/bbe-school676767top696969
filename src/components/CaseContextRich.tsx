import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { cn } from "@/lib/utils";

type CaseContextRichProps = {
  content: string;
  className?: string;
  /** Stronger title-like stem (mock exam take). */
  emphasized?: boolean;
};

/**
 * Renders economics case context with GFM tables, code/ASCII charts, and lists.
 * Falls back gracefully for plain-text contexts from earlier chapters.
 */
export function CaseContextRich({ content, className, emphasized }: CaseContextRichProps) {
  return (
    <div
      className={cn(
        "case-context-rich text-sm leading-relaxed text-muted-foreground",
        "[&_p]:mb-3 [&_p:last-child]:mb-0",
        "[&_ul]:my-2 [&_ul]:list-disc [&_ul]:pl-5",
        "[&_ol]:my-2 [&_ol]:list-decimal [&_ol]:pl-5",
        "[&_li]:mb-1",
        "[&_strong]:font-semibold [&_strong]:text-foreground",
        "[&_pre]:my-3 [&_pre]:overflow-x-auto [&_pre]:rounded-lg [&_pre]:border [&_pre]:border-border [&_pre]:bg-secondary/40 [&_pre]:p-3 [&_pre]:font-mono [&_pre]:text-[12px] [&_pre]:leading-snug [&_pre]:text-foreground",
        "[&_code]:rounded [&_code]:bg-secondary [&_code]:px-1 [&_code]:py-0.5 [&_code]:font-mono [&_code]:text-[12px]",
        "[&_pre_code]:bg-transparent [&_pre_code]:p-0",
        "[&_table]:my-3 [&_table]:w-full [&_table]:border-collapse [&_table]:text-[13px]",
        "[&_th]:border [&_th]:border-border [&_th]:bg-secondary/60 [&_th]:px-2.5 [&_th]:py-1.5 [&_th]:text-left [&_th]:font-semibold [&_th]:text-foreground",
        "[&_td]:border [&_td]:border-border [&_td]:px-2.5 [&_td]:py-1.5 [&_td]:align-top",
        "[&_tr:nth-child(even)_td]:bg-secondary/20",
        emphasized && "[&_p:first-child]:font-display [&_p:first-child]:text-lg [&_p:first-child]:font-semibold [&_p:first-child]:text-foreground sm:[&_p:first-child]:text-xl",
        className,
      )}
    >
      <ReactMarkdown remarkPlugins={[remarkGfm]}>{content}</ReactMarkdown>
    </div>
  );
}
