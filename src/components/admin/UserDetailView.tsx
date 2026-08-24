import { Link } from "@tanstack/react-router";
import { useState, type ReactNode } from "react";
import { DataTable, fmtDate, fmtDuration, StatCard } from "@/components/admin/AdminLayout";
import { HEATMAP_LEVEL_COLORS, accuracyToLevel } from "@/lib/study-progress";
import type { AdminUserDetail } from "@/lib/admin-types";

const TABS = [
  "Overview",
  "Courses",
  "Tasks",
  "Mocks",
  "Practice",
  "Flashcards",
  "Theory",
  "Time",
  "Activity",
] as const;

type Tab = (typeof TABS)[number];

export function UserDetailView({ detail }: { detail: AdminUserDetail }) {
  const [tab, setTab] = useState<Tab>("Overview");
  const p = detail.profile;

  return (
    <div className="space-y-6">
      <section className="rounded-2xl border border-border bg-card p-6 shadow-sm">
        <div className="flex flex-wrap items-start justify-between gap-4">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-taupe">User</p>
            <h2 className="mt-1 font-display text-2xl font-bold tracking-tight">{p.displayName}</h2>
            <p className="mt-1 text-sm text-muted-foreground">{p.email}</p>
            <div className="mt-3 flex flex-wrap gap-2">
              {detail.enrollments.map((e) => (
                <span
                  key={e.productSlug}
                  className="rounded-full bg-primary/15 px-2 py-0.5 text-xs font-semibold capitalize text-primary"
                >
                  {e.tier}
                </span>
              ))}
              {p.roles.map((r) => (
                <span
                  key={r}
                  className="rounded-full bg-secondary px-2 py-0.5 text-xs font-semibold capitalize"
                >
                  {r}
                </span>
              ))}
              <span className="rounded-full border border-border px-2 py-0.5 text-xs font-semibold">
                Streak {detail.studyProgress.currentStreak}d
              </span>
            </div>
          </div>
          <div className="text-right text-xs text-muted-foreground">
            <p>Registered {fmtDate(p.registeredAt)}</p>
            <p>Last seen {fmtDate(p.lastSeenAt)}</p>
            {p.lastPath ? <p className="mt-1 font-mono text-[10px]">{p.lastPath}</p> : null}
          </div>
        </div>
      </section>

      <div className="flex flex-wrap gap-2">
        {TABS.map((t) => (
          <button
            key={t}
            type="button"
            onClick={() => setTab(t)}
            className={`rounded-lg border px-3 py-1.5 text-xs font-semibold transition ${
              tab === t
                ? "border-primary bg-primary/10 text-primary"
                : "border-border bg-card text-foreground hover:bg-secondary"
            }`}
          >
            {t}
          </button>
        ))}
      </div>

      {tab === "Overview" && <OverviewTab detail={detail} />}
      {tab === "Courses" && <CoursesTab detail={detail} />}
      {tab === "Tasks" && <TasksTab detail={detail} />}
      {tab === "Mocks" && <MocksTab detail={detail} />}
      {tab === "Practice" && <PracticeTab detail={detail} />}
      {tab === "Flashcards" && <FlashcardsTab detail={detail} />}
      {tab === "Theory" && <TheoryTab detail={detail} />}
      {tab === "Time" && <TimeTab detail={detail} />}
      {tab === "Activity" && <ActivityTab detail={detail} />}
    </div>
  );
}

