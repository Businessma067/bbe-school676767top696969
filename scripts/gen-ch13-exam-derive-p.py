#!/usr/bin/env python3
"""Generate 40 derive-p binomial exam-style tasks for subsection 13.5."""

from __future__ import annotations

import json
import math
from dataclasses import dataclass
from math import comb
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
EXAM_PATH = ROOT / "src/data/math-ch13-exam.json"
LETTERS = "ABCDE"


def pmf(n: int, k: int, p: float) -> float:
    return comb(n, k) * (p**k) * ((1 - p) ** (n - k))


def cdf_le(n: int, k: int, p: float) -> float:
    return sum(pmf(n, i, p) for i in range(k + 1))


def cdf_ge(n: int, k: int, p: float) -> float:
    return sum(pmf(n, i, p) for i in range(k, n + 1))


def fmt(x: float, digits: int = 6) -> str:
    if abs(x - round(x)) < 1e-12:
        return str(int(round(x)))
    return f"{x:.{digits}f}".rstrip("0").rstrip(".")


def approx(x: float) -> str:
    if abs(x) < 1e-4 and x != 0:
        return f"{x:.4e}".replace("e-0", "e-").replace("e+0", "e+")
    return fmt(x, 4)


IRREGULAR = {
    "match": "matches",
    "delivery": "deliveries",
    "loan": "loans",
    "arrival": "arrivals",
    "puzzle": "puzzles",
    "sale": "sales",
    "item": "items",
    "session": "sessions",
    "household": "households",
    "loaf": "loaves",
    "start": "starts",
    "hold": "holds",
    "room": "rooms",
    "toss": "tosses",
    "plot": "plots",
    "purchase": "purchases",
    "rider": "riders",
    "episode": "episodes",
    "print job": "print jobs",
    "attack roll": "attack rolls",
    "test": "tests",
    "appointment": "appointments",
    "drop": "drops",
    "scan": "scans",
    "cycle": "cycles",
    "soil square": "soil squares",
    "packet": "packets",
    "pick": "picks",
    "sensor": "sensors",
    "request": "requests",
    "prescription": "prescriptions",
    "submission": "submissions",
    "patient": "patients",
    "order": "orders",
    "win": "wins",
    "satisfied customer": "satisfied customers",
    "unsatisfied customer": "unsatisfied customers",
    "positive screen": "positive screens",
    "negative screen": "negative screens",
    "on-time delivery": "on-time deliveries",
    "late delivery": "late deliveries",
    "accepted submission": "accepted submissions",
    "rejected submission": "rejected submissions",
    "correct pick": "correct picks",
    "incorrect pick": "incorrect picks",
    "correct answer": "correct answers",
    "incorrect answer": "incorrect answers",
    "faulty sensor": "faulty sensors",
    "working sensor": "working sensors",
    "confirmed booking": "confirmed bookings",
    "unconfirmed booking": "unconfirmed bookings",
    "flagged prescription": "flagged prescriptions",
    "clear prescription": "clear prescriptions",
    "on-time return": "on-time returns",
    "late return": "late returns",
    "conversion": "conversions",
    "non-conversion": "non-conversions",
    "on-time arrival": "on-time arrivals",
    "late arrival": "late arrivals",
    "solved puzzle": "solved puzzles",
    "unsolved puzzle": "unsolved puzzles",
    "animal trigger": "animal triggers",
    "empty window": "empty windows",
    "night window": "night windows",
    "upsell": "upsells",
    "no upsell": "no-upsell cases",
    "first-try pass": "first-try passes",
    "first-try fail": "first-try fails",
    "correct item": "correct items",
    "incorrect item": "incorrect items",
    "successful connection": "successful connections",
    "dropped connection": "dropped connections",
    "pledge": "pledges",
    "no pledge": "non-pledges",
    "quality loaf": "quality loaves",
    "rejected loaf": "rejected loaves",
    "legal start": "legal starts",
    "false start": "false starts",
    "on-time pickup": "on-time pickups",
    "missed pickup": "missed pickups",
    "open": "opens",
    "ignore": "ignores",
    "unassisted completion": "unassisted completions",
    "assisted room": "assisted rooms",
    "heads": "heads",
    "tails": "tails",
    "drought alert": "drought alerts",
    "no alert": "no-alert cases",
    "loyalty scan": "loyalty scans",
    "no scan": "no-scan cases",
    "valid pass": "valid passes",
    "invalid pass": "invalid passes",
    "click-through": "click-throughs",
    "no click": "no-click cases",
    "error-free job": "error-free jobs",
    "failed job": "failed jobs",
    "critical hit": "critical hits",
    "non-critical roll": "non-critical rolls",
    "audible test": "audible tests",
    "failed test": "failed tests",
    "show": "shows",
    "no-show": "no-shows",
    "on-target drop": "on-target drops",
    "off-target drop": "off-target drops",
    "successful scan": "successful scans",
    "failed scan": "failed scans",
    "completed set": "completed sets",
    "incomplete set": "incomplete sets",
    "clean finish": "clean finishes",
    "fault alert": "fault alerts",
    "artifact find": "artifact finds",
    "empty square": "empty squares",
    "acknowledgement": "acknowledgements",
    "lost packet": "lost packets",
    "demo": "demos",
    "pipette": "pipettes",
    "homework set": "homework sets",
    "notification": "notifications",
}


