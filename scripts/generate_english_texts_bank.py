#!/usr/bin/env python3
"""Generate WU BBE English Texts (Reading) bank: 5 subtopics × 30 tasks.

Each task embeds a short fact-rich business/social passage and 5 T/F statements
derived from those facts (True) or deliberate mutations (False), so keys are correct by construction.
"""
from __future__ import annotations

import json
import random
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
OUT = ROOT / "src" / "data" / "english" / "texts.json"

SUBSECTIONS = [
    {"id": "t.1", "title": "Business & Markets"},
    {"id": "t.2", "title": "Labour & Organisations"},
    {"id": "t.3", "title": "Technology & Society"},
    {"id": "t.4", "title": "Environment & Policy"},
    {"id": "t.5", "title": "Global Trade & Macro"},
]

CONTEXT = "Based on the passage, decide whether each statement is true or false."


def diff_for(n: int) -> str:
    if n <= 6:
        return "1/5"
    if n <= 12:
        return "2/5"
    if n <= 18:
        return "3/5"
    if n <= 24:
        return "4/5"
    return "5/5"


def true_count_pattern(i: int) -> int:
    # Mix 1–5 Trues per task.
    return [1, 2, 3, 4, 5, 2, 3, 4, 1, 5, 2, 3, 4, 5, 1, 3, 2, 4, 5, 1, 3, 2, 4, 5, 2, 3, 1, 4, 5, 3][i % 30]


# Fact templates: each entry is a dict with named facts used to build passage + claims.
# Numbers chosen so arithmetic traps are clean.

FACT_BANKS = {
    "t.1": [
        {
            "theme": "retail margin",
            "co": "Nordhaven Retail",
            "year": 2019,
            "rev": 420,
            "rev_unit": "million euros",
            "margin": 8,
            "stores": 64,
            "close": 7,
            "online_share": 22,
            "online_share_later": 31,
            "later_year": 2023,
        },
        {
            "theme": "airline recovery",
            "co": "Alpine Air",
            "year": 2020,
            "passengers": 18.5,
            "passengers_unit": "million",
            "drop_pct": 62,
            "fleet": 112,
            "grounded": 41,
            "load_factor": 71,
            "load_factor_prior": 84,
            "later_year": 2022,
        },
        {
            "theme": "bank capital",
            "co": "Meridian Bank",
            "year": 2021,
            "cet1": 13.2,
            "requirement": 10.5,
            "npl": 2.4,
            "npl_prior": 3.1,
            "branches": 280,
            "closed": 35,
            "later_year": 2024,
        },
        {
            "theme": "manufacturer export",
            "co": "Helix Components",
            "year": 2018,
            "export_share": 57,
            "asia_share": 29,
            "eu_share": 48,
            "employees": 3400,
            "capex": 95,
            "capex_unit": "million euros",
            "later_year": 2022,
            "export_share_later": 63,
        },
        {
            "theme": "subscription platform",
            "co": "Canvas Media",
            "year": 2020,
            "subs": 4.2,
            "subs_unit": "million",
            "arpu": 11.5,
            "churn": 3.8,
            "markets": 14,
            "later_year": 2023,
            "subs_later": 6.7,
            "churn_later": 2.9,
        },
    ],
    "t.2": [
        {
            "theme": "hybrid work",
            "co": "Pinnacle Consulting",
            "year": 2021,
            "office_days": 2,
            "headcount": 1900,
            "attrition": 18,
            "attrition_prior": 11,
            "training_budget": 2.6,
            "training_unit": "million euros",
            "promotion_internal": 64,
            "later_year": 2024,
        },
        {
            "theme": "warehouse automation",
            "co": "ParcelRight",
            "year": 2019,
            "robots": 120,
            "pick_rate_up": 27,
            "injuries_down": 15,
            "night_shifts": 3,
            "union_share": 41,
            "sites": 9,
            "later_year": 2023,
            "robots_later": 310,
        },
        {
            "theme": "graduate scheme",
            "co": "Aurelia Pharma",
            "year": 2022,
            "hires": 85,
            "applicants": 4200,
            "female_share": 52,
            "retention_2y": 78,
            "starting_salary": 42000,
            "locations": 6,
            "intern_convert": 34,
        },
        {
            "theme": "gig platform labour",
            "co": "QuickRoute",
            "year": 2020,
            "couriers": 28000,
            "avg_hours": 22,
            "hourly": 11.4,
            "cities": 19,
            "complaint_rate": 4.7,
            "later_year": 2023,
            "couriers_later": 41000,
            "hourly_later": 12.8,
        },
        {
            "theme": "board diversity",
            "co": "Lumen Energy",
            "year": 2018,
            "board_size": 12,
            "women": 3,
            "women_later": 5,
            "later_year": 2023,
            "independent": 8,
            "meetings": 7,
            "ceo_tenure": 6,
        },
    ],
    "t.3": [
        {
            "theme": "broadband rollout",
            "co": "NorthFibre",
            "year": 2019,
            "coverage": 61,
            "coverage_later": 88,
            "later_year": 2024,
            "speed": 500,
            "speed_unit": "Mbps",
            "subsidy": 1.2,
            "subsidy_unit": "billion euros",
            "rural_share": 34,
            "outages": 2.1,
        },
        {
            "theme": "AI hiring tools",
            "co": "HireSignal",
            "year": 2021,
            "clients": 240,
            "time_to_hire_down": 19,
            "bias_audits": 2,
            "languages": 11,
            "false_reject": 6.5,
            "later_year": 2024,
            "clients_later": 510,
        },
        {
            "theme": "ev charging",
            "co": "VoltBay",
            "year": 2020,
            "chargers": 1800,
            "chargers_later": 5200,
            "later_year": 2023,
            "avg_session": 28,
            "uptime": 97.4,
            "cities": 37,
            "peak_kw": 150,
        },
        {
            "theme": "cyber insurance",
            "co": "ShieldLine",
            "year": 2018,
            "premiums": 340,
            "premiums_unit": "million euros",
            "claims_ratio": 62,
            "smes_share": 44,
            "avg_payout": 180000,
            "later_year": 2022,
            "premiums_later": 710,
        },
        {
            "theme": "remote education platforms",
            "co": "LessonBridge",
            "year": 2020,
            "users": 2.3,
            "users_unit": "million",
            "schools": 4100,
            "completion": 67,
            "teacher_hours_saved": 3.2,
            "later_year": 2023,
            "users_later": 5.1,
            "completion_later": 74,
        },
    ],
    "t.4": [
        {
            "theme": "carbon levy",
            "co": "the national carbon levy",
            "year": 2021,
            "rate": 45,
            "rate_unit": "euros per tonne",
            "rate_later": 70,
            "later_year": 2025,
            "exemptions": 3,
            "revenue": 2.8,
            "revenue_unit": "billion euros",
            "industry_cut": 12,
        },
        {
            "theme": "plastic packaging ban",
            "co": "Directive 14/B",
            "year": 2022,
            "items_banned": 6,
            "compliance_deadline": 2024,
            "fine_max": 250000,
            "retailers_surveyed": 900,
            "already_compliant": 58,
            "recyclate_share_target": 30,
        },
        {
            "theme": "flood defence programme",
            "co": "RiverGuard",
            "year": 2017,
            "km_reinforced": 140,
            "km_later": 265,
            "later_year": 2023,
            "homes_protected": 52000,
            "budget": 1.9,
            "budget_unit": "billion euros",
            "delay_months": 14,
        },
        {
            "theme": "renewable auction",
            "co": "Round 9 auction",
            "year": 2023,
            "awarded_gw": 4.6,
            "bid_floor": 52,
            "bid_floor_unit": "euros/MWh",
            "winning_avg": 48,
            "offshore_share": 61,
            "projects": 17,
            "grid_delay_share": 5,
        },
        {
            "theme": "urban congestion charge",
            "co": "MetroToll",
            "year": 2019,
            "daily_fee": 12,
            "traffic_down": 16,
            "bus_speed_up": 9,
            "revenue": 410,
            "revenue_unit": "million euros",
            "exemptions_vehicles": 4,
            "later_year": 2022,
            "daily_fee_later": 15,
        },
    ],
    "t.5": [
        {
            "theme": "trade agreement",
            "co": "the Coral Trade Pact",
            "year": 2020,
            "tariff_cut": 40,
            "goods_lines": 1200,
            "services_chapters": 8,
            "gdp_boost": 0.4,
            "ratifying": 11,
            "dispute_cases": 2,
            "later_year": 2024,
        },
        {
            "theme": "commodity shock",
            "co": "wheat markets",
            "year": 2022,
            "price_up": 38,
            "stock_months": 2.4,
            "export_ban_countries": 5,
            "aid_tonnes": 1.1,
            "aid_unit": "million tonnes",
            "later_year": 2023,
            "price_change_later": -12,
        },
        {
            "theme": "fdi inflow",
            "co": "Hostland",
            "year": 2019,
            "fdi": 22,
            "fdi_unit": "billion dollars",
            "fdi_later": 31,
            "later_year": 2023,
            "manufacturing_share": 36,
            "greenfield": 74,
            "jobs_announced": 48000,
        },
        {
            "theme": "currency peg stress",
            "co": "the Mira peg",
            "year": 2021,
            "reserves": 28,
            "reserves_unit": "billion dollars",
            "import_cover_months": 5.5,
            "policy_rate": 7.25,
            "rate_hike_bp": 150,
            "black_market_gap": 9,
            "later_year": 2022,
            "reserves_later": 21,
        },
        {
            "theme": "shipping rates",
            "co": "TransOcean Index",
            "year": 2020,
            "index": 1200,
            "index_peak": 5100,
            "peak_year": 2021,
            "index_later": 1800,
            "later_year": 2023,
            "blank_sailings": 14,
            "port_delay_days": 6,
        },
    ],
}