function OverviewTab({ detail }: { detail: AdminUserDetail }) {
  const sp = detail.studyProgress;
  return (
    <div className="space-y-4">
      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
        <StatCard label="Tasks passed" value={detail.taskAttempts.filter((t) => t.isPassed).length} />
        <StatCard label="Task attempts" value={detail.taskAttempts.length} />
        <StatCard
          label="Avg accuracy"
          value={sp.averageAccuracy != null ? `${Math.round(sp.averageAccuracy)}%` : "—"}
        />
        <StatCard label="Study time" value={fmtDuration(detail.totals.totalStudyTimeSeconds)} />
        <StatCard label="Mock attempts" value={detail.mocks.filter((m) => m.status === "submitted").length} />
        <StatCard label="Practice sessions" value={detail.totals.practiceSessionsCount} />
        <StatCard label="Flashcards rated" value={detail.totals.flashcardsRated} />
        <StatCard label="Longest streak" value={`${sp.longestStreak}d`} />
      </div>

      <section className="rounded-xl border border-border bg-card p-4">
        <h3 className="font-semibold">Enrollments</h3>
        <DataTable
          columns={[
            { key: "product", label: "Product" },
            { key: "tier", label: "Tier" },
            { key: "date", label: "Enrolled" },
          ]}
          rows={detail.enrollments.map((e) => ({
            product: e.productName,
            tier: e.tier,
            date: fmtDate(e.createdAt),
          }))}
          empty="No enrollments."
        />
      </section>

      <section className="rounded-xl border border-border bg-card p-4">
        <h3 className="mb-3 font-semibold">Custom mocks created</h3>
        <DataTable
          columns={[
            { key: "title", label: "Title" },
            { key: "subject", label: "Subject" },
            { key: "questions", label: "Questions" },
            { key: "date", label: "Created" },
          ]}
          rows={detail.customMocks.map((m) => ({
            title: m.title,
            subject: m.subject,
            questions: m.questionCount,
            date: fmtDate(m.createdAt),
          }))}
          empty="No custom mocks."
        />
      </section>
    </div>
  );
}

function CoursesTab({ detail }: { detail: AdminUserDetail }) {
  return (
    <DataTable
      columns={[
        { key: "subject", label: "Subject" },
        { key: "chapter", label: "Chapter" },
        { key: "attempted", label: "Attempted" },
        { key: "passed", label: "Passed" },
        { key: "accuracy", label: "Accuracy" },
      ]}
      rows={detail.subjectStats.flatMap((s) =>
        s.chapters.map((c) => ({
          subject: s.subject,
          chapter: c.chapter,
          attempted: c.attempted,
          passed: c.passed,
          accuracy: `${c.accuracy}%`,
        })),
      )}
      empty="No course progress recorded."
    />
  );
}

function TasksTab({ detail }: { detail: AdminUserDetail }) {
  return (
    <DataTable
      columns={[
        { key: "date", label: "Date" },
        { key: "subject", label: "Subject" },
        { key: "chapter", label: "Chapter" },
        { key: "task", label: "Task" },
        { key: "score", label: "Score" },
        { key: "attempt", label: "#" },
        { key: "time", label: "Time" },
        { key: "passed", label: "Passed" },
        { key: "source", label: "Source" },
      ]}
      rows={[...detail.taskAttempts].reverse().map((t) => ({
        date: fmtDate(t.createdAt),
        subject: t.subject,
        chapter: t.chapter,
        task: t.taskTitle || t.taskKey,
        score: `${t.correctCount}/${t.statementCount}`,
        attempt: t.attemptNumber ?? "—",
        time: fmtDuration(t.durationSeconds),
        passed: t.isPassed ? "Yes" : "No",
        source: t.source,
      }))}
      empty="No task attempts."
    />
  );
}

function MocksTab({ detail }: { detail: AdminUserDetail }) {
  return (
    <DataTable
      columns={[
        { key: "date", label: "Date" },
        { key: "exam", label: "Exam" },
        { key: "status", label: "Status" },
        { key: "score", label: "Score" },
        { key: "points", label: "Points" },
        { key: "time", label: "Time" },
        { key: "timed", label: "Timed" },
      ]}
      rows={detail.mocks.map((m) => ({
        date: fmtDate(m.completedAt ?? m.startedAt),
        exam: m.examTitle,
        status: m.status,
        score: m.scorePct != null ? `${m.scorePct}%` : "—",
        points: `${m.pointsEarned}/${m.pointsTotal}`,
        time: fmtDuration(m.secondsTaken),
        timed: m.timed ? "Yes" : "No",
      }))}
      empty="No mock exam data."
    />
  );
}

function PracticeTab({ detail }: { detail: AdminUserDetail }) {
  return (
    <DataTable
      columns={[
        { key: "date", label: "Started" },
        { key: "mode", label: "Mode" },
        { key: "subject", label: "Subject" },
        { key: "topic", label: "Topic" },
        { key: "score", label: "Score" },
        { key: "duration", label: "Duration" },
      ]}
      rows={detail.practiceSessions.map((s) => ({
        date: fmtDate(s.startedAt),
        mode: s.mode,
        subject: s.subjectId,
        topic: s.topicId,
        score:
          s.accuracyPct != null
            ? `${s.correctAnswers}/${s.totalQuestions} (${s.accuracyPct}%)`
            : `${s.correctAnswers}/${s.totalQuestions}`,
        duration: fmtDuration(s.durationSeconds),
      }))}
      empty="No practice sessions."
    />
  );
}

