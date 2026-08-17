# Ch11 statement wording (dry claims, same assignments)

## Goal
Keep the **same tasks** (same scenarios, formulas, TRUE/FALSE intent). Only remove
obvious free-lunch wording from statements.

## Ban in statements
- Both intermediates **and** the verdict in one sentence
  (e.g. trading at $65, below fair value $60.71, so UNDERVALUED)
- "X, which exceeds Y by Z, making it a good buy"
- Self-proving comparisons where both computed sides are already written out

## Keep
- Exact-number claims the student must verify by calculation (Ch13-style)
- Comparison claims that require computing at least one side
- `answer_key` unchanged unless a rephrase accidentally flips truth (it should not)

## Example
- BAD: "The stock is currently trading at $65.00 per share, which is below its fair value of $60.71, so the stock is UNDERVALUED."
- GOOD: context includes market price $65; statement: "At a market price of $65.00, the preferred stock is undervalued relative to its fair value."

## Do not
- Redesign difficulty or invent new scenarios
- Swap a true exact-rate claim for a different threshold claim just to "harden"
- Put `**Answer.** A=TRUE…` in overviews