def plural(word: str) -> str:
    if word in IRREGULAR:
        return IRREGULAR[word]
    if word.endswith(("s", "x", "z", "ch", "sh")):
        return word + "es"
    if word.endswith("y") and len(word) > 1 and word[-2] not in "aeiou":
        return word[:-1] + "ies"
    return word + "s"


def article(word: str) -> str:
    return "an" if word.lstrip().lower()[:1] in "aeiou" else "a"


FAIL_VERB = {
    "lose": "is lost",
    "unsatisfied customer": "leaves an unsatisfied customer",
    "negative screen": "screens negative",
    "late delivery": "arrives late",
    "rejected submission": "is rejected",
    "incorrect pick": "is incorrect",
    "incorrect answer": "is answered incorrectly",
    "working sensor": "is working (not faulty)",
    "unconfirmed booking": "is not confirmed",
    "clear prescription": "is cleared without follow-up",
    "late return": "is returned late",
    "non-conversion": "does not convert",
    "late arrival": "arrives late",
    "unsolved puzzle": "stays unsolved",
    "empty window": "has no animal trigger",
    "no upsell": "has no upsell",
    "first-try fail": "fails on the first try",
    "incorrect item": "is incorrect",
    "dropped connection": "drops",
    "no pledge": "yields no pledge",
    "rejected loaf": "is rejected",
    "false start": "is a false start",
    "missed pickup": "is missed",
    "ignore": "is ignored",
    "assisted room": "needs human help",
    "tails": "lands tails",
    "no alert": "raises no alert",
    "no scan": "has no loyalty scan",
    "invalid pass": "is invalid",
    "no click": "gets no click",
    "failed job": "fails",
    "non-critical roll": "is not a critical hit",
    "failed test": "fails",
    "no-show": "is a no-show",
    "off-target drop": "lands off target",
    "failed scan": "fails",
    "incomplete set": "is incomplete",
    "fault alert": "raises a fault alert",
    "empty square": "is empty",
    "lost packet": "is lost",
}


def fail_clause(unit: str, fail: str, subject: str = "The next") -> str:
    if fail in FAIL_VERB:
        return f"{subject} {unit} {FAIL_VERB[fail]}"
    return f"{subject} {unit} results in {article(fail)} {fail}"


@dataclass
class Stmt:
    text: str
    truth: bool
    kind: str
    data: dict


@dataclass
class Scenario:
    title: str
    context: str
    overview: str
    p: float
    difficulty: str
    statements: list[Stmt]


