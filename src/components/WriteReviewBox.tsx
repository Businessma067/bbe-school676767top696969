import { useEffect, useState, type FormEvent } from "react";
import { Star } from "lucide-react";
import { LocalizedLink } from "@/components/LocalizedLink";
import type { AcceptanceTrack } from "@/data/acceptance-notes";
import { getCurrentAuthState, type AuthState } from "@/lib/auth-ui";
import { useLanguage } from "@/lib/i18n/context";
import {
  insertCommunityReview,
  isDuplicateReviewError,
  listCommunityReviews,
  ownCommunityReviewId,
  type CommunityReview,
} from "@/lib/student-reviews";
import { cn } from "@/lib/utils";

const RETURN_TO = "/reviews#write";
const MIN_BODY = 40;
const MAX_BODY = 900;

const TRACKS: { id: AcceptanceTrack; label: string }[] = [
  { id: "bbe", label: "BBE" },
  { id: "wiso", label: "WiSo" },
  { id: "hybrid", label: "Hybrid" },
];

function starPhrase(value: number): string {
  if (value === 1) return "1 out of 5";
  if (value === 2) return "2 out of 5";
  if (value === 3) return "3 out of 5";
  if (value === 4) return "4 out of 5";
  return "5 out of 5";
}

function StarRow({ value }: { value: number }) {
  const { t } = useLanguage();
  return (
    <span className="inline-flex items-center gap-0.5" aria-label={t(starPhrase(value))}>
      {[1, 2, 3, 4, 5].map((step) => (
        <Star
          key={step}
          className={
            step <= value
              ? "h-3.5 w-3.5 fill-amber-500 text-amber-500"
              : "h-3.5 w-3.5 text-muted-foreground/35"
          }
          aria-hidden
        />
      ))}
    </span>
  );
}

function formatReviewDate(iso: string): string {
  const date = new Date(iso);
  if (Number.isNaN(date.getTime())) return "";
  const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
  return `${date.getUTCDate()} ${months[date.getUTCMonth()]} ${date.getUTCFullYear()}`;
}