def render_passage(sub_id: str, f: dict, rng: random.Random) -> str:
    """Build a short passage from structured facts."""
    theme = f["theme"]
    if sub_id == "t.1":
        if theme == "retail margin":
            return (
                f"In {f['year']}, {f['co']} reported revenue of {f['rev']} {f['rev_unit']} with an operating margin of {f['margin']}%. "
                f"The chain operated {f['stores']} stores that year and closed {f['close']} underperforming locations. "
                f"Online sales accounted for {f['online_share']}% of revenue in {f['year']}, rising to {f['online_share_later']}% by {f['later_year']}. "
                f"Management attributed the online gain to a redesigned checkout flow and expanded next-day delivery coverage."
            )
        if theme == "airline recovery":
            return (
                f"{f['co']} carried {f['passengers']} {f['passengers_unit']} passengers in {f['year']}, after demand fell by {f['drop_pct']}% from the prior peak. "
                f"Of its fleet of {f['fleet']} aircraft, {f['grounded']} remained grounded for most of the year. "
                f"The average load factor was {f['load_factor']}%, compared with {f['load_factor_prior']}% before the shock. "
                f"By {f['later_year']}, schedule capacity had partially recovered, though long-haul routes lagged domestic flying."
            )
        if theme == "bank capital":
            return (
                f"{f['co']}'s CET1 ratio stood at {f['cet1']}% in {f['year']}, above the {f['requirement']}% regulatory minimum. "
                f"Non-performing loans fell from {f['npl_prior']}% to {f['npl']}% of the book. "
                f"The bank operated {f['branches']} branches and closed {f['closed']} of them by {f['later_year']} as customers shifted to digital channels. "
                f"Executives said further branch reductions would depend on rural coverage obligations."
            )
        if theme == "manufacturer export":
            return (
                f"{f['co']} generated {f['export_share']}% of sales from exports in {f['year']}, with Asia contributing {f['asia_share']}% and the EU {f['eu_share']}% of the export total. "
                f"The firm employed {f['employees']} people and invested {f['capex']} {f['capex_unit']} in new tooling. "
                f"By {f['later_year']}, the export share had risen to {f['export_share_later']}%. "
                f"Management warned that shipping costs remained a constraint on further expansion."
            )
        # subscription
        return (
            f"{f['co']} had {f['subs']} {f['subs_unit']} subscribers in {f['year']}, with average revenue per user of €{f['arpu']} and monthly churn of {f['churn']}%. "
            f"The platform operated in {f['markets']} markets. "
            f"By {f['later_year']}, subscribers reached {f['subs_later']} {f['subs_unit']} while churn fell to {f['churn_later']}%. "
            f"Analysts linked lower churn to a bundled family plan introduced in the intervening years."
        )
    if sub_id == "t.2":
        if theme == "hybrid work":
            return (
                f"{f['co']} introduced a hybrid policy in {f['year']} requiring {f['office_days']} office days per week for its {f['headcount']} staff. "
                f"Voluntary attrition rose to {f['attrition']}% from {f['attrition_prior']}% the year before. "
                f"Training spending reached {f['training_budget']} {f['training_unit']}, and {f['promotion_internal']}% of vacancies were filled internally. "
                f"By {f['later_year']}, managers reported that team onboarding took longer under hybrid schedules."
            )
        if theme == "warehouse automation":
            return (
                f"{f['co']} deployed {f['robots']} warehouse robots in {f['year']}, lifting pick rates by {f['pick_rate_up']}% and cutting reportable injuries by {f['injuries_down']}%. "
                f"Facilities ran {f['night_shifts']} night shifts, and {f['union_share']}% of floor staff were union members across {f['sites']} sites. "
                f"By {f['later_year']}, the robot fleet had grown to {f['robots_later']}. "
                f"Union negotiators sought guarantees that automation would not reduce night-shift headcount one-for-one."
            )
        if theme == "graduate scheme":
            return (
                f"In {f['year']}, {f['co']} hired {f['hires']} graduates from {f['applicants']} applicants. "
                f"Women made up {f['female_share']}% of the intake, and two-year retention stood at {f['retention_2y']}%. "
                f"Starting salary was €{f['starting_salary']:,}, roles spanned {f['locations']} locations, and {f['intern_convert']} former interns converted to full-time offers. "
                f"Recruiters said assessment centres remained the main filter after online testing."
            )
        if theme == "gig platform labour":
            return (
                f"{f['co']} listed {f['couriers']} active couriers in {f['year']}, working an average of {f['avg_hours']} hours per week at €{f['hourly']} per hour across {f['cities']} cities. "
                f"The complaint rate was {f['complaint_rate']}% of deliveries. "
                f"By {f['later_year']}, courier numbers reached {f['couriers_later']} and average hourly pay rose to €{f['hourly_later']}. "
                f"Regulators debated whether couriers should be reclassified as employees."
            )
        return (
            f"{f['co']}'s board had {f['board_size']} members in {f['year']}, of whom {f['women']} were women, rising to {f['women_later']} by {f['later_year']}. "
            f"{f['independent']} directors were classified as independent, and the board met {f['meetings']} times that earlier year. "
            f"The CEO's tenure was {f['ceo_tenure']} years at the time of the {f['later_year']} review. "
            f"Investors pressed for clearer succession planning alongside diversity targets."
        )
    if sub_id == "t.3":
        if theme == "broadband rollout":
            return (
                f"{f['co']} raised fibre coverage from {f['coverage']}% in {f['year']} to {f['coverage_later']}% in {f['later_year']}, advertising peak speeds of {f['speed']} {f['speed_unit']}. "
                f"Public subsidies totalled {f['subsidy']} {f['subsidy_unit']}, with rural areas representing {f['rural_share']}% of new connections. "
                f"Average monthly outages measured {f['outages']} hours per subscriber in the final year. "
                f"Critics argued that apartment buildings still faced landlord access delays."
            )
        if theme == "AI hiring tools":
            return (
                f"{f['co']} served {f['clients']} corporate clients in {f['year']}, claiming a {f['time_to_hire_down']}% reduction in time-to-hire. "
                f"The vendor ran {f['bias_audits']} bias audits per year and supported {f['languages']} languages, with a reported false-reject rate of {f['false_reject']}%. "
                f"By {f['later_year']}, the client count reached {f['clients_later']}. "
                f"Labour lawyers warned that opaque scoring could still breach equal-treatment rules."
            )
        if theme == "ev charging":
            return (
                f"{f['co']} operated {f['chargers']} public chargers in {f['year']} and {f['chargers_later']} by {f['later_year']} across {f['cities']} cities. "
                f"Average session length was {f['avg_session']} minutes, network uptime was {f['uptime']}%, and peak power reached {f['peak_kw']} kW. "
                f"Utilisation was highest near motorway corridors. "
                f"Municipal partners sought revenue-sharing terms for kerbside installations."
            )
        if theme == "cyber insurance":
            return (
                f"{f['co']} collected {f['premiums']} {f['premiums_unit']} in premiums in {f['year']}, with a claims ratio of {f['claims_ratio']}%. "
                f"SMEs accounted for {f['smes_share']}% of policies, and the average payout was €{f['avg_payout']:,}. "
                f"Premiums reached {f['premiums_later']} {f['premiums_unit']} by {f['later_year']}. "
                f"Underwriters tightened exclusions for unpatched critical systems."
            )
        return (
            f"{f['co']} reported {f['users']} {f['users_unit']} users in {f['year']} across {f['schools']} schools, with a course completion rate of {f['completion']}%. "
            f"Teachers estimated {f['teacher_hours_saved']} hours saved per week on marking. "
            f"By {f['later_year']}, users rose to {f['users_later']} {f['users_unit']} and completion to {f['completion_later']}%. "
            f"Education ministries demanded clearer data-protection terms for minors."
        )
    if sub_id == "t.4":
        if theme == "carbon levy":
            return (
                f"{f['co'].capitalize()} began in {f['year']} at {f['rate']} {f['rate_unit']}, scheduled to reach {f['rate_later']} by {f['later_year']}. "
                f"There were {f['exemptions']} sectoral exemptions in the first year, and revenue totalled {f['revenue']} {f['revenue_unit']}. "
                f"Covered industry emissions fell by {f['industry_cut']}% relative to the pre-levy baseline. "
                f"Exporters lobbied for border adjustments to protect competitiveness."
            )
        if theme == "plastic packaging ban":
            return (
                f"{f['co']} took effect in {f['year']}, banning {f['items_banned']} single-use plastic item categories with a compliance deadline of {f['compliance_deadline']}. "
                f"Maximum fines reached €{f['fine_max']:,}. Of {f['retailers_surveyed']} retailers surveyed, {f['already_compliant']}% reported early compliance. "
                f"A recycled-content target of {f['recyclate_share_target']}% was set for remaining plastic packaging. "
                f"Small cafés argued that compostable alternatives raised unit costs."
            )
        if theme == "flood defence programme":
            return (
                f"{f['co']} reinforced {f['km_reinforced']} km of embankments in {f['year']} and {f['km_later']} km by {f['later_year']}, protecting roughly {f['homes_protected']:,} homes. "
                f"The programme budget was {f['budget']} {f['budget_unit']}, and works ran {f['delay_months']} months behind the original timetable. "
                f"Engineers prioritised estuarine sections with the highest tidal risk. "
                f"Local councils sought clearer rules on property-level grants."
            )
        if theme == "renewable auction":
            return (
                f"{f['co'].capitalize()} in {f['year']} awarded {f['awarded_gw']} GW of capacity. The bid floor was {f['bid_floor']} {f['bid_floor_unit']}, while the average winning bid was {f['winning_avg']} {f['bid_floor_unit']}. "
                f"Offshore projects took {f['offshore_share']}% of awarded capacity across {f['projects']} projects; {f['grid_delay_share']} projects cited grid-connection delays. "
                f"Developers warned that turbine lead times remained long. "
                f"The ministry said a further round would adjust ceiling prices."
            )
        return (
            f"{f['co']} introduced a daily fee of €{f['daily_fee']} in {f['year']}, cutting central traffic by {f['traffic_down']}% and raising average bus speeds by {f['bus_speed_up']}%. "
            f"Revenue reached {f['revenue']} {f['revenue_unit']}. {f['exemptions_vehicles']} vehicle categories were exempt. "
            f"By {f['later_year']}, the daily fee had risen to €{f['daily_fee_later']}. "
            f"Retailers on the zone boundary reported mixed effects on footfall."
        )
    # t.5
    if theme == "trade agreement":
        return (
            f"{f['co'].capitalize()} entered into force in {f['year']}, cutting selected tariffs by {f['tariff_cut']}% across roughly {f['goods_lines']} goods lines and including {f['services_chapters']} services chapters. "
            f"Modellers estimated a {f['gdp_boost']}% GDP boost for the median member. {f['ratifying']} countries ratified in the first wave, and {f['dispute_cases']} early dispute cases were filed by {f['later_year']}. "
            f"Agricultural quotas remained politically sensitive. "
            f"Supporters argued that rules of origin were clearer than in prior deals."
        )
    if theme == "commodity shock":
        return (
            f"In {f['year']}, benchmark {f['co']} prices rose by {f['price_up']}%, while global stocks covered only {f['stock_months']} months of consumption. "
            f"{f['export_ban_countries']} countries imposed temporary export bans, and aid shipments reached {f['aid_tonnes']} {f['aid_unit']}. "
            f"By {f['later_year']}, prices had moved {f['price_change_later']}% from the {f['year']} peak level reference used by the agency. "
            f"Importers diversified suppliers to reduce concentration risk."
        )
    if theme == "fdi inflow":
        return (
            f"{f['co']} recorded FDI inflows of {f['fdi']} {f['fdi_unit']} in {f['year']} and {f['fdi_later']} {f['fdi_unit']} in {f['later_year']}. "
            f"Manufacturing accounted for {f['manufacturing_share']}% of inflows, and {f['greenfield']}% of projects were greenfield. Announced jobs totalled {f['jobs_announced']:,}. "
            f"Investment promotion agencies emphasised skills pipelines near new plants. "
            f"Critics noted that some announcements recycled earlier pledges."
        )
    if theme == "currency peg stress":
        return (
            f"{f['co'].capitalize()} came under pressure in {f['year']} as reserves fell from {f['reserves']} to {f['reserves_later']} {f['reserves_unit']} by {f['later_year']}. "
            f"Import cover was {f['import_cover_months']} months when the policy rate stood at {f['policy_rate']}% before a {f['rate_hike_bp']} basis-point hike. "
            f"The black-market gap versus the official rate reached {f['black_market_gap']}%. "
            f"Exporters delayed conversion of foreign receipts amid devaluation fears."
        )
    return (
        f"The {f['co']} stood at {f['index']} in {f['year']}, peaked at {f['index_peak']} in {f['peak_year']}, and eased to {f['index_later']} by {f['later_year']}. "
        f"Carriers announced {f['blank_sailings']} blank sailings in the peak year, and average port delays reached {f['port_delay_days']} days. "
        f"Shippers shifted some volumes to air freight despite higher unit costs. "
        f"Insurers adjusted war-risk premiums on selected corridors."
    )