def specs() -> list[dict]:
    return [
        dict(title="Regional Tennis Circuit", story="Over a full indoor season of {n} independent matches, a player's expected number of wins is {E}. Assume the win chance is the same in every match.", n=40, E=27.2, p=0.68, success="win", fail="lose", unit="match", style="classic", difficulty="5/5"),
        dict(title="Festival Food Stall", story="A festival food stall tracks whether each customer leaves satisfied. In a typical block of {n} independent orders, the expected number of satisfied customers is {E}.", n=16, E=12.8, p=0.8, success="satisfied customer", fail="unsatisfied customer", unit="order", style="exact_vs_atleast", difficulty="5/5"),
        dict(title="Community Clinic Screening", story="On a screening day with {n} independent patients, positives and negatives are expected in the ratio {r_pos} : {r_neg}. The standard deviation of the number of positives that day is $\\sqrt{{{sd2}}}$.", n=80, E=12.0, p=0.15, r_pos=3, r_neg=17, sd2=10.2, success="positive screen", fail="negative screen", unit="patient", style="ratio", difficulty="5/5"),
        dict(title="Night Courier Audit", story="A courier completed an audit of {n} independent evening deliveries. The expected number of on-time deliveries was {E}, and the variance of that count was {V}.", n=50, E=42.0, V=6.72, p=0.84, success="on-time delivery", fail="late delivery", unit="delivery", style="mean_var", difficulty="5/5"),
        dict(title="Coding Contest Auto-Grader", story="In a contest with {n} independent submissions, the auto-grader accepts {E} on average.", n=35, E=14.0, p=0.4, success="accepted submission", fail="rejected submission", unit="submission", style="low_p", difficulty="5/5"),
        dict(title="Warehouse Picker Accuracy", story="A warehouse audits {n} independent picks. The expected number of correct picks is {E}, and the variance of the correct-pick count is {V}.", n=25, E=20.0, V=4.0, p=0.8, success="correct pick", fail="incorrect pick", unit="pick", style="mean_var", difficulty="4/5"),
        dict(title="Language Lab Listening Test", story="In a listening quiz of {n} independent items, a student is expected to answer {E} correctly.", n=20, E=15.0, p=0.75, success="correct answer", fail="incorrect answer", unit="item", style="classic", difficulty="4/5"),
        dict(title="Bike-Share Dock Sensors", story="A maintenance log covers {n} independent dock sensors. Faulty and working sensors are expected in the ratio {r_pos} : {r_neg}.", n=60, E=12.0, p=0.2, r_pos=1, r_neg=4, success="faulty sensor", fail="working sensor", unit="sensor", style="ratio", difficulty="5/5"),
        dict(title="Hotel Booking Confirmations", story="A hotel tracks {n} independent booking requests. The expected number of confirmed bookings is {E}.", n=30, E=24.0, p=0.8, success="confirmed booking", fail="unconfirmed booking", unit="request", style="exact_vs_atleast", difficulty="5/5"),
        dict(title="Pharmacy Prescription Checks", story="A pharmacy reviews {n} independent prescriptions. The expected number flagged for follow-up is {E}, with variance {V}.", n=40, E=8.0, V=6.4, p=0.2, success="flagged prescription", fail="clear prescription", unit="prescription", style="low_p", difficulty="5/5"),
        dict(title="Museum Audio Guide Returns", story="Over {n} independent audio-guide loans, the expected number returned on time is {E}.", n=45, E=36.0, p=0.8, success="on-time return", fail="late return", unit="loan", style="classic", difficulty="4/5"),
        dict(title="Startup Demo Conversions", story="A sales team ran {n} independent product demos. The expected number of conversions was {E}, and the standard deviation of conversions was $\\sqrt{{{sd2}}}$.", n=25, E=10.0, sd2=6.0, p=0.4, success="conversion", fail="non-conversion", unit="demo", style="mean_sd", difficulty="5/5"),
        dict(title="Campus Bus On-Time Arrivals", story="Across {n} independent bus arrivals, on-time and late arrivals are expected in the ratio {r_pos} : {r_neg}.", n=50, E=40.0, p=0.8, r_pos=4, r_neg=1, success="on-time arrival", fail="late arrival", unit="arrival", style="ratio", difficulty="5/5"),
        dict(title="Escape-Room Puzzle Solves", story="In an escape room with {n} independent puzzles, the expected number solved within the time limit is {E}.", n=12, E=7.2, p=0.6, success="solved puzzle", fail="unsolved puzzle", unit="puzzle", style="classic", difficulty="5/5"),
        dict(title="Wildlife Camera Triggers", story="A wildlife camera records {n} independent night windows. The expected number of windows with an animal trigger is {E}, with variance {V}.", n=48, E=12.0, V=9.0, p=0.25, success="animal trigger", fail="empty window", unit="night window", style="low_p", difficulty="5/5"),
        dict(title="Theatre Ticket Upsells", story="A box office handles {n} independent ticket sales. The expected number of sales that include an upsell is {E}.", n=32, E=12.8, p=0.4, success="upsell", fail="no upsell", unit="sale", style="exact_vs_atleast", difficulty="5/5"),
        dict(title="Lab Pipette Calibration Passes", story="Technicians calibrate {n} independent pipettes. The expected number that pass on the first try is {E}, and the variance is {V}.", n=20, E=17.0, V=2.55, p=0.85, success="first-try pass", fail="first-try fail", unit="pipette", style="mean_var", difficulty="5/5"),
        dict(title="Online Quiz Instant Feedback", story="A quiz has {n} independent multiple-choice items. The expected number correct is {E}.", n=15, E=9.0, p=0.6, success="correct item", fail="incorrect item", unit="item", style="classic", difficulty="4/5"),
        dict(title="Airport Lounge Wi-Fi Sessions", story="Over {n} independent Wi-Fi sessions, successful and dropped connections are expected in the ratio {r_pos} : {r_neg}.", n=70, E=56.0, p=0.8, r_pos=4, r_neg=1, success="successful connection", fail="dropped connection", unit="session", style="ratio", difficulty="5/5"),
        dict(title="Charity Door-to-Door Pledges", story="Volunteers visit {n} independent households. The expected number of pledges is {E}, with standard deviation $\\sqrt{{{sd2}}}$.", n=40, E=10.0, sd2=7.5, p=0.25, success="pledge", fail="no pledge", unit="household", style="mean_sd", difficulty="5/5"),
        dict(title="Bakery Morning Batch QC", story="A bakery inspects {n} independent loaves. The expected number meeting quality standards is {E}.", n=28, E=22.4, p=0.8, success="quality loaf", fail="rejected loaf", unit="loaf", style="exact_vs_atleast", difficulty="5/5"),
        dict(title="Swim-Meet Legal Starts", story="In a meet with {n} independent starts, the expected number of legal starts is {E}, and the variance is {V}.", n=24, E=19.2, V=3.84, p=0.8, success="legal start", fail="false start", unit="start", style="mean_var", difficulty="4/5"),
        dict(title="Library Reserve Hold Pickups", story="Of {n} independent reserve holds, the expected number picked up within 48 hours is {E}.", n=36, E=27.0, p=0.75, success="on-time pickup", fail="missed pickup", unit="hold", style="classic", difficulty="4/5"),
        dict(title="App Push Notification Opens", story="A campaign sends {n} independent push notifications. Opens and ignores are expected in the ratio {r_pos} : {r_neg}.", n=100, E=30.0, p=0.3, r_pos=3, r_neg=7, success="open", fail="ignore", unit="notification", style="ratio", difficulty="5/5"),
        dict(title="Robot Vacuum Room Completions", story="A robot attempts {n} independent room cleanings. The expected number completed without human help is {E}, with variance {V}.", n=18, E=12.6, V=3.78, p=0.7, success="unassisted completion", fail="assisted room", unit="room", style="mean_var", difficulty="5/5"),
        dict(title="Debate Tournament Coin Tosses", story="A tournament uses {n} independent coin tosses to assign sides. The expected number of heads is {E}.", n=20, E=11.0, p=0.55, success="heads", fail="tails", unit="toss", style="classic", difficulty="4/5"),
        dict(title="Farm Soil Moisture Alerts", story="Sensors check {n} independent field plots. The expected number of drought alerts is {E}.", n=45, E=9.0, p=0.2, success="drought alert", fail="no alert", unit="plot", style="low_p", difficulty="5/5"),
        dict(title="Cinema Loyalty Card Scans", story="At a cinema, {n} independent ticket purchases are tracked. The expected number that scan a loyalty card is {E}, with SD $\\sqrt{{{sd2}}}$.", n=60, E=36.0, sd2=14.4, p=0.6, success="loyalty scan", fail="no scan", unit="purchase", style="mean_sd", difficulty="5/5"),
        dict(title="Ski-Lift Gate Passes", story="A lift processes {n} independent riders. Valid and invalid passes are expected in the ratio {r_pos} : {r_neg}.", n=80, E=72.0, p=0.9, r_pos=9, r_neg=1, success="valid pass", fail="invalid pass", unit="rider", style="ratio", difficulty="5/5"),
        dict(title="Podcast Ad Click-Throughs", story="An ad plays in {n} independent episodes. The expected number of click-throughs is {E}.", n=50, E=5.0, p=0.1, success="click-through", fail="no click", unit="episode", style="low_p", difficulty="5/5"),
        dict(title="Campus Printer Job Success", story="A computer lab runs {n} independent print jobs. The expected number completed without error is {E}, and the variance is {V}.", n=22, E=17.6, V=3.52, p=0.8, success="error-free job", fail="failed job", unit="print job", style="mean_var", difficulty="4/5"),
        dict(title="Board-Game Critical Hits", story="In a campaign of {n} independent attack rolls, the expected number of critical hits is {E}.", n=30, E=6.0, p=0.2, success="critical hit", fail="non-critical roll", unit="attack roll", style="exact_vs_atleast", difficulty="5/5"),
        dict(title="Harbor Foghorn Tests", story="Harbor staff run {n} independent foghorn tests. The expected number of clear audible tests is {E}.", n=14, E=11.2, p=0.8, success="audible test", fail="failed test", unit="test", style="classic", difficulty="4/5"),
        dict(title="Blood-Donation Appointment Shows", story="A clinic books {n} independent donation appointments. Shows and no-shows are expected in the ratio {r_pos} : {r_neg}.", n=55, E=44.0, p=0.8, r_pos=4, r_neg=1, success="show", fail="no-show", unit="appointment", style="ratio", difficulty="5/5"),
        dict(title="Drone Delivery Drop Accuracy", story="A drone completes {n} independent drops. The expected number landing in the target zone is {E}, with variance {V}.", n=16, E=12.0, V=3.0, p=0.75, success="on-target drop", fail="off-target drop", unit="drop", style="mean_var", difficulty="5/5"),
        dict(title="Music Festival Wristband Scans", story="At an entrance gate, {n} independent wristband scans are logged. The expected number of successful scans is {E}, with SD $\\sqrt{{{sd2}}}$.", n=90, E=81.0, sd2=8.1, p=0.9, success="successful scan", fail="failed scan", unit="scan", style="mean_sd", difficulty="5/5"),
        dict(title="Tutoring Session Homework Done", story="A tutor checks {n} independent homework sets. The expected number completed before the session is {E}.", n=18, E=10.8, p=0.6, success="completed set", fail="incomplete set", unit="homework set", style="classic", difficulty="4/5"),
        dict(title="Ice-Cream Machine Self-Cleans", story="A parlor runs {n} independent self-clean cycles. The expected number that finish without a fault alert is {E}.", n=26, E=20.8, p=0.8, success="clean finish", fail="fault alert", unit="cycle", style="exact_vs_atleast", difficulty="5/5"),
        dict(title="Archaeology Dig Artifact Finds", story="A dig team examines {n} independent soil squares. Finds and empty squares are expected in the ratio {r_pos} : {r_neg}.", n=64, E=16.0, p=0.25, r_pos=1, r_neg=3, success="artifact find", fail="empty square", unit="soil square", style="ratio", difficulty="5/5"),
        dict(title="Satellite Packet Acknowledgements", story="A ground station sends {n} independent packets. The expected number of acknowledgements received is {E}, and the variance is {V}.", n=40, E=34.0, V=5.1, p=0.85, success="acknowledgement", fail="lost packet", unit="packet", style="mean_var", difficulty="5/5"),
    ]


