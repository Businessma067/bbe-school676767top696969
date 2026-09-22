"""Shared helpers for How-it-works CDP screencast recordings."""
from __future__ import annotations

import asyncio
import base64
import json
import shutil
import subprocess
import time
from pathlib import Path

SUPA_KEY = "sb-kntpsdgggolkqnywxedq-auth-token"
ANON_KEY = (
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9."
    "eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImtudHBzZGdnZ29sa3FueXd4ZWRxIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODM1ODkzNjIsImV4cCI6MjA5OTE2NTM2Mn0."
    "awDJV4ZL742sHzjBVHn_PnKVX6cdP81ipkns0xVPYKw"
)
FAKE_SESSION = {
    "access_token": "demo-recording-token",
    "token_type": "bearer",
    "expires_in": 31536000,
    "expires_at": 4102444800,
    "refresh_token": "demo-recording-refresh",
    "user": {
        "id": "00000000-0000-4000-8000-000000000001",
        "aud": "authenticated",
        "role": "authenticated",
        "email": "georgtyrin@gmail.com",
        "user_metadata": {"full_name": "Lukas"},
        "app_metadata": {},
        "created_at": "2026-01-01T00:00:00Z",
    },
}

CURSOR_JS = """
(() => {
  const install = () => {
    if (document.getElementById('__demo_cursor')) return;
    const c = document.createElement('div');
    c.id = '__demo_cursor';
    c.style.cssText = [
      'position:fixed','left:0','top:0','width:22px','height:22px','z-index:2147483647',
      'pointer-events:none','transform:translate(-2px,-2px)','opacity:0'
    ].join(';');
    c.innerHTML = "<svg width='22' height='22' viewBox='0 0 22 22'>" +
      "<path d='M3 2 L3 17 L7.2 13.2 L9.8 19.4 L12.6 18.2 L10.1 12.2 L15.6 12.2 Z'" +
      " fill='#111827' stroke='#ffffff' stroke-width='1.4' stroke-linejoin='round'/></svg>";
    document.body.appendChild(c);
    window.addEventListener('mousemove', (e) => {
      c.style.opacity = '1';
      c.style.left = e.clientX + 'px';
      c.style.top = e.clientY + 'px';
    }, true);
  };
  if (document.body) install();
  else document.addEventListener('DOMContentLoaded', install);
  setInterval(install, 1500);
})();
"""

HIDE_CSS = """
  [data-floating-assistant], #chat-widget, .crisp-client,
  iframe[title*="chat" i],
  button.fixed.bottom-5.right-5,
  a.fixed.bottom-5.right-5,
  .fixed.bottom-4.right-4, .fixed.bottom-5.right-5 { display:none !important; }
  a[href="/login"], a[href="/signup"],
  a[href$="/login"], a[href$="/signup"] { display:none !important; }
  * { scrollbar-width: none !important; }
  *::-webkit-scrollbar { width:0 !important; height:0 !important; }
"""

# Scroll the FULL SOLUTION panel — never the question column / sidebar.
SCROLL_SOLUTION_JS = """([ms]) => new Promise(res => {
  const panels = [...document.querySelectorAll('[data-practice-surface] .practice-scroll')]
    .filter(el => el.scrollHeight > el.clientHeight + 40);
  const target = panels.sort((a,b) =>
    (b.scrollHeight - b.clientHeight) - (a.scrollHeight - a.clientHeight)
  )[0];
  if (!target) { res(false); return; }
  const start = target.scrollTop;
  const dy = Math.max(200, target.scrollHeight - target.clientHeight - start);
  const t0 = performance.now();
  const ease = p => p < .5 ? 2*p*p : 1 - Math.pow(-2*p+2, 2)/2;
  (function step(now){
    const p = Math.min(1, (now - t0) / ms);
    target.scrollTop = start + dy * ease(p);
    if (p < 1) requestAnimationFrame(step); else res(true);
  })(t0);
})"""