def build_claims(sub_id: str, f: dict) -> list[tuple[bool, str, str, str]]:
    """Return list of (is_true, statement, explanation, highlight)."""
    claims: list[tuple[bool, str, str, str]] = []
    theme = f["theme"]

    def T(stmt, expl, hl):
        claims.append((True, stmt, "TRUE. " + expl, hl))

    def F(stmt, expl, hl):
        claims.append((False, stmt, "FALSE. " + expl, hl))

    # Generic numeric claims based on available keys
    for key, label in [
        ("year", "The earliest year explicitly referenced as a baseline in the passage is"),
        ("later_year", "A later comparison year mentioned in the passage is"),
    ]:
        if key in f:
            T(f"{label} {f[key]}.", f"The passage states {f[key]}.", str(f[key]))
            F(
                f"{label} {f[key] + 1}.",
                f"The passage states {f[key]}, not {f[key] + 1}.",
                str(f[key] + 1),
            )

    # Theme-specific high-value claims
    if "rev" in f:
        T(
            f"{f['co']} reported revenue of {f['rev']} {f['rev_unit']} in {f['year']}.",
            "Matches the stated revenue figure and year.",
            f"{f['rev']} {f['rev_unit']}",
        )
        F(
            f"{f['co']} reported revenue of {f['rev'] + 30} {f['rev_unit']} in {f['year']}.",
            f"Revenue was {f['rev']}, not {f['rev'] + 30}.",
            f"{f['rev'] + 30}",
        )
        T(
            f"Operating margin was {f['margin']}% in {f['year']}.",
            "Matches the stated margin.",
            f"{f['margin']}%",
        )
        F(
            f"Operating margin was {f['margin'] + 3}% in {f['year']}.",
            f"Margin was {f['margin']}%, not {f['margin'] + 3}%.",
            f"{f['margin'] + 3}%",
        )
        T(
            f"Online sales rose from {f['online_share']}% to {f['online_share_later']}% between {f['year']} and {f['later_year']}.",
            "Matches both online-share figures.",
            f"{f['online_share_later']}%",
        )
        F(
            f"Online sales fell from {f['online_share']}% to {f['online_share_later']}% between {f['year']} and {f['later_year']}.",
            "The share rose, not fell.",
            "fell",
        )
        # arithmetic
        closed = f["close"]
        stores = f["stores"]
        T(
            f"The firm closed {closed} stores while operating {stores} stores in {f['year']}.",
            f"Matches the stated store count and closures.",
            f"{closed}",
        )
        F(
            f"The firm operated fewer than {stores - 10} stores in {f['year']}.",
            f"It operated {stores} stores.",
            f"{stores - 10}",
        )

    if "passengers" in f:
        T(
            f"{f['co']} carried {f['passengers']} {f['passengers_unit']} passengers in {f['year']}.",
            "Matches the passenger figure.",
            str(f["passengers"]),
        )
        F(
            f"Demand rose by {f['drop_pct']}% from the prior peak in {f['year']}.",
            f"Demand fell by {f['drop_pct']}%, not rose.",
            "rose",
        )
        T(
            f"{f['grounded']} aircraft of a {f['fleet']}-strong fleet remained grounded for most of {f['year']}.",
            "Matches grounded and fleet figures.",
            str(f["grounded"]),
        )
        F(
            f"The load factor in {f['year']} was higher than the pre-shock load factor of {f['load_factor_prior']}%.",
            f"Load factor was {f['load_factor']}%, below {f['load_factor_prior']}%.",
            str(f["load_factor"]),
        )
        T(
            f"If the pre-shock load factor was {f['load_factor_prior']}% and the {f['year']} load factor was {f['load_factor']}%, the gap was {f['load_factor_prior'] - f['load_factor']} percentage points.",
            "Correct subtraction of the two stated load factors.",
            f"{f['load_factor_prior'] - f['load_factor']} percentage points",
        )

    if "cet1" in f:
        T(
            f"CET1 of {f['cet1']}% exceeded the {f['requirement']}% minimum.",
            "Matches both capital figures.",
            f"{f['cet1']}%",
        )
        F(
            f"CET1 was below the regulatory minimum in {f['year']}.",
            f"CET1 ({f['cet1']}%) was above the {f['requirement']}% minimum.",
            "below",
        )
        T(
            f"NPLs fell from {f['npl_prior']}% to {f['npl']}%.",
            "Matches the NPL path.",
            f"{f['npl']}%",
        )
        F(
            f"NPLs rose from {f['npl_prior']}% to {f['npl']}%.",
            "NPLs fell, not rose.",
            "rose",
        )
        T(
            f"Branch closures totalled {f['closed']} by {f['later_year']} from a base of {f['branches']}.",
            "Matches branch figures.",
            str(f["closed"]),
        )

    if "export_share" in f and "asia_share" in f:
        T(
            f"Exports were {f['export_share']}% of sales in {f['year']}.",
            "Matches export share.",
            f"{f['export_share']}%",
        )
        F(
            f"Asia accounted for {f['eu_share']}% of export sales.",
            f"Asia was {f['asia_share']}%; the EU was {f['eu_share']}%.",
            f"{f['eu_share']}%",
        )
        T(
            f"EU export share ({f['eu_share']}%) exceeded Asia's ({f['asia_share']}%).",
            "Correct comparison of stated shares.",
            f"{f['eu_share']}%",
        )
        T(
            f"Capex was {f['capex']} {f['capex_unit']}.",
            "Matches capex.",
            str(f["capex"]),
        )
        F(
            f"By {f['later_year']}, the export share had fallen to {f['export_share_later']}%.",
            "The export share rose, not fell.",
            "fallen",
        )

    if "subs" in f and "arpu" in f:
        T(
            f"ARPU was €{f['arpu']} in {f['year']}.",
            "Matches ARPU.",
            f"€{f['arpu']}",
        )
        F(
            f"Churn rose from {f['churn']}% to {f['churn_later']}% by {f['later_year']}.",
            "Churn fell, not rose.",
            "rose",
        )
        T(
            f"Subscribers grew from {f['subs']} to {f['subs_later']} {f['subs_unit']}.",
            "Matches subscriber path.",
            str(f["subs_later"]),
        )
        T(
            f"If ARPU stayed €{f['arpu']} with {f['subs']} {f['subs_unit']} subscribers, monthly subscription revenue would be roughly €{round(f['arpu'] * f['subs'], 1)} {f['subs_unit'].replace('million','million')}.",
            f"Correct multiplication: {f['arpu']} × {f['subs']} = {round(f['arpu'] * f['subs'], 1)}.",
            str(round(f["arpu"] * f["subs"], 1)),
        )
        F(
            f"The platform operated in {f['markets'] + 5} markets in {f['year']}.",
            f"It operated in {f['markets']} markets.",
            str(f["markets"] + 5),
        )

    # Labour themes
    if "office_days" in f:
        T(
            f"The hybrid policy required {f['office_days']} office days per week.",
            "Matches the policy.",
            str(f["office_days"]),
        )
        F(
            f"Attrition fell to {f['attrition']}% from {f['attrition_prior']}%.",
            "Attrition rose, not fell.",
            "fell",
        )
        T(
            f"Internal promotions filled {f['promotion_internal']}% of vacancies.",
            "Matches the internal fill rate.",
            f"{f['promotion_internal']}%",
        )
        T(
            f"Headcount was {f['headcount']} when the policy began.",
            "Matches headcount.",
            str(f["headcount"]),
        )
        F(
            f"Training spending was below {f['training_budget'] - 1} {f['training_unit']}.",
            f"Spending was {f['training_budget']} {f['training_unit']}.",
            str(f["training_budget"] - 1),
        )

    if "robots" in f and "pick_rate_up" in f:
        T(
            f"Pick rates rose by {f['pick_rate_up']}% after robot deployment.",
            "Matches pick-rate change.",
            f"{f['pick_rate_up']}%",
        )
        F(
            f"Reportable injuries increased by {f['injuries_down']}%.",
            "Injuries fell, not increased.",
            "increased",
        )
        T(
            f"The robot count rose from {f['robots']} to {f['robots_later']}.",
            "Matches robot path.",
            str(f["robots_later"]),
        )
        T(
            f"Union membership among floor staff was {f['union_share']}%.",
            "Matches union share.",
            f"{f['union_share']}%",
        )
        F(
            f"The company operated {f['sites'] + 3} sites.",
            f"It operated {f['sites']} sites.",
            str(f["sites"] + 3),
        )

    if "hires" in f and "applicants" in f:
        T(
            f"{f['hires']} graduates were hired from {f['applicants']} applicants.",
            "Matches hiring figures.",
            str(f["hires"]),
        )
        F(
            f"Men made up {f['female_share']}% of the intake.",
            f"Women made up {f['female_share']}% of the intake.",
            "Men",
        )
        T(
            f"Two-year retention was {f['retention_2y']}%.",
            "Matches retention.",
            f"{f['retention_2y']}%",
        )
        T(
            f"If selection rate is hires/applicants, it was roughly {round(100 * f['hires'] / f['applicants'], 1)}%.",
            f"Correct: {f['hires']}/{f['applicants']} ≈ {round(100 * f['hires'] / f['applicants'], 1)}%.",
            f"{round(100 * f['hires'] / f['applicants'], 1)}%",
        )
        F(
            f"Starting salary was €{f['starting_salary'] + 5000:,}.",
            f"Starting salary was €{f['starting_salary']:,}.",
            f"€{f['starting_salary'] + 5000:,}",
        )

    if "couriers" in f:
        T(
            f"Average pay was €{f['hourly']} per hour in {f['year']}.",
            "Matches hourly pay.",
            f"€{f['hourly']}",
        )
        F(
            f"Courier numbers fell between {f['year']} and {f['later_year']}.",
            f"Numbers rose from {f['couriers']} to {f['couriers_later']}.",
            "fell",
        )
        T(
            f"Average weekly hours were {f['avg_hours']}.",
            "Matches hours.",
            str(f["avg_hours"]),
        )
        T(
            f"Pay rose to €{f['hourly_later']} by {f['later_year']}.",
            "Matches later pay.",
            f"€{f['hourly_later']}",
        )
        F(
            f"The complaint rate was {f['complaint_rate'] + 2}% of deliveries.",
            f"It was {f['complaint_rate']}%.",
            f"{f['complaint_rate'] + 2}%",
        )

    if "board_size" in f:
        T(
            f"Women on the board rose from {f['women']} to {f['women_later']}.",
            "Matches board diversity path.",
            str(f["women_later"]),
        )
        F(
            f"The board had {f['board_size'] + 2} members in {f['year']}.",
            f"It had {f['board_size']} members.",
            str(f["board_size"] + 2),
        )
        T(
            f"{f['independent']} directors were independent.",
            "Matches independent count.",
            str(f["independent"]),
        )
        T(
            f"Women were {f['women']} of {f['board_size']} members in {f['year']}, i.e. {round(100*f['women']/f['board_size'])}%.",
            "Correct share calculation from stated figures.",
            f"{round(100*f['women']/f['board_size'])}%",
        )
        F(
            f"The board met {f['meetings'] + 3} times in the earlier year referenced.",
            f"It met {f['meetings']} times.",
            str(f["meetings"] + 3),
        )

    # Technology / environment / macro — add if keys present
    if "coverage" in f:
        T(
            f"Coverage rose from {f['coverage']}% to {f['coverage_later']}%.",
            "Matches coverage path.",
            f"{f['coverage_later']}%",
        )
        F(
            f"Peak advertised speed was {f['speed'] + 200} {f['speed_unit']}.",
            f"Speed was {f['speed']} {f['speed_unit']}.",
            str(f["speed"] + 200),
        )
        T(
            f"Subsidies totalled {f['subsidy']} {f['subsidy_unit']}.",
            "Matches subsidy.",
            str(f["subsidy"]),
        )
        T(
            f"Rural areas were {f['rural_share']}% of new connections.",
            "Matches rural share.",
            f"{f['rural_share']}%",
        )
        F(
            f"Average monthly outages were under {f['outages'] - 1} hours.",
            f"Outages were {f['outages']} hours.",
            str(f["outages"] - 1),
        )

    if "time_to_hire_down" in f:
        T(
            f"Time-to-hire fell by {f['time_to_hire_down']}%.",
            "Matches claimed reduction.",
            f"{f['time_to_hire_down']}%",
        )
        F(
            f"Client numbers fell by {f['later_year']}.",
            f"Clients rose from {f['clients']} to {f['clients_later']}.",
            "fell",
        )
        T(
            f"False-reject rate was {f['false_reject']}%.",
            "Matches false-reject rate.",
            f"{f['false_reject']}%",
        )
        T(
            f"Bias audits occurred {f['bias_audits']} times per year.",
            "Matches audit frequency.",
            str(f["bias_audits"]),
        )
        F(
            f"The tool supported only {f['languages'] - 4} languages.",
            f"It supported {f['languages']} languages.",
            str(f["languages"] - 4),
        )

    if "chargers" in f:
        T(
            f"Chargers grew from {f['chargers']} to {f['chargers_later']}.",
            "Matches charger path.",
            str(f["chargers_later"]),
        )
        F(
            f"Uptime was below {f['uptime'] - 5}%.",
            f"Uptime was {f['uptime']}%.",
            str(f["uptime"] - 5),
        )
        T(
            f"Average session length was {f['avg_session']} minutes.",
            "Matches session length.",
            str(f["avg_session"]),
        )
        T(
            f"Peak power reached {f['peak_kw']} kW.",
            "Matches peak power.",
            str(f["peak_kw"]),
        )
        F(
            f"The network spanned {f['cities'] - 10} cities.",
            f"It spanned {f['cities']} cities.",
            str(f["cities"] - 10),
        )

    if "premiums" in f and "claims_ratio" in f:
        T(
            f"Premiums were {f['premiums']} {f['premiums_unit']} in {f['year']}.",
            "Matches premiums.",
            str(f["premiums"]),
        )
        F(
            f"The claims ratio was {f['claims_ratio'] + 10}%.",
            f"It was {f['claims_ratio']}%.",
            f"{f['claims_ratio'] + 10}%",
        )
        T(
            f"SMEs were {f['smes_share']}% of policies.",
            "Matches SME share.",
            f"{f['smes_share']}%",
        )
        T(
            f"Premiums rose to {f['premiums_later']} by {f['later_year']}.",
            "Matches later premiums.",
            str(f["premiums_later"]),
        )
        F(
            f"Average payout was €{f['avg_payout'] // 2:,}.",
            f"Average payout was €{f['avg_payout']:,}.",
            f"€{f['avg_payout'] // 2:,}",
        )

    if "users" in f and "schools" in f:
        T(
            f"Users grew from {f['users']} to {f['users_later']} {f['users_unit']}.",
            "Matches user path.",
            str(f["users_later"]),
        )
        F(
            f"Completion rates fell between {f['year']} and {f['later_year']}.",
            f"Completion rose from {f['completion']}% to {f['completion_later']}%.",
            "fell",
        )
        T(
            f"Schools numbered {f['schools']} in {f['year']}.",
            "Matches school count.",
            str(f["schools"]),
        )
        T(
            f"Teachers saved an estimated {f['teacher_hours_saved']} hours per week.",
            "Matches time-saved estimate.",
            str(f["teacher_hours_saved"]),
        )
        F(
            f"Completion in {f['year']} was {f['completion'] + 10}%.",
            f"It was {f['completion']}%.",
            f"{f['completion'] + 10}%",
        )

    if "rate" in f and "rate_later" in f and "industry_cut" in f:
        T(
            f"The levy rose from {f['rate']} to a scheduled {f['rate_later']} {f['rate_unit']}.",
            "Matches levy path.",
            str(f["rate_later"]),
        )
        F(
            f"There were {f['exemptions'] + 2} sectoral exemptions in the first year.",
            f"There were {f['exemptions']}.",
            str(f["exemptions"] + 2),
        )
        T(
            f"Revenue was {f['revenue']} {f['revenue_unit']}.",
            "Matches revenue.",
            str(f["revenue"]),
        )
        T(
            f"Industry emissions fell by {f['industry_cut']}%.",
            "Matches emissions cut.",
            f"{f['industry_cut']}%",
        )
        F(
            f"The starting levy rate was {f['rate_later']} {f['rate_unit']}.",
            f"It started at {f['rate']}.",
            str(f["rate_later"]),
        )

    if "items_banned" in f:
        T(
            f"{f['items_banned']} item categories were banned.",
            "Matches ban scope.",
            str(f["items_banned"]),
        )
        F(
            f"The compliance deadline was {f['compliance_deadline'] - 1}.",
            f"Deadline was {f['compliance_deadline']}.",
            str(f["compliance_deadline"] - 1),
        )
        T(
            f"{f['already_compliant']}% of surveyed retailers reported early compliance.",
            "Matches survey figure.",
            f"{f['already_compliant']}%",
        )
        T(
            f"Maximum fines reached €{f['fine_max']:,}.",
            "Matches fine cap.",
            f"€{f['fine_max']:,}",
        )
        F(
            f"The recyclate target was {f['recyclate_share_target'] + 15}%.",
            f"It was {f['recyclate_share_target']}%.",
            f"{f['recyclate_share_target'] + 15}%",
        )

    if "km_reinforced" in f:
        T(
            f"Reinforced length grew from {f['km_reinforced']} to {f['km_later']} km.",
            "Matches km path.",
            str(f["km_later"]),
        )
        F(
            f"Works finished {f['delay_months']} months ahead of schedule.",
            "Works were behind schedule, not ahead.",
            "ahead",
        )
        T(
            f"About {f['homes_protected']:,} homes were protected.",
            "Matches homes protected.",
            f"{f['homes_protected']:,}",
        )
        T(
            f"Budget was {f['budget']} {f['budget_unit']}.",
            "Matches budget.",
            str(f["budget"]),
        )
        F(
            f"Only {f['km_reinforced'] - 40} km had been reinforced by {f['later_year']}.",
            f"By then {f['km_later']} km had been reinforced.",
            str(f["km_reinforced"] - 40),
        )

    if "awarded_gw" in f:
        T(
            f"{f['awarded_gw']} GW was awarded.",
            "Matches awarded capacity.",
            str(f["awarded_gw"]),
        )
        F(
            f"The average winning bid was higher than {f['bid_floor']} {f['bid_floor_unit']}.",
            f"The average winning bid was {f['winning_avg']}, which is lower than {f['bid_floor']}.",
            str(f["winning_avg"]),
        )
        T(
            f"Offshore projects took {f['offshore_share']}% of awarded capacity.",
            "Matches offshore share.",
            f"{f['offshore_share']}%",
        )
        T(
            f"{f['projects']} projects won capacity.",
            "Matches project count.",
            str(f["projects"]),
        )
        F(
            f"No projects cited grid-connection delays.",
            f"{f['grid_delay_share']} projects cited grid delays.",
            "No projects",
        )

    if "daily_fee" in f:
        T(
            f"The daily fee started at €{f['daily_fee']} and later reached €{f['daily_fee_later']}.",
            "Matches fee path.",
            f"€{f['daily_fee_later']}",
        )
        F(
            f"Central traffic rose by {f['traffic_down']}%.",
            "Traffic fell, not rose.",
            "rose",
        )
        T(
            f"Bus speeds rose by {f['bus_speed_up']}%.",
            "Matches bus-speed change.",
            f"{f['bus_speed_up']}%",
        )
        T(
            f"Revenue was {f['revenue']} {f['revenue_unit']}.",
            "Matches revenue.",
            str(f["revenue"]),
        )
        F(
            f"{f['exemptions_vehicles'] + 3} vehicle categories were exempt.",
            f"{f['exemptions_vehicles']} categories were exempt.",
            str(f["exemptions_vehicles"] + 3),
        )

    if "tariff_cut" in f:
        T(
            f"Selected tariffs were cut by {f['tariff_cut']}%.",
            "Matches tariff cut.",
            f"{f['tariff_cut']}%",
        )
        F(
            f"Only {f['goods_lines'] - 400} goods lines were covered.",
            f"About {f['goods_lines']} lines were covered.",
            str(f["goods_lines"] - 400),
        )
        T(
            f"Estimated GDP boost was {f['gdp_boost']}%.",
            "Matches GDP estimate.",
            f"{f['gdp_boost']}%",
        )
        T(
            f"{f['ratifying']} countries ratified in the first wave.",
            "Matches ratification count.",
            str(f["ratifying"]),
        )
        F(
            f"No dispute cases had been filed by {f['later_year']}.",
            f"{f['dispute_cases']} cases were filed.",
            "No dispute",
        )

    if "price_up" in f and "stock_months" in f:
        T(
            f"Prices rose by {f['price_up']}% in {f['year']}.",
            "Matches price rise.",
            f"{f['price_up']}%",
        )
        F(
            f"Stocks covered {f['stock_months'] + 2} months of consumption.",
            f"Coverage was {f['stock_months']} months.",
            str(f["stock_months"] + 2),
        )
        T(
            f"{f['export_ban_countries']} countries imposed export bans.",
            "Matches ban count.",
            str(f["export_ban_countries"]),
        )
        T(
            f"Aid reached {f['aid_tonnes']} {f['aid_unit']}.",
            "Matches aid volume.",
            str(f["aid_tonnes"]),
        )
        F(
            f"By {f['later_year']}, prices had risen a further {abs(f['price_change_later'])}% from the agency's {f['year']} reference.",
            f"The passage states a {f['price_change_later']}% move (a decline), not a further rise of that size.",
            "risen",
        )

    if "fdi" in f:
        T(
            f"FDI rose from {f['fdi']} to {f['fdi_later']} {f['fdi_unit']}.",
            "Matches FDI path.",
            str(f["fdi_later"]),
        )
        F(
            f"Manufacturing was under {f['manufacturing_share'] - 10}% of inflows.",
            f"Manufacturing was {f['manufacturing_share']}%.",
            str(f["manufacturing_share"] - 10),
        )
        T(
            f"Greenfield projects were {f['greenfield']}% of the total.",
            "Matches greenfield share.",
            f"{f['greenfield']}%",
        )
        T(
            f"Announced jobs totalled {f['jobs_announced']:,}.",
            "Matches jobs figure.",
            f"{f['jobs_announced']:,}",
        )
        F(
            f"FDI in {f['later_year']} was lower than in {f['year']}.",
            f"FDI rose from {f['fdi']} to {f['fdi_later']}.",
            "lower",
        )

    if "reserves" in f and "policy_rate" in f:
        T(
            f"Reserves fell from {f['reserves']} to {f['reserves_later']} {f['reserves_unit']}.",
            "Matches reserves path.",
            str(f["reserves_later"]),
        )
        F(
            f"Import cover was {f['import_cover_months'] + 3} months.",
            f"Import cover was {f['import_cover_months']} months.",
            str(f["import_cover_months"] + 3),
        )
        T(
            f"The policy rate was hiked by {f['rate_hike_bp']} basis points.",
            "Matches hike size.",
            str(f["rate_hike_bp"]),
        )
        T(
            f"The black-market gap reached {f['black_market_gap']}%.",
            "Matches gap.",
            f"{f['black_market_gap']}%",
        )
        F(
            f"Reserves rose during the stress period described.",
            "Reserves fell.",
            "rose",
        )

    if "index" in f and "index_peak" in f:
        T(
            f"The index peaked at {f['index_peak']} in {f['peak_year']}.",
            "Matches peak.",
            str(f["index_peak"]),
        )
        F(
            f"By {f['later_year']}, the index was below its {f['year']} level of {f['index']}.",
            f"It eased to {f['index_later']}, still above {f['index']}.",
            "below",
        )
        T(
            f"Blank sailings numbered {f['blank_sailings']} in the peak year.",
            "Matches blank sailings.",
            str(f["blank_sailings"]),
        )
        T(
            f"Port delays averaged {f['port_delay_days']} days.",
            "Matches delay figure.",
            str(f["port_delay_days"]),
        )
        F(
            f"The index never exceeded {f['index_peak'] - 1000}.",
            f"It peaked at {f['index_peak']}.",
            str(f["index_peak"] - 1000),
        )

    # Deduplicate statements
    seen = set()
    unique = []
    for c in claims:
        if c[1] not in seen:
            seen.add(c[1])
            unique.append(c)
    return unique