def overview_for(spec: dict, p: float) -> str:
    n = spec["n"]
    q = 1 - p
    story = spec["story"].format(
        n=n,
        E=fmt(spec.get("E", n * p)),
        V=fmt(spec.get("V", n * p * q)),
        sd2=fmt(spec.get("sd2", n * p * q)),
        r_pos=spec.get("r_pos", ""),
        r_neg=spec.get("r_neg", ""),
    )
    if spec["style"] == "ratio":
        return (
            f"{story}\n\n"
            f"Successes and failures are expected in the ratio "
            f"${spec['r_pos']}:{spec['r_neg']}$, so\n\n"
            f"$$p=\\dfrac{{{spec['r_pos']}}}{{{spec['r_pos']}+{spec['r_neg']}}}={fmt(p)}$$\n\n"
            f"We model the count as $X\\sim\\mathrm{{Bin}}({n},{fmt(p)})$."
        )
    e = spec.get("E", n * p)
    return (
        f"{story}\n\n"
        f"From the given mean over $n={n}$ independent trials,\n\n"
        f"$$p=\\dfrac{{E[X]}}{{n}}=\\dfrac{{{fmt(e)}}}{{{n}}}={fmt(p)}$$\n\n"
        f"We model the count as $X\\sim\\mathrm{{Bin}}({n},{fmt(p)})$, so "
        f"$1-p={fmt(q)}$ and $\\mathrm{{Var}}(X)=np(1-p)$."
    )


