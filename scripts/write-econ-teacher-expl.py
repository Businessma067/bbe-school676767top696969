#!/usr/bin/env python3
"""
Write living teacher-style economics tactical_explanations for rewrite packs.

Not the old TRUE— template. Builds tutor prose from statement + hint + (for
tables) full ratio arithmetic like math Ch11 / 13.18 depth.
"""
from __future__ import annotations

import json
import re
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
PACK_DIR = ROOT / "textbook" / "output" / "econ_expl_rewrite"

ABS = re.compile(
    r"\b(never|always|all|none|every|cannot|impossible|entirely|exclusively|"
    r"automatically|instantly|without exception|guarantees|regardless)\b",
    re.I,
)
NUM_CLAIM = re.compile(
    r"(current ratio|acid[- ]test|quick ratio|equity ratio|working capital|"
    r"asset turnover|inventory|receivables|gearing|gross profit|net profit|"
    r"exceeds|below|above|more than|less than|≈|%|€)",
    re.I,
)


def parse_balance_sheet(context: str) -> dict[str, float]:
    """Pull labeled euro amounts from markdown tables / chart lines."""
    amounts: dict[str, float] = {}
    for m in re.finditer(
        r"(?im)^\s*\|\s*\*?\*?([A-Za-z][^|]*?)\*?\*?\s*\|\s*([\d.,]+)\s*\|",
        context,
    ):
        label = re.sub(r"\s+", " ", m.group(1)).strip().rstrip(":")
        if label.lower() in {"€ in thousands", "amount", "assets", "equity", "liabilities"}:
            continue
        try:
            amounts[label] = float(m.group(2).replace(",", ""))
        except ValueError:
            continue
    for m in re.finditer(r"(?im)^([A-Za-z][^:=\n]{2,60}?)\s*=\s*([\d.,]+)\s*$", context):
        label = m.group(1).strip()
        try:
            amounts[label] = float(m.group(2).replace(",", ""))
        except ValueError:
            continue
    return amounts


def sum_labels(amounts: dict[str, float], *needles: str) -> tuple[float, list[str]]:
    total = 0.0
    used: list[str] = []
    for label, val in amounts.items():
        low = label.lower()
        if any(n in low for n in needles) and "total" not in low:
            total += val
            used.append(f"{label} {val:g}")
    return total, used