PANEL_POINT_JS = """() => {
  const panels = [...document.querySelectorAll('[data-practice-surface] .practice-scroll')]
    .filter(el => el.scrollHeight > el.clientHeight + 40);
  const target = panels.sort((a,b) =>
    (b.scrollHeight - b.clientHeight) - (a.scrollHeight - a.clientHeight)
  )[0];
  if (!target) return null;
  const rect = target.getBoundingClientRect();
  return {
    x: Math.round(rect.left + Math.min(rect.width * 0.55, rect.width - 40)),
    y: Math.round(rect.top + Math.min(rect.height * 0.35, 280)),
  };
}"""


async def hide_chrome(page):
    await page.add_style_tag(content=HIDE_CSS)


async def glide(page, x, y, steps=28):
    await page.mouse.move(x, y, steps=steps)


async def soft_click(page, locator, pause=550):
    try:
        await locator.scroll_into_view_if_needed()
    except Exception:
        pass
    box = None
    try:
        box = await locator.bounding_box()
    except Exception:
        pass
    if box:
        await glide(page, box["x"] + box["width"] / 2, box["y"] + box["height"] / 2)
        await page.wait_for_timeout(160)
    await locator.click(force=True)
    await page.wait_for_timeout(pause)


async def open_solution_panel(page):
    panel = page.get_by_text("FULL SOLUTION", exact=False).first
    try:
        await panel.wait_for(state="visible", timeout=4000)
        return True
    except Exception:
        pass
    for label in (r"^(Explanation|Show Explanation)$", r"Explanation"):
        exp = page.locator("button").filter(has_text=__import__("re").compile(label, __import__("re").I)).first
        try:
            if await exp.count() and await exp.is_visible():
                await soft_click(page, exp, 800)
                await panel.wait_for(state="visible", timeout=8000)
                return True
        except Exception:
            continue
    return False


async def scroll_solution(page, ms=6200):
    pt = await page.evaluate(PANEL_POINT_JS)
    if pt:
        await glide(page, pt["x"], pt["y"], steps=28)
        await page.wait_for_timeout(220)
    ok = await page.evaluate(SCROLL_SOLUTION_JS, [ms])
    if not ok:
        for _ in range(50):
            await page.mouse.wheel(0, 36)
            await page.wait_for_timeout(85)
    return bool(ok)


async def setup_auth_context(ctx, extra_local: dict | None = None):
    payload = {
        SUPA_KEY: json.dumps(FAKE_SESSION),
        "bbe-intro-seen": "1",
    }
    if extra_local:
        payload.update(extra_local)
    items = "".join(
        f"localStorage.setItem({json.dumps(k)}, {json.dumps(v)});"
        for k, v in payload.items()
    )
    await ctx.add_init_script(
        f"try{{{items}sessionStorage.setItem('bbe-intro-seen','1');}}catch(e){{}}"
    )
    await ctx.add_init_script(CURSOR_JS)

    async def _use_anon_key(route):
        headers = {
            **route.request.headers,
            "authorization": f"Bearer {ANON_KEY}",
            "apikey": ANON_KEY,
        }
        await route.continue_(headers=headers)

    await ctx.route("**/*.supabase.co/rest/v1/**", _use_anon_key)
    await ctx.route("**/*.supabase.co/auth/v1/**", lambda r: r.abort())
    await ctx.route("**/_serverFn/**", lambda r: r.abort())


async def capture_screencast(page, ctx, act_fn, frames_dir: Path, w: int, h: int, dpr: int = 2):
    if frames_dir.exists():
        shutil.rmtree(frames_dir)
    frames_dir.mkdir(parents=True)
    cdp = await ctx.new_cdp_session(page)
    frames: list[tuple[Path, float]] = []
    t0 = time.monotonic()

    def on_frame(params):
        idx = len(frames)
        path = frames_dir / f"f{idx:05d}.jpg"
        path.write_bytes(base64.b64decode(params["data"]))
        frames.append((path, time.monotonic() - t0))
        asyncio.ensure_future(
            cdp.send("Page.screencastFrameAck", {"sessionId": params["sessionId"]})
        )

    cdp.on("Page.screencastFrame", on_frame)
    await cdp.send(
        "Page.startScreencast",
        {
            "format": "jpeg",
            "quality": 98,
            "maxWidth": w * dpr,
            "maxHeight": h * dpr,
            "everyNthFrame": 1,
        },
    )
    try:
        await act_fn(page)
    finally:
        try:
            await cdp.send("Page.stopScreencast")
        except Exception:
            pass
        await page.wait_for_timeout(300)
    return frames


