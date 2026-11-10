/** Quote CSV syntax and force untrusted spreadsheet formulas to remain text. */
export function csvEscape(value: string): string {
  const safe = /^[\s\u0000-\u001f]*[=+@-]/u.test(value) || /^[\t\r\n]/u.test(value)
    ? `'${value}`
    : value;
  return /[,"\r\n]/u.test(safe) ? `"${safe.replace(/"/g, '""')}"` : safe;
}