import { useCallback, useMemo, useState } from "react";
import { Calculator, X } from "lucide-react";
import { cn } from "@/lib/utils";
import {
  Ti30Engine,
  type AngleMode,
  type MemoryKey,
  type NotationMode,
  formatDisplay,
} from "@/lib/ti30-engine";

type Tab = "home" | "mode" | "prb" | "stat" | "table" | "mem";

const MEM: MemoryKey[] = ["x", "y", "z", "t", "a", "b", "c"];

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
        "relative flex min-h-9 flex-col items-center justify-center rounded-md border px-0.5 py-1 text-center shadow-sm transition active:scale-[0.97]",
        wide && "col-span-2",
        accent && "border-sky-700/40 bg-sky-900 text-sky-50",
        danger && "border-rose-800/50 bg-rose-950 text-rose-100",
        !accent &&
          !danger &&
          "border-zinc-600/80 bg-gradient-to-b from-zinc-200 to-zinc-300 text-zinc-900 hover:from-zinc-100",
        className,
      )}
    >
      {sub ? (
        <span className="absolute left-1 top-0.5 text-[8px] font-semibold uppercase leading-none text-sky-800/80">
          {sub}
        </span>
      ) : null}
      <span className="text-[11px] font-bold leading-tight sm:text-xs">{label}</span>
    </button>
  );
}

/**
 * Virtual scientific calculator modelled on the publicly documented
 * TI-30XS MultiView™ MathPrint™ key feature set.
 */