def make_statements(spec: dict, p: float) -> list[Stmt]:
    style = spec["style"]
    n = spec["n"]
    q = 1 - p
    success = spec["success"]
    fail = spec["fail"]
    unit = spec["unit"]
    successes = plural(success)
    units = plural(unit)

    def count_noun(k: int) -> str:
        return success if k == 1 else successes

    if style == "classic":
        n_e, n_v, streak, n_c, k_c = 12, 50, 3, 6, 4
        e_true = n_e * p
        e_claim = e_true * 0.5
        v_true = n_v * p * q
        streak_p = p**streak
        streak_claim = 0.3
        cum = cdf_le(n_c, k_c, p)
        return [
            Stmt(f"{fail_clause(unit, fail)} with probability {fmt(q)}.", True, "complement", {"q": q}),
            Stmt(f"The expected number of {successes} in the next {n_e} {units} is {fmt(e_claim)}.", False, "mean", {"n": n_e, "true": e_true, "claim": e_claim}),
            Stmt(f"The variance of the number of {successes} out of {n_v} {units} is {fmt(v_true)}.", True, "var", {"n": n_v, "true": v_true, "claim": v_true}),
            Stmt(f"The probability of {streak} consecutive {successes} is less than {fmt(streak_claim)}.", streak_p < streak_claim, "streak", {"k": streak, "true": streak_p, "claim": streak_claim, "cmp": "less"}),
            Stmt(f"The probability of at most {k_c} {count_noun(k_c)} in the next {n_c} {units} is more than 0.5.", cum > 0.5, "cum_le", {"n": n_c, "k": k_c, "true": cum, "claim": 0.5}),
        ]

    if style == "exact_vs_atleast":
        n2, k_exact, streak = 5, 4, 4
        v_wrong = n * p * q * 1.25
        v_true = n * p * q
        streak_p = p**streak
        p_exact = pmf(n2, k_exact, p)
        p_ge = cdf_ge(n2, k_exact, p)
        return [
            Stmt(f"{fail_clause(unit, fail, 'An individual')} with probability {fmt(q)}.", True, "complement", {"q": q}),
            Stmt(f"Over the next {n2} {units}, the expected number of {successes} is exactly {fmt(n2 * p)}.", True, "mean", {"n": n2, "true": n2 * p, "claim": n2 * p}),
            Stmt(f"For these {n} {units}, the variance of the number of {successes} is {fmt(v_wrong)}.", False, "var", {"n": n, "true": v_true, "claim": v_wrong}),
            Stmt(f"The probability that each of the next {streak} {units} yields {article(success)} {success} is greater than 0.45.", streak_p > 0.45, "streak", {"k": streak, "true": streak_p, "claim": 0.45, "cmp": "greater"}),
            Stmt(f"The probability of at least {k_exact} {successes} out of {n2} is larger than the probability of exactly {k_exact} {successes} out of {n2}.", p_ge > p_exact, "exact_vs_atleast", {"n": n2, "k": k_exact, "p_ge": p_ge, "p_exact": p_exact}),
        ]

    if style == "ratio":
        n_e, n_v, streak = 20, 40, 3
        e_wrong = n_e * p + 1
        e_true = n_e * p
        v_true = n_v * p * q
        streak_p = p**streak
        n_c, k_c = 8, 1 if p <= 0.25 else 5
        cum = cdf_le(n_c, k_c, p)
        thr = 0.7
        return [
            Stmt(f"{fail_clause(unit, fail, 'A given')} with probability {fmt(q)}.", True, "complement", {"q": q}),
            Stmt(f"Among the next {n_e} {units}, the expected number of {successes} is {fmt(e_wrong)}.", False, "mean", {"n": n_e, "true": e_true, "claim": e_wrong}),
            Stmt(f"For {n_v} {units}, the variance of the number of {successes} is {fmt(v_true)}.", True, "var", {"n": n_v, "true": v_true, "claim": v_true}),
            Stmt(f"The probability of {streak} consecutive {successes} is less than 0.005.", streak_p < 0.005, "streak", {"k": streak, "true": streak_p, "claim": 0.005, "cmp": "less"}),
            Stmt(f"The probability of at most {k_c} {count_noun(k_c)} among the next {n_c} {units} is more than {thr}.", cum > thr, "cum_le", {"n": n_c, "k": k_c, "true": cum, "claim": thr}),
        ]

    if style in ("mean_var", "mean_sd"):
        n_e, n_v, streak, n_c, k_c = 15, 25, 3, 8, 5
        e_true = n_e * p
        e_claim = math.floor(e_true) + 1 if e_true < 13 else 13
        v_true = n_v * p * q
        streak_p = p**streak
        cum = cdf_le(n_c, k_c, p)
        return [
            Stmt(f"{fail_clause(unit, fail)} with probability {fmt(q)}.", True, "complement", {"q": q}),
            Stmt(f"In a run of {n_e} {units}, the expected number of {successes} exceeds {fmt(e_claim)}.", e_true > e_claim, "mean_cmp", {"n": n_e, "true": e_true, "claim": e_claim, "cmp": "exceeds"}),
            Stmt(f"For {n_v} {units}, the variance of the number of {successes} is {fmt(v_true)}.", True, "var", {"n": n_v, "true": v_true, "claim": v_true}),
            Stmt(f"The chance that each of the next {streak} {units} yields {article(success)} {success} is less than 0.55.", streak_p < 0.55, "streak", {"k": streak, "true": streak_p, "claim": 0.55, "cmp": "less"}),
            Stmt(f"The chance of at most {k_c} {count_noun(k_c)} in the next {n_c} {units} is more than 0.20.", cum > 0.20, "cum_le", {"n": n_c, "k": k_c, "true": cum, "claim": 0.20}),
        ]

    if style == "low_p":
        n_e, streak, n_c, k_c = 10, 3, 6, 2
        e_true = n_e * p
        v_true = n * p * q
        streak_p = p**streak
        cum = cdf_le(n_c, k_c, p)
        return [
            Stmt(f"{fail_clause(unit, fail, 'A given')} with probability {fmt(q)}.", True, "complement", {"q": q}),
            Stmt(f"For these {n} {units}, the variance of the number of {successes} is {fmt(v_true)}.", True, "var", {"n": n, "true": v_true, "claim": v_true}),
            Stmt(f"Over the next {n_e} {units}, the expected number of {successes} is less than 5.", e_true < 5, "mean_cmp", {"n": n_e, "true": e_true, "claim": 5, "cmp": "less"}),
            Stmt(f"The probability that each of the next {streak} {units} yields {article(success)} {success} is greater than 0.1.", streak_p > 0.1, "streak", {"k": streak, "true": streak_p, "claim": 0.1, "cmp": "greater"}),
            Stmt(f"The probability of at most {k_c} {count_noun(k_c)} in the next {n_c} {units} is more than 0.5.", cum > 0.5, "cum_le", {"n": n_c, "k": k_c, "true": cum, "claim": 0.5}),
        ]

    raise ValueError(style)