export function WriteReviewBox({ track }: { track: AcceptanceTrack | "all" }) {
  const { t } = useLanguage();
  const [auth, setAuth] = useState<AuthState | null | "loading">("loading");
  const [rows, setRows] = useState<CommunityReview[] | null>(null);
  const [alreadySent, setAlreadySent] = useState(false);
  const [pickedTrack, setPickedTrack] = useState<AcceptanceTrack>("bbe");
  const [stars, setStars] = useState(5);
  const [body, setBody] = useState("");
  const [city, setCity] = useState("");
  const [sending, setSending] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [saved, setSaved] = useState(false);

  useEffect(() => {
    let cancelled = false;
    getCurrentAuthState()
      .then((next) => {
        if (!cancelled) setAuth(next);
      })
      .catch(() => {
        if (!cancelled) setAuth(null);
      });
    listCommunityReviews()
      .then((next) => {
        if (!cancelled) setRows(next);
      })
      .catch(() => {
        if (!cancelled) setRows([]);
      });
    return () => {
      cancelled = true;
    };
  }, []);

  useEffect(() => {
    if (!auth || auth === "loading") return;
    let cancelled = false;
    ownCommunityReviewId(auth.userId)
      .then((id) => {
        if (!cancelled && id) setAlreadySent(true);
      })
      .catch(() => {
        /* The form still tries the insert, which enforces one note per account. */
      });
    return () => {
      cancelled = true;
    };
  }, [auth]);

  const visible = (rows ?? []).filter((row) => track === "all" || row.track === track);
  const trimmed = body.trim();
  const lengthOk = trimmed.length >= MIN_BODY && trimmed.length <= MAX_BODY;

  async function onSubmit(event: FormEvent) {
    event.preventDefault();
    if (!auth || auth === "loading" || sending || alreadySent) return;
    if (!lengthOk) {
      setError("The note has to be between 40 and 900 characters.");
      return;
    }
    setSending(true);
    setError(null);
    try {
      await insertCommunityReview({
        userId: auth.userId,
        track: pickedTrack,
        stars,
        body: trimmed,
        displayName: auth.name,
        city,
      });
      const created: CommunityReview = {
        id: `local-${auth.userId}`,
        track: pickedTrack,
        stars,
        body: trimmed,
        displayName: auth.name,
        city: city.trim() || null,
        createdAt: new Date().toISOString(),
      };
      setRows((current) => [created, ...(current ?? [])]);
      setBody("");
      setCity("");
      setSaved(true);
      setAlreadySent(true);
    } catch (err) {
      if (isDuplicateReviewError(err)) {
        setAlreadySent(true);
        setError("You already sent a note.");
      } else {
        setError("Couldn't save the note. Try again in a minute.");
      }
    } finally {
      setSending(false);
    }
  }

  return (
    <div className="mt-14">
      {visible.length > 0 ? (
        <section aria-label={t("Notes from people with an account")}>
          <div className="mb-2 border-b border-border pb-3">
            <h2 className="font-display text-xl font-semibold">Notes from people with an account</h2>
          </div>
          <ol>
            {visible.map((row) => (
              <li key={row.id} className="border-b border-border/70 py-6 pl-4 border-l-2 border-l-border">
                <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                  <p className="font-display text-sm font-semibold" data-no-i18n>
                    {row.displayName}
                    {row.city ? (
                      <span className="font-sans font-normal text-muted-foreground"> · {row.city}</span>
                    ) : null}
                  </p>
                  <div className="flex items-center gap-2">
                    <StarRow value={row.stars} />
                    <p className="text-xs text-muted-foreground" data-no-i18n>
                      {formatReviewDate(row.createdAt)}
                    </p>
                  </div>
                </div>
                <p className="mt-3 whitespace-pre-line text-[0.95rem] leading-[1.65] text-foreground/90" data-no-i18n>
                  {row.body}
                </p>
                <p className="mt-3 text-xs font-semibold tracking-wide text-muted-foreground">
                  {row.track === "bbe" ? "BBE" : row.track === "wiso" ? "WiSo" : "Hybrid"}
                </p>
              </li>
            ))}
          </ol>
        </section>
      ) : null}

      <section id="write" className="scroll-mt-28 mt-10 rounded-sm border border-border bg-card px-4 py-5 sm:px-6">
        <h2 className="font-display text-xl font-semibold">Write a note</h2>
        <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
          You can read these without an account. Sending one needs a free account, so the notes stay tied to a person.
        </p>

        {auth === "loading" ? (
          <p className="mt-4 text-sm text-muted-foreground">Checking your account…</p>
        ) : auth === null ? (
          <div className="mt-4 flex flex-wrap gap-3">
            <LocalizedLink
              to="/signup"
              search={{ returnTo: RETURN_TO }}
              className="inline-flex min-h-10 items-center rounded-md bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground hover:bg-primary/90"
            >
              Create an account
            </LocalizedLink>
            <LocalizedLink
              to="/login"
              search={{ returnTo: RETURN_TO }}
              className="inline-flex min-h-10 items-center rounded-md border border-border bg-background px-4 py-2 text-sm font-semibold hover:bg-secondary"
            >
              Sign in
            </LocalizedLink>
          </div>
        ) : alreadySent ? (
          <p className="mt-4 text-sm text-foreground">{saved ? "Thanks, it's on the list." : "You already sent a note."}</p>
        ) : (
          <form onSubmit={onSubmit} className="mt-5 space-y-4">
            <p className="text-sm">
              <span className="text-muted-foreground">Your name on the note</span>{" "}
              <span className="font-semibold" data-no-i18n>
                {auth.name}
              </span>
            </p>
            <fieldset>
              <legend className="text-sm font-semibold">Track</legend>
              <div className="mt-2 flex flex-wrap gap-2">
                {TRACKS.map((item) => (
                  <button
                    key={item.id}
                    type="button"
                    aria-pressed={pickedTrack === item.id}
                    onClick={() => setPickedTrack(item.id)}
                    className={cn(
                      "min-h-10 rounded-sm border px-3 py-1.5 text-sm font-semibold",
                      pickedTrack === item.id
                        ? "border-foreground bg-foreground text-background"
                        : "border-border bg-background hover:bg-secondary",
                    )}
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </fieldset>
            <fieldset>
              <legend className="text-sm font-semibold">Star rating</legend>
              <div className="mt-2 flex gap-1" role="radiogroup" aria-label={t("Star rating")}>
                {[1, 2, 3, 4, 5].map((step) => (
                  <button
                    key={step}
                    type="button"
                    role="radio"
                    aria-checked={stars === step}
                    aria-label={t(starPhrase(step))}
                    onClick={() => setStars(step)}
                    className="rounded-sm p-1 hover:bg-secondary"
                  >
                    <Star
                      className={
                        step <= stars
                          ? "h-5 w-5 fill-amber-500 text-amber-500"
                          : "h-5 w-5 text-muted-foreground/40"
                      }
                    />
                  </button>
                ))}
              </div>
            </fieldset>
            <label className="block text-sm font-semibold">
              City, if you want it on the note
              <input
                value={city}
                onChange={(event) => setCity(event.target.value)}
                maxLength={80}
                className="mt-2 w-full rounded-md border border-border bg-background px-3 py-2 text-sm font-normal"
              />
            </label>
            <label className="block text-sm font-semibold">
              What you would actually tell someone
              <textarea
                value={body}
                onChange={(event) => setBody(event.target.value)}
                maxLength={MAX_BODY}
                rows={6}
                className="mt-2 w-full rounded-md border border-border bg-background px-3 py-2 text-sm font-normal leading-relaxed"
              />
            </label>
            <p className="text-xs text-muted-foreground" data-no-i18n>
              {trimmed.length}/{MAX_BODY}
            </p>
            {error ? <p className="text-sm text-destructive">{error}</p> : null}
            <button
              type="submit"
              disabled={sending || !lengthOk}
              className="rounded-md bg-primary px-4 py-2.5 text-sm font-semibold text-primary-foreground hover:bg-primary/90 disabled:opacity-60"
            >
              {sending ? "Sending the note…" : "Send the note"}
            </button>
          </form>
        )}
      </section>
    </div>
  );
}