function FlashcardsTab({ detail }: { detail: AdminUserDetail }) {
  return (
    <DataTable
      columns={[
        { key: "deck", label: "Deck" },
        { key: "known", label: "Known" },
        { key: "unknown", label: "Unknown" },
        { key: "new", label: "New" },
        { key: "mastery", label: "Mastery" },
        { key: "updated", label: "Last activity" },
      ]}
      rows={detail.flashcards.map((f) => ({
        deck: f.subjectId,
        known: f.known,
        unknown: f.unknown,
        new: f.unset,
        mastery: f.masteryPct != null ? `${f.masteryPct}%` : "—",
        updated: fmtDate(f.lastUpdated),
      }))}
      empty="No flashcard progress synced."
    />
  );
}

function TheoryTab({ detail }: { detail: AdminUserDetail }) {
  return (
    <DataTable
      columns={[
        { key: "subject", label: "Subject" },
        { key: "chapter", label: "Chapter" },
        { key: "section", label: "Section" },
        { key: "time", label: "Time" },
        { key: "scroll", label: "Scroll %" },
        { key: "done", label: "Completed" },
        { key: "updated", label: "Updated" },
      ]}
      rows={detail.theory.map((t) => ({
        subject: t.subject,
        chapter: t.chapterId,
        section: t.sectionId || "—",
        time: fmtDuration(t.timeSeconds),
        scroll: `${t.scrollPct}%`,
        done: t.completed ? "Yes" : "No",
        updated: fmtDate(t.updatedAt),
      }))}
      empty="No theory reading tracked yet."
    />
  );
}

function TimeTab({ detail }: { detail: AdminUserDetail }) {
  const sp = detail.studyProgress;
  const activeDays = sp.days.filter((d) => !d.isFuture && d.statementsAnswered > 0);

  return (
    <div className="space-y-4">
      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
        <StatCard label="Total study time" value={fmtDuration(detail.totals.totalStudyTimeSeconds)} />
        <StatCard label="On tasks" value={fmtDuration(detail.totals.taskDurationSeconds)} />
        <StatCard label="On mocks" value={fmtDuration(detail.totals.mockDurationSeconds)} />
        <StatCard label="On theory" value={fmtDuration(detail.totals.theoryTimeSeconds)} />
      </div>

      <section className="rounded-xl border border-border bg-card p-4">
        <h3 className="mb-3 font-semibold">Activity heatmap (last 12 months)</h3>
        <div className="flex flex-wrap gap-1">
          {activeDays.slice(-120).map((d) => {
            const level = accuracyToLevel(d.accuracy);
            return (
              <div
                key={d.date}
                title={`${d.date}: ${d.statementsAnswered} statements, ${d.accuracy != null ? Math.round(d.accuracy) : 0}%`}
                className="h-3 w-3 rounded-sm"
                style={{ backgroundColor: HEATMAP_LEVEL_COLORS[level] }}
              />
            );
          })}
        </div>
        <p className="mt-2 text-xs text-muted-foreground">
          {sp.statementsThisMonth} statements this month · {sp.tasksThisMonth} tasks/questions this month
        </p>
      </section>
    </div>
  );
}

function ActivityTab({ detail }: { detail: AdminUserDetail }) {
  return (
    <DataTable
      columns={[
        { key: "date", label: "When" },
        { key: "type", label: "Event" },
        { key: "subject", label: "Subject" },
        { key: "entity", label: "Entity" },
        { key: "duration", label: "Duration" },
      ]}
      rows={detail.recentActivity.map((e) => ({
        date: fmtDate(e.createdAt),
        type: e.eventType,
        subject: e.subject ?? "—",
        entity: e.entityId ? `${e.entityType ?? ""}:${e.entityId}` : "—",
        duration: e.durationMs != null ? `${Math.round(e.durationMs / 1000)}s` : "—",
      }))}
      empty="No activity events yet."
    />
  );
}

export function UserListRowLink({
  userId,
  children,
}: {
  userId: string;
  children: React.ReactNode;
}) {
  return (
    <Link to="/admin/users/$userId" params={{ userId }} className="font-semibold text-primary hover:underline">
      {children}
    </Link>
  );
}