def encode_hiw(
    frames: list[tuple[Path, float]],
    *,
    out_mp4: Path,
    out_poster: Path,
    tmp: Path,
    css_w: int,
    css_h: int,
    dpr: int = 2,
    fps: int = 60,
    target_dur: float = 10.5,
):
    frames = frames[2:-2] if len(frames) > 20 else frames
    if len(frames) < 12:
        raise SystemExit(f"only {len(frames)} frames")

    out_w = css_w * dpr
    out_h = css_h * dpr
    # Even dimensions for yuv420p
    out_w -= out_w % 2
    out_h -= out_h % 2

    concat = tmp / "hiw.ffconcat"
    lines = ["ffconcat version 1.0"]
    ts = [t for _, t in frames]
    for i, (path, t) in enumerate(frames):
        nxt = ts[i + 1] if i + 1 < len(frames) else t + (1 / 30)
        raw = nxt - t if nxt > t else 1 / 30
        dur = max(1 / fps, min(0.85, raw))
        lines.append(f"file '{path}'")
        lines.append(f"duration {dur:.5f}")
    lines.append(f"file '{frames[-1][0]}'")
    concat.write_text("\n".join(lines))

    raw_mp4 = tmp / "raw.mp4"
    out_mp4.parent.mkdir(parents=True, exist_ok=True)
    subprocess.run(
        [
            "ffmpeg", "-y", "-f", "concat", "-safe", "0", "-i", str(concat),
            "-vf", f"fps={fps},scale={out_w}:{out_h}:flags=lanczos,format=yuv420p",
            "-c:v", "libx264", "-preset", "slow", "-crf", "14",
            "-profile:v", "high", "-pix_fmt", "yuv420p",
            "-movflags", "+faststart", "-an", str(raw_mp4),
        ],
        check=True,
    )

    probe = subprocess.run(
        ["ffprobe", "-v", "error", "-show_entries", "format=duration", "-of", "csv=p=0", str(raw_mp4)],
        capture_output=True, text=True,
    )
    dur = float((probe.stdout or "0").strip() or "0")
    if 6.5 <= dur < target_dur - 0.4:
        factor = target_dur / dur
        subprocess.run(
            [
                "ffmpeg", "-y", "-i", str(raw_mp4),
                "-filter:v", f"setpts={factor:.5f}*PTS,fps={fps}",
                "-c:v", "libx264", "-preset", "slow", "-crf", "14",
                "-profile:v", "high", "-pix_fmt", "yuv420p",
                "-movflags", "+faststart", "-an", str(out_mp4),
            ],
            check=True,
            stdout=subprocess.DEVNULL,
            stderr=subprocess.DEVNULL,
        )
    else:
        shutil.copy2(raw_mp4, out_mp4)

    subprocess.run(
        ["ffmpeg", "-y", "-ss", "1.4", "-i", str(out_mp4), "-frames:v", "1", "-q:v", "2", str(out_poster)],
        check=True,
        stdout=subprocess.DEVNULL,
        stderr=subprocess.DEVNULL,
    )
    info = subprocess.run(
        [
            "ffprobe", "-v", "error",
            "-select_streams", "v:0",
            "-show_entries", "stream=width,height,r_frame_rate",
            "-show_entries", "format=duration,size",
            "-of", "default=noprint_wrappers=1",
            str(out_mp4),
        ],
        capture_output=True, text=True,
    )
    print(info.stdout)
    print(f"wrote {out_mp4} ({out_mp4.stat().st_size // 1024} KB)")
