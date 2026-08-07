import { useCallback, useMemo, useState, type ReactNode } from "react";
import { BookOpen, Calculator, ChevronDown, ChevronUp, HelpCircle, X } from "lucide-react";
import { cn } from "@/lib/utils";
import {
  Ti30Engine,
  type AngleMode,
  type MemoryKey,
  type NotationMode,
  formatDisplay,
} from "@/lib/ti30-engine";
import { usePracticeCalcOptional } from "./PracticeCalcContext";

type Tab = "home" | "mode" | "prb" | "dist" | "stat" | "table" | "mem" | "guide";

const MEM: MemoryKey[] = ["x", "y", "z", "t", "a", "b", "c"];

type GuideItem = {
  id: string;
  title: string;
  tab: Tab;
  steps: string[];
  paste?: string;
};

const GUIDE: GuideItem[] = [
  {
    id: "basic",
    title: "Basic arithmetic",
    tab: "home",
    steps: [
      "Type numbers on the keypad (or tap digits).",
      "Use ÷ × − + then tap =.",
      "Ans recalls the last result; F↔D toggles fraction ↔ decimal when exact.",
    ],
  },
  {
    id: "2nd",
    title: "2nd (secondary) keys",
    tab: "home",
    steps: [
      "Faint taupe labels above keys are always the 2nd functions.",
      "Tap 2nd (highlights caramel) then the key — e.g. 2nd → sin for sin⁻¹.",
      "2nd stays on for one keystroke.",
    ],
  },
  {
    id: "trig",
    title: "Trig & angles",
    tab: "mode",
    steps: [
      "Open Mode → set DEG / RAD / GRAD to match the problem.",
      "Home → sin( cos( tan( … ) then =.",
      "Inverse: 2nd + sin / cos / tan (sin⁻¹ …).",
    ],
  },
  {
    id: "prb",
    title: "Probability (nCr / nPr / ! / rand)",
    tab: "prb",
    steps: [
      "Open the PRB tab.",
      "nCr(n,r) or nPr(n,r) — enter args separated by commas, then =.",
      "rand() and randint(lo,hi) for random draws.",
    ],
    paste: "nCr(",
  },
  {
    id: "dist-normal",
    title: "Distributions — Normal",
    tab: "dist",
    steps: [
      "Open Dist (this is where Normal / Binomial / Poisson live).",
      "normalpdf(x, μ, σ) — density. Defaults μ=0, σ=1 if omitted.",
      "normalcdf(lo, hi, μ, σ) — area between lo and hi.",
      "invNorm(area, μ, σ) — z/x for left-tail area.",
      "Example: normalcdf(-1E99, 1.96) ≈ 0.975",
    ],
    paste: "normalcdf(",
  },
  {
    id: "dist-binom",
    title: "Distributions — Binomial",
    tab: "dist",
    steps: [
      "binompdf(n, p, x) — P(X = x).",
      "binomcdf(n, p, x) — P(X ≤ x).",
      "Example: binompdf(10, 0.5, 3)",
    ],
    paste: "binompdf(",
  },
  {
    id: "dist-poisson",
    title: "Distributions — Poisson",
    tab: "dist",
    steps: [
      "poissonpdf(μ, x) — P(X = x).",
      "poissoncdf(μ, x) — P(X ≤ x).",
    ],
    paste: "poissonpdf(",
  },
  {
    id: "stat",
    title: "1-Var & 2-Var stats",
    tab: "stat",
    steps: [
      "Enter L1 values (comma or space separated) → Load L1.",
      "For regression, also enter L2 → Load L2.",
      "Read mean, σ, r, line a+bx from the results panel.",
    ],
  },
  {
    id: "table",
    title: "Function table",
    tab: "table",
    steps: [
      "Enter f(x) using x (e.g. x^2+1).",
      "Set Start and Step → Generate table.",
    ],
  },
  {
    id: "mem",
    title: "Memories (STO / RCL)",
    tab: "mem",
    steps: [
      "Compute a value (=) first so Ans is set.",
      "STO saves Ans into x…c; RCL inserts that memory into the entry line.",
    ],
  },
];