def explain_stmt(sc: Scenario, idx: int, st: Stmt) -> str:
    letter = LETTERS[idx]
    verd = "True" if st.truth else "False"
    p = sc.p
    q = 1 - p
    d = st.data

    if st.kind == "complement":
        body = (
            "Recover the common success probability $p$ from the stem "
            "(using the given mean, variance, standard deviation, or success/failure ratio). "
            f"That calculation yields $p={fmt(p)}$.\n\n"
            "Each independent trial either succeeds or fails, so the failure probability is the complement\n\n"
            "$$1-p$$\n\n"
            f"Substituting the recovered value,\n\n"
            f"$$1-p=1-{fmt(p)}={fmt(q)}$$\n\n"
        )
        body += "This agrees with the probability stated in the claim." if st.truth else "This does not agree with the probability stated in the claim."

    elif st.kind == "mean":
        n = d["n"]
        true = d["true"]
        claim = d["claim"]
        body = (
            "For a binomial count $X\\sim\\mathrm{Bin}(n,p)$, the mean is the product of the "
            "number of trials and the success probability:\n\n"
            "$$E[X]=np$$\n\n"
            f"Using $n={n}$ and the recovered $p={fmt(p)}$,\n\n"
            f"$$E[X]={n}\\cdot {fmt(p)}={fmt(true)}$$\n\n"
        )
        if abs(true - claim) < 1e-9 and st.truth:
            body += "The computed mean matches the claimed value exactly."
        else:
            body += f"The claim reports ${fmt(claim)}$, which is not equal to the computed mean ${fmt(true)}$."

    elif st.kind == "mean_cmp":
        n = d["n"]
        true = d["true"]
        claim = d["claim"]
        cmp = d["cmp"]
        body = (
            "For a binomial count $X\\sim\\mathrm{Bin}(n,p)$,\n\n"
            "$$E[X]=np$$\n\n"
            f"With $n={n}$ and $p={fmt(p)}$,\n\n"
            f"$$E[X]={n}\\cdot {fmt(p)}={fmt(true)}$$\n\n"
        )
        if cmp == "exceeds":
            op = ">" if true > claim else r"\le"
            relation = "exceeds" if true > claim else "does not exceed"
        else:
            op = "<" if true < claim else r"\ge"
            relation = "is less than" if true < claim else "is not less than"
        body += f"Compared with the threshold ${fmt(claim)}$, we have ${fmt(true)} {op} {fmt(claim)}$, so the mean {relation} the claimed cutoff."

    elif st.kind == "var":
        n = d["n"]
        true = d["true"]
        claim = d["claim"]
        body = (
            "For $X\\sim\\mathrm{Bin}(n,p)$, the variance formula is\n\n"
            "$$\\mathrm{Var}(X)=np(1-p)$$\n\n"
            f"Insert $n={n}$, $p={fmt(p)}$, and $1-p={fmt(q)}$:\n\n"
            f"$$\\mathrm{{Var}}(X)={n}\\cdot {fmt(p)}\\cdot {fmt(q)}={fmt(true)}$$\n\n"
        )
        if abs(true - claim) < 1e-9 and st.truth:
            body += "This matches the variance stated in the claim."
        else:
            body += f"The claim uses ${fmt(claim)}$, which differs from the correct value ${fmt(true)}$."

    elif st.kind == "streak":
        k = d["k"]
        true = d["true"]
        claim = d["claim"]
        cmp = d["cmp"]
        body = (
            "Independence across trials means a run of successes multiplies the same "
            "probability $p$ on every trial:\n\n"
            f"$$P(\\text{{{k} successes in a row}})=p^{{{k}}}$$\n\n"
            f"With the recovered $p={fmt(p)}$,\n\n"
            f"$$p^{{{k}}}=({fmt(p)})^{{{k}}}\\approx {approx(true)}$$\n\n"
        )
        if cmp == "less":
            op = "<" if true < claim else r"\ge"
            holds = true < claim
        else:
            op = ">" if true > claim else r"\le"
            holds = true > claim
        body += (
            f"Comparing with the claimed cutoff ${fmt(claim)}$ gives "
            f"${approx(true)} {op} {fmt(claim)}$. "
            + ("The inequality in the claim therefore holds." if holds else "The inequality in the claim therefore fails.")
        )

    elif st.kind == "cum_le":
        n = d["n"]
        k = d["k"]
        true = d["true"]
        claim = d["claim"]
        terms = [
            f"$$P(X={i})=\\binom{{{n}}}{{{i}}}({fmt(p)})^{{{i}}}({fmt(q)})^{{{n - i}}}"
            f"\\approx {approx(pmf(n, i, p))}$$"
            for i in range(0, k + 1)
        ]
        body = (
            f"Let $X\\sim\\mathrm{{Bin}}({n},{fmt(p)})$. The event “at most ${k}$ successes” "
            f"is the union of the mutually exclusive outcomes $X=0,1,\\ldots,{k}$, so\n\n"
            f"$$P(X\\le {k})=\\sum_{{x=0}}^{{{k}}}\\binom{{{n}}}{{x}}p^{{x}}(1-p)^{{{n}-x}}$$\n\n"
            "Evaluating each mass separately:\n\n"
            + "\n\n".join(terms)
            + "\n\nAdding these contributions,\n\n"
            + f"$$P(X\\le {k})\\approx {approx(true)}$$\n\n"
        )
        op = ">" if true > claim else r"\le"
        holds = true > claim
        body += (
            f"Compared with ${fmt(claim)}$, we obtain ${approx(true)} {op} {fmt(claim)}$. "
            + ("The claim's inequality holds." if holds else "The claim's inequality does not hold.")
        )

    elif st.kind == "exact_vs_atleast":
        n = d["n"]
        k = d["k"]
        body = (
            f"Let $X\\sim\\mathrm{{Bin}}({n},{fmt(p)})$. The event “at least ${k}$” is\n\n"
            f"$$P(X\\ge {k})=\\sum_{{x={k}}}^{{{n}}}\\binom{{{n}}}{{x}}p^{{x}}(1-p)^{{{n}-x}}$$\n\n"
            f"while “exactly ${k}$” is only the single term $P(X={k})$. "
            "Whenever $0<p<1$ and $k<n$, the remaining terms $x=k+1,\\ldots,n$ are strictly "
            "positive, so the upper-tail probability is strictly larger than the single mass:\n\n"
            f"$$P(X\\ge {k})>P(X={k})$$\n\n"
            f"Numerically, $P(X\\ge {k})\\approx {approx(d['p_ge'])}$ and "
            f"$P(X={k})\\approx {approx(d['p_exact'])}$."
        )
    else:
        raise ValueError(st.kind)

    return f"**{letter}.** → {verd}\n\n{body}\n\nso the statement is {verd}."