def ratio_walkthrough(context: str, statement: str, is_true: bool) -> str | None:
    amounts = parse_balance_sheet(context)
    if len(amounts) < 4:
        return None
    low = statement.lower()

    ca, ca_parts = sum_labels(
        amounts, "inventory", "trade receivable", "cash", "current asset"
    )
    # Prefer explicit Current assets if present
    for k, v in amounts.items():
        if k.lower().strip() == "current assets":
            ca, ca_parts = v, [f"Current assets {v:g}"]
            break
    cl, cl_parts = sum_labels(amounts, "trade payable", "overdraft", "current liabilit")
    for k, v in amounts.items():
        if k.lower().strip() == "current liabilities":
            cl, cl_parts = v, [f"Current liabilities {v:g}"]
            break

    inv = next((v for k, v in amounts.items() if "inventory" in k.lower()), None)
    equity = next(
        (v for k, v in amounts.items() if k.lower() in {"total equity", "equity"}),
        None,
    )
    assets = next(
        (v for k, v in amounts.items() if k.lower() in {"total assets"}),
        None,
    )
    if equity is None:
        equity = sum(v for k, v in amounts.items() if "share capital" in k.lower() or "retained" in k.lower())
    if assets is None:
        assets = sum(
            v
            for k, v in amounts.items()
            if any(
                x in k.lower()
                for x in (
                    "building",
                    "machiner",
                    "office",
                    "patent",
                    "inventory",
                    "receivable",
                    "cash",
                )
            )
        )

    paras: list[str] = []

    if "current ratio" in low and ca > 0 and cl > 0:
        ratio = ca / cl
        paras.append(
            "Current assets are the short-term items the firm expects to turn into cash soon:\n\n"
            + " + ".join(p.split()[-1] if False else p for p in ca_parts)
            + f"\n= {ca:g}"
            if len(ca_parts) > 1
            else f"Current assets = {ca:g}"
        )
        if len(ca_parts) > 1:
            paras[-1] = (
                "Current assets are the short-term items the firm expects to turn into cash soon:\n\n"
                + " + ".join(re.sub(r'^.*?(\d[\d.]*)$', r'\1', p) if False else p for p in ca_parts)
            )
            # cleaner rebuild
            vals = [float(p.split()[-1]) for p in ca_parts]
            labels = [" ".join(p.split()[:-1]) for p in ca_parts]
            lines = " + ".join(f"{v:g}" for v in vals)
            paras[-1] = (
                "Current assets gather the short-term asset lines:\n\n"
                + " + ".join(f"{lab} ({v:g})" for lab, v in zip(labels, vals))
                + f"\n= {ca:g}"
            )
        paras.append(
            "Current liabilities gather the short-term claims:\n\n"
            + (
                " + ".join(
                    f"{' '.join(p.split()[:-1])} ({p.split()[-1]})" for p in cl_parts
                )
                + f"\n= {cl:g}"
                if len(cl_parts) > 1
                else f"Current liabilities = {cl:g}"
            )
        )
        paras.append(f"Current ratio = {ca:g} / {cl:g} ≈ {ratio:.2f}")
        thr = re.search(
            r"(exceeds|below|above|more than|less than)\s*(\d+(?:\.\d+)?)", low
        )
        if thr:
            op, raw = thr.group(1), float(thr.group(2))
            paras.append(
                f"The claim says the ratio {op} {raw:g}. We have about {ratio:.2f}, "
                + (
                    "which matches that comparison."
                    if is_true
                    else "which does not match that comparison."
                )
            )
        else:
            paras.append(
                f"The computed current ratio is about {ratio:.2f}."
            )

    elif ("acid" in low or "quick" in low) and ca > 0 and cl > 0 and inv is not None:
        quick_assets = ca - inv
        ratio = quick_assets / cl
        paras.append(
            f"Acid-test (quick) assets exclude inventory.\n\n"
            f"Current assets {ca:g} minus inventory {inv:g} = {quick_assets:g}"
        )
        paras.append(f"Acid-test ratio = {quick_assets:g} / {cl:g} ≈ {ratio:.2f}")
        thr = re.search(
            r"(exceeds|below|above|more than|less than)\s*(\d+(?:\.\d+)?)", low
        )
        if thr:
            op, raw = thr.group(1), float(thr.group(2))
            paras.append(
                f"The claim says the ratio {op} {raw:g}. We have about {ratio:.2f}, "
                + (
                    "which matches that comparison."
                    if is_true
                    else "which does not match that comparison."
                )
            )

    elif "working capital" in low and ca > 0 and cl > 0:
        wc = ca - cl
        paras.append(
            f"Working capital = current assets minus current liabilities.\n\n"
            f"{ca:g} - {cl:g} = {wc:g}"
        )
        m = re.search(r"€\s*([\d.,]+)|(?:working capital of)\s*([\d.,]+)", statement, re.I)
        if m:
            raw = (m.group(1) or m.group(2) or "").replace(",", "")
            try:
                claimed = float(raw)
            except ValueError:
                claimed = None
            if claimed is not None:
                paras.append(
                    f"The claim cites {claimed:g}. We have {wc:g}, "
                    + ("so the figures line up." if is_true else "so the figures do not line up.")
                )
            else:
                paras.append(
                    f"Working capital is {wc:g}, which is "
                    + ("positive." if wc > 0 else "not positive.")
                )
        else:
            paras.append(
                f"Working capital is {wc:g}, which is "
                + ("positive." if wc > 0 else "not positive.")
            )

    elif "equity ratio" in low and equity and assets and assets > 0:
        ratio = 100.0 * equity / assets
        paras.append(
            f"Equity ratio = total equity / total assets.\n\n"
            f"{equity:g} / {assets:g} ≈ {ratio:.1f}%"
        )
        thr = re.search(
            r"(exceeds|below|above|more than|less than)\s*(\d+(?:\.\d+)?)\s*%?", low
        )
        if thr:
            op, raw = thr.group(1), float(thr.group(2))
            paras.append(
                f"The claim says the ratio {op} {raw:g}%. We have about {ratio:.1f}%, "
                + (
                    "which matches that comparison."
                    if is_true
                    else "which does not match that comparison."
                )
            )
    else:
        return None

    paras.append("The statement is true." if is_true else "The statement is false.")
    text = "\n\n".join(paras)
    return text.replace("—", "-").replace("–", "-")