function Key({
  label,
  sub,
  onClick,
  wide,
  accent,
  danger,
  className,
}: {
  label: string;
  sub?: string;
  onClick: () => void;
  wide?: boolean;
  accent?: boolean;
  danger?: boolean;
  className?: string;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={cn(
        "relative flex min-h-9 flex-col items-center justify-center rounded-lg border px-0.5 py-1 text-center transition active:scale-[0.97]",
        wide && "col-span-2",
        accent && "border-caramel-deep/50 bg-caramel-deep text-primary-foreground shadow-sm",
        danger && "border-destructive/40 bg-destructive/10 text-destructive",
        !accent &&
          !danger &&
          "border-border bg-background text-foreground hover:bg-secondary/80",
        className,
      )}
    >
      {sub ? (
        <span className="pointer-events-none absolute left-1 top-0.5 text-[7px] font-semibold uppercase leading-none tracking-wide text-taupe/55">
          {sub}
        </span>
      ) : null}
      <span className="text-[11px] font-bold leading-tight sm:text-xs">{label}</span>
    </button>
  );
}

function TabBtn({
  active,
  onClick,
  children,
}: {
  active: boolean;
  onClick: () => void;
  children: ReactNode;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={cn(
        "rounded-md px-1.5 py-0.5 text-[9px] font-semibold uppercase tracking-wide transition",
        active
          ? "bg-caramel-deep text-primary-foreground"
          : "text-muted-foreground hover:bg-secondary hover:text-foreground",
      )}
    >
      {children}
    </button>
  );
}

/**
 * Virtual scientific calculator modelled on publicly documented
 * TI-30XS MultiView™ / TI-30X Pro Dist menu feature set.
 */