def build_scenarios() -> list[Scenario]:
    out: list[Scenario] = []
    for spec in specs():
        p = float(spec["p"])
        n = int(spec["n"])
        if "E" in spec:
            assert abs(spec["E"] - n * p) < 1e-6, spec["title"]
        if "V" in spec:
            assert abs(spec["V"] - n * p * (1 - p)) < 1e-6, spec["title"]
        if "sd2" in spec:
            assert abs(spec["sd2"] - n * p * (1 - p)) < 1e-6, spec["title"]
        if "r_pos" in spec:
            assert abs(p - spec["r_pos"] / (spec["r_pos"] + spec["r_neg"])) < 1e-12

        fmt_kwargs = {
            "n": n,
            "E": fmt(spec.get("E", n * p)),
            "V": fmt(spec.get("V", n * p * (1 - p))),
            "sd2": fmt(spec.get("sd2", n * p * (1 - p))),
            "r_pos": spec.get("r_pos", ""),
            "r_neg": spec.get("r_neg", ""),
        }
        context = spec["story"].format(**fmt_kwargs) + " Evaluate each statement. Mark it TRUE or FALSE."
        statements = make_statements(spec, p)
        out.append(
            Scenario(
                title=spec["title"],
                context=context,
                overview=overview_for(spec, p),
                p=p,
                difficulty=spec["difficulty"],
                statements=statements,
            )
        )
    assert len(out) == 40
    return out


