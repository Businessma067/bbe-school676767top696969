/**
 * Normalize stored tactical explanations for display in practice / mock review.
 * Strips legacy TRUE/FALSE em-dash leads, duplicate verdict lines, and bold markers.
 */
export function cleanExplanation(text: string): string {
  const withoutVerdictLead = text
    .replace(/^(?:TRUE|FALSE)\s*[—–-]\s*/i, "")
    .replace(/\*\*/g, "")
    .replace(/—/g, ". ")
    .replace(/–/g, "-")
    .replace(/\.\s*\./g, ".")
    .replace(/[ \t]{2,}/g, " ")
    .trim();
  const seen = new Set<string>();
  let verdictSeen = false;
  return withoutVerdictLead
    .split(/\n\s*\n/)
    .map((paragraph) => paragraph.trim())
    .filter((paragraph) => {
      if (!paragraph) return false;
      const isVerdict = /^the statement is (?:true|false)\b/i.test(paragraph);
      if (isVerdict && verdictSeen) return false;
      if (isVerdict) verdictSeen = true;
      const key = paragraph.toLowerCase().replace(/[^a-z0-9]+/g, " ").trim();
      if (seen.has(key)) return false;
      seen.add(key);
      return true;
    })
    .join("\n\n");
}