export function Ti30MathPrint({ className }: { className?: string }) {
  const engine = useMemo(() => new Ti30Engine(), []);
  const [, bump] = useState(0);
  const refresh = () => bump((n) => n + 1);
  const [tab, setTab] = useState<Tab>("home");
  const [second, setSecond] = useState(false);
  const [tableFn, setTableFn] = useState("x^2");
  const [tableStart, setTableStart] = useState("0");
  const [tableStep, setTableStep] = useState("1");
  const [tableRows, setTableRows] = useState<{ x: number; y: number | string }[]>([]);
  const [listDraft, setListDraft] = useState("");

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

  const screenLines = engine.history.slice(-3);
  const display =
    engine.lastError ??
    (engine.entry ||
      (engine.history.length ? engine.history[engine.history.length - 1].result : "0"));

  return (
    <div
      className={cn(
        "flex w-full max-w-md flex-col overflow-hidden rounded-2xl border border-zinc-700 bg-[#1b2430] shadow-xl",
        className,
      )}
    >
      <div className="flex items-center justify-between gap-2 border-b border-zinc-700/80 px-3 py-2">
        <div className="flex items-center gap-2">
          <Calculator className="h-4 w-4 text-sky-300" />
          <div>
            <div className="text-[10px] font-bold uppercase tracking-[0.18em] text-sky-200/90">
              TI-30XS · MathPrint
            </div>
            <div className="text-[9px] text-zinc-400">
              {engine.mode.angle} · {engine.mode.notation}
              {engine.mode.fix != null ? ` · FIX ${engine.mode.fix}` : ""} ·{" "}
              {engine.mode.entry}
            </div>
          </div>
        </div>
        <div className="flex gap-1">
          {(
            [
              ["home", "Home"],
              ["mode", "Mode"],
              ["prb", "PRB"],
              ["stat", "Stat"],
              ["table", "Table"],
              ["mem", "Mem"],
            ] as const
          ).map(([id, label]) => (
            <button
              key={id}
              type="button"
              onClick={() => setTab(id)}
              className={cn(
                "rounded px-1.5 py-0.5 text-[9px] font-semibold uppercase tracking-wide",
                tab === id ? "bg-sky-700 text-white" : "text-zinc-400 hover:bg-zinc-800",
              )}
            >
              {label}
            </button>
          ))}
        </div>
      </div>

      {/* LCD */}
      <div className="mx-3 mt-3 rounded-md border border-emerald-900/40 bg-[#c5d6b0] px-3 py-2 font-mono text-[#1a2e14] shadow-inner">
        <div className="mb-1 min-h-[3.2rem] space-y-0.5 text-[10px] leading-tight opacity-80">
          {screenLines.map((h, i) => (
            <div key={`${h.expr}-${i}`} className="flex justify-between gap-2 truncate">
              <span className="truncate">{h.expr}</span>
              <span className="shrink-0 font-semibold">{h.result}</span>
            </div>
          ))}
        </div>
        <div className="border-t border-emerald-900/20 pt-1 text-right text-lg font-bold tracking-tight">
          {display}
        </div>
        <div className="mt-0.5 flex justify-between text-[9px] opacity-70">
          <span>{second ? "2nd" : "\u00a0"}</span>
          <span>Ans={formatDisplay(engine.ans, engine.mode)}</span>
        </div>
      </div>

      <div className="p-3">
        {tab === "home" && (
          <div className="grid grid-cols-5 gap-1.5">
            <Key label="2nd" accent={second} onClick={() => setSecond((s) => !s)} />
            <Key label="Mode" onClick={() => setTab("mode")} />
            <Key label="←" onClick={() => { engine.backspace(); refresh(); }} />
            <Key label="CE" onClick={() => { engine.clearEntry(); refresh(); }} />
            <Key label="ON" danger onClick={() => { engine.clearAll(); refresh(); }} />

            <Key
              label={second ? "sin⁻¹" : "sin"}
              onClick={() => insert(second ? "asin(" : "sin(")}
            />
            <Key
              label={second ? "cos⁻¹" : "cos"}
              onClick={() => insert(second ? "acos(" : "cos(")}
            />
            <Key
              label={second ? "tan⁻¹" : "tan"}
              onClick={() => insert(second ? "atan(" : "tan(")}
            />
            <Key label="π" onClick={() => insert("π")} />
            <Key label="EE" onClick={() => insert("*10^")} />

            <Key label="ln" onClick={() => insert(second ? "exp(" : "ln(")} sub={second ? "eˣ" : undefined} />
            <Key label="log" onClick={() => insert(second ? "tenpow(" : "log(")} sub={second ? "10ˣ" : undefined} />
            <Key label="x²" onClick={() => insert(second ? "sqrt(" : "^2")} sub={second ? "√" : undefined} />
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
              label="hyp"
              onClick={() => insert(second ? "asinh(" : "sinh(")}
              sub={second ? "inv" : undefined}
            />
            <Key label="cosh" onClick={() => insert("cosh(")} />
            <Key label="tanh" onClick={() => insert("tanh(")} />
          </div>
        )}

        {tab === "mode" && (
          <div className="space-y-3 text-xs text-zinc-200">
            <p className="text-[10px] font-bold uppercase tracking-widest text-zinc-400">
              Angle
            </p>
            <div className="flex flex-wrap gap-2">
              {(["DEG", "RAD", "GRAD"] as AngleMode[]).map((a) => (
                <button
                  key={a}
                  type="button"
                  className={cn(
                    "rounded-md border px-3 py-1.5 text-[11px] font-semibold",
                    engine.mode.angle === a
                      ? "border-sky-500 bg-sky-800"
                      : "border-zinc-600 bg-zinc-800",
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
            <p className="text-[10px] font-bold uppercase tracking-widest text-zinc-400">
              Notation
            </p>
            <div className="flex flex-wrap gap-2">
              {(["FLOAT", "SCI", "ENG"] as NotationMode[]).map((n) => (
                <button
                  key={n}
                  type="button"
                  className={cn(
                    "rounded-md border px-3 py-1.5 text-[11px] font-semibold",
                    engine.mode.notation === n
                      ? "border-sky-500 bg-sky-800"
                      : "border-zinc-600 bg-zinc-800",
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
            <p className="text-[10px] font-bold uppercase tracking-widest text-zinc-400">
              FIX decimals
            </p>
            <div className="flex flex-wrap gap-2">
              <button
                type="button"
                className={cn(
                  "rounded-md border px-3 py-1.5 text-[11px] font-semibold",
                  engine.mode.fix == null
                    ? "border-sky-500 bg-sky-800"
                    : "border-zinc-600 bg-zinc-800",
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
                    "rounded-md border px-2.5 py-1.5 text-[11px] font-semibold",
                    engine.mode.fix === d
                      ? "border-sky-500 bg-sky-800"
                      : "border-zinc-600 bg-zinc-800",
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
            <p className="text-[10px] font-bold uppercase tracking-widest text-zinc-400">
              Entry
            </p>
            <div className="flex gap-2">
              {(["MATHPRINT", "CLASSIC"] as const).map((e) => (
                <button
                  key={e}
                  type="button"
                  className={cn(
                    "rounded-md border px-3 py-1.5 text-[11px] font-semibold",
                    engine.mode.entry === e
                      ? "border-sky-500 bg-sky-800"
                      : "border-zinc-600 bg-zinc-800",
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
            <Key label="nPr(" wide onClick={() => { insert("nPr("); setTab("home"); }} />
            <Key label="nCr(" wide onClick={() => { insert("nCr("); setTab("home"); }} />
            <Key label="!" wide onClick={() => { insert("!"); setTab("home"); }} />
            <Key label="rand" wide onClick={() => { insert("rand()"); setTab("home"); }} />
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

        {tab === "stat" && (
          <div className="space-y-2 text-xs text-zinc-200">
            <p className="text-[10px] text-zinc-400">
              Data/List editor — L1 (1-Var Stats). Enter numbers separated by commas or spaces.
            </p>
            <textarea
              value={listDraft}
              onChange={(e) => setListDraft(e.target.value)}
              rows={3}
              placeholder="45, 55, 55, 55"
              className="w-full rounded-md border border-zinc-600 bg-zinc-900 px-2 py-1.5 text-xs text-zinc-100"
            />
            <div className="flex gap-2">
              <button
                type="button"
                className="rounded-md bg-sky-800 px-3 py-1.5 text-[11px] font-semibold"
                onClick={() => {
                  engine.lists.L1 = listDraft
                    .split(/[\s,;]+/)
                    .map((s) => s.trim())
                    .filter(Boolean)
                    .map(Number)
                    .filter((n) => Number.isFinite(n));
                  refresh();
                }}
              >
                Load L1
              </button>
              <button
                type="button"
                className="rounded-md border border-zinc-600 px-3 py-1.5 text-[11px] font-semibold"
                onClick={() => {
                  engine.lists.L1 = [];
                  setListDraft("");
                  refresh();
                }}
              >
                Clear L1
              </button>
            </div>
            {(() => {
              const s = engine.stats1Var();
              if (!s) return <p className="text-zinc-500">No data in L1</p>;
              return (
                <div className="grid grid-cols-2 gap-1 rounded-md border border-zinc-700 bg-zinc-900/80 p-2 font-mono text-[11px]">
                  {Object.entries(s).map(([k, v]) => (
                    <div key={k} className="flex justify-between gap-2">
                      <span className="text-zinc-400">{k}</span>
                      <span>{formatDisplay(v, engine.mode)}</span>
                    </div>
                  ))}
                </div>
              );
            })()}
          </div>
        )}

        {tab === "table" && (
          <div className="space-y-2 text-xs text-zinc-200">
            <p className="text-[10px] text-zinc-400">
              Function table (Auto) — enter f(x), start, step.
            </p>
            <label className="block">
              <span className="text-[10px] text-zinc-400">f(x)</span>
              <input
                value={tableFn}
                onChange={(e) => setTableFn(e.target.value)}
                className="mt-0.5 w-full rounded-md border border-zinc-600 bg-zinc-900 px-2 py-1 font-mono text-xs"
              />
            </label>
            <div className="grid grid-cols-2 gap-2">
              <label>
                <span className="text-[10px] text-zinc-400">Start</span>
                <input
                  value={tableStart}
                  onChange={(e) => setTableStart(e.target.value)}
                  className="mt-0.5 w-full rounded-md border border-zinc-600 bg-zinc-900 px-2 py-1 font-mono text-xs"
                />
              </label>
              <label>
                <span className="text-[10px] text-zinc-400">Step</span>
                <input
                  value={tableStep}
                  onChange={(e) => setTableStep(e.target.value)}
                  className="mt-0.5 w-full rounded-md border border-zinc-600 bg-zinc-900 px-2 py-1 font-mono text-xs"
                />
              </label>
            </div>
            <button
              type="button"
              className="rounded-md bg-sky-800 px-3 py-1.5 text-[11px] font-semibold"
              onClick={() => {
                setTableRows(
                  engine.functionTable(
                    tableFn,
                    Number(tableStart) || 0,
                    Number(tableStep) || 1,
                    8,
                  ),
                );
              }}
            >
              Generate table
            </button>
            {tableRows.length > 0 && (
              <div className="max-h-40 overflow-auto rounded-md border border-zinc-700">
                <table className="w-full font-mono text-[11px]">
                  <thead className="bg-zinc-800 text-zinc-400">
                    <tr>
                      <th className="px-2 py-1 text-left">x</th>
                      <th className="px-2 py-1 text-left">y</th>
                    </tr>
                  </thead>
                  <tbody>
                    {tableRows.map((r) => (
                      <tr key={r.x} className="border-t border-zinc-800">
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
          <div className="space-y-2 text-xs text-zinc-200">
            <p className="text-[10px] text-zinc-400">
              Seven memories (x,y,z,t,a,b,c) — STO stores Ans; RCL inserts value.
            </p>
            <div className="grid grid-cols-2 gap-2">
              {MEM.map((k) => (
                <div
                  key={k}
                  className="flex items-center justify-between gap-2 rounded-md border border-zinc-700 bg-zinc-900 px-2 py-1.5"
                >
                  <span className="font-mono font-bold uppercase">{k}</span>
                  <span className="font-mono text-[11px] text-zinc-400">
                    {formatDisplay(engine.mem[k], engine.mode)}
                  </span>
                  <div className="flex gap-1">
                    <button
                      type="button"
                      className="rounded bg-sky-900 px-1.5 py-0.5 text-[9px] font-semibold"
                      onClick={() => {
                        engine.store(k);
                        refresh();
                      }}
                    >
                      STO
                    </button>
                    <button
                      type="button"
                      className="rounded bg-zinc-700 px-1.5 py-0.5 text-[9px] font-semibold"
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
      </div>

      <p className="border-t border-zinc-800 px-3 py-1.5 text-[8px] leading-snug text-zinc-500">
        Independent math engine inspired by TI-30XS MultiView / MathPrint public feature docs.
        Not affiliated with Texas Instruments. For exam practice only.
      </p>
    </div>
  );
}

/** Floating / sheet host used beside Timed Mode on practice screens. */
export function PracticeCalculatorInline() {
  const [open, setOpen] = useState(false);
  return (
    <div className="relative">
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        aria-pressed={open}
        className={cn(
          "inline-flex items-center gap-2 rounded-lg border px-3 py-2 text-xs font-bold transition-colors",
          open
            ? "border-sky-600 bg-sky-700 text-white"
            : "border-border bg-background text-foreground hover:bg-secondary",
        )}
      >
        <Calculator className="h-4 w-4" /> Calculator
      </button>
      {open ? (
        <div className="absolute right-0 z-50 mt-2 w-[min(100vw-1.5rem,24rem)] shadow-2xl">
          <div className="mb-1 flex justify-end">
            <button
              type="button"
              onClick={() => setOpen(false)}
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