def build_task(sc: Scenario, index: int) -> dict:
    num = 76 + index
    return {
        "id": f"math-13-{num}",
        "case_id": f"MATH 13.{num}",
        "title": sc.title,
        "subsection": "13.5",
        "context": sc.context,
        "statements": [s.text for s in sc.statements],
        "answer_key": [s.truth for s in sc.statements],
        "tactical_explanations": [explain_stmt(sc, i, s) for i, s in enumerate(sc.statements)],
        "difficulty_level": sc.difficulty,
        "sort_order": num,
        "solution_overview": sc.overview,
        "placeholder": False,
    }


def validate_task(task: dict) -> None:
    assert len(task["statements"]) == 5
    assert len(task["answer_key"]) == 5
    assert len(task["tactical_explanations"]) == 5
    for i, e in enumerate(task["tactical_explanations"]):
        letter = LETTERS[i]
        verd = "True" if task["answer_key"][i] else "False"
        assert e.startswith(f"**{letter}.** → {verd}"), e[:80]
        assert e.rstrip().endswith(f"so the statement is {verd}.")
        assert e.count("$") % 2 == 0, task["case_id"]
        assert "bernoulli" not in e.lower()
    assert "Bernoulli" not in task["context"]
    assert "Bernoulli" not in task["solution_overview"]


def main() -> None:
    scenarios = build_scenarios()
    new_tasks = [build_task(sc, i) for i, sc in enumerate(scenarios)]
    for t in new_tasks:
        validate_task(t)

    data = json.loads(EXAM_PATH.read_text())
    existing = [t for t in data["tasks"] if int(t.get("sort_order", 0)) < 76]
    data["tasks"] = existing + new_tasks
    EXAM_PATH.write_text(json.dumps(data, indent=2, ensure_ascii=False) + "\n")
    truths = sum(sum(1 for x in t["answer_key"] if x) for t in new_tasks)
    print(f"Wrote {len(new_tasks)} tasks; exam bank now has {len(data['tasks'])} tasks.")
    print(f"True rate: {truths}/{5 * len(new_tasks)} = {truths / (5 * len(new_tasks)):.2%}")


if __name__ == "__main__":
    main()