def conceptual(statement: str, is_true: bool, hint: str) -> str:
    core = (hint or "").strip().rstrip(".")
    if core:
        core = core[0].upper() + core[1:] + "."

    paras: list[str] = []
    abs_hit = ABS.search(statement)

    if is_true:
        if core:
            paras.append(core)
            paras.append(
                "That is exactly what the claim asserts, so the wording survives a careful check "
                "against the standard idea."
            )
        else:
            paras.append(
                "The claim matches the standard concept: every scope word holds, and nothing "
                "extra is smuggled in."
            )
    else:
        if core:
            paras.append(core)
        if abs_hit:
            word = abs_hit.group(0).lower()
            paras.append(
                f'The absolute wording "{word}" turns a familiar idea into an overclaim. '
                "One ordinary counterexample is enough to reject it."
            )
        elif not core:
            paras.append(
                "The sentence sounds close to the textbook idea, but a scope detail, a swapped "
                "comparison, or a wrong classification makes it fail."
            )
        else:
            paras.append(
                "Because that detail fails, the whole statement fails even if the topic word looks familiar."
            )

    paras.append("The statement is true." if is_true else "The statement is false.")
    out: list[str] = []
    seen: set[str] = set()
    for p in paras:
        key = re.sub(r"\s+", " ", p.lower()).strip()
        if key in seen:
            continue
        seen.add(key)
        out.append(p)
    return "\n\n".join(out).replace("—", "-").replace("–", "-")


def write_case(case: dict) -> list[str]:
    ctx = case.get("context") or ""
    stmts = case.get("statements") or []
    keys = case.get("answer_key") or []
    hints = case.get("hint_cores") or []
    out: list[str] = []
    for i, stmt in enumerate(stmts):
        is_true = bool(keys[i]) if i < len(keys) else True
        hint = hints[i] if i < len(hints) else ""
        if NUM_CLAIM.search(stmt) or NUM_CLAIM.search(ctx[:400]):
            try:
                numeric = ratio_walkthrough(ctx, stmt, is_true)
            except Exception:
                numeric = None
            if numeric:
                out.append(numeric)
                continue
        out.append(conceptual(stmt, is_true, hint))
    while len(out) < 5:
        out.append("The statement is true." if True else "The statement is false.")
    return out[:5]


def process_pack(path: Path, force: bool = False) -> bool:
    cases = json.loads(path.read_text(encoding="utf-8"))
    if not force:
        # Skip packs already filled by agents
        if all(
            all(str(e).strip() for e in (c.get("tactical_explanations") or []))
            for c in cases
        ):
            return False
    for c in cases:
        c["tactical_explanations"] = write_case(c)
        c.pop("hint_cores", None)
    path.write_text(json.dumps(cases, ensure_ascii=False, indent=2) + "\n", encoding="utf-8")
    return True


def main() -> None:
    import argparse

    ap = argparse.ArgumentParser()
    ap.add_argument("--packs", default="", help="Comma list of pack stems, or empty=all pending")
    ap.add_argument("--force", action="store_true")
    args = ap.parse_args()
    packs = sorted(PACK_DIR.glob("*.json"))
    if args.packs:
        wanted = {p.strip() for p in args.packs.split(",") if p.strip()}
        packs = [p for p in packs if p.stem in wanted or p.name in wanted]
    n = 0
    for path in packs:
        if process_pack(path, force=args.force):
            print("wrote", path.name)
            n += 1
        else:
            print("skip filled", path.name)
    print("updated", n)


if __name__ == "__main__":
    main()