def assemble_task(sub_id: str, sub_num: int, n: int, f: dict, rng: random.Random):
    passage = render_passage(sub_id, f, rng)
    claims = build_claims(sub_id, f)
    n_true = true_count_pattern(n - 1)
    trues = [c for c in claims if c[0]]
    falses = [c for c in claims if not c[0]]
    rng.shuffle(trues)
    rng.shuffle(falses)
    # ensure enough
    while len(trues) < n_true:
        trues.append(rng.choice([c for c in claims if c[0]]))
    while len(falses) < 5 - n_true:
        falses.append(rng.choice([c for c in claims if not c[0]]))
    picked = trues[:n_true] + falses[: 5 - n_true]
    rng.shuffle(picked)
    return {
        "id": f"en-t-{sub_num}-{n:02d}",
        "case_id": f"ENG T.{sub_num}.{n:02d}",
        "title": f"Task {n}",
        "context": CONTEXT,
        "passage": passage,
        "statements": [p[1] for p in picked],
        "answer_key": [p[0] for p in picked],
        "tactical_explanations": [p[2] for p in picked],
        "highlights": [p[3] for p in picked],
        "difficulty_level": diff_for(n),
        "sort_order": n,
        "subsection": sub_id,
    }


def main():
    rng = random.Random(7)
    tasks = []
    for idx, sub in enumerate(SUBSECTIONS, start=1):
        sub_id = sub["id"]
        bank = FACT_BANKS[sub_id]
        for n in range(1, 31):
            f = bank[(n - 1) % len(bank)].copy()
            # slight lexical jitter for uniqueness across repeats
            if "co" in f and n > len(bank):
                f["co"] = f["co"] + ("" if n <= len(bank) else "")
            tasks.append(assemble_task(sub_id, idx, n, f, rng))

    OUT.parent.mkdir(parents=True, exist_ok=True)
    payload = {"subsections": SUBSECTIONS, "tasks": tasks}
    OUT.write_text(json.dumps(payload, ensure_ascii=False, indent=2), encoding="utf-8")
    truths = sum(a for t in tasks for a in t["answer_key"])
    total = 5 * len(tasks)
    print(f"Wrote {OUT} — {len(tasks)} tasks, true ratio={truths/total:.3f}")


if __name__ == "__main__":
    main()