export function Ti30MathPrint({
  className,
  compact,
}: {
  className?: string;
  compact?: boolean;
}) {
  const engine = useMemo(() => new Ti30Engine(), []);
  const [, bump] = useState(0);
  const refresh = () => bump((n) => n + 1);
  const [tab, setTab] = useState<Tab>("home");
  const [second, setSecond] = useState(false);
  const [guideOpen, setGuideOpen] = useState(false);
  const [tableFn, setTableFn] = useState("x^2");
  const [tableStart, setTableStart] = useState("0");
  const [tableStep, setTableStep] = useState("1");
  const [tableRows, setTableRows] = useState<{ x: number; y: number | string }[]>([]);
  const [listDraft, setListDraft] = useState("");
  const [list2Draft, setList2Draft] = useState("");
  const [activeGuide, setActiveGuide] = useState<string | null>(null);

  const insert = useCallback(
    (s: string) => {
      engine.pushKey(s);
      setSecond(false);
      refresh();
    },
    [engine],
  );

  const run = () => {
    engine.evaluate();
    setSecond(false);
    refresh();
  };

  const openGuideItem = (g: GuideItem) => {
    setActiveGuide(g.id);
    setTab(g.tab);
    setGuideOpen(true);
    if (g.paste) {
      engine.clearEntry();
      engine.pushKey(g.paste);
      refresh();
    }
  };

  const screenLines = engine.history.slice(-3);
  const display =
    engine.lastError ??
    (engine.entry ||
      (engine.history.length ? engine.history[engine.history.length - 1].result : "0"));

  const fieldCls =
    "mt-0.5 w-full rounded-lg border border-border bg-background px-2 py-1 font-mono text-xs text-foreground";

  return (
    <div
      className={cn(
        "flex w-full max-w-md flex-col overflow-hidden rounded-2xl border border-border bg-card text-foreground shadow-sm",
        compact && "max-w-none shadow-none",
        className,
      )}
    >
      <div className="flex items-center justify-between gap-2 border-b border-border px-3 py-2">
        <div className="flex min-w-0 items-center gap-2">
          <Calculator className="h-4 w-4 shrink-0 text-caramel-deep" />
          <div className="min-w-0">
            <div className="font-display text-xs font-bold tracking-tight">MathPrint calc</div>
            <div className="truncate text-[9px] text-taupe">
              {engine.mode.angle} · {engine.mode.notation}
              {engine.mode.fix != null ? ` · FIX ${engine.mode.fix}` : ""} ·{" "}
              {engine.mode.entry}
            </div>
          </div>
        </div>
        <div className="flex flex-wrap justify-end gap-0.5">
          {(
            [
              ["home", "Home"],
              ["mode", "Mode"],
              ["prb", "PRB"],
              ["dist", "Dist"],
              ["stat", "Stat"],
              ["table", "Table"],
              ["mem", "Mem"],
            ] as const
          ).map(([id, label]) => (
            <TabBtn key={id} active={tab === id && !guideOpen} onClick={() => { setTab(id); setGuideOpen(false); }}>
              {label}
            </TabBtn>
          ))}
          <TabBtn
            active={guideOpen}
            onClick={() => {
              setGuideOpen((o) => !o);
              if (!guideOpen) setTab("guide");
            }}
          >
            Help
          </TabBtn>
        </div>
      </div>

      {/* LCD */}
      <div className="mx-3 mt-3 rounded-xl border border-border bg-ivory px-3 py-2 font-mono text-foreground shadow-inner">
        <div className="mb-1 min-h-[3.2rem] space-y-0.5 text-[10px] leading-tight text-taupe">
          {screenLines.map((h, i) => (
            <div key={`${h.expr}-${i}`} className="flex justify-between gap-2 truncate">
              <span className="truncate">{h.expr}</span>
              <span className="shrink-0 font-semibold text-foreground">{h.result}</span>
            </div>
          ))}
        </div>
        <div className="border-t border-border/60 pt-1 text-right font-display text-lg font-bold tracking-tight">
          {display}
        </div>
        <div className="mt-0.5 flex justify-between text-[9px] text-taupe">
          <span className={second ? "font-bold text-caramel-deep" : ""}>{second ? "2nd" : "\u00a0"}</span>
          <span>Ans={formatDisplay(engine.ans, engine.mode)}</span>
        </div>
      </div>

      {/* Feature guide menu */}
      <div className="mx-3 mt-2">
        <button
          type="button"
          onClick={() => setGuideOpen((o) => !o)}
          className="flex w-full items-center justify-between rounded-lg border border-dashed border-border bg-background/70 px-2.5 py-1.5 text-left text-[10px] font-semibold text-muted-foreground hover:bg-secondary/60"
        >
          <span className="inline-flex items-center gap-1.5">
            <HelpCircle className="h-3.5 w-3.5 text-caramel-deep" />
            Features &amp; where to press
          </span>
          {guideOpen ? <ChevronUp className="h-3.5 w-3.5" /> : <ChevronDown className="h-3.5 w-3.5" />}
        </button>
        {guideOpen && (
          <div className="mt-1.5 max-h-52 space-y-1 overflow-y-auto rounded-xl border border-border bg-background p-2">
            {GUIDE.map((g) => (
              <button
                key={g.id}
                type="button"
                onClick={() => openGuideItem(g)}
                className={cn(
                  "block w-full rounded-lg px-2 py-1.5 text-left text-[11px] transition",
                  activeGuide === g.id
                    ? "bg-caramel-deep/15 font-semibold text-caramel-deep"
                    : "hover:bg-secondary",
                )}
              >
                {g.title}
              </button>
            ))}
            {activeGuide && (
              <div className="mt-1 rounded-lg border border-border bg-card p-2 text-[10px] leading-relaxed text-muted-foreground">
                <p className="mb-1 font-display text-[11px] font-bold text-foreground">
                  {GUIDE.find((g) => g.id === activeGuide)?.title}
                </p>
                <ol className="list-decimal space-y-1 pl-3.5">
                  {GUIDE.find((g) => g.id === activeGuide)?.steps.map((s) => (
                    <li key={s}>{s}</li>
                  ))}
                </ol>
              </div>
            )}
          </div>
        )}
      </div>

      <div className="p-3">
        {tab === "home" && (
          <div className="grid grid-cols-5 gap-1.5">
            <Key label="2nd" accent={second} onClick={() => setSecond((s) => !s)} />
            <Key label="Mode" onClick={() => setTab("mode")} />
            <Key
              label="←"
              onClick={() => {
                engine.backspace();
                refresh();
              }}
            />
            <Key
              label="CE"
              onClick={() => {
                engine.clearEntry();
                refresh();
              }}
            />
            <Key
              label="ON"
              danger
              onClick={() => {
                engine.clearAll();
                refresh();
              }}
            />

            <Key label={second ? "sin⁻¹" : "sin"} sub="sin⁻¹" onClick={() => insert(second ? "asin(" : "sin(")} />
            <Key label={second ? "cos⁻¹" : "cos"} sub="cos⁻¹" onClick={() => insert(second ? "acos(" : "cos(")} />
            <Key label={second ? "tan⁻¹" : "tan"} sub="tan⁻¹" onClick={() => insert(second ? "atan(" : "tan(")} />
            <Key label="π" onClick={() => insert("π")} />
            <Key label="EE" onClick={() => insert("*10^")} />

            <Key label={second ? "eˣ" : "ln"} sub="eˣ" onClick={() => insert(second ? "exp(" : "ln(")} />
            <Key label={second ? "10ˣ" : "log"} sub="10ˣ" onClick={() => insert(second ? "tenpow(" : "log(")} />
            <Key label={second ? "√" : "x²"} sub="√" onClick={() => insert(second ? "sqrt(" : "^2")} />
            <Key label="^" onClick={() => insert("^")} />
            <Key label="√" onClick={() => insert("sqrt(")} />

            <Key label="(" onClick={() => insert("(")} />
            <Key label=")" onClick={() => insert(")")} />
            <Key label="1/x" onClick={() => insert("inv(")} />
            <Key label="%" onClick={() => insert("%")} />
            <Key label="÷" onClick={() => insert("÷")} />

            <Key label="7" onClick={() => insert("7")} />
            <Key label="8" onClick={() => insert("8")} />
            <Key label="9" onClick={() => insert("9")} />
            <Key label="×" onClick={() => insert("×")} />
            <Key label="nCr" onClick={() => insert("nCr(")} />

            <Key label="4" onClick={() => insert("4")} />
            <Key label="5" onClick={() => insert("5")} />
            <Key label="6" onClick={() => insert("6")} />
            <Key label="−" onClick={() => insert("−")} />
            <Key label="nPr" onClick={() => insert("nPr(")} />

            <Key label="1" onClick={() => insert("1")} />
            <Key label="2" onClick={() => insert("2")} />
            <Key label="3" onClick={() => insert("3")} />
            <Key label="+" onClick={() => insert("+")} />
            <Key label="!" onClick={() => insert("!")} />

            <Key label="(−)" onClick={() => insert("-")} />
            <Key label="0" onClick={() => insert("0")} />
            <Key label="." onClick={() => insert(".")} />
            <Key label="=" accent wide onClick={run} />
            <Key
              label="F↔D"
              onClick={() => {
                engine.toggleFracDec();
                refresh();
              }}
            />

            <Key label="Ans" onClick={() => insert("ans")} />
            <Key label="a/b" onClick={() => insert("/")} />
            <Key
              label={second ? "asinh" : "sinh"}
              sub="asinh"
              onClick={() => insert(second ? "asinh(" : "sinh(")}
            />
            <Key label="cosh" sub="acosh" onClick={() => insert(second ? "acosh(" : "cosh(")} />
            <Key label="tanh" sub="atanh" onClick={() => insert(second ? "atanh(" : "tanh(")} />
          </div>
        )}

        {tab === "mode" && (
          <div className="space-y-3 text-xs">
            <p className="text-[10px] font-bold uppercase tracking-widest text-taupe">Angle</p>
            <div className="flex flex-wrap gap-2">
              {(["DEG", "RAD", "GRAD"] as AngleMode[]).map((a) => (
                <button
                  key={a}
                  type="button"
                  className={cn(
                    "rounded-lg border px-3 py-1.5 text-[11px] font-semibold",
                    engine.mode.angle === a
                      ? "border-caramel-deep bg-caramel-deep text-primary-foreground"
                      : "border-border bg-background",
                  )}
                  onClick={() => {
                    engine.mode.angle = a;
                    refresh();
                  }}
                >
                  {a}
                </button>
              ))}
            </div>
            <p className="text-[10px] font-bold uppercase tracking-widest text-taupe">Notation</p>
            <div className="flex flex-wrap gap-2">
              {(["FLOAT", "SCI", "ENG"] as NotationMode[]).map((n) => (
                <button
                  key={n}
                  type="button"
                  className={cn(
                    "rounded-lg border px-3 py-1.5 text-[11px] font-semibold",
                    engine.mode.notation === n
                      ? "border-caramel-deep bg-caramel-deep text-primary-foreground"
                      : "border-border bg-background",
                  )}
                  onClick={() => {
                    engine.mode.notation = n;
                    refresh();
                  }}
                >
                  {n}
                </button>
              ))}
            </div>
            <p className="text-[10px] font-bold uppercase tracking-widest text-taupe">FIX decimals</p>
            <div className="flex flex-wrap gap-2">
              <button
                type="button"
                className={cn(
                  "rounded-lg border px-3 py-1.5 text-[11px] font-semibold",
                  engine.mode.fix == null
                    ? "border-caramel-deep bg-caramel-deep text-primary-foreground"
                    : "border-border bg-background",
                )}
                onClick={() => {
                  engine.mode.fix = null;
                  refresh();
                }}
              >
                Float
              </button>
              {[0, 1, 2, 3, 4, 5, 6, 8, 9].map((d) => (
                <button
                  key={d}
                  type="button"
                  className={cn(
                    "rounded-lg border px-2.5 py-1.5 text-[11px] font-semibold",
                    engine.mode.fix === d
                      ? "border-caramel-deep bg-caramel-deep text-primary-foreground"
                      : "border-border bg-background",
                  )}
                  onClick={() => {
                    engine.mode.fix = d;
                    refresh();
                  }}
                >
                  {d}
                </button>
              ))}
            </div>
            <p className="text-[10px] font-bold uppercase tracking-widest text-taupe">Entry</p>
            <div className="flex gap-2">
              {(["MATHPRINT", "CLASSIC"] as const).map((e) => (
                <button
                  key={e}
                  type="button"
                  className={cn(
                    "rounded-lg border px-3 py-1.5 text-[11px] font-semibold",
                    engine.mode.entry === e
                      ? "border-caramel-deep bg-caramel-deep text-primary-foreground"
                      : "border-border bg-background",
                  )}
                  onClick={() => {
                    engine.mode.entry = e;
                    refresh();
                  }}
                >
                  {e}
                </button>
              ))}
            </div>
          </div>
        )}

        {tab === "prb" && (
          <div className="grid grid-cols-2 gap-2">
            <Key
              label="nPr("
              wide
              onClick={() => {
                insert("nPr(");
                setTab("home");
              }}
            />
            <Key
              label="nCr("
              wide
              onClick={() => {
                insert("nCr(");
                setTab("home");
              }}
            />
            <Key
              label="!"
              wide
              onClick={() => {
                insert("!");
                setTab("home");
              }}
            />
            <Key
              label="rand"
              wide
              onClick={() => {
                insert("rand()");
                setTab("home");
              }}
            />
            <Key
              label="randint(A,B)"
              wide
              onClick={() => {
                insert("randint(");
                setTab("home");
              }}
            />
          </div>
        )}

        {tab === "dist" && (
          <div className="space-y-2 text-xs">
            <p className="text-[10px] leading-relaxed text-muted-foreground">
              Dist menu (TI-30X Pro documented). Tap a function to paste it, finish args with commas, then =.
            </p>
            <div className="grid grid-cols-2 gap-2">
              {(
                [
                  ["normalpdf(", "normalpdf"],
                  ["normalcdf(", "normalcdf"],
                  ["invNorm(", "invNorm"],
                  ["binompdf(", "binompdf"],
                  ["binomcdf(", "binomcdf"],
                  ["poissonpdf(", "poissonpdf"],
                  ["poissoncdf(", "poissoncdf"],
                ] as const
              ).map(([paste, label]) => (
                <Key
                  key={label}
                  label={label}
                  wide
                  onClick={() => {
                    insert(paste);
                    setTab("home");
                  }}
                />
              ))}
            </div>
            <div className="rounded-lg border border-dashed border-border bg-background/60 p-2 text-[10px] leading-relaxed text-muted-foreground">
              <p className="mb-1 font-semibold text-foreground">Quick args</p>
              <p>normalcdf(lower, upper [,μ] [,σ])</p>
              <p>invNorm(area [,μ] [,σ])</p>
              <p>binompdf(n, p, x) · poissonpdf(μ, x)</p>
            </div>
          </div>
        )}

        {tab === "stat" && (
          <div className="space-y-2 text-xs">
            <p className="text-[10px] text-muted-foreground">
              Data editor — L1 (x) for 1-Var; add L2 (y) for 2-Var / LinReg.
            </p>
            <label className="block">
              <span className="text-[10px] text-taupe">L1</span>
              <textarea
                value={listDraft}
                onChange={(e) => setListDraft(e.target.value)}
                rows={2}
                placeholder="45, 55, 55, 55"
                className={fieldCls}
              />
            </label>
            <label className="block">
              <span className="text-[10px] text-taupe">L2 (optional)</span>
              <textarea
                value={list2Draft}
                onChange={(e) => setList2Draft(e.target.value)}
                rows={2}
                placeholder="1, 2, 3, 4"
                className={fieldCls}
              />
            </label>
            <div className="flex flex-wrap gap-2">
              <button
                type="button"
                className="rounded-lg bg-caramel-deep px-3 py-1.5 text-[11px] font-semibold text-primary-foreground"
                onClick={() => {
                  const parse = (s: string) =>
                    s
                      .split(/[\s,;]+/)
                      .map((t) => t.trim())
                      .filter(Boolean)
                      .map(Number)
                      .filter((n) => Number.isFinite(n));
                  engine.lists.L1 = parse(listDraft);
                  engine.lists.L2 = parse(list2Draft);
                  refresh();
                }}
              >
                Load lists
              </button>
              <button
                type="button"
                className="rounded-lg border border-border px-3 py-1.5 text-[11px] font-semibold"
                onClick={() => {
                  engine.lists.L1 = [];
                  engine.lists.L2 = [];
                  setListDraft("");
                  setList2Draft("");
                  refresh();
                }}
              >
                Clear
              </button>
            </div>
            {(() => {
              const s1 = engine.stats1Var();
              const s2 = engine.stats2Var();
              if (!s1) return <p className="text-muted-foreground">No data in L1</p>;
              return (
                <div className="space-y-2">
                  <div className="grid grid-cols-2 gap-1 rounded-xl border border-border bg-background p-2 font-mono text-[11px]">
                    {Object.entries(s1).map(([k, v]) => (
                      <div key={k} className="flex justify-between gap-2">
                        <span className="text-taupe">{k}</span>
                        <span>{formatDisplay(v, engine.mode)}</span>
                      </div>
                    ))}
                  </div>
                  {s2 && s2.n >= 2 && (
                    <div className="grid grid-cols-2 gap-1 rounded-xl border border-border bg-background p-2 font-mono text-[11px]">
                      <p className="col-span-2 text-[10px] font-bold uppercase tracking-widest text-taupe">
                        2-Var / LinReg
                      </p>
                      {Object.entries(s2).map(([k, v]) => (
                        <div key={k} className="flex justify-between gap-2">
                          <span className="text-taupe">{k}</span>
                          <span>{formatDisplay(v, engine.mode)}</span>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              );
            })()}
          </div>
        )}

        {tab === "table" && (
          <div className="space-y-2 text-xs">
            <p className="text-[10px] text-muted-foreground">Function table (Auto) — f(x), start, step.</p>
            <label className="block">
              <span className="text-[10px] text-taupe">f(x)</span>
              <input value={tableFn} onChange={(e) => setTableFn(e.target.value)} className={fieldCls} />
            </label>
            <div className="grid grid-cols-2 gap-2">
              <label>
                <span className="text-[10px] text-taupe">Start</span>
                <input value={tableStart} onChange={(e) => setTableStart(e.target.value)} className={fieldCls} />
              </label>
              <label>
                <span className="text-[10px] text-taupe">Step</span>
                <input value={tableStep} onChange={(e) => setTableStep(e.target.value)} className={fieldCls} />
              </label>
            </div>
            <button
              type="button"
              className="rounded-lg bg-caramel-deep px-3 py-1.5 text-[11px] font-semibold text-primary-foreground"
              onClick={() => {
                setTableRows(
                  engine.functionTable(tableFn, Number(tableStart) || 0, Number(tableStep) || 1, 8),
                );
              }}
            >
              Generate table
            </button>
            {tableRows.length > 0 && (
              <div className="max-h-40 overflow-auto rounded-xl border border-border">
                <table className="w-full font-mono text-[11px]">
                  <thead className="bg-secondary text-taupe">
                    <tr>
                      <th className="px-2 py-1 text-left">x</th>
                      <th className="px-2 py-1 text-left">y</th>
                    </tr>
                  </thead>
                  <tbody>
                    {tableRows.map((r) => (
                      <tr key={r.x} className="border-t border-border">
                        <td className="px-2 py-0.5">{r.x}</td>
                        <td className="px-2 py-0.5">
                          {typeof r.y === "number" ? formatDisplay(r.y, engine.mode) : r.y}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </div>
        )}

        {tab === "mem" && (
          <div className="space-y-2 text-xs">
            <p className="text-[10px] text-muted-foreground">
              Seven memories (x,y,z,t,a,b,c) — STO stores Ans; RCL inserts value.
            </p>
            <div className="grid grid-cols-2 gap-2">
              {MEM.map((k) => (
                <div
                  key={k}
                  className="flex items-center justify-between gap-2 rounded-xl border border-border bg-background px-2 py-1.5"
                >
                  <span className="font-mono font-bold uppercase">{k}</span>
                  <span className="font-mono text-[11px] text-taupe">
                    {formatDisplay(engine.mem[k], engine.mode)}
                  </span>
                  <div className="flex gap-1">
                    <button
                      type="button"
                      className="rounded bg-caramel-deep px-1.5 py-0.5 text-[9px] font-semibold text-primary-foreground"
                      onClick={() => {
                        engine.store(k);
                        refresh();
                      }}
                    >
                      STO
                    </button>
                    <button
                      type="button"
                      className="rounded bg-secondary px-1.5 py-0.5 text-[9px] font-semibold"
                      onClick={() => {
                        engine.recall(k);
                        setTab("home");
                        refresh();
                      }}
                    >
                      RCL
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {tab === "guide" && (
          <div className="space-y-2 text-xs text-muted-foreground">
            <p className="inline-flex items-center gap-1.5 font-display text-sm font-bold text-foreground">
              <BookOpen className="h-4 w-4 text-caramel-deep" /> Feature guide
            </p>
            <p>Use the menu above — tap a feature to jump to the right tab and see exact key steps.</p>
          </div>
        )}
      </div>

      <p className="border-t border-border px-3 py-1.5 text-[8px] leading-snug text-muted-foreground">
        Independent math engine inspired by TI-30XS MultiView / TI-30X Pro Dist public docs. Not affiliated
        with Texas Instruments. For exam practice only.
      </p>
    </div>
  );
}

/** Panel that replaces Theory while the practice calculator is open. */
export function PracticeCalcPanel() {
  const calc = usePracticeCalcOptional();
  if (!calc?.open) return null;
  return (
    <div className="flex h-full min-h-0 flex-col overflow-hidden rounded-2xl border border-border bg-card">
      <div className="flex shrink-0 items-center justify-between gap-2 border-b border-border px-3 py-2">
        <h3 className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-muted-foreground">
          <Calculator className="h-3.5 w-3.5 text-caramel-deep" /> Calculator
        </h3>
        <button
          type="button"
          onClick={() => calc.setOpen(false)}
          className="inline-flex items-center gap-1 rounded-md border border-border bg-background px-2 py-1 text-[10px] font-semibold hover:bg-secondary"
        >
          <X className="h-3 w-3" /> Close · Theory
        </button>
      </div>
      <div className="min-h-0 flex-1 overflow-y-auto p-2">
        <Ti30MathPrint compact className="w-full" />
      </div>
    </div>
  );
}

/** Right sticky slot: calculator when open, otherwise the Theory / explanation children. */
export function PracticeRightSlot({
  children,
  className = "lg:sticky lg:top-20 lg:block lg:h-[calc(100vh-6rem)] lg:w-96 lg:shrink-0",
}: {
  children: ReactNode;
  className?: string;
}) {
  const calc = usePracticeCalcOptional();
  return (
    <aside className={className}>
      {calc?.open ? <PracticeCalcPanel /> : children}
    </aside>
  );
}

/**
 * Toggle for Timed Mode / headers.
 * With PracticeCalcProvider → flips context (panel in Theory slot).
 * Without provider (e.g. /practice) → floating dropdown.
 */
export function PracticeCalculatorInline() {
  const ctx = usePracticeCalcOptional();
  const [localOpen, setLocalOpen] = useState(false);
  const open = ctx ? ctx.open : localOpen;
  const toggle = () => (ctx ? ctx.toggle() : setLocalOpen((o) => !o));

  return (
    <div className="relative">
      <button
        type="button"
        onClick={toggle}
        aria-pressed={open}
        className={cn(
          "inline-flex items-center gap-2 rounded-lg border px-3 py-2 text-xs font-bold transition-colors",
          open
            ? "border-caramel-deep bg-caramel-deep text-primary-foreground"
            : "border-border bg-background text-foreground hover:bg-secondary",
        )}
      >
        <Calculator className="h-4 w-4" /> Calculator
      </button>
      {!ctx && open ? (
        <div className="absolute right-0 z-50 mt-2 w-[min(100vw-1.5rem,24rem)] shadow-2xl">
          <div className="mb-1 flex justify-end">
            <button
              type="button"
              onClick={() => setLocalOpen(false)}
              className="inline-flex items-center gap-1 rounded-md border border-border bg-card px-2 py-1 text-[10px] font-semibold"
            >
              <X className="h-3 w-3" /> Close
            </button>
          </div>
          <Ti30MathPrint />
        </div>
      ) : null}
    </div>
  );
}
